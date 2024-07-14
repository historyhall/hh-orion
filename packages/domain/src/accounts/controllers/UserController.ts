import {EntityManager} from "@mikro-orm/core";
import * as Schema from "hh-orion-schema/dist";
import {User} from "../entities";

export class UserController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(User);
    }

    async getTotal() {
        return this.em.count({});
    }

    async login(data: Schema.accounts.user.login.params) {
        const user =  await this.em.findOne({email: data.email});
        if (!user) throw new Error('user not found');
        return user;
    }

    async register(data: Schema.accounts.user.register.params) {
        const user =  await this.em.findOne({email: data.email});
        if (!user) throw new Error('user not found');
        return user;
    }
}