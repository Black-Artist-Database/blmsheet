FROM python:3.8-slim

ARG APP_USER=app
ARG PROJECT_ROOT=/app/

RUN mkdir -p ${PROJECT_ROOT} && \
    addgroup --gid 1000 ${APP_USER} && \
    adduser -q --gid 1000 --no-create-home --disabled-password --gecos "" ${APP_USER}

COPY requirements.txt ${PROJECT_ROOT}/
RUN pip install -r ${PROJECT_ROOT}/requirements.txt

COPY . ${PROJECT_ROOT}
RUN chown -R ${APP_USER}:${APP_USER} ${PROJECT_ROOT}

WORKDIR ${PROJECT_ROOT}
USER ${APP_USER}
CMD gunicorn --bind :$PORT application:application --timeout=300