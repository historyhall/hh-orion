#!/bin/bash

docker login registry.historyhall.org -u dockerreguser -p

cp -n ./server/.env.default ./server/.env
cp -n ./postgres/.env.default ./postgres/.env

cd ./postgres
docker compose pull
docker compose down
docker compose up -d

cd ../migrate
docker compose pull
docker compose down
docker compose up -d

cd ../server
docker compose pull
docker compose down
docker compose up -d

cd ../web
docker compose pull
docker compose down
docker compose up -d