#!/bin/bash
npm install
git clone --depth 1 git@github.com:jashkenas/docco.git repo
./node_modules/.bin/docco -o ./repo ./repo/docco.litcoffee
