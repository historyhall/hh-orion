import * as Schema from 'hh-orion-schema';
import {Link, useParams} from 'react-router-dom';
import {Card, CardContent, Divider, Flag, FlagNameValues, Icon, Label} from 'semantic-ui-react';
import {Loading} from '../../Layout';
import {useFetch} from '../../useFetch';

export function SearchResults() {
	const {searchTerm} = useParams<{searchTerm: string}>();
	const {data, loading} = useFetch<Schema.system.search.query.response, Schema.system.search.query.params>(Schema.system.search.query.route, {
		query: searchTerm || '',
	});

	if (loading) return <Loading />;

	return (
		<>
			{data?.hits.hits.map(searchResult => {
				if (searchResult._source?.id) {
					return (
						<Link to={`/document/${searchResult._source.id}`} key={searchResult._source.id} style={{width: '100%', padding: '8px'}}>
							<Card fluid color="yellow">
								<CardContent>
									<Card.Header>
										<Icon name="file alternate" size="large" verticalAlign="middle" />
										{searchResult._source.name}
										<Flag name={searchResult._source.countryCode as FlagNameValues} style={{float: 'right'}} />
									</Card.Header>
									<Divider />
									{searchResult.highlight?.content.map((text, index) => {
										if (index < 3) {
											return <p key={index} style={{color: 'black'}} dangerouslySetInnerHTML={{__html: text}} />;
										}
										return null;
									})}
									<Divider />
									<Label size="small" color="yellow">
										{searchResult._source.createdAt}
									</Label>
									<Label size="small" color="yellow">
										{searchResult._source.authors}
									</Label>
								</CardContent>
							</Card>
						</Link>
					);
				}
				return null;
			})}
			{data?.hits.hits.length === 0 && <div>No results found...</div>}
		</>
	);
}
