import {EntityClass} from "@mikro-orm/core";
import {DocumentController} from "./controllers";
import {Document} from "./entities";

export const entities: EntityClass<Partial<any>>[] = [Document];
export const controllers = {
    documentController: DocumentController,
}

export * from './controllers';
export * from './entities';