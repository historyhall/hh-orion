import {Page} from '../types';
import {Explore} from './Explore';

const pages: Record<string, Page> = {
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
export default pages;
