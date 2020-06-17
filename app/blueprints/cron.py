import json
import os
from itertools import zip_longest

from flask import Blueprint
from google.auth import compute_engine
from google.cloud import firestore
from googleapiclient.discovery import build


cron_blueprint = Blueprint(name='cron',
                           import_name=__name__,
                           url_prefix='/cron')


@cron_blueprint.route('/sync', methods=['POST'])
def sync_db_with_sheet():
    values = get_values_from_sheet()
    set_values_to_database(values)
    return 'OK', 200


@cron_blueprint.route('/scrape-bandcamp', methods=['POST'])
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


def set_values_to_database(values):
    db = cron_blueprint.config['DB']
    db_name = os.environ['DB_NAME']
    args = [iter(values)] * 250  # firestore limit of operations (500: 2 per row: 1 write; 1 timestamp)
    for group in zip_longest(*args):  # use grouper pattern to batch process
        batch = db.batch()
        for entry in group:
            if entry is not None:
                try:
                    # something datastore friendly as a unique id (NB: could auto generate but we want to replace existing)
                    key = str('-'.join(list(entry['name'].strip().replace('/', '-').split(' ')) + [entry['location'].replace('/', '-').strip()])).lower()
                except KeyError:
                    continue
                entry_ref = db.collection(db_name).document(key)
                entry.update({u'timestamp': firestore.SERVER_TIMESTAMP})  # counts as an additional operation
                batch.update(entry_ref, entry)
        batch.commit()


def get_values_from_sheet():
    if 'API_KEY' in os.environ:
        service = build('sheets', 'v4', developerKey=os.environ['API_KEY'])
    else:
        credentials = compute_engine.Credentials()
        service = build('sheets', 'v4', credentials=credentials)
    sheet = service.spreadsheets()
    sheet_range = f"{os.environ['TAB_ID']}!A{os.environ['START_ROW']}:E"
    result = sheet.values().get(spreadsheetId=os.environ['SHEET_ID'],
                                range=sheet_range).execute()
    values = []
    for row in result.get('values', []):
        obj = {}
        # NB: sheet headers may change!
        for i, field in enumerate(['name', 'location', 'type', 'link', 'genre', 'notes']):
            try:
                value = row[i]
                if field == 'genre':
                    #normalise genres, allow for separation with slashes rather than columns
                    value = [genre.lower().strip() for genre in value.replace('/', ',').split(',')]
                obj[field] = value
            except IndexError:
                obj[field] = ''  # some fields may be empty which truncates the row data
        obj['name_first_letter'] = obj['name'][0].lower() if obj['name'][0].isalpha() else '#'
        values.append(obj)
    return values
