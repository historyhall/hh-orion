#!/bin/bash

sudo docker login registry.historyhall.org -u dockerreguser

cp -n ./web/.env.default ./web.env
cp -n ./server/.env.default ./server.env

cd ./web
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d

cd ./server
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d