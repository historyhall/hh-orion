#!/usr/bin/env bash

rm -r ./node_modules

cd packages

for f in *; do
    if [ -d "$f" ]; then
        echo "Removing ${f}/node_modules..."
        rm -r "${f}/node_modules"

        echo "Removing ${f}/dist..."
        rm -r "${f}/dist"
    fi
done
