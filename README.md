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
- Packages (web, server, domain, migrate, schema)
  - `yarn test:*package*:lint`
  - `yarn test:*package*:types`
  - `yarn test:*package*:deps`

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
#### Setup Environment
1. Clone the repository `git clone https://github.com/historyhall/hh-orion.git`
2. Copy `packages/server/.env.default` to `packages/server/.env`. The default configuration will work with the included docker-compose file.
3. Copy `packages/migrate/.env.default` to `packages/migrate/.env`. The default configuration will work with the included docker-compose file.
4. Start docker containers (postgres, pgadmin) using `docker compose up-d` in `packages/deploy/develop-setup`
   -This step can be skipped if you already have a running instance of postgres
5. Run `yarn schema:init` to setup postgres tables

#### Start Project (For KDE uses with Yakuake terminal)
1. In the project root, run `yarn start:dev:yak`

#### Start Project (Manual)
1. Start Server `yarn start:server`
2. Start Web `yarn start:web`
3. Start Domain `yarn start:domain`

### Enable Debug Statements
For browsers, run `localStorage.debug = "hh.*"` in the console.

