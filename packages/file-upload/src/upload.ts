import {Connection, EntityManager, IDatabaseDriver} from '@mikro-orm/core';
import {PostgreSqlDriver, SqlEntityManager} from '@mikro-orm/postgresql';
import debug from 'debug';
// @ts-ignore
import HashTransform from 'hash-transform';
import {DocumentController, Location, Document, CountryController} from 'hh-orion-domain';
import {UserData} from 'hh-orion-domain';
import * as fs from 'node:fs';
import {join} from 'node:path';
import type {Readable} from 'node:stream';
import {BusboyChecker} from './BusboyChecker';
import {CounterStream} from './lib/CounterStream';
import {mimeTypeToFileExtension} from './lib/mimeTypeToFileExtension';
import {writeToStorage} from './lib/writeToStorage';

const d = debug('hh.file-upload.upload');

export interface Request {
	busboy?: BusboyChecker;
	pipe: (destination: BusboyChecker) => void;
	on: (key: 'finish' | 'aborted' | 'error', listener: () => void) => void;
}

export async function upload(req: Request, em: SqlEntityManager<PostgreSqlDriver> & EntityManager<IDatabaseDriver<Connection>>, userData: UserData) {
	const contentRoot = 'assets/content';
	if (!req.busboy) {
		throw new Error('no multipart');
	}

	const busboyFinished = new BusboyChecker(req.busboy);

	let code: number = 500;

	await new Promise((resolve, reject) => {
		req.busboy?.on('file', async (fieldName: string, readable: Readable, fileData: {filename: string; encoding: string; mimeType: string}) => {
			d(`Starting: ${fileData.filename} ${fileData.mimeType}`);
			busboyFinished.startFile(fieldName, fileData.filename);
			const countryController = new CountryController(em, userData);
			const documentController = new DocumentController(em, userData);

			const hash = new HashTransform('sha256');
			const counter = new CounterStream();
			const path = await writeToStorage(readable.pipe(hash).pipe(counter), contentRoot, mimeTypeToFileExtension(fileData.mimeType));

			const duplicateCount = await documentController.documentExists(hash.hash);
			if (duplicateCount === 0) {
				const country = await countryController.getByName('Canada');
				const location = new Location({country, latitude: '0', longitude: '0'});
				const document = new Document({
					filename: path.filename,
					storagePath: path.storagePath,
					hash: hash.hash,
					bytes: counter.counter,
					location,
					name: 'unknown',
					content: 'unknown',
				});

				em.persist(location);
				em.persist(document);
				await em.flush();
				code = 200;
			} else {
				fs.unlink(join(path.storagePath, path.filename), err => d(err));
				code = 522;
				return;
			}

			busboyFinished.endFile(fieldName, fileData.filename);
			resolve(code);
		});

		req.on('aborted', () => {
			code = 500;
			reject();
		});

		req.on('error', () => {
			code = 500;
			reject();
		});
		if (req.busboy) {
			req.pipe(req.busboy);
		}
	});

	return code;
}
