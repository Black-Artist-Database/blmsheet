import re


bandcamp_url = re.compile("([a-zA-Z0-9]+\.bandcamp\.com)")
mixcloud_url = re.compile("(mixcloud\.com/[a-zA-Z0-9/-]+)")
instagram_url = re.compile("(instagram\.com/[a-zA-Z0-9\._-]+)")
twitter_url = re.compile("(twitter\.com/[a-zA-Z0-9\._-]+)")


class ProcessingError(Exception):
    pass


def process_email(value: str):
    """
    -> ""
    Strips email data from an entry.
    """
    return ""


def process_link(url):
    if "bandcamp" in url:
        return process_bandcamp(url)
    elif "mixcloud" in url:
        return process_mixcloud(url)
    elif "instagram" in url:
        return process_instagram(url)
    elif "twitter" in url:
        return process_twitter(url)
    return url


def process_links(value: str):
    return [process_link(url) for url in value.split()]


def process_instagram(value: str):
    """
    -> https://instagram.com/{profile}
    """
    value = value.strip().replace('"', '')
    match = instagram_url.search(value)
    if match is not None:
        value = f"https://{match.group(1)}"
    return value


def process_twitter(value: str):
    """
    -> https://twitter.com/{profile}
    """
    value = value.strip().replace('"', '')
    match = twitter_url.search(value)
    if match is not None:
        value = f"https://{match.group(1)}"
    return value


def process_bandcamp(value: str):
    """
    www.{artist}.bandcamp.com -> https://{artist}.bandcamp.com
    """
    value = value.strip().replace('"', '')
    match = bandcamp_url.search(value)
    if match is not None:
        value = f"https://{match.group(1)}"
    return value


def process_mixcloud(value: str):
    """
     -> https://mixcloud.com/{artist}/[{mix}/]
    """
    value = value.strip().replace('"', '')
    match = mixcloud_url.search(value)
    if match is not None:
        value = f"https://{match.group(1)}"
    return value


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
    location_match = bandcamp_url.search(value)
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