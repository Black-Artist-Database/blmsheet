import os

from flask import Blueprint
from flask import current_app, jsonify


api_blueprint = Blueprint(name='api',
                          import_name=__name__,
                          url_prefix='/api')


@api_blueprint.route('/list', methods=['GET'])
def sheet():
    db = api_blueprint.config['DB']
    db_name = os.environ['DB_NAME']
    entries = db.collection(db_name).stream()
    return jsonify([entry.to_dict() for entry in entries])
