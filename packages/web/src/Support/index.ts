import {Page} from '../types';
import {Support} from './Support';
import {SupportPlans} from './SupportPlans';

const pages: Record<string, Page> = {
	support: {
		header: {
			name: 'Support',
			icon: 'help circle',
		},
		menu: {
			name: 'Support',
			icon: 'help circle',
		},
		component: Support,
		path: '/support/',
	},
	supportPlans: {
		header: {
			name: 'Available Plans',
			icon: 'clipboard list',
		},
		component: SupportPlans,
		path: '/support/plans',
	},
};
export default pages;
