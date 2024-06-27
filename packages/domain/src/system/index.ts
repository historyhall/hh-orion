import {Migration} from "./entities";
import {MigrationController} from "./controllers";
import {EntityClass} from "@mikro-orm/core";

export const entities: EntityClass<Partial<any>>[] = [Migration];
export const controllers = {
    migrationController: MigrationController
}

export * from './controllers';
export * from './entities';