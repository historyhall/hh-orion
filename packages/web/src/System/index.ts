import {Page} from "../types";
import {System} from "./System";
import {Migrations} from "./Migrations";

const pages: Page[] = [
    {
        path: '/system',
        component: System,
        header: {
            name: 'System',
            icon: 'server'
        }
    },
    {
        path: '/system/migrations',
        component: Migrations,
        header: {
            name: 'Migrations',
            icon: 'database'
        }
    }
]
export default pages;