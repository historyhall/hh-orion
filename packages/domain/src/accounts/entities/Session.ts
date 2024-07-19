import {Entity, ManyToOne, PrimaryKey, Property, Unique} from '@mikro-orm/core';
import debug from 'debug';
import {v4} from 'uuid';
import {User} from "./User";

const d = debug('hh.domain.accounts.entities.Session');

export type SessionEntityConstructor = {
    expiryDate: Date;
    user: User;
    token: string;
    ipAddress: string;
    agent: string;
};

@Entity()
export class Session {
    @PrimaryKey({type: 'uuid'})
    id = v4();

    @Property({type: 'datetime'})
    expiryDate = new Date();

    @ManyToOne('User')
    user: User;

    @Property({type: 'text'})
    @Unique()
    token: string;

    @Property({type: 'text'})
    ipAddress: string;

    @Property({type: 'text'})
    agent: string;

    constructor({expiryDate, user, token, ipAddress, agent}: SessionEntityConstructor) {
        d('Domain: Create New User');
        this.expiryDate = expiryDate;
        this.user = user;
        this.token = token;
        this.ipAddress = ipAddress;
        this.agent = agent;
    }
}
