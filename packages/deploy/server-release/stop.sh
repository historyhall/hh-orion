#!/bin/bash

cd ./postgres
docker compose down

cd ../elasticsearch
docker compose down

cd ../migrate
docker compose down

cd ../file-upload
docker compose down

cd ../server
docker compose down

cd ../web
docker compose down





