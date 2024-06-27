#!/bin/bash

sudo docker login registry.historyhall.org -u dockerreguser

cp -n ./server/.env.default ./server/.env
cp -n ./postgres/.env.default ./postgres/.env

cd ./postgres
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d

cd ../migrate
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d

cd ../server
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d

cd ../web
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d