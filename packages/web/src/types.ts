import type {JSX} from 'react';
import {SemanticICONS} from 'semantic-ui-react';

export type Page = {
	menu: Menu;
	component: () => JSX.Element;
};

type Menu = {
	name: string;
	path: string;
	icon: SemanticICONS;
};
