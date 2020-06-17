from flask import Blueprint
from flask import render_template, url_for


site_blueprint = Blueprint(name='site',
                           import_name=__name__,
                           url_prefix='')


@site_blueprint.route('/', methods=['GET'])
def covers_view():
    return render_template('index.html')
