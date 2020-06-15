import csv
import io
import os
from pathlib import Path

from flask import Flask
from flask import current_app, jsonify
from flask_caching import Cache
from google.cloud import firestore


def create_app():
    cache = Cache()
    db = firestore.Client()
    app = Flask(__name__, template_folder=Path(__file__).parent.joinpath('templates'))
    cache.init_app(app, config={'CACHE_TYPE': 'simple'})
    app.config['DB'] = db
    app.config['CACHE'] = cache
    from app.blueprints.api import api_blueprint
    app.register_blueprint(api_blueprint)
    api_blueprint.config = app.config.copy()
    from app.blueprints.site import site_blueprint
    app.register_blueprint(site_blueprint)
    site_blueprint.config = app.config.copy()
    from app.blueprints.cron import cron_blueprint
    app.register_blueprint(cron_blueprint)
    cron_blueprint.config = app.config.copy()
    return app
