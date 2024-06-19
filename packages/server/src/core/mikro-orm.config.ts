import type {Options} from '@mikro-orm/core';
import {environment} from './environment';
import {entities} from "hh-orion-domain/dist";
import {PostgreSqlDriver} from "@mikro-orm/postgresql";

export const mikroOrmConfig: Options<PostgreSqlDriver> = {
    entities,
    clientUrl: `postgres://${environment.dbUsername}:${environment.dbPassword}@${environment.dbDomain}:${environment.dbPort}/${environment.dbServer}`,
    debug: environment.dbLogging,
    driver: PostgreSqlDriver,
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
}