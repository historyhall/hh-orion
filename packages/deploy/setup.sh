#!/bin/bash
sudo apt update -y && apt upgrade;
sudo apt install nginx;
curl -fsSL https://get.docker.com -o get-docker.sh;
sudo sh get-docker.sh;