#!/bin/bash
npm install
git clone --depth 1 git@github.com:jsdoc3/jsdoc.git repo
./node_modules/.bin/jsdoc ./repo/lib -c ./jsdoc.json
./node_modules/.bin/jsdoc ./src -c ./jsdoc-sample.json
