import {environment} from './environment';
import {entities} from "hh-orion-domain/dist";
import {PostgreSqlDriver} from "@mikro-orm/postgresql";

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