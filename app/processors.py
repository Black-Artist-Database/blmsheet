import re
from urllib.parse import urlparse


bandcamp_re = re.compile("([a-zA-Z0-9]+\.bandcamp\.com)")
mixcloud_re = re.compile("([Mm]ixcloud\.com/[a-zA-Z0-9/-]+)")
instagram_re = re.compile("([Ii]nstagram\.com/[a-zA-Z0-9\._-]+)")
twitter_re = re.compile("([Tt]witter\.com/[a-zA-Z0-9\._-]+)")
matchers = [bandcamp_re, mixcloud_re, instagram_re, twitter_re]


class ProcessingError(Exception):
    pass


def process_email(value: str):
    """
    -> ""
    Strips email data from an entry.
    """
    return ""


def process_link(url):
    if not url:
        return ""

    url = url.strip().replace('"', '')

    for matcher in matchers:
        if (match := matcher.search(url)) is not None:
            return f"https://{match.group(1)}"

    # return urlparse(url)._replace(scheme="https").geturl()
    return url


def process_links(value: str):
    return [process_link(url) for url in value.split() if url]


def process_name(value: str):
    if "#REF!" in value:
        raise ProcessingError('Row missing reference (#REF!) for `name`')
    return value


def process_name_first_letter(value: str):
    try:
        return (
            value[0].lower() 
            if value[0].isalpha() 
            else "#"
        )
    except IndexError:
        raise ProcessingError('Row missing value for `name`')


def process_sub_professions(value: str):
    fields = value.replace('/', ',').split(',')
    return [field.title().strip() for field in fields if field]


def process_link_in_location(value: str):
    location_match = bandcamp_re.search(value)
    if location_match is not None:
        raise ProcessingError("Row has bandcamp value in `location`")


def process_location_concat(*parts):
    return ', '.join(e.replace('/', ',') for e in parts if e)


def process_location_tags(value: str):
    # Normalise locations allow for separation with slashes rather than columns
    return [part.lower().strip() for part in value.split(',') if part]


def process_genre_tags(value: str):
    # Normalise genres allow for separation with slashes rather than columns
    genres = value.replace('#', ',').replace('/', ',').split(',')
    return [genre.lower().strip() for genre in genres if genre]