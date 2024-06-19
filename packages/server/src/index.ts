import express, {Express} from 'express';
import {graphqlHTTP} from 'express-graphql';
import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql/type';
import cors from 'cors';
import d from 'debug';
import {environment} from './core/environment';
import {MikroORM} from '@mikro-orm/core';
import mikroOrmConfig from './core/mikro-orm.config.js';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';

d('test.domain');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(orm => {
	const app: Express = express();
	const port = environment.serverPort;
	const em = orm.em.fork();

	const query = new GraphQLObjectType({
		name: 'getApiVersion',
		fields: () => ({
			apiVersion: {
				type: GraphQLString,
				resolve: () => {
					return environment.apiVersion;
				},
			},
		}),
	});

	const schema = new GraphQLSchema({query});

	d(em.schema || 'schema not defined');
	app.use(cors({credentials: true, origin: `http://localhost:${port}`}));

	app.use(
		'/api',
		graphqlHTTP({
			schema: schema,
			graphiql: true,
		}),
	);

	app.listen(port, () => {
		d(`Server is running at http://localhost:${port}`);
	});
});
