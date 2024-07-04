import {MikroORM} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import cors from 'cors';
import debug from 'debug';
import express, {Express} from 'express';
import {System} from './System';
import {Accounts} from './accounts';
import {environment} from './core/environment';
import mikroOrmConfig from './core/mikro-orm.config';
import {Documents} from './documents';
import {Action} from './types';

const d = debug('hh.server');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(orm => {
	const app: Express = express();
	const port = environment.serverPort;
	const em = orm.em.fork();
	const corsOptions = {credentials: true, origin: environment.corsOrigin};

	debug.enable(environment.debug);

	app.use(cors(corsOptions));

	const endpoints: Action[] = [...Accounts(em), ...Documents(em), ...System(em)];

	endpoints.map(endpoint => {
		app.get(endpoint.route, async (req, res) => {
			d(endpoint.route, req.query);
			try {
				res.status(200).send(JSON.stringify(await endpoint.action(req.query?.data0)));
			} catch (error) {
				d(error);
			}
		});
	});

	app.listen(port, () => {
		d(`Server is running at ${environment.corsOrigin}`);
	});
});
