import os
import random

from flask import Blueprint
from flask import jsonify, request
from flask_cors import CORS


api_blueprint = Blueprint(name='api',
                          import_name=__name__,
                          url_prefix='/api')
CORS(api_blueprint)  # enable CORS on the API blueprint


@api_blueprint.route('/list', methods=['GET'])
def entry_list():
    cache = api_blueprint.config['CACHE']
    cache_key = request.full_path
    results = cache.get(cache_key)
    if results is None:
        db = api_blueprint.config['DB']
        db_name = os.environ['DB_NAME']

        entries = db.collection(db_name)

        if request.args.get('name'):
            name = request.args.get('name').lower()
            entries = entries.where('name_first_letter', '==', name[0])
            results = [entry.to_dict() for entry in entries.get()]
            results = [entry for entry in results if name in entry['name'].lower()]
            cache.set(f'{request.path}?name={name}', results, timeout=60 * 5)
            return jsonify(results)

        if request.args.get('first_letter'):
            entries = entries.where('name_first_letter', '==', request.args.get('first_letter').lower())

        if request.args.get('genre'):
            entries = entries.where('genre_tags', 'array_contains', request.args.get('genre').lower())
        elif request.args.get('location'):  # firestore only allows a single `array_contains` in a query
            entries = entries.where('location_tags', 'array_contains', request.args.get('location').lower())

        results = [entry.to_dict() for entry in entries.get()]

        if request.args.get('genre') and request.args.get('location'):
            location = request.args.get('location').lower()  # workaround for firestore limitation
            results = [entry for entry in results if location in entry.get('location_tags', [])]

        if request.args.get('random'):
            results = random.sample(results, 12)

        cache.set(cache_key, results, timeout=60 * 30)
    return jsonify(results)


@api_blueprint.route('/locations', methods=['GET'])
def locations():
    cache = api_blueprint.config['CACHE']
    cache_key = 'locations'
    locations = cache.get(cache_key)

    if locations is None:
        db = api_blueprint.config['DB']
        db_name = os.environ['DB_NAME']

        entries = db.collection(db_name).get()

        locations = set()

        for entry in entries:
            item = entry.to_dict()
            for part in item['location_tags']:
                if part:
                    locations.add(part.strip().lower())

        locations = sorted(list(locations))
        cache.set(cache_key, locations, timeout=60 * 60 * 2)
    return jsonify(locations)


@api_blueprint.route('/genres', methods=['GET'])
def genres():
    cache = api_blueprint.config['CACHE']
    cache_key = 'genres'
    genres = cache.get(cache_key)

    if genres is None:
        db = api_blueprint.config['DB']
        db_name = os.environ['DB_NAME']

        entries = db.collection(db_name).get()

        genres = set()

        for entry in entries:
            item = entry.to_dict()
            for genre in item['genre_tags']:
                if genre:
                    genres.add(genre.strip().lower())

        genres = sorted(list(genres))
        cache.set(cache_key, genres, timeout=60 * 60 * 2)
    return jsonify(genres)


@api_blueprint.route('/clear', methods=['POST'])
def clear_cache():
    cache = api_blueprint.config['CACHE']
    cache.clear()
    return 'OK', 200
