import {Domain} from "../types";
import {User} from "./entities";
import {UserController} from "./controllers";

export const accounts: Domain = {
    entities: [User],
    controllers: [UserController],
}

export * from './controllers';
export * from './entities';