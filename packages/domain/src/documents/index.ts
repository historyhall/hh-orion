import {EntityClass} from "@mikro-orm/core";
import {Document} from "./entities";

export const entities: EntityClass<Partial<any>>[] = [Document];

export * from './entities';