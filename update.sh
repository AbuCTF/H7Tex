#!/bin/bash
cd /var/www/h7tex
git pull origin master
npm install
npm run build
pm2 restart h7tex
pm2 status
