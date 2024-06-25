#!/bin/bash

# Update Packages
sudo apt update -y;
sudo apt upgrade -y;

sudo apt install -y nginx certbot python3-certbot-nginx;

# Docker
curl -fsSL https://get.docker.com -o get-docker.sh;
sudo sh get-docker.sh;

# Docker Registry
sudo mkdir -p /srv/docker-registry/registry;
sudo mkdir -p /srv/docker-registry/postgres;

sudo cp ./docker-compose.yml /srv/docker-registry/;

sudo docker compose --project-directory /srv/docker-registry up -d;

# nginx
sudo cp ./historyhall.org /etc/nginx/sites-available/historyhall.org
sudo ln -s /etc/nginx/sites-available/historyhall.org /etc/nginx/sites-enabled/
sudo systemctl restart nginx

# certificate
sudo certbot --nginx -d historyhall.org -d www.historyhall.org
sudo certbot --nginx -d registry.historyhall.org -d www.registry.historyhall.org