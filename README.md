# blmsheet

Proof of concept for turning a Google Sheet into a simple API deployed to [Cloud Run](https://cloud.google.com/run/). Built using **[Python](https://www.python.org/)** & the **[Flask](https://flask.palletsprojects.com/)** web framework. 

Data sourced from the public **["*1800+ Black Producers / Artists / Labels for Bandcamp Day*"](https://docs.google.com/spreadsheets/d/1OIUBp4kFxmpWJihhq6WLwJQR1Am4DsD59bEYlJZxeGY/edit#gid=0)**.



## Development

### Requirements
- create a [service account](https://cloud.google.com/docs/authentication/getting-started) JSON key and save it locally relative to the cloned project repository
- create a new Google API key in the [Credentials](https://console.developers.google.com/apis/credentials) manager and copy the string to the appropriate environment variable below

### To run the Flask application locally (Python 3.7+):
- `python -m venv`
- `source venv/bin/activate`
- `pip install -r requirements.txt`
- `pip install python-dotenv`
- create a file called `.env`:
```bash
export SHEET_ID="1OIUBp4kFxmpWJihhq6WLwJQR1Am4DsD59bEYlJZxeGY"
export TAB_ID="Original Sheet"
export START_ROW=5
export DB_NAME="entries"
export FLASK_APP="application:application"
export FLASK_ENV="development"
export GOOGLE_APPLICATION_CREDENTIALS="[SERVICE_ACCOUNT_KEY.json]"
export API_KEY="[GOOGLE_API_KEY_STRING]"
```
- `flask run`


### To run the Dockerfile locally as a container using [Docker](https://www.docker.com/):
- create a file called something like `.env-docker` with:
```bash
SHEET_ID=1OIUBp4kFxmpWJihhq6WLwJQR1Am4DsD59bEYlJZxeGY
TAB_ID=Original Sheet
START_ROW=5
DB_NAME=entries
GOOGLE_APPLICATION_CREDENTIALS=[SERVICE_ACCOUNT_KEY.json]
PORT=30808
API_KEY=[GOOGLE_API_KEY_STRING]
```
- `docker build . -t blmsheet  # builds the container image`
- `docker run --env-file=.env-docker -d -p 30808:30808 blmsheet  # starts a detached container mapping your local port to the service port`


## Testing

- Test the API functionality by HTTP GET to `localhost:30808/api/list`


## Deployment

To deploy the containerised application to Google Cloud Run make sure the following are set and that you have access to the specified Google Cloud Project:
```bash
export PROJECT_ID="[GCP_PROJECT_ID]"
export SERVICE_ID="[GOOGLE_CLOUD_RUN_SERVICE_ID]"
```
- `gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_ID --project $PROJECT_ID`
- `gcloud run deploy --image gcr.io/$PROJECT_ID/$SERVICE_ID --platform managed --project $PROJECT_ID`


## Running the frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
