import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain";
import * as Schema from "hh-orion-schema";
import {Action, UserData} from "../types";

export function User(em: EntityManager, tokenSecret: string): Action[] {
    return [
        {
            route: Schema.accounts.user.login.route,
            action: async (userData: UserData, data: Schema.accounts.user.login.params): Promise<Schema.accounts.user.login.response> => await new controllers.userController(em, userData, tokenSecret).login(data)},
        {
            route: Schema.accounts.user.register.route,
            action: async (userData: UserData, data: Schema.accounts.user.register.params): Promise<Schema.accounts.user.register.response> => await new controllers.userController(em, userData, tokenSecret).register(data)},
        {
            route: Schema.accounts.user.getTotal.route,
            action: async (userData: UserData): Promise<Schema.accounts.user.getTotal.response> => await new controllers.userController(em, userData, tokenSecret).getTotal()},
    ];
}
