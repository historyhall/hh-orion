import {Page} from '../types';
import {About} from './About';

export const pages: Record<string, Page> = {
	about: {
		header: {
			name: 'About',
			icon: 'users',
		},
		menu: {
			name: 'About',
			icon: 'users',
		},
		path: '/about',
		component: About,
	},
};
