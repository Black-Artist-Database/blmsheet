#!/bin/bash

set -e

gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_ID --project $PROJECT_ID
gcloud run deploy --image gcr.io/$PROJECT_ID/$SERVICE_ID --platform managed --project $PROJECT_ID
