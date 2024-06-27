import {User} from "./entities";
import {UserController} from "./controllers";
import {EntityClass} from "@mikro-orm/core";

export const entities: EntityClass<Partial<any>>[] = [User];
export const controllers = {
    userController: UserController
}

export * from './controllers';
export * from './entities';