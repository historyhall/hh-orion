import {Page} from "../types";
import {Home} from "./Home";
import image from './logo.png';

export default {
    menu: {
        name: 'Home',
        image,
        icon: 'home',
    },
    path: '/',
    component: Home
} as Page