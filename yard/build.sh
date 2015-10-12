#!/bin/bash
sudo gem install yard
git clone --depth 1 git@github.com:lsegal/yard.git repo
yardoc repo/lib
