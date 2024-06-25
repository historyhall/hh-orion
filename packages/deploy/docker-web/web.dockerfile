FROM nginx:stable-bookworm
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

ADD packages/web/dist/ /usr/share/nginx/html

COPY packages/deploy/docker-web/web.conf /etc/nginx/conf.d/default.conf