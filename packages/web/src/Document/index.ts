import {Page} from '../types';
import {Document} from './Document';
import {DocumentSidebar} from './DocumentSidebar';
import {Upload} from './Upload';

const pages: Record<string, Page> = {
	document: {
		path: '/document/:documentId',
		component: Document,
		sidebar: DocumentSidebar,
	},
	upload: {
		path: '/profile/documents/upload',
		component: Upload,
		header: {
			name: 'Upload Documents',
			icon: 'upload',
		},
		menu: {
			name: 'Upload',
			icon: 'upload',
			position: 'right',
		},
		permissions: {
			loggedIn: true,
		},
	},
};
export default pages;
