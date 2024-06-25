#!/bin/bash
sudo apt update -y && apt upgrade -y;
sudo apt install -y nginx;
curl -fsSL https://get.docker.com -o get-docker.sh;
sudo sh get-docker.sh;