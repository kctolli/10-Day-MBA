#!/bin/bash

cd ~/10-Day-MBA

git status
git pull 
git add . 
git commit -m "Deploy --- `date +%m`/`date +%d`/`date +%Y` `date +%r`"
git push
