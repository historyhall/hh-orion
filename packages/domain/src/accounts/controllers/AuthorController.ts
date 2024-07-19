import {Collection, EntityManager} from '@mikro-orm/core';
import {UserData} from '../../types';
import {Author} from '../entities';

export class AuthorController {
	public authorRepo;
	public userData;

	public constructor(em: EntityManager, userData: UserData) {
		this.authorRepo = em.getRepository(Author);
		this.userData = userData;
	}

	async getTotal() {
		return this.authorRepo.count({});
	}

	async generateAuthorsList(authors: Collection<Author, object>) {
		let authorList = '';
		(await authors.loadItems()).forEach(author => {
			let name = '';
			if (author.firstName) {
				name = author.firstName;
				if (author.lastName) name += ` ${author.lastName}`;
				if (author.organization) name += ` (${author.organization})`;
			} else {
				name = author.organization || '';
			}
			if (!authorList) {
				authorList = name;
			} else {
				authorList += `, ${authorList}`;
			}
		});
		return authorList;
	}
}
