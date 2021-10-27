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

from app.processors import *


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
    db_name = request.args.get('db') or os.environ['ARTIST_DB_NAME']

    entries = db.collection(db_name)
    entries = entries.where('timestamp', '<', datetime.utcnow() - timedelta(hours=24))
    for old_entry in entries.get():
        current_app.logger.info(f'Deleting doc {old_entry.id} => {old_entry.to_dict()}')
        old_entry.reference.delete()

    return 'OK', 200


@cron_blueprint.route('/sync-broad', methods=['POST'])
@auth_check
def sync_db_with_broad_list():
    current_app.logger.debug('Broad list sync requested...')
    get_broad_values_from_sheet()
    return 'OK', 200


@cron_blueprint.route('/sync', methods=['POST'])
@auth_check
def sync_db_with_artist_sheet():
    db_name = os.environ['ARTIST_DB_NAME']
    current_app.logger.debug('Artist sync requested...')
    values = get_values_from_sheet(
        os.environ['ARTIST_SHEET_ID'],
        os.environ['ARTIST_TAB_ID'],
        os.environ['ARTIST_START_ROW'],
        process_func=process_artist_row,
    )
    current_app.logger.debug(f'Adding {len(values)} to {db_name} database...')
    set_values_to_database(db_name, values)
    return 'OK', 200


@cron_blueprint.route('/sync-creatives', methods=['POST'])
@auth_check
def sync_db_with_creatives_sheet():
    db_name = os.environ['CREATIVE_DB_NAME']
    current_app.logger.debug('Creatives sync requested...')
    values = get_values_from_sheet(
        os.environ['CREATIVE_SHEET_ID'],
        os.environ['CREATIVE_TAB_ID'],
        os.environ['CREATIVE_START_ROW'],
        process_func=process_creative_row,
    )
    current_app.logger.debug(f'Adding {len(values)} to {db_name} database...')
    set_values_to_database(db_name, values)
    return 'OK', 200


@cron_blueprint.route('/scrape-bandcamp', methods=['POST'])
@auth_check
def scrape_bandcamp():
    db = cron_blueprint.config['DB']
    db_name = os.environ['ARTIST_DB_NAME']
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


def set_values_to_database(db_name: str, values: List[dict]):
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
                    country = entry['country'].replace('/', '-').strip()
                    key = str('-'.join(list(name) + [country])).lower()
                except KeyError as e:
                    current_app.logger.warn(f'{db_name} entry missing {e} value (not saved): {entry}')
                    continue
                
                entry_ref = db.collection(db_name).document(key)
                
                # NB: SERVER_TIMESTAMP counts as an additional operation
                entry.update({u'timestamp': firestore.SERVER_TIMESTAMP})

                # Check for existing entry matching our key in the list
                if (existing := entry_ref.get()).exists:
                    old = existing.to_dict()
                    # Combine old and new unique tags
                    try:
                        genres = (old.get('genre_tags', []) + entry['genre_tags'])
                        locations = (old.get('location_tags', []) + entry['location_tags'])
                        entry['genre_tags'] = list(set(o.replace('#', '') for o in genres if o))
                        entry['location_tags'] = list(set(o for o in locations if o))
                    except KeyError:
                        pass
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
    current_app.logger.info(f'Sync to {db_name} database complete: {total_entries} entries from Sheet ({new_entries} new)')


def process_artist_row(row: tuple):
    """
    Process and map row data returned from Sheets API.

    Returns:
        mapping of row data to headers
        None if `name` data missing from row
    """
    obj = {}

    for i, field in enumerate(cron_blueprint.config["artist_headers"]):
        try:
            obj[field] = row[i]
        except IndexError:
            current_app.logger.warn(f"Row has an empty value for {field}: {row}")
            obj[field] = ''  # some fields may be empty which truncates the row data

    try:
        obj["name"] = process_name(obj["name"])
        obj['name_first_letter'] = process_name_first_letter(obj["name"])
        # fixes issues where submissions mistakenly type e.g.: www.bandname.bandcamp.com
        obj["link"] = process_link(obj["link"])
        # reports issues with bandcamp urls being in location column
        process_link_in_location(obj["location"])
        locations = process_location_concat(obj["city"], obj["state"], obj["country"], obj["location"])
        obj['location_tags'] = process_location_tags(locations)
        obj['genre_tags'] = process_genre_tags(obj.get('genre', ''))
    except ProcessingError as e:
        current_app.logger.warn(f'Processing row {row} failed (not saved): {str(e)}')
        return

    return obj


def process_creative_row(row: tuple):
    """
    Process and map row data returned from Sheets API.

    Returns:
        mapping of row data to headers
        None if `name` data missing from row
    """
    obj = {}

    for i, field in enumerate(cron_blueprint.config["creative_headers"]):
        try:
            obj[field] = row[i]
        except IndexError:
            current_app.logger.warn(f"Row has an empty value for {field}: {row}")
            obj[field] = ''  # some fields may be empty which truncates the row data

    try:
        obj["name"] = process_name(obj["name"])
        obj['name_first_letter'] = process_name_first_letter(obj["name"])
        obj["subs"] = process_sub_professions(obj.get("subs"))
        obj["links"] = process_links(obj.get("links"))
        obj["instagram"] = process_link(obj.get("instagram"))
        obj["twitter"] = process_link(obj.get("twitter"))
        obj["socials"] = {
            "website": next(iter(obj["links"] or []), ""),
            "twitter": obj["twitter"],
            "instagram": obj["instagram"],
        }
        obj["image"] = process_link(obj.get("image"))
    except ProcessingError as e:
        current_app.logger.warn(f'Processing row {row} failed (not saved): {str(e)}')
        return

    return obj


def get_values_from_sheet(sheet_id: str, tab_id: str, start_row: str, process_func):
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
    sheet_range = f"{tab_id}!A{start_row}:N"
    result = sheet.values().get(spreadsheetId=sheet_id,
                                range=sheet_range).execute()

    # NB: sheet headers may change!
    return [
        row
        for value in result.get('values', [])
        if (row := process_func(value)) is not None
    ]


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
    genres = set(g[0].strip() for g in genres if g and len(g) > 0 and g[0])
    locations = set(l[2].strip() for l in locations if l and len(l) > 2 and l[2])

    db = cron_blueprint.config['DB']
    db_name = "lists"
    genre_key = "broad-genres"
    genre_entry = {u'values': list(genres)}
    location_key = "broad-locations"
    location_entry = {u'values': list(locations)}
    new_entries = 0
    total_entries = 0
    batch = db.batch()
    for key, entry in ((genre_key, genre_entry), (location_key, location_entry)):
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
