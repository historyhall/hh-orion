export function mimeTypeToFileExtension(mimeType: string) {
	switch (mimeType) {
		case 'application/pdf':
			return '.pdf';
		default:
			throw new Error('Mime type not supported');
	}
}
