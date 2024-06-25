FROM nginx:stable-bookworm
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

# Get third-party applications
RUN apt-get update

# Create folders
RUN mkdir -p /app/packages/server && \
    mkdir -p /app/packages/domain
WORKDIR /app

# Add package.json files
ADD docker/common/package.json /app
ADD packages/server/package.json /app/packages/server
ADD packages/domain/package.json /app/packages/domain

# Install packages
RUN yarn install --prod && \
    yarn cache clean

# Add built code
ADD packages/domain/build/ /app/packages/domain
ADD packages/server/build/ /app/packages/server
ADD packages/domain/build/ /app/packages/server/node_modules/hh-orion-domain/build

ADD docker/server/docker_command.sh /app
RUN chmod +x docker_command.sh

ENV NODE_ENV production

CMD /app/docker_command.sh