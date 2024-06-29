import type {JSX} from 'react';
import {SemanticICONS} from 'semantic-ui-react';

export type Page = {
	header?: Header;
	menu?: Menu;
	path: string;
	component: () => JSX.Element;
};

export type Header = {
	name: string;
	icon: SemanticICONS;
};

export type Menu = {
	name?: string;
	icon: SemanticICONS;
	image?: string;
	position?: 'left' | 'right';
	secondaryMenuItem?: SecondaryMenuItem[];
};

type SecondaryMenuItem = {
	name: string;
	icon: SemanticICONS;
	path: string;
};
