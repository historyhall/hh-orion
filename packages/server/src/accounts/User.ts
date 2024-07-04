import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {schema} from "hh-orion-schema/dist";
import {Action} from "../types";

export function User(em: EntityManager): Action[] {
    return [
        {route: schema.accounts.user.login.route, action: async data => await new controllers.userController(em).login(data)},
        {route: schema.accounts.user.register.route, action: async data => await new controllers.userController(em).register(data)},
        {route: schema.accounts.user.getAll.route, action: async () => await new controllers.userController(em).getAll()},
        {route: schema.accounts.user.getTotal.route, action: async () => await new controllers.userController(em).getTotal()},
    ];
}
