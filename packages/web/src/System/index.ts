import {Page} from '../types';
import {Error} from './Error';
import {MigrationStatus} from './MigrationStatus';
import {Search} from './Search';
import {SearchStatus} from './SearchStatus';
import {SearchStatusSidebar} from './SearchStatusSidebar';
import {System} from './System';

const pages: Record<string, Page> = {
	system: {
		path: '/system',
		component: System,
		header: {
			name: 'System',
			icon: 'server',
		},
		permissions: {
			loggedIn: true,
		},
		menu: {
			name: 'System',
			icon: 'server',
		}
	},
	migrationStatus: {
		path: '/system/migrations',
		component: MigrationStatus,
		header: {
			name: 'Migration Status',
			icon: 'database',
		},
		permissions: {
			loggedIn: true,
		},
	},
	searchStatus: {
		path: '/system/search',
		component: SearchStatus,
		header: {
			name: 'Search Status',
			icon: 'database',
		},
		sidebar: SearchStatusSidebar,
		permissions: {
			loggedIn: true,
		},
	},
	searchResults: {
		path: '/search/:searchTerm',
		component: Search,
		header: {
			name: 'Search',
			icon: 'search',
		},
	},
	error: {
		path: '*',
		component: Error,
	},
};
export default pages;
