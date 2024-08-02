import {EventEmitter} from 'node:events';

export class BusboyChecker extends EventEmitter {
	private isFinished = false;
	private readonly activeFiles: Record<string, boolean>;

	constructor(bb: EventEmitter) {
		super();
		this.activeFiles = {};

		bb.on('finish', () => {
			this.isFinished = true;
			if (!this.isActiveFiles()) {
				this.emit('finish');
			}
		});
	}

	public startFile(fieldName: string, filename: string) {
		this.activeFiles[`${fieldName}${filename}`] = true;
	}

	public endFile(fieldName: string, filename: string) {
		this.activeFiles[`${fieldName}${filename}`] = false;

		if (this.isFinished && !this.isActiveFiles()) {
			this.emit('finish');
		}
	}

	private isActiveFiles() {
		return Object.keys(this.activeFiles).reduce((memo, file) => {
			return memo || this.activeFiles[file];
		}, false);
	}
}
