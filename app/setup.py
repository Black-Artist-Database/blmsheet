import csv
import io
import os
from pathlib import Path

from flask import Flask
from flask import current_app, jsonify
from flask_caching import Cache
from google.auth import compute_engine
from googleapiclient.discovery import build


cache = Cache()


def create_app():
    app = Flask(__name__, template_folder=Path(__file__).parent.joinpath('templates'))
    cache.init_app(app, config={'CACHE_TYPE': 'simple'})
    app.sheet_values = get_values_from_sheet
    _ = app.sheet_values()  # cache on startup
    from app.blueprints.api import api_blueprint
    app.register_blueprint(api_blueprint)
    from app.blueprints.site import site_blueprint
    app.register_blueprint(site_blueprint)
    return app


@cache.cached(timeout=60 * 3, key_prefix='sheet_values')
def get_values_from_sheet():
    credentials = compute_engine.Credentials()
    service = build('sheets', 'v4', credentials=credentials)
    sheet = service.spreadsheets()
    sheet_range = f"{os.environ['TAB_ID']}!A{os.environ['START_ROW']}:E"
    result = sheet.values().get(spreadsheetId=os.environ['SHEET_ID'],
                                range=sheet_range).execute()
    headers = ('name', 'location', 'type', 'link', 'genre')
    return [
        {headers[i]: value for i, value in enumerate(row)}
        for row in result.get('values', [])
    ]
