FROM node:iron-bookworm
MAINTAINER Shayne Thiessen <shayne@shaynethiessen.com>

# Get third-party applications
RUN apt-get update

# Create folders
RUN mkdir -p /app/packages/migrate && \
    mkdir -p /app/packages/domain && \
    mkdir -p /app/packages/schema
WORKDIR /app

# Add package.json files
ADD packages/deploy/docker-common/package.json /app
ADD packages/schema/package.json /app/packages/schema
ADD packages/migrate/package.json /app/packages/migrate
ADD packages/domain/package.json /app/packages/domain

# Install packages
RUN yarn install --prod

# Add built code
ADD packages/schema/dist/ /app/packages/schema
ADD packages/domain/dist/ /app/packages/domain
ADD packages/migrate/dist/ /app/packages/migrate
ADD packages/schema/dist/ /app/packages/migrate/node_modules/hh-orion-schema/dist
ADD packages/domain/dist/ /app/packages/migrate/node_modules/hh-orion-domain/dist

ADD packages/deploy/docker-migrate/migrate.sh /app
RUN chmod +x migrate.sh

ENV NODE_ENV production

CMD /app/migrate.sh