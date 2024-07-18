import {EntityClass} from "@mikro-orm/core";
import {AuthorController, UserController} from "./controllers";
import {Author, Session} from "./entities";
import {User} from "./entities";
import {SessionController} from "./controllers/SessionController";

export const entities: EntityClass<Partial<any>>[] = [Author, Session, User];
export const controllers = {
    authorController: AuthorController,
    sessionController: SessionController,
    userController: UserController
}

export * from './controllers';
export * from './entities';