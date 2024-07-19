import {Page} from '../types';
import {Home} from './Home';
import image from './home/logo.png';

const pages: Record<string, Page> = {
	home: {
		menu: {
			name: 'Home',
			image,
			icon: 'home',
		},
		path: '/',
		component: Home,
	},
};
export default pages;
