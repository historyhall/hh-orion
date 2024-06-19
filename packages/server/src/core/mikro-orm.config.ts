import type {Options} from '@mikro-orm/core';
import {entities} from 'hh-domain';
import {environment} from './environment';

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