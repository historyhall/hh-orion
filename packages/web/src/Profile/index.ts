import {Page} from "../types";
import {Profile} from "./Profile";

const pages: Page[] = [
    {
        menu: {
            icon: 'user',
            position: 'right',
        },
        path: '/profile',
        component: Profile
    }
]
export default pages;