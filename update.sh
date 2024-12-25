#!/bin/bash
git pull origin master
sudo npm install
sudo npm run build
pm2 restart h7tex
pm2 status
