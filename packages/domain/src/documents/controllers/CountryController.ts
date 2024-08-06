import {EntityManager} from '@mikro-orm/core';
import {UserData} from '../../types';
import {Country} from '../entities';

export class CountryController {
	public countryRepo;
	public userData;

	public constructor(em: EntityManager, userData: UserData) {
		this.countryRepo = em.getRepository(Country);
		this.userData = userData;
	}

	async getByName(name: string) {
		const country = await this.countryRepo.findOne({name});
		if (!country) throw new Error('A country with that name could not found.');
		return country;
	}
}
