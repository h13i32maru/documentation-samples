#!/bin/bash
npm install
git clone --depth 1 git@github.com:esdoc/esdoc.git repo
./node_modules/.bin/esdoc -c ./esdoc.json
./node_modules/.bin/esdoc -c ./esdoc-sample.json
