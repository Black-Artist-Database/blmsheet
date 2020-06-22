import csv
import io
import logging
import os
import sys
from pathlib import Path

from flask import Flask
from flask import current_app, jsonify
from flask_caching import Cache
from flask_compress import Compress
from google.cloud import firestore
from google.cloud import pubsub


def create_app():
    app = Flask(__name__,
        template_folder=Path(__file__).parent.parent.joinpath('dist'),
        static_folder=str(Path(__file__).parent.parent.joinpath('dist').joinpath('static')),
    )
    init_logging(app)
    setup_cache(app)
    setup_compress(app)
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
            'CACHE_OPTIONS': {
                'health_check_interval': 30,
            },
        })
    app.config['CACHE'] = cache


def setup_compress(app):
    compress = Compress()
    if os.environ.get('FLASK_ENV', '') != 'development':
        app.config['COMPRESS_CACHE_BACKEND'] = lambda: app.config['CACHE']
        app.config['COMPRESS_CACHE_KEY'] = lambda r: f'{r.full_path}-compress'
    compress.init_app(app)


def setup_db(app):
    db = firestore.Client()
    app.config['DB'] = db


def setup_pubsub(app):
    publisher = pubsub.PublisherClient()
    app.config['PUBLISHER'] = publisher
