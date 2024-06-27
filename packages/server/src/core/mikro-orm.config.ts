import {defineConfig, PostgreSqlDriver} from "@mikro-orm/postgresql";
import {entities} from "hh-orion-domain/dist";
import {environment} from './environment';

export default defineConfig({
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
});