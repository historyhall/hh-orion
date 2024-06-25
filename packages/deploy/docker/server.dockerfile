FROM node:iron-bookworm
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

# Get third-party applications
RUN apt-get update

# Create folders
RUN mkdir -p /app/packages/server && \
    mkdir -p /app/packages/domain
WORKDIR /app

# Add package.json files
ADD packages/deploy/docker/package.json /app
ADD packages/server/package.json /app/packages/server
ADD packages/domain/package.json /app/packages/domain

# Install packages
RUN yarn install --prod

# Add built code
ADD packages/domain/dist/ /app/packages/domain
ADD packages/server/dist/ /app/packages/server
ADD packages/domain/dist/ /app/packages/server/node_modules/hh-orion-domain/dist

ADD packages/deploy/docker/server.sh /app
RUN chmod +x docker_command.sh

ENV NODE_ENV production

CMD /app/docker_command.sh