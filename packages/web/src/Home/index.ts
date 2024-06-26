import {Home} from "./Home";
import {Page} from "../types";
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