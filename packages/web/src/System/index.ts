import {Page} from "../types";
import {System} from "./System";
import {Migrations} from "./Migrations";

const pages: Page[] = [
    {
        path: '/system',
        component: System
    },
    {
        path: '/system/migrations',
        component: Migrations,
    }
]
export default pages;