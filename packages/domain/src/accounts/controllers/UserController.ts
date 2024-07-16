import {EntityManager} from "@mikro-orm/core";
import {compare} from "bcrypt";
import {Schema} from "hh-orion-schema/dist";
import {passwordHash} from "../../lib/passwordHash";
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
        const existingUser =  await this.em.findOne({email: data.email});
        if (!existingUser) throw new Error('A user with that email could not be found.');

        const compareResult = await compare(data.password, existingUser.password);

        if(!compareResult)  throw new Error('The password was incorrect.');

        return existingUser;
    }

    async register(data: Schema.accounts.user.register.params) {
        const existingUser =  await this.em.findOne({email: data.email});
        if (existingUser) throw new Error('A user already exists with that email.');

        if(data.password1 !== data.password2) throw new Error('The provided passwords do not match');

        const hashedPassword = await passwordHash(data.password1);

        const user = new User({email: data.email, password: hashedPassword, firstName: data.firstName, lastName: data.lastName});

        await this.em.insert(user);
        return user;
    }
}