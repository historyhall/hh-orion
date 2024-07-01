import {Page} from "../types";
import {Migrations} from "./Migrations";
import {System} from "./System";
import {Search} from "./Search";

const pages: Record<string, Page> = {
    system: {
        path: '/system',
        component: System,
        header: {
            name: 'System',
            icon: 'server'
        }
    },
    systemMigrations: {
        path: '/system/migrations',
        component: Migrations,
        header: {
            name: 'Migrations',
            icon: 'database'
        }
    },
    searchResults: {
        path: '/search/:searchTerm',
        component: Search,
    }
}
export default pages;