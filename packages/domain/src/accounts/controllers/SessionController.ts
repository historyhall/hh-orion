import {EntityManager} from "@mikro-orm/core";
import {UserData} from "../../types";
import {Session} from "../entities";
import * as Schema from "hh-orion-schema";

export class SessionController {
    public sessionRepo;
    public userData;

    public constructor(em: EntityManager, userData: UserData) {
        this.sessionRepo = em.getRepository(Session);
        this.userData = userData;
    }

    getByUserId() {
        if(!this.userData.userId) throw new Error('User is not logged in');

        return this.sessionRepo.find({user: this.userData.userId});
    }

    async deleteById(data: Schema.accounts.session.deleteById.params) {
        const session = await this.sessionRepo.find({id: data.id});
        if(!session) throw new Error('Session not found');

        await this.sessionRepo.nativeDelete(session);

        return true;
    }
}