import * as Schema from 'hh-orion-schema';
import {Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from 'semantic-ui-react';
import {Loading} from '../Layout';
import {useFetch} from '../useFetch';

export function SearchStatus() {
	const {data, loading} = useFetch<Schema.system.search.indexStatistics.response, Schema.system.search.indexStatistics.params>(
		Schema.system.search.indexStatistics.route,
	);
	if (loading) return <Loading />;

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHeaderCell>Document Count</TableHeaderCell>
					<TableHeaderCell>Index Count</TableHeaderCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow
					positive={!!data?.documentCount && data.documentCount === data?.indexCount}
					negative={!!data?.documentCount && data.documentCount !== data?.indexCount}
				>
					<TableCell>{data?.documentCount}</TableCell>
					<TableCell>{data?.indexCount}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
