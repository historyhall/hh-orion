import {Page} from "../types";
import {Home} from "./Home";
import image from './components/logo.png';

const pages: Page[] = [
    {
        menu: {
            name: 'Home',
            image,
            icon: 'home',
        },
        path: '/',
        component: Home
    }
]
export default pages;