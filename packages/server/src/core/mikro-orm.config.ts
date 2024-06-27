import {PostgreSqlDriver} from "@mikro-orm/postgresql";
import {domain} from "hh-orion-domain/dist";
import {environment} from './environment';

const entities = domain.map(d => d.entities);

const config = {
    entities,
    clientUrl: `postgres://${environment.dbUsername}:${environment.dbPassword}@${environment.dbDomain}:${environment.dbPort}/${environment.dbName}`,
    debug: environment.dbLogging,
    discovery: {
        disableDynamicFileAccess: true,
    },
    driver: PostgreSqlDriver,
    driverOptions:
        process.env.POSTGRESQL_SSL === 'true'
            ? {
                connection: {
                    ssl: environment.dbRejectUnauthorized
                        ? {
                            rejectUnauthorized: environment.dbRejectUnauthorized,
                        }
                        : true,
                },
            }
            : {},
};

export default config;