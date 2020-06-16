# blmsheet

Proof of concept for turning a Google Sheet into a simple API deployed to [Cloud Run](https://cloud.google.com/run/). Built using [Python](https://www.python.org/) & the [Flask](https://flask.palletsprojects.com/) web framework. 

Data sourced from the public ["*1800+ Black Producers / Artists / Labels for Bandcamp Day*"](https://docs.google.com/spreadsheets/d/1OIUBp4kFxmpWJihhq6WLwJQR1Am4DsD59bEYlJZxeGY/edit#gid=0).



## Development

To run the Dockerfile locally as a container using [Docker](https://www.docker.com/):
- create a [service account](https://cloud.google.com/docs/authentication/getting-started) JSON file
- create a new Google API key in the [Credentials](https://console.developers.google.com/apis/credentials) manager
- create a file called something like `.env` with:
```
SHEET_ID=1OIUBp4kFxmpWJihhq6WLwJQR1Am4DsD59bEYlJZxeGY
TAB_ID=Original Sheet
START_ROW=5
DB_NAME=entries
GOOGLE_APPLICATION_CREDENTIALS=[service_account.json]
PORT=30808
API_KEY=[google API key string]
```
- `docker build . -t blmsheet  # builds the container image`
- `docker run --env-file=.env -d -p 30808:30808 blmsheet  # starts a detached container mapping your local port to the service port`

## Testing

- Test the API functionality by HTTP GET to `localhost:30808/api/list`


## Deployment

To deploy the containerised application to Google Cloud Run make sure the following are set and that you have access to the specified Google Cloud Project:
```
export PROJECT_ID="[GCP_PROJECT_ID]"
export SERVICE_ID="[GOOGLE_CLOUD_RUN_SERVICE_ID]"
```
- `gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_ID --project $PROJECT_ID`
- `gcloud run deploy --image gcr.io/$PROJECT_ID/$SERVICE_ID --platform managed --project $PROJECT_ID`