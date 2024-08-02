FROM node:iron-bookworm
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

# Get third-party applications
RUN apt-get update

# Create folders
RUN mkdir -p /app/packages/file-upload && \
    mkdir -p /app/packages/domain && \
    mkdir -p /app/packages/schema
WORKDIR /app

# Add package.json files
ADD packages/deploy/docker-common/package.json /app
ADD packages/schema/package.json /app/packages/schema
ADD packages/file-upload/package.json /app/packages/file-upload
ADD packages/domain/package.json /app/packages/domain

# Install packages
RUN yarn install --prod

# Add built code
ADD packages/schema/dist/ /app/packages/schema
ADD packages/domain/dist/ /app/packages/domain
ADD packages/file-upload/dist/ /app/packages/file-upload
ADD packages/schema/dist/ /app/packages/file-upload/node_modules/hh-orion-schema/dist
ADD packages/domain/dist/ /app/packages/file-upload/node_modules/hh-orion-domain/dist

ADD packages/deploy/docker-file-upload/file-upload.sh /app
RUN chmod +x file-upload.sh

ENV NODE_ENV production

CMD /app/file-upload.sh