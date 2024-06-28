import {EntityClass} from "@mikro-orm/core";
import {UserController} from "./controllers";
import {Author} from "./entities";
import {User} from "./entities";

export const entities: EntityClass<Partial<any>>[] = [Author, User];
export const controllers = {
    userController: UserController
}

export * from './controllers';
export * from './entities';