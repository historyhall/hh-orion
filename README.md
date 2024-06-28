# HH Orion
Web based software for managing historical archives.

## Contributing

### Pull Requests
Pull requests are always welcome.

Before a pull request can be merged, it will have to pass the branch checks. This includes both approval from a HH developer, and passing the automated tests.

The following automated tests are run:
- Global
  - `yarn fix:organize`
  - `yarn fix:package`
- Web
  - `yarn test:web:lint`
  - `yarn test:web:types`
  - `yarn test:web:deps`
- Domain
  - `yarn test:domain:lint`
  - `yarn test:domain:types`
  - `yarn test:domain:deps`
- Server
  - `yarn test:server:lint`
  - `yarn test:server:types`
  - `yarn test:server:deps`
- Migrate
  - `yarn test:server:lint`
  - `yarn test:server:types`
  - `yarn test:server:deps`

You can run these commands in the project root, to ensure that your code will pass the tests.

### Issues
Before creating an issue, please search to make sure that you're issues does not already exist. Duplicate issues will be closed.

Issues are tagged with several different labels.
- Web/Domain/Deploy/Server tags denote which package needs to be modified to resolve the issue.
- Bug/Enhancement/Documentation denotes what type of issue needs resolving.

## Developer Environment Setup

### Prerequisites
- Docker
- Node
- Yarn

### Development Setup
1. Clone the repository `git clone https://github.com/historyhall/hh-orion.git`
2. Copy `packages/server/.env.default` to `packages/server/.env`. The default configuration will work with the included docker-compose file.
3. Copy `packages/migrate/.env.default` to `packages/migrate/.env`. The default configuration will work with the included docker-compose file.
4. Start docker containers (postgres, pgadmin) using `docker compose up-d` in `packages/deploy/develop-setup`
   -This step can be skipped if you already have a running instance of postgres
5. In the project root, run postgres migrations `yarn start:migrations`
6. Start Server `yarn start:server`
7. Start Web `yarn start:web`

### Enable Debug Statements
For browsers, run `localStorage.debug = "hh.*"` in the console.

