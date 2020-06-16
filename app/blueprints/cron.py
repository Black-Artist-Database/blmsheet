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


def set_values_to_database(values):
    db = cron_blueprint.config['DB']
    db_name = os.environ['DB_NAME']
    args = [iter(values)] * 500  # firestore limit of operations
    for group in zip_longest(*args):  # use grouper pattern to batch process
        batch = db.batch()
        for entry in group:
            if entry is not None:
                try:
                    # something datastore friendly as a unique id (NB: could auto generate but we want to replace existing)
                    key = str('-'.join(list(entry['name'].strip().replace('/', '-').split(' ')) + [entry['location'].replace('/', '-').strip()])).lower()
                except KeyError:
                    continue
                else:
                    entry_ref = db.collection(db_name).document(key)
                    batch.set(entry_ref, entry)
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
            obj['name_first_letter'] = obj['name'][0] if obj['name'][0].isalnum() else '#'
            values.append(obj)
    return values
