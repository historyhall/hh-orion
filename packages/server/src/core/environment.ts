import {config} from 'dotenv';
import * as process from 'node:process';

config();

export const environment = {
	serverPort: process.env.SERVER_PORT || '5001',
	dbUsername: process.env.DB_USERNAME,
	dbPassword: process.env.DB_PASSWORD,
	dbDomain: process.env.DB_DOMAIN || 'localhost',
	dbName: process.env.DB_NAME || 'hh',
	dbPort: process.env.DB_PORT || '5432',
	dbRejectUnauthorized: process.env.DB_REJECT_UNAUTHORIZED === 'true',
	dbLogging: process.env.DB_LOGGING === 'true',
	corsOrigin: process.env.CORS_ORIGIN,
	debug: process.env.DEUBG || 'hh.*',
	elasticSearchUrl: process.env.ELASTIC_SEARCH_URL || 'http://localhost:9200',
	tokenSecret: process.env.TOKEN_SECRET || 'ABC123',
};
