import {Page} from '../types';
import {Home} from './Home';

const pages: Record<string, Page> = {
	home: {
		menu: {
			name: 'Home',
			icon: 'home',
		},
		path: '/',
		component: Home,
	},
};
export default pages;
