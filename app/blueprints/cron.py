import functools
import json
import os
import re
from datetime import datetime, timedelta
from itertools import tee, zip_longest
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
    db_name = os.environ['DB_NAME']

    entries = db.collection(db_name)
    entries = entries.where('timestamp', '<', datetime.utcnow() - timedelta(hours=24))
    for old_entry in entries.get():
        current_app.logger.info(f'Deleting doc {old_entry.id} => {old_entry.to_dict()}')
        old_entry.reference.delete()

    return 'OK', 200


@cron_blueprint.route('/sync', methods=['POST'])
@auth_check
def sync_db_with_sheet():
    current_app.logger.debug('Sync requested...')
    get_broad_values_from_sheet()
    values = get_values_from_sheet()
    current_app.logger.debug(f'Adding {len(values)} to database...')
    set_values_to_database(values)
    return 'OK', 200


@cron_blueprint.route('/scrape-bandcamp', methods=['POST'])
@auth_check
def scrape_bandcamp():
    db = cron_blueprint.config['DB']
    db_name = os.environ['DB_NAME']
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


def set_values_to_database(values: List[dict]):
    """
    Perform batches of writes to a Firestore database.
    """
    db = cron_blueprint.config['DB']
    db_name = os.environ['DB_NAME']
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


def get_values_from_sheet():
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
    sheet_range = f"{os.environ['TAB_ID']}!A{os.environ['START_ROW']}:H"
    result = sheet.values().get(spreadsheetId=os.environ['SHEET_ID'],
                                range=sheet_range).execute()

    # NB: sheet headers may change!
    headers = ['name', 'country', 'city', 'state', 'type', 'location', 'broadgenre', 'link', 'beatport', 'junodownload', 'junorecord', 'soundcloud', 'genre', 'notes']
    return [
        row
        for value in result.get('values', [])
        if (row := process_row(value, headers)) is not None
    ]


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

    # fixes issues where submissions mistakenly type e.g.: www.bandname.bandcamp.com
    bandcamp_url = re.compile("www\.([a-zA-Z0-9]+\.bandcamp\.com)")
    link_match = bandcamp_url.search(obj["link"])
    if link_match is not None:
        obj["link"] = f"https://{link_match.group(1)}"

    # reports issues with bandcamp urls being in location column
    location_match = bandcamp_url.search(obj["location"])
    if location_match is not None:
        current_app.logger.warn(f"Row has bandcamp value in location (not saved): {row}")
        return

    try:
        obj['name_first_letter'] = obj['name'][0].lower() if obj['name'][0].isalpha() else '#'
    except IndexError:
        current_app.logger.warn(f'Row missing name value (not saved): {row}')
        return

    # Normalise genres and locations, allow for separation with slashes rather than columns
    locations = ', '.join(e.replace('/', ',') for e in [obj["city"], obj["state"], obj["country"], obj["location"]] if e)
    genres = obj.get('genre', '').replace('#', ',').replace('/', ',').split(',')
    obj['genre_tags'] = [genre.lower().strip() for genre in genres if genre]
    obj['location_tags'] = [part.lower().strip() for part in locations.split(',') if part]

    return obj


def get_broad_values_from_sheet():
    """
    Use the Google Sheets API to fetch and process rows of data.
    """
    if 'API_KEY' in os.environ:
        service = build('sheets', 'v4', developerKey=os.environ['API_KEY'])
    else:
        credentials = compute_engine.Credentials()
        service = build('sheets', 'v4', credentials=credentials)
    sheet = service.spreadsheets()
    sheet_range = f"{os.environ.get('LISTS_TAB_ID', 'Lists')}!A2:C"
    result = sheet.values().get(spreadsheetId=os.environ['SHEET_ID'],
                                range=sheet_range).execute()

    genres, locations = tee(result.get('values', []))
    genres = set(g[0].strip() for g in genres if g and g[0])
    locations = set(l[2].strip() for l in locations if l and l[2])

    db = cron_blueprint.config['DB']
    db_name = "lists"
    genre_key = "broad-genres"
    genre_entry = {u'values': list(genres)}
    location_key = "broad-locations"
    location_entry = {u'values': list(locations)}

    batch = db.batch()
    for key, entry in ((genre_key, genre_entry), (location_key, location_entry):
        entry_ref = db.collection(db_name).document(key)

        # NB: SERVER_TIMESTAMP counts as an additional operation
        entry.update({u'timestamp': firestore.SERVER_TIMESTAMP})

        # Check for existing entry matching our key in the list
        if (existing := entry_ref.get()).exists:
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
    current_app.logger.info(f'List sync to database complete: {total_entries} entries from Lists ({new_entries} new)')
    current_app.logger.info(f'Genres: {len(genres)}, Locations: {len(locations)}')
