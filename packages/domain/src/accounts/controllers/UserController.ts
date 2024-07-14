import {EntityManager} from "@mikro-orm/core";
import {User} from "../entities";

export class UserController {
    public em;

    public constructor(em: EntityManager) {
        this.em = em.getRepository(User);
    }

    async getTotal() {
        return this.em.count({});
    }

    async login(email: string) {
        const user =  await this.em.findOne({email});
        if (!user) throw new Error('user not found');
        return user;
    }

    async register(email: string) {
        const user =  await this.em.findOne({email});
        if (!user) throw new Error('user not found');
        return user;
    }
}