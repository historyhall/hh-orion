import {Page} from "../types";
import {Contribute} from "./Contribute";

const pages: Page[] = [
    {
        menu: {
            name: 'Contribute',
            icon: 'gift',
        },
        path: '/contribute',
        component: Contribute
    }
]
export default pages;