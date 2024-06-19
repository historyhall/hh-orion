import {environment} from './environment';
import {entities} from "hh-orion-domain/dist";
import {Options} from "@mikro-orm/postgresql";

const config: Options = {
    entities,
    clientUrl: `postgres://${environment.dbUsername}:${environment.dbPassword}@${environment.dbDomain}:${environment.dbPort}/${environment.dbServer}`,
    debug: environment.dbLogging,
    discovery: {
        disableDynamicFileAccess: true,
    },
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