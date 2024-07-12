import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import * as Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function User(em: EntityManager): Action[] {
    return [
        {route: Schema.accounts.user.login.route, action: async data => await new controllers.userController(em).login(data)},
        {route: Schema.accounts.user.register.route, action: async data => await new controllers.userController(em).register(data)},
        {route: Schema.accounts.user.getAll.route, action: async () => await new controllers.userController(em).getAll()},
        {route: Schema.accounts.user.getTotal.route, action: async () => await new controllers.userController(em).getTotal()},
    ];
}
