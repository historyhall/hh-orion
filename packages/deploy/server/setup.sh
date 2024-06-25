#!/bin/bash

# Update Packages
sudo apt update -y;
sudo apt upgrade -y;

sudo apt install -y nginx;

# Docker
curl -fsSL https://get.docker.com -o get-docker.sh;
sudo sh get-docker.sh;

# Docker Registry
sudo mkdir -p /srv/docker-registry/registry;
sudo mkdir -p /srv/docker-registry/postgres;
cd /srv/docker-registry;

cp ./docker-compose.yml /srv/docker-registry/;

sudo docker-compose up -d;

# nginx
sudo ./historyhall.org /etc/nginx/sites-available/historyhall.org
sudo ln -s /etc/nginx/sites-available/historyhall.org /etc/nginx/sites-enabled/
sudo systemctl restart nginx