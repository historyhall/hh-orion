import {EntityManager} from "@mikro-orm/core";
import {compare} from "bcrypt";
import * as Schema from "hh-orion-schema";
import {sign} from "jsonwebtoken";
import {passwordHash} from "../../lib/passwordHash";
import {TokenConstructor, UserData} from "../../types";
import {Session, User} from "../entities";

export class UserController {
    public userRepo;
    public sessionRepo;
    public tokenSecret;
    public userData;

    public constructor(em: EntityManager, userData: UserData, tokenSecret: string) {
        this.sessionRepo = em.getRepository(Session);
        this.userRepo = em.getRepository(User);
        this.tokenSecret = tokenSecret;
        this.userData = userData;
    }

    async getTotal() {
        return this.userRepo.count({});
    }

    async login(data: Schema.accounts.user.login.params) {
        const user =  await this.userRepo.findOne({email: data.email.toLowerCase()});
        if (!user) throw new Error('A user with that email could not be found.');

        const compareResult = await compare(data.password, user.password);

        if(!compareResult)  throw new Error('The password was incorrect.');

        const currentTime = new Date();
        // Milliseconds in a day, multiplied by 7 days.
        const expiryDate = new Date(currentTime.getTime() + (86400000 * 60));
        const secondsUntilExpired = (expiryDate.getTime() - currentTime.getTime()) / 1000;

        const payload: TokenConstructor = {id: user.id, email: user.email};
        const token = sign(payload, this.tokenSecret, {expiresIn: secondsUntilExpired});

        const session = new Session({user, expiryDate, token, ipAddress: this.userData.ipAddress, agent: this.userData.agent})
        await this.sessionRepo.insert(session);

        return token;
    }

    async logout() {
        const session = await this.sessionRepo.findOne({token: this.userData.token});
        if(!session) throw new Error('Session not found.');

        await this.sessionRepo.nativeDelete({id: session.id});

        return true;
    }

    async register(data: Schema.accounts.user.register.params) {
        const existingUser =  await this.userRepo.findOne({email: data.email});
        if (existingUser) throw new Error('A user already exists with that email.');

        if(data.password1 !== data.password2) throw new Error('The provided passwords do not match');

        const hashedPassword = await passwordHash(data.password1);

        const user = new User({email: data.email.toLowerCase(), password: hashedPassword, firstName: data.firstName, lastName: data.lastName});

        await this.userRepo.insert(user);
        return true;
    }
}