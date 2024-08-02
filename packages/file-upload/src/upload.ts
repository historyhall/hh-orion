import debug from 'debug';
import type {Readable} from 'node:stream';
import {BusboyChecker} from './BusboyChecker';

const d = debug('tacs.file-upload.upload.endpoints.fileUpload');

export interface Request {
	busboy?: BusboyChecker;
	pipe: (destination: BusboyChecker) => void;
	on: (key: 'finish' | 'aborted' | 'error', listener: () => void) => void;
}

export async function upload(req: Request) {
	const storagePath = 'something';
	// TODO fix path
	if (!req.busboy) {
		throw new Error('no multipart');
	}

	const busboyFinished = new BusboyChecker(req.busboy);

	let code: number;

	await new Promise((resolve, reject) => {
		req.busboy?.on('file', async (fieldName: string, readable: Readable, fileData: {filename: string; encoding: string; mimeType: string}) => {
			d(`Starting: ${fileData.filename}`);
			busboyFinished.startFile(fieldName, fileData.filename);

			const duplicate = false;
			if (!duplicate) {
				console.log(readable, storagePath);
			} else if (duplicate) {
				code = 522;
				return;
			}

			busboyFinished.endFile(fieldName, fileData.filename);
		});

		busboyFinished.on('finish', async () => {
			code = 200;
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

		d('Starting files');
		if (req.busboy) {
			req.pipe(req.busboy);
		}
	});

	return code;
}
