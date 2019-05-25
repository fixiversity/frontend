#!/bin/bash
PWD="$( cd "$(dirname "$0")"; pwd -P )"
cd $PWD

KEYS_FILE=../src/environments/keys.ts
KEYS_FILE_TEMPLATE=$KEYS_FILE.template

if [ ! -f "$KEYS_FILE_TEMPLATE" ]; then
    echo "keys.ts.template file does not exist, exiting..."
    exit 1
fi

sed "s/\$FIREBASE_API_KEY/${FIREBASE_API_KEY}/" $KEYS_FILE_TEMPLATE > $KEYS_FILE
