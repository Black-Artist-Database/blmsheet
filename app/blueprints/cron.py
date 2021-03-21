import functools
import json
import os
import re
from datetime import datetime, timedelta
from itertools import zip_longest
from typing import List

from flask import Blueprint, abort, current_app, request
from google.auth import compute_engine
from google.cloud import firestore
from googleapiclient.discovery import build


cron_blueprint = Blueprint(name='cron',
                           import_name=__name__,
                           url_prefix='/cron')


def auth_check(func):
    @functools.wraps(func)
    def wraps(*args, **kwargs):
        if (os.environ.get('FLASK_ENV', '') == 'development' or request.args.get('auth') == os.environ['AUTH_PASS']):
            return func(*args, **kwargs)
        abort(403)
    return wraps


@cron_blueprint.route('/remove-old', methods=['POST'])
@auth_check
def remove_old_entries():
    db = cron_blueprint.config['DB']
    db_name = os.environ['MUSIC_DB_NAME']

    entries = db.collection(db_name)
    entries = entries.where('timestamp', '<', datetime.utcnow() - timedelta(hours=24))
    for old_entry in entries.get():
        current_app.logger.info(f'Deleting doc {old_entry.id} => {old_entry.to_dict()}')
        old_entry.reference.delete()

    return 'OK', 200


@cron_blueprint.route('/sync-music', methods=['POST'])
@auth_check
def sync_db_with_music_sheet():
    db_name = os.environ['MUSIC_DB_NAME']
    current_app.logger.debug('Sync requested...')
    values = get_values_from_sheet(
        os.environ['MUSIC_SHEET_ID'],
        os.environ['MUSIC_TAB_ID'],
        os.environ['MUSIC_START_ROW'],
        os.environ['MUSIC_SHEET_HEADERS']
    )
    current_app.logger.debug(f'Adding {len(values)} to {db_name} database...')
    set_values_to_database(db_name, values)
    return 'OK', 200



@cron_blueprint.route('/sync-creatives', methods=['POST'])
@auth_check
def sync_db_with_creatives_sheet():
    db_name = os.environ['CREATIVES_DB_NAME']
    current_app.logger.debug('Sync requested...')
    values = get_values_from_sheet(
        os.environ['CREATIVES_SHEET_ID'],
        os.environ['CREATIVES_TAB_ID'],
        os.environ['CREATIVES_START_ROW'],
        os.environ['CREATIVES_SHEET_HEADERS']
    )
    current_app.logger.debug(f'Adding {len(values)} to {db_name} database...')
    set_values_to_database(db_name, values)
    return 'OK', 200


@cron_blueprint.route('/scrape-bandcamp', methods=['POST'])
@auth_check
def scrape_bandcamp():
    db = cron_blueprint.config['DB']
    db_name = os.environ['MUSIC_DB_NAME']
    publisher = cron_blueprint.config['PUBLISHER']
    topic_name = f'projects/{os.environ["PROJECT_ID"]}/topics/{os.environ["SCRAPE_TOPIC"]}'

    for entry in db.collection(db_name).stream():
        entry_key = entry.id
        entry = entry.to_dict()
        entry.pop('timestamp', None)  # not-JSON friendly nor needed on the other end
        message = {
            "entry": entry,
            "key": entry_key,
        }
        # publish message to scraper topic with document object to be picked up by Cloud Function
        publisher.publish(topic_name, json.dumps(message).encode('utf8'))
    return 'OK', 200


def set_values_to_database(db_name, values: List[dict]):
    """
    Perform batches of writes to a Firestore database.
    """
    db = cron_blueprint.config['DB']
    # Firestore limit of operations (500: 2 per row: 1 write; 1 timestamp)
    args = [iter(values)] * 250
    new_entries = 0
    total_entries = 0
    # Use grouper pattern to batch process
    for group in zip_longest(*args):
        batch = db.batch()
        for entry in group:
            if entry is not None:
                try:
                    # Create something datastore friendly as a unique id (key)
                    # NB: we could auto generate this but we want to replace existing
                    name = entry['name'].strip().replace('/', '-').split(' ')
                    location = entry['location'].replace('/', '-').strip()
                    key = str('-'.join(list(name) + [location])).lower()
                except KeyError as e:
                    current_app.logger.warn(f'Entry missing {e} value (not saved): {entry}')
                    continue
                
                entry_ref = db.collection(db_name).document(key)
                
                # NB: SERVER_TIMESTAMP counts as an additional operation
                entry.update({u'timestamp': firestore.SERVER_TIMESTAMP})

                # Check for existing entry matching our key in the list
                if (existing := entry_ref.get()).exists:
                    old = existing.to_dict()
                    # Combine old and new unique tags 
                    genres = (old.get('genre_tags', []) + entry['genre_tags'])
                    locations = (old.get('location_tags', []) + entry['location_tags'])
                    entry['genre_tags'] = list(set(o.replace('#', '') for o in genres if o))
                    entry['location_tags'] = list(set(o for o in locations if o))
                    # Update existing entry
                    batch.update(entry_ref, entry)
                else:
                    new_entries += 1
                    # Create new entry
                    batch.set(entry_ref, entry)

                # Finished processing an entry
                total_entries += 1

        # Finished processing a batch
        batch.commit()
    current_app.logger.info(f'Sync to database complete: {total_entries} entries from Sheet ({new_entries} new)')


def get_values_from_sheet(sheet_id, tab_id, start_row, headers) -> List[dict]:
    """
    Use the Google Sheets API to fetch and process rows of data.

    Returns:
        a list of dicts mapping headers to data    
    """
    if 'API_KEY' in os.environ:
        service = build('sheets', 'v4', developerKey=os.environ['API_KEY'])
    else:
        credentials = compute_engine.Credentials()
        service = build('sheets', 'v4', credentials=credentials)
    sheet = service.spreadsheets()
    # NB: if sheet headers change the capture range may have to change
    sheet_range = f"{tab_id}!A{start_row}:H"
    result = sheet.values().get(spreadsheetId=sheet_id,
                                range=sheet_range).execute()

    # NB: sheet headers may change!
    headers = map(str.strip, headers.split(","))

    return [
        obj
        for row in result.get('values', [])
        if (obj := process_row(row, headers)) is not None
    ]


class ProcessingError(Exception):
    pass


def process_links(value: str):
    return [process_link(url) for url in value.split()]


def process_link(value: str):
    """
    www.bandname.bandcamp.com -> https://bandname.bandcamp.com
    """
    value = value.strip().replace('"', '')
    match = re.match("www\.([a-zA-Z0-9]+\.bandcamp\.com)", value)
    if match is not None:
        value = f"https://{match.group(1)}"
    return value


def process_name_first_letter(value: str):
    try:
        return (
            value[0].lower() 
            if value[0].isalpha() 
            else "#"
        )
    except IndexError:
        raise ProcessingError('Row missing value for `name`')


def process_location(value: str):
    return "UK" if value.title() == "England" else value


def process_location_concat(city: str, state: str, country: str):
    return ', '.join(e.replace('/', ',') for e in [city, state, country] if e)


def process_location_tags(value: str):
    # Normalise locations allow for separation with slashes rather than columns
    return [part.lower().strip() for part in value.split(',') if part]


def process_genre_tags(value: str):
    # Normalise genres allow for separation with slashes rather than columns
    genres = value.replace('#', ',').replace('/', ',').split(',')
    return [genre.lower().strip() for genre in genres if genre]


def process_field(value: str):
    fields = value.replace('/', ',').split(',')
    return [field.title().strip() for field in fields if field]


def process_row(row: tuple, headers_in_order: list):
    """
    Process and map row data returned from Sheets API.

    Returns:
        mapping of row data to headers
        None if `name` data missing from row
    """
    obj = {}

    for i, field in enumerate(headers_in_order):
        try:
            obj[field] = row[i]
        except IndexError:
            obj[field] = ''  # some fields may be empty which truncates the row data

    try:    
        obj["name_first_letter"] = process_name_first_letter(obj["name"])
        obj["link"] = process_link(obj.get("link", ""))
        obj["links"] = process_links(obj.get("links", ""))
        obj["location"] = process_location(obj.get("country", "") or obj.get("location", ""))
        obj["location"] = process_location_concat(obj["city"], obj["state"], obj["location"])
        obj["location_tags"] = process_location_tags(obj["location"])
        obj["genre_tags"] = process_genre_tags(obj.get("genre", ""))
        obj["type"] = obj.get("type") or process_field(obj.get("field", ""))
    except (KeyError, ProcessingError) as e:
        current_app.logger.warn(f'Processing row {row} failed (not saved): {e.message}')
        return

    return obj
