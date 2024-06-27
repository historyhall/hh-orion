import {Migration} from "./entities";
import {MigrationController} from "./controllers";
import {EntityClass, EntityManager} from "@mikro-orm/core";
import {Class} from "../types";

export const entities: EntityClass<Partial<any>>[] = [Migration];
export function controllers(em: EntityManager): {[key: string]: Class} {
    return {migrationController: new MigrationController(em)}
}

export * from './controllers';
export * from './entities';