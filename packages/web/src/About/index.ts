import {Page} from "../types";
import {About} from "./About";

const pages: Page[] = [
    {
        header: {
            name: 'About',
            icon: 'users'
        },
        menu: {
            name: 'About',
            icon: 'users',
        },
        path: '/about',
        component: About
    }
]
export default pages;