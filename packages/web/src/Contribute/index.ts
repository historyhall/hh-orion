import {Page} from '../types';
import {Contribute} from './Contribute';

const pages: Record<string, Page> = {
	contribute: {
		header: {
			name: 'Contribute',
			icon: 'gift',
		},
		menu: {
			name: 'Contribute',
			icon: 'gift',
		},
		path: '/contribute',
		component: Contribute,
	},
};
export default pages;
