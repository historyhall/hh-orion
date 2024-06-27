import {Domain} from "../types";
import {Migration} from "./entities";
import {MigrationController} from "./controllers";

export const system: Domain = {
    entities: [Migration],
    controllers: [MigrationController],
}

export * from './controllers';
export * from './entities';