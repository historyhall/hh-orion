FROM nginx:stable-bookworm
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

ADD packages/web/build/ /usr/share/nginx/html

COPY packages/deploy/docker/web.conf /etc/nginx/conf.d/default.conf