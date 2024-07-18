import {EntityManager} from "@mikro-orm/core";
import {UserData} from "../../types";
import {Session} from "../entities";

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
}