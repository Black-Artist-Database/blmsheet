import os
from itertools import zip_longest

from flask import Blueprint
from google.auth import compute_engine
from google.cloud import firestore
from googleapiclient.discovery import build


cron_blueprint = Blueprint(name='cron',
                           import_name=__name__,
                           url_prefix='/cron')


def set_values_to_database(values):
    db = cron_blueprint.config['DB']
    db_name = os.environ['DB_NAME']
    args = [iter(values)] * 500  # firestore limit of operations
    for group in zip_longest(*args):
        batch = db.batch()
        for entry in group:
            if entry is not None:
                try:
                    key = str('-'.join(list(entry['name'].strip().replace('/', '-').split(' ')) + [entry['location'].replace('/', '-').strip()])).lower()
                except KeyError:
                    continue
                else:
                    entry_ref = db.collection(db_name).document(key)
                    batch.set(entry_ref, entry)
        batch.commit()


def get_values_from_sheet():
    credentials = compute_engine.Credentials()
    service = build('sheets', 'v4', credentials=credentials)
    sheet = service.spreadsheets()
    sheet_range = f"{os.environ['TAB_ID']}!A{os.environ['START_ROW']}:E"
    result = sheet.values().get(spreadsheetId=os.environ['SHEET_ID'],
                                range=sheet_range).execute()
    values = []
    for row in result.get('values', []):
        obj = {}
        for i, field in enumerate(['name', 'location', 'type', 'link', 'genre', 'notes']):
            try:
                obj[field] = row[i]
            except IndexError:
                obj[field] = ''  # some fields may be empty which truncates the row data
            values.append(obj)
    return values


@cron_blueprint.route('/sync', methods=['POST'])
def sync_db_with_sheet():
    values = get_values_from_sheet()
    set_values_to_database(values)
    return 'OK', 200
