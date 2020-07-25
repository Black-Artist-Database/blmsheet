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
from google.cloud import logging as cloud_logging
from google.cloud import pubsub
from redis.exceptions import ConnectionError, TimeoutError


def create_app():
    app = Flask(__name__,
        template_folder=Path(__file__).parent.parent.joinpath('dist'),
        static_folder=str(Path(__file__).parent.parent.joinpath('dist').joinpath('static')),
    )
    development = os.environ.get('FLASK_ENV', '') == 'development'
    init_logging(app, development=development)
    setup_cache(app, development=development)
    setup_compress(app, development=development)
    setup_db(app)
    setup_pubsub(app)
    add_blueprints(app)
    app.logger.info(f'{"Development" if development else "Live"} app initialised')
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


def init_logging(app, development=False):
    app.logger.setLevel(logging.DEBUG if development else logging.INFO)
    app.logger.addHandler(logging.StreamHandler(sys.stdout))
    if not development:
        app.logger.addHandler(cloud_logging.Client().get_default_handler())


def setup_cache(app, development=False):
    if development:
        config = {'CACHE_TYPE': 'simple'}
    elif 'REDIS_URL' in os.environ:
        config = {
            'CACHE_TYPE': 'redis',
            'CACHE_REDIS_URL': os.environ['REDIS_URL'],
            'CACHE_OPTIONS': {
                'health_check_interval': 30,
                'socket_timeout': 10,
            },
        }
    else:
        config = {
            'CACHE_TYPE': 'redis',
            'CACHE_REDIS_HOST': os.environ['REDIS_HOST'],
            'CACHE_REDIS_PORT': 6379,
            'CACHE_OPTIONS': {
                'health_check_interval': 30,
                'socket_timeout': 10,
            },
        }
    app.config.from_mapping(config)
    app.config['CACHE'] = Cache(app)
    app.before_first_request(test_redis_connection)
    app.logger.info(f'{app.config["CACHE_TYPE"].title()} cache initialised')


def test_redis_connection():
    try:
        current_app.logger.debug(f'Testing connection to {current_app.config["CACHE_TYPE"]} cache')
        current_app.config['CACHE'].set('startup-test', True, timeout=5)
    except (ConnectionError, TimeoutError):
        current_app.logger.exception(f'{current_app.config["CACHE_TYPE"].title()} cache connection failed')
        current_app.config['CACHE'].init_app(current_app, config={'CACHE_TYPE': 'simple'})
        current_app.logger.info('Falling back on simple cache')


def setup_compress(app, development=False):
    compress = Compress()
    if not development:
        app.config['COMPRESS_CACHE_BACKEND'] = lambda: app.config['CACHE']
        app.config['COMPRESS_CACHE_KEY'] = lambda r: f'{r.full_path}-compress'
    compress.init_app(app)


def setup_db(app):
    db = firestore.Client()
    app.config['DB'] = db


def setup_pubsub(app):
    publisher = pubsub.PublisherClient()
    app.config['PUBLISHER'] = publisher
