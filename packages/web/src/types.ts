import type {JSX} from 'react';
import {SemanticICONS} from 'semantic-ui-react';

export type Page = {
	menu?: Menu;
	path: string;
	component: () => JSX.Element;
};

export type Menu = {
	name?: string;
	icon: SemanticICONS;
	image?: string;
	position?: 'left' | 'right';
};
