FROM node:14.9 as frontend

WORKDIR /usr/src/app
COPY package.json package-lock.json vue.config.js ./
COPY src/ ./src/
COPY public/ ./public/
RUN npm install
RUN npm run-script build


FROM python:3.9-slim

ARG APP_USER=app
ARG PROJECT_ROOT=/app/

RUN mkdir -p ${PROJECT_ROOT} && \
    addgroup --gid 1000 ${APP_USER} && \
    adduser -q --gid 1000 --no-create-home --disabled-password --gecos "" ${APP_USER}

COPY --from=frontend --chown=${APP_USER}:${APP_USER} /usr/src/app/dist ${PROJECT_ROOT}/dist

COPY requirements.txt ${PROJECT_ROOT}/
RUN pip install -r ${PROJECT_ROOT}/requirements.txt

COPY --chown=${APP_USER}:${APP_USER} . ${PROJECT_ROOT}

WORKDIR ${PROJECT_ROOT}
USER ${APP_USER}
CMD gunicorn --bind :$PORT application:application --timeout=300