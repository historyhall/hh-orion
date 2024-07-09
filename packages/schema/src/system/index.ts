import {routes as migrationRoutes} from './migration';
import {routes as searchRoutes} from './search';

export namespace System {
    export namespace Migration {
        export const routes = migrationRoutes;
    }
    export namespace Search {
        export const routes = searchRoutes;
    }
}