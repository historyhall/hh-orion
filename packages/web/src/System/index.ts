import {Page} from '../types';
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
	},
	migrationStatus: {
		path: '/system/migrations',
		component: MigrationStatus,
		header: {
			name: 'Migration Status',
			icon: 'database',
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
	},
	searchResults: {
		path: '/search/:searchTerm',
		component: Search,
		header: {
			name: 'Search',
			icon: 'search',
		},
	},
};
export default pages;
