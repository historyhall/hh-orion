import {User} from "./entities";
import {UserController} from "./controllers";
import {EntityClass, EntityManager} from "@mikro-orm/core";
import {Class} from "../types";

export const entities: EntityClass<Partial<any>>[] = [User];
export function controllers(em: EntityManager): {[key: string]: Class} {
    return {userController: new UserController(em)}
}

export * from './controllers';
export * from './entities';