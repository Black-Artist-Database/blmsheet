#!/bin/bash

set -e

REGIONS=asia-northeast1,europe-west1,us-east1,us-west1


function enable() {

    for L_REGION in ${REGIONS//,/ }
    do
        echo "enabling maintenance mode for $L_REGION..."
        SERVICE="blackbandcamp-$L_REGION"
        read -p "Continue updating? " -n 1 -r
        echo    # (optional) move to a new line
        if [[ $REPLY =~ ^[Yy]$ ]]
        then
            gcloud run services update --region $L_REGION $SERVICE --update-env-vars ENABLE_MAINTENANCE=1
        fi
    done
}


function disable() {

    for L_REGION in ${REGIONS//,/ }
    do
        echo "disabling maintenance mode for $L_REGION..."
        SERVICE="blackbandcamp-$L_REGION"
        read -p "Continue updating? " -n 1 -r
        echo    # (optional) move to a new line
        if [[ $REPLY =~ ^[Yy]$ ]]
        then
            gcloud run services update --region $L_REGION $SERVICE --update-env-vars ENABLE_MAINTENANCE=0
        fi
    done
}

if [ -z "$1" ]; then
    echo "USAGE: ./maintenance.sh enable|disable";
else
    $1
fi
