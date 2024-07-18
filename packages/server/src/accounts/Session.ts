import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain";
import * as Schema from "hh-orion-schema";
import {Action, UserData} from "../types";

export function Session(em: EntityManager): Action[] {
    return [
        {
            route: Schema.accounts.user.login.route,
            action: async (userData: UserData): Promise<Schema.accounts.session.getByUserId.response> => {
                const sessions = await new controllers.sessionController(em, userData).getByUserId();

                // @ts-ignore
                return sessions.map(session => {
                    const authors = session.user.authors.toArray();
                    return {...session, user: {...session.user, authors}}
                });
            },
        },
    ];
}
