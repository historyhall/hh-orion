import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain";
import * as Schema from "hh-orion-schema";
import {Action, UserData} from "../types";

export function Document(em: EntityManager): Action[] {
    return [
        {
            route: Schema.documents.document.getById.route,
            action: async (userData: UserData,data: Schema.documents.document.getById.params): Promise<Schema.documents.document.getById.response> => {
                const document = await new controllers.documentController(em, userData).getById(data)

                return {...document, authors: document.authors.toArray()};
        }},
        {
            route: Schema.documents.document.getTotal.route,
            action: async (userData: UserData): Promise<Schema.documents.document.getTotal.response> => await new controllers.documentController(em, userData).getTotal()
        },
    ];
}
