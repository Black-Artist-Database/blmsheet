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

    url = entry['link'] if entry['link'].startswith('http') else f'https://{entry["link"]}'
    album_ids, genres, image_url, location = scrape_bandcamp_details(url)
    location_tags = [part.lower().strip() for part in location.split(',')] if location else []

    entry['bandcamp_album_ids'] = album_ids
    entry['bandcamp_genres'] = genres
    entry['bandcamp_image_url'] = image_url
    entry['bandcamp_location'] = location
    entry['location_tags'] = list(set(loc.lower() for loc in (entry.get('location_tags', []) + location_tags)))
    entry['genre_tags'] = list(set(g.lower() for g in (entry.get('genre_tags', []) + genres)))

    transaction = db.transaction()
    update_database(transaction, entry_key, entry)


@firestore.transactional
def update_database(transaction, entry_key, entry):
    db_name = os.environ['DB_NAME']
    entry_ref = db.collection(db_name).document(document_id=entry_key)

    try:
        entry_ref.get(transaction=transaction)
    except firestore.NotFound:
        return

    entry.update({u'timestamp': firestore.SERVER_TIMESTAMP})
    transaction.update(entry_ref, entry)


def scrape_bandcamp_details(url):
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
    genres = [element.text.lower() for element in html.cssselect('a.tag')]
    album_ids = scrape_bandcamp_album_ids_from_url(response.text)
    if not album_ids:
        album_ids = [data.split('-')[1] for data in html.xpath('//@data-item-id') if data.startswith('album-')]
    if not album_ids:
        album_ids = scrape_bandcamp_album_ids_from_artist_page(url)
    return album_ids, genres, image_url, location


def scrape_bandcamp_album_ids_from_url(content):
    comment = '<!-- album id '
    comment_len = len(comment)
    if comment in content:
        pos = content.find(comment)
        album_id = content[pos + comment_len:pos + comment_len + 20]
        return album_id.split('-->')[0].strip()


def scrape_bandcamp_album_ids_from_artist_page(url):
    response = requests.get(url if url.endswith('/music') else f'{url}/music')
    if response.ok:
        html = lxh.fromstring(response.text)
        return [data.split('-')[1] for data in html.xpath('//@data-item-id') if data.startswith('album-')]
    return []
