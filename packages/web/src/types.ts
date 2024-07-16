import type {JSX} from 'react';
import {SemanticICONS} from 'semantic-ui-react';

export type Page = {
	header?: Header;
	menu?: Menu;
	path: string;
	component?: () => JSX.Element;
	sidebar?: () => JSX.Element;
	permissions?: Permissions;
};

export type Header = {
	name: string;
	description?: string;
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

export type Tag = {
	id: string;
	icon: SemanticICONS;
	text: string;
};

export type Permissions = {
	loggedIn?: true;
	loggedOut?: true;
};
