FROM python:3.8-slim

COPY . ./app
WORKDIR ./app

RUN pip install grpcio Flask Flask-Caching gunicorn google-api-python-client google-cloud-firestore

CMD gunicorn --bind :$PORT application:application