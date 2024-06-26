import {Home} from "./Home";
import {Page} from "../types";
import image from './logo.png';

export default {
    menu: {
        name: 'Home',
        path: '/',
        image,
        icon: 'home'
    },
    component: Home
} as Page