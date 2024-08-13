import {Page} from '../types';
import {Home} from './Home';

export const pages: Record<string, Page> = {
	home: {
		menu: {
			name: 'Home',
			icon: 'home',
		},
		path: '/',
		component: Home,
	},
};
