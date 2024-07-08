import {routes as authorRoutes} from './author';
import {routes as userRoutes} from './user';

export namespace Accounts {
    export namespace Author {
        export const routes = authorRoutes;
    }
    export namespace User {
        export const routes = userRoutes;
    }
}