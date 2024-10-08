import debug from 'debug';
import {createWriteStream} from 'fs';
import * as fs from 'node:fs';
import {join} from 'node:path';
import {Readable} from 'node:stream';
import {randomString} from './randomString';

const d = debug('hh.file-upload.lib.writeToStorage');

export async function writeToStorage(tmpStream: Readable, tmpFolder: string, extension: string): Promise<{filename: string; storagePath: string}> {
	function pad(number: number, length: number) {
		return (Array(length).join('0') + number).slice(-length);
	}

	return new Promise<{filename: string; storagePath: string}>((resolve, reject) => {
		const day = pad(new Date().getDate(), 2);
		const month = pad(new Date().getMonth() + 1, 2);
		const year = new Date().getFullYear().toString();

		const storagePath = join(tmpFolder, year, month, day);
		d('Directory path:', storagePath);
		if (!fs.existsSync(storagePath)) {
			fs.mkdirSync(storagePath, {recursive: true});
		}

		const filename = randomString() + extension;
		const fullPath = join(storagePath, filename);
		d('Full path:', fullPath);

		const writeStream = createWriteStream(fullPath);
		writeStream.on('close', () => {
			d('Stream closed');
			resolve({filename, storagePath});
		});
		writeStream.on('error', error => {
			d('Stream error');
			reject(error);
		});
		tmpStream.pipe(writeStream);
	});
}
