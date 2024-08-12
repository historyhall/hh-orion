import {Page} from '../types';
import {Explore} from './Explore';

export const pages: Record<string, Page> = {
	explore: {
		path: '/explore',
		component: Explore,
		menu: {
			name: 'Explore',
			icon: 'compass',
		},
		header: {
			name: 'Explore',
			icon: 'compass',
		},
	},
};
