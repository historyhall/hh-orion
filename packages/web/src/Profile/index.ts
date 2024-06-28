import {Page} from "../types";
import {Profile} from "./Profile";

const pages: Record<string, Page> = {
    profile: {
        header: {
            name: 'Profile',
            icon: 'user'
        },
        menu: {
            icon: 'user',
            position: 'right',
        },
        path: '/profile',
        component: Profile
    }
}
export default pages;