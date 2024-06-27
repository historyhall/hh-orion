import {EntityClass} from "@mikro-orm/core";
import {UserController} from "./controllers";
import {User} from "./entities";

export const entities: EntityClass<Partial<any>>[] = [User];
export const controllers = {
    userController: UserController
}

export * from './controllers';
export * from './entities';