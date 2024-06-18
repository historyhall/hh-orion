import type {JSX} from 'react'

export type Page = {
    menu: Menu
    component: () => JSX.Element;
}

type Menu = {
    name: string;
}