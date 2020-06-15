from flask import Blueprint
from flask import render_template, url_for


site_blueprint = Blueprint(name='site',
                           import_name=__name__,
                           url_prefix='')


@site_blueprint.route('/', methods=['GET'])
def covers_view():
    api_url = url_for('api.sheet', _external=True, _scheme="https")
    return render_template('index.html', api_url=api_url)
