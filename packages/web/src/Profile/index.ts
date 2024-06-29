import {Logout} from "../Layout/Logout";
import {Page} from "../types";
import {Login} from "./Login";
import {Profile} from "./Profile";
import {Register} from "./Register";

const pages: Record<string, Page> = {
    profile: {
        header: {
            name: 'Profile',
            icon: 'user'
        },
        menu: {
            icon: 'user',
            position: 'right',
            secondaryMenuItem: [
                {
                    icon: 'sign in',
                    name: 'Login',
                    path: '/profile/login',
                },
                {
                    icon: 'signup',
                    name: 'Register',
                    path: '/profile/register',
                },
                // {
                //     icon: 'sign out',
                //     name: 'Logout',
                //     path: '/profile/logout',
                // },
            ]
        },
        path: '/profile',
        component: Profile
    },
    login: {
        header: {
            name: 'Login',
            icon: 'sign in'
        },
        path: '/profile/login',
        component: Login
    },
    logout: {
        header: {
            name: 'Logout',
            icon: 'sign out'
        },
        path: '/profile/logout',
        component: Logout
    },
    register: {
        header: {
            name: 'Register',
            icon: 'signup'
        },
        path: '/profile/register',
        component: Register
    }
}
export default pages;