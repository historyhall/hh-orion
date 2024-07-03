import {MikroORM} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import cors from 'cors';
import debug from 'debug';
import express, {Express} from 'express';
import {environment} from './core/environment';
import mikroOrmConfig from './core/mikro-orm.config';
import {Accounts} from './accounts';
import {Documents} from './documents';
import {System} from './System';
import {Action} from './types';

const d = debug('hh.server');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(orm => {
	const app: Express = express();
	const port = environment.serverPort;
	const em = orm.em.fork();
	const corsOptions = {credentials: true, origin: environment.corsOrigin};

	debug.enable(environment.debug);

	app.use(cors(corsOptions));

	const routes: Action[] = [...Accounts(em), ...Documents(em), ...System(em)];

	routes.map(route => {
		app.get(route.path, async (req, res) => {
			d(route.path, req.query);
			try {
				res.status(200).send(JSON.stringify(await route.action(req.query?.data0)));
			} catch (error) {
				d(error);
			}
		});
	});

	app.listen(port, () => {
		d(`Server is running at ${environment.corsOrigin}`);
	});
});
