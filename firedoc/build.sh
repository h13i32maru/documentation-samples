#!/bin/bash
npm install
git clone --depth 1 git@github.com:fireball-x/firedoc.git repo
./node_modules/.bin/firedoc build ./repo/lib --dest ./doc --lint --lang en
./node_modules/.bin/firedoc build ./src --dest ./doc-sample --lint --lang en
