#!/bin/bash
npm install
git clone --depth 1 git@github.com:yui/yuidoc.git repo
./node_modules/.bin/yuidoc -c ./yuidoc.json ./repo/lib
./node_modules/.bin/yuidoc -c ./yuidoc-sample.json ./src/
