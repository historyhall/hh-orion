import {MikroORM} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import busboy from 'connect-busboy';
import cors from 'cors';
import debug from 'debug';
import express, {Express} from 'express';
import {UserController} from 'hh-orion-domain';
import {environment} from './core/environment';
import mikroOrmConfig from './core/mikro-orm.config';
import {upload} from './upload';

const d = debug('hh.file-upload');

MikroORM.init<PostgreSqlDriver>(mikroOrmConfig).then(orm => {
	debug.enable(environment.debug);

	d('Starting Express...');
	const app: Express = express();
	d('Starting Mikrorm...');
	const em = orm.em.fork();

	const corsOptions = {credentials: true, origin: environment.corsOrigin};

	app.use(cors(corsOptions));
	app.enable('trust proxy');

	app.post(`/upload`, busboy(), async (req, res) => {
		d(req.query);

		const agent = req.headers['user-agent'] || 'Unknown';
		let ipAddress = req.ip || req.socket.remoteAddress || '';

		if (ipAddress.startsWith('::ffff:')) {
			ipAddress = ipAddress.substring(7);
		}

		const userController = new UserController(em, {agent, ipAddress}, environment.tokenSecret);
		const userData = await userController.authentication(agent, ipAddress, req.headers.authorization);

		if (!userData.authenticatedUser) {
			res.status(401).send({});
		} else {
			try {
				// @ts-ignore
				const code = await upload(req, em, userData);
				res.status(code).send({});
			} catch (error: unknown) {
				if (typeof error === 'string') {
					res.statusMessage = error;
				} else if (error instanceof Error) {
					res.statusMessage = error.toString();
				} else {
					res.statusMessage = JSON.stringify(error);
				}
				res.status(500).send({});
			}
		}
	});

	const port = environment.serverPort;
	app.listen(port, () => {
		d(`File Upload is running at ${port}`);
	});
});
