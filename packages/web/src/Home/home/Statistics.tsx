import * as Schema from 'hh-orion-schema';
import {Grid, GridColumn, GridRow, Header, Icon, Statistic, StatisticLabel, StatisticValue} from 'semantic-ui-react';
import {Loading} from '../../Layout';
import {useFetch} from '../../useFetch';

export function Statistics() {
	const {data: documentData, loading: documentLoading} = useFetch<
		Schema.documents.document.getTotal.response,
		Schema.documents.document.getTotal.params
	>(Schema.documents.document.getTotal.route);
	const {data: authorData, loading: authorLoading} = useFetch<Schema.accounts.author.getTotal.response, Schema.accounts.author.getTotal.params>(
		Schema.accounts.author.getTotal.route,
	);
	const {data: userData, loading: userLoading} = useFetch<Schema.accounts.user.getTotal.response, Schema.accounts.user.getTotal.params>(
		Schema.accounts.user.getTotal.route,
	);

	if (documentLoading || authorLoading || userLoading) return <Loading />;

	return (
		<Grid stackable container>
			<GridRow columns={1}>
				<GridColumn>
					<Header content="Current Statistics" />
				</GridColumn>
			</GridRow>
			<GridRow columns={3}>
				<GridColumn textAlign="center">
					<Statistic>
						<StatisticValue>
							<Icon name="file alternate" />
							{documentData}
						</StatisticValue>
						<StatisticLabel>Documents</StatisticLabel>
					</Statistic>
				</GridColumn>
				<GridColumn textAlign="center">
					<Statistic>
						<StatisticValue>
							<Icon name="user" />
							{authorData}
						</StatisticValue>
						<StatisticLabel>Authors</StatisticLabel>
					</Statistic>
				</GridColumn>
				<GridColumn textAlign="center">
					<Statistic>
						<StatisticValue>
							<Icon name="user" />
							{userData}
						</StatisticValue>
						<StatisticLabel>Users</StatisticLabel>
					</Statistic>
				</GridColumn>
			</GridRow>
		</Grid>
	);
}
