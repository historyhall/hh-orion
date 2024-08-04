#!/usr/bin/env bash

# Update Packages
sudo apt update -y;
sudo apt upgrade -y;

sudo apt install -y nginx certbot python3-certbot-nginx apache2-utils;

# Docker
curl -fsSL https://get.docker.com -o get-docker.sh;
sudo sh get-docker.sh;

# nginx
sudo cp ./historyhall.org /etc/nginx/sites-available/historyhall.org
sudo ln -s /etc/nginx/sites-available/historyhall.org /etc/nginx/sites-enabled/
sudo systemctl restart nginx

# certificate
sudo certbot --nginx -d historyhall.org -d www.historyhall.org
sudo certbot --nginx -d registry.historyhall.org -d www.registry.historyhall.org
sudo certbot --nginx -d api.historyhall.org -d www.api.historyhall.org
sudo certbot --nginx -d upload.historyhall.org -d www.upload.historyhall.org
sudo certbot --nginx -d mail.historyhall.org -d www.mail.historyhall.org

# Docker Registry
sudo mkdir -p /srv/docker-registry/registry;
sudo mkdir -p /srv/docker/postgres;

sudo cp ./docker-compose.yml /srv/docker-registry/;

# Registry authentication
sudo mkdir /srv/docker-registry/auth
cd /srv/docker-registry/auth
sudo htpasswd -Bc registry.password dockerreguser

sudo docker compose --project-directory /srv/docker-registry up -d;

# Docker Permissions
sudo groupadd docker;
sudo usermod -aG docker $USER;

newgrp docker;

# Mail Server - Roundcube
sudo apt install php-fpm php-dom php-mbstring php-intl php-curl php-pdo-pgsql
sudo mkdir -v /var/www/mail /var/www/mail

# Mail Server - Dovecot
sudo apt install dovecot-imapd

# Test and Reload Nginx
sudo nginx -t && sudo service nginx reload