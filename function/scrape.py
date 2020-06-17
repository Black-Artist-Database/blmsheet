import base64
import json
import os

import lxml.html as lxh
import requests
from google.cloud import firestore


db = firestore.Client()


def scrape_and_update_bandcamp_details(event, context):
    """ Process a pubsub message requesting a scrape
    """
    message_data = base64.b64decode(event['data']).decode('utf-8')
    message = json.loads(message_data)

    entry = message['entry']
    entry_key = message['key']

    image_url, location = scrape_bandcamp_location_and_image_url(entry['link'])

    entry['bandcamp_image_url'] = image_url
    entry['bandcamp_location'] = location

    transaction = db.transaction()
    update_database(transaction, entry_key, entry)


@firestore.transactional
def update_database(transaction, entry_key, entry):
    db_name = os.environ['DB_NAME']
    doc_ref = db.collection(db_name).document(document_id=entry_key)

    try:
        doc_ref.get(transaction=transaction)
    except firestore.NotFound:
        return

    transaction.set(doc_ref, entry)


def scrape_bandcamp_location_and_image_url(url):
    response = requests.get(url)
    if not response.ok:
        return '', ''
    html = lxh.fromstring(response.text)
    try:
        location = html.cssselect('p#band-name-location')[0].cssselect('span.location')[0].text
    except (IndexError, KeyError):
        location = ''
    try:
        image_url = html.cssselect('div#tralbumArt')[0].cssselect('img')[0].attrib['src']
    except (IndexError, KeyError):
        image_url = ''
    return image_url, location
