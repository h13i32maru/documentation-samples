#!/bin/bash
npm install
git clone --depth 1 git@github.com:documentationjs/documentation.git repo
./node_modules/.bin/documentation --format html --lint --output ./doc ./repo/index.js
./node_modules/.bin/documentation --format html --lint --output ./doc-sample ./src/*.js
