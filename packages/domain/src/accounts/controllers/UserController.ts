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
        if (!user) throw new Error('A user with that email could not be found.');
        return user;
    }

    async register(data: Schema.accounts.user.register.params) {
        const existingUser =  await this.em.findOne({email: data.email});
        if (existingUser) throw new Error('A user already exists with that email.');

        if(data.password1 !== data.password2) throw new Error('The provided passwords do not match');

        const user = new User({email: data.email, password: data.password1, firstName: data.firstName, lastName: data.lastName});

        await this.em.insert(user);
        return user;
    }
}