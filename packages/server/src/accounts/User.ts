import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function User(em: EntityManager): Action[] {
    return [
        {route: Schema.accounts.user.routes.login, action: async data => await new controllers.userController(em).login(data)},
        {route: Schema.accounts.user.routes.register, action: async data => await new controllers.userController(em).register(data)},
        {route: Schema.accounts.user.routes.getAll, action: async () => await new controllers.userController(em).getAll()},
        {route: Schema.accounts.user.routes.getTotal, action: async () => await new controllers.userController(em).getTotal()},
    ];
}
