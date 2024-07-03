import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Action} from "../types";

export function User(em: EntityManager): Action[] {
    return [
        {path: '/users/login', action: async data => await new controllers.userController(em).login(data)},
        {path: '/users/register', action: async data => await new controllers.userController(em).register(data)},
        {path: '/users/get-all', action: async () => await new controllers.userController(em).getAll()},
        {path: '/users/get-total', action: async () => await new controllers.userController(em).getTotal()},
    ];
}
