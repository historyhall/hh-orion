# HH Orion
Web based software for managing historical archives.

# Develop Setup

## Prerequisites
- Docker
- Node
- Yarn

## Development Setup
1. Clone the repository `git clone https://github.com/historyhall/hh-orion.git`
2. Copy `server/.env.default` to `server/.env`. The defaults configuration will work with the included docker-compose file.
3. Start docker containers `docker compose up-d`
4. Run postgres migrations `yarn start:migrations`
2. Start Server `yarn start:server`
3. Start Web `yarn start:web`

