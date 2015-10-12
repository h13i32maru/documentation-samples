#!/bin/bash
npm install
git clone --depth 1 git@github.com:sebastian-lenz/typedoc.git repo
rm -rf ./doc
./node_modules/.bin/typedoc --out ./doc ./repo/src/
