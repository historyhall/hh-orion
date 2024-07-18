import {EntityManager} from "@mikro-orm/core";
import {compare} from "bcrypt";
import * as Schema from "hh-orion-schema";
import {sign} from "jsonwebtoken";
import {passwordHash} from "../../lib/passwordHash";
import {Session, User} from "../entities";

export class UserController {
    public em;
    public tokenSecret;

    public constructor(em: EntityManager, tokenSecret: string) {
        this.em = em.getRepository(User);
        this.tokenSecret = tokenSecret;
    }

    async getTotal() {
        return this.em.count({});
    }

    async login(data: Schema.accounts.user.login.params) {
        const user =  await this.em.findOne({email: data.email});
        if (!user) throw new Error('A user with that email could not be found.');

        const compareResult = await compare(data.password, user.password);

        if(!compareResult)  throw new Error('The password was incorrect.');

        const currentTime = new Date();
        // Milliseconds in a day, multiplied by 7 days.
        const expiryDate = new Date(currentTime.getTime() + (86400000 * 7));
        const secondsUntilExpired = (expiryDate.getTime() - currentTime.getTime()) / 1000;

        const token = sign({id: user.id, email: user.email}, this.tokenSecret, {expiresIn: secondsUntilExpired});

        const session = new Session({user, expiryDate, token, ipAddress: 'test' })
        await this.em.insert(session);

        return token;
    }

    async register(data: Schema.accounts.user.register.params) {
        const existingUser =  await this.em.findOne({email: data.email});
        if (existingUser) throw new Error('A user already exists with that email.');

        if(data.password1 !== data.password2) throw new Error('The provided passwords do not match');

        const hashedPassword = await passwordHash(data.password1);

        const user = new User({email: data.email, password: hashedPassword, firstName: data.firstName, lastName: data.lastName});

        await this.em.insert(user);
        return true;
    }
}