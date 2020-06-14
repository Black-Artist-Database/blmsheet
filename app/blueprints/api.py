from flask import Blueprint
from flask import current_app, jsonify


api_blueprint = Blueprint(name='api',
                          import_name=__name__,
                          url_prefix='/api')


@api_blueprint.route('/list', methods=['GET'])
def sheet():
    return jsonify(current_app.sheet_values())
