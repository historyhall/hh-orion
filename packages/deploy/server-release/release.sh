#!/bin/bash

sudo docker login registry.historyhall.org -u local

cp -n ./web/.default.env ./web.env
cp -n ./server/.default.env ./server.env

cd ./web
sudo docker-compose pull
sudo docker-compose down
sudo docker-compose up -d

cd ./server
sudo docker-compose pull
sudo docker-compose down
sudo docker-compose up -d