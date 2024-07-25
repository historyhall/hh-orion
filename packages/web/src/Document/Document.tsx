import * as Schema from 'hh-orion-schema';
import {useParams} from 'react-router-dom';
import { Flag, FlagNameValues, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import {Loading} from '../Layout';
import {BodyHeader} from '../Layout/layout/BodyHeader';
import {Tag} from '../types';
import {useFetch} from '../useFetch';
import {Tags} from './document/Tags';

export function Document() {
	const {documentId} = useParams<{documentId: string}>();
	const {data, loading} = useFetch<Schema.documents.document.getById.response, Schema.documents.document.getById.params>(
		Schema.documents.document.getById.route,
		{id: documentId || ''},
	);

	if (loading) return <Loading />;

	function getAuthorName(author: {firstName?: string; lastName?: string; organization?: string}) {
		if (author?.firstName) {
			let name = author.firstName;
			if (author?.lastName) name += ` ${author.lastName}`;
			if (author?.organization) name += ` (${author.organization})`;
			return name;
		}
		return author?.organization;
	}

	const authors =
		data?.authors?.map(author => {
			return {id: author.id, text: getAuthorName(author), icon: 'user'};
		}) || [];

	const tags: Tag[] = [
		...authors,
		{id: '1', text: `Created at: ${data?.createdAt}`, icon: 'calendar alternate'},
		{id: '2', text: `Bytes: ${data?.bytes}`, icon: 'disk'},
	] as Tag[];

	return (
		<>
			<BodyHeader header={{name: data?.name || '', icon: 'file alternate'}} />
			<Tags tags={tags} />
			<Flag name={data?.location.country.code as FlagNameValues} style={{float: 'right'}} />
			<Grid padded>
				<GridRow>
					<GridColumn>
						<p dangerouslySetInnerHTML={{__html: data?.content || ''}} />
					</GridColumn>
				</GridRow>
			</Grid>
		</>
	);
}
