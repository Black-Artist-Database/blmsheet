FROM python:3.8-slim

COPY . ./app
WORKDIR ./app

RUN pip install -r requirements.txt

CMD gunicorn --bind :$PORT application:application --timeout=300