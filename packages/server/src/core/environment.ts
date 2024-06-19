import {config} from "dotenv";

config();

export const environment = {
    serverPort: process.env.SERVER_PORT || '5001',
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbDomain: process.env.DB_DOMAIN || 'localhost',
    dbServer: process.env.DB_SERVER || 'hh',
    dbPort: process.env.DB_PORT || '5432',
    dbRejectUnauthorized: process.env.DB_REJECT_UNAUTHORIZED === 'true',
    dbLogging: process.env.DB_LOGGING === 'true',
    apiVersion: process.env.API_VERSION,
};