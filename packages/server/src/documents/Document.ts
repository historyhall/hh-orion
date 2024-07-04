import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";
import {Action} from "../types";

export function Document(em: EntityManager): Action[] {
    return [
        {route: '/documents/get-all', action: async () => await new controllers.documentController(em).getAll()},
        {route: '/documents/get-by-id', action: async data => await new controllers.documentController(em).getById(data)},
        {route: '/documents/get-total', action: async () => await new controllers.documentController(em).getTotal()},
        {route: '/documents/get-like-name', action: async data => await new controllers.documentController(em).getNameLike(data)},
    ];
}
