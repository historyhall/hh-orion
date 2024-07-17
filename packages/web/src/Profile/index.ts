import {Page} from "../types";
import {Login} from "./Login";
import {Logout} from "./Logout";
import {Profile} from "./Profile";
import {Register} from "./Register";

const pages: Record<string, Page> = {
    profileLoggedIn: {
        header: {
            name: 'Profile',
            icon: 'user'
        },
        menu: {
            icon: 'user',
            position: 'right',
            secondaryMenuItem: [
                {
                    icon: 'user',
                    name: 'Profile',
                    path: '/profile',
                },
                {
                    icon: 'sign out',
                    name: 'Logout',
                    path: '/profile/logout',
                },
            ]
        },
        path: '/profile',
        component: Profile,
        permissions: {
            loggedIn: true,
        }
    },
    profileLoggedOut: {
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
            ]
        },
        path: '/profile',
        permissions: {
            loggedOut: true,
        }
    },
    login: {
        header: {
            name: 'Login',
            icon: 'sign in'
        },
        path: '/profile/login',
        component: Login,
        permissions: {
            loggedOut: true,
        }
    },
    logout: {
        header: {
            name: 'Logout',
            icon: 'sign out'
        },
        path: '/profile/logout',
        component: Logout,
        permissions: {
            loggedIn: true,
        }
    },
    register: {
        header: {
            name: 'Register',
            icon: 'signup'
        },
        path: '/profile/register',
        component: Register,
        permissions: {
            loggedOut: true,
        }
    }
}
export default pages;