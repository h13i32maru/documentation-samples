#!/bin/bash
bundle install --path=vendor/bundle
git clone --depth 1 https://github.com/geoext/geoext2 repo
./vendor/bundle/ruby/2.0.0/bin/jsduck repo/src --output doc
