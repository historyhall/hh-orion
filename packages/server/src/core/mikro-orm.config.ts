import type {Options} from '@mikro-orm/core';
import {environment} from './environment';
import {entities} from "hh-orion-domain/dist";

export function mikroOrmConfig(): Options {
    return {
        entities,
        clientUrl: `postgres://${environment.dbUsername}:${environment.dbPassword}@${environment.dbDomain}:${environment.dbPort}/${environment.dbServer}`,
        debug: process.env.POSTGRESQL_LOGGING === 'true',
        discovery: {
            disableDynamicFileAccess: true,
        },
        driverOptions:
            process.env.POSTGRESQL_SSL === 'true'
                ? {
                    connection: {
                        ssl: environment.dbRejectUnauthorized
                            ? {
                                rejectUnauthorized: environment.dbRejectUnauthorized === 'true',
                            }
                            : true,
                    },
                }
                : {},
    };
}