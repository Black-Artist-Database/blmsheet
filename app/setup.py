import csv
import io
import logging
import os
import sys
from pathlib import Path

from flask import Flask
from flask import current_app, jsonify
from flask_caching import Cache
from google.cloud import firestore
from flask_cors import CORS
from google.cloud import pubsub

def create_app():
    app = Flask(__name__, template_folder=Path(__file__).parent.joinpath('templates'))
    init_logging(app)
    setup_cache(app)
    setup_db(app)
    setup_pubsub(app)
    add_blueprints(app)
    return app


def add_blueprints(app):
    from app.blueprints.api import api_blueprint
    app.register_blueprint(api_blueprint)
    api_blueprint.config = app.config.copy()
    from app.blueprints.site import site_blueprint
    app.register_blueprint(site_blueprint)
    site_blueprint.config = app.config.copy()
    from app.blueprints.cron import cron_blueprint
    app.register_blueprint(cron_blueprint)
    cron_blueprint.config = app.config.copy()
    app.logger.info('App created')
    CORS(app)
    return app


def init_logging(app):
    app.logger.addHandler(logging.StreamHandler(sys.stdout))
    app.logger.setLevel(logging.INFO)
    app.logger.info('App initialised')


def setup_cache(app):
    cache = Cache()
    if os.environ.get('FLASK_ENV', '') == 'development':
        cache.init_app(app, config={'CACHE_TYPE': 'simple'})
    else:
        cache.init_app(app, config={
            'CACHE_TYPE': 'redis',
            'CACHE_REDIS_HOST': os.environ['REDIS_HOST'],
            'CACHE_REDIS_PORT': 6379,
        })
    app.config['CACHE'] = cache


def setup_db(app):
    db = firestore.Client()
    app.config['DB'] = db


def setup_pubsub(app):
    publisher = pubsub.PublisherClient()
    app.config['PUBLISHER'] = publisher
