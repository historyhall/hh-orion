import {Client} from '@elastic/elasticsearch';
import {MikroORM} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import cors from 'cors';
import debug from 'debug';
import express, {Express} from 'express';
import {Accounts} from './accounts';
import {environment} from './core/environment';
import mikroOrmConfig from './core/mikro-orm.config';
import {Documents} from './documents';
import {System} from './system';
import {Action} from './types';

const d = debug('hh.server');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(orm => {
	debug.enable(environment.debug);

	d('Starting Express...');
	const app: Express = express();
	d('Starting Mikrorm...');
	const em = orm.em.fork();
	d('Start Search...');
	const search = new Client({
		node: environment.elasticSearchUrl,
	});

	const corsOptions = {credentials: true, origin: environment.corsOrigin};

	app.use(cors(corsOptions));

	const endpoints: Action[] = [...Accounts(em), ...Documents(em), ...System(em, search)];

	endpoints.map(endpoint => {
		d(endpoint.route);
		app.get(`/${endpoint.route}`, async (req, res) => {
			d(req.query);
			try {
				const response = JSON.stringify(await endpoint.action(req.query));
				d(response);
				res.status(200).send(response);
			} catch (error: unknown) {
				res.statusMessage = error as string;
				res.status(500).send({});
				d(error);
			}
		});
	});

	app.use(express.static('./assets'));

	const port = environment.serverPort;
	app.listen(port, () => {
		d(`Server is running at ${environment.corsOrigin}`);
	});
});
