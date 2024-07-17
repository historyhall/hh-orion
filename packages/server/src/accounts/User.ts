import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Schema} from "hh-orion-schema/dist";
import {Action} from "../types";

export function User(em: EntityManager, tokenSecret: string): Action[] {
    return [
        {
            route: Schema.accounts.user.login.route,
            action: async (data: Schema.accounts.user.login.params): Promise<Schema.accounts.user.login.response> => await new controllers.userController(em, tokenSecret).login(data)},
        {
            route: Schema.accounts.user.register.route,
            action: async (data: Schema.accounts.user.register.params): Promise<Schema.accounts.user.register.response> => await new controllers.userController(em, tokenSecret).register(data)},
        {
            route: Schema.accounts.user.getTotal.route,
            action: async (): Promise<Schema.accounts.user.getTotal.response> => await new controllers.userController(em, tokenSecret).getTotal()},
    ];
}
