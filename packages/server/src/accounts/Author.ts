import {Action} from "../types";
import {EntityManager} from "@mikro-orm/core";
import {controllers} from "hh-orion-domain/dist";

export function Author(em: EntityManager): Action[] {
    return [
        {path: '/authors/get-all', action: async () => await new controllers.authorController(em).getAll()},
        {path: '/authors/get-total', action: async () => await new controllers.authorController(em).getTotal()},
    ];
}
