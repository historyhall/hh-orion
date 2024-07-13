import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import * as Schema from "hh-orion-schema/dist";
import {Action} from "../types";

export function User(em: EntityManager): Action[] {
    return [
        {
            route: Schema.accounts.user.login.route,
            action: async (data): Promise<Schema.accounts.user.login.response> => await new controllers.userController(em).login(data)},
        {
            route: Schema.accounts.user.register.route,
            action: async (data): Promise<Schema.accounts.user.register.response> => await new controllers.userController(em).register(data)},
        {
            route: Schema.accounts.user.getTotal.route,
            action: async (): Promise<Schema.accounts.user.getTotal.response> => await new controllers.userController(em).getTotal()},
    ];
}
