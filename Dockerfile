FROM python:3.8-slim

COPY . ./

RUN pip install Flask Flask-Caching gunicorn google-api-python-client

CMD gunicorn --bind :$PORT application:application