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
    if api_blueprint.config['ENABLE_MAINTENANCE']:
        return jsonify({'maintenance': True})
    cache = api_blueprint.config['CACHE']
    cache_key = request.full_path
    results = cache.get(cache_key)
    if results is None:
        db = api_blueprint.config['DB']
        db_name = request.args.get('db') or os.environ['ARTIST_DB_NAME']

        entries = db.collection(db_name)

        if (name := request.args.get('name', '').lower()):
            entries = entries.where('name_first_letter', '==', name[0])
            results = [entry.to_dict() for entry in entries.get()]
            results = [entry for entry in results if name in entry['name'].lower()]
            cache.set(f'{request.path}?name={name}', results, timeout=60 * 60 * 1)
            return jsonify(results)

        if (first_letter := request.args.get('first_letter', '').lower()):
            entries = entries.where('name_first_letter', '==', first_letter)
        if (genre := request.args.get('genre')):
            entries = entries.where('broadgenre', '==', genre)
        if (location := request.args.get('location')):
            entries = entries.where('location', '==', location)

        for field, value in request.args.items():
            if not value:
                continue
            if field == "subs":
                # NB: firestore only allows a single `array_contains` in a query
                entries = entries.where(field, 'array_contains', value)
            elif field in api_blueprint.config["creative_headers"]:
                entries = entries.where(field, '==', value)

        results = [entry.to_dict() for entry in entries.get()]

        if request.args.get('random') and results:
            results = random.sample(results, 12)

        cache.set(cache_key, results, timeout=60 * 60 * 3)
    return jsonify(results)


@api_blueprint.route('/locations', methods=['GET'])
def locations():
    cache = api_blueprint.config['CACHE']
    cache_key = 'locations'
    locations = cache.get(cache_key)

    if locations is None:
        db = api_blueprint.config['DB']
        db_name = "lists"
        key = "broad-locations"

        entry = db.collection(db_name).document(key).get()
        item = entry.to_dict()
        locations = sorted(list(set(item["values"])))
        cache.set(cache_key, locations, timeout=60 * 60 * 6)
    return jsonify(locations)


@api_blueprint.route('/filters', methods=['GET'])
def filter_set():
    cache = api_blueprint.config['CACHE']
    cache_key = request.full_path
    results = cache.get(cache_key)
    name = request.args.get('name')
    db_name = request.args.get('db') or os.environ['CREATIVE_DB_NAME']

    if name is None:
        results = api_blueprint.config["creative_headers"]
        cache.set(cache_key, results, timeout=60 * 60 * 6)

    if results is None:
        db = api_blueprint.config['DB']

        entries = db.collection(db_name).get()

        results = set()

        for entry in entries:
            item = entry.to_dict()
            if (result := item.get(name)):
                if isinstance(result, list):
                    results.update([r.strip() for r in result])
                else:
                    results.add(result.strip())

        results = sorted(list((r for r in results if r)))
        cache.set(cache_key, results, timeout=60 * 60 * 6)
    return jsonify(results)


@api_blueprint.route('/genres', methods=['GET'])
def genres():
    cache = api_blueprint.config['CACHE']
    cache_key = 'genres'
    genres = cache.get(cache_key)

    if genres is None:
        db = api_blueprint.config['DB']
        db_name = "lists"
        key = "broad-genres"

        entry = db.collection(db_name).document(key).get()
        item = entry.to_dict()
        genres = sorted(list(set(item["values"])))
        cache.set(cache_key, genres, timeout=60 * 60 * 6)
    return jsonify(genres)


@api_blueprint.route('/clear', methods=['POST'])
def clear_cache():
    cache = api_blueprint.config['CACHE']
    cache.clear()
    return 'OK', 200
