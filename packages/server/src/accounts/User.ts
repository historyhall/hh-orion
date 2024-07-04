import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Action} from "../types";

export function User(em: EntityManager): Action[] {
    return [
        {route: '/users/login', action: async data => await new controllers.userController(em).login(data)},
        {route: '/users/register', action: async data => await new controllers.userController(em).register(data)},
        {route: '/users/get-all', action: async () => await new controllers.userController(em).getAll()},
        {route: '/users/get-total', action: async () => await new controllers.userController(em).getTotal()},
    ];
}
