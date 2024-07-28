import * as Schema from 'hh-orion-schema';
import {Loading} from '../../Layout';
import {useFetch} from '../../useFetch';
import {Card, CardContent, CardHeader, CardMeta, Image} from 'semantic-ui-react';
import user from './user.png';
import {formatDate} from '../../lib/formatDate';

export function UserDetails() {
	const {data, loading} = useFetch<Schema.accounts.user.getByActiveUserId.response, Schema.accounts.user.getByActiveUserId.params>(
		Schema.accounts.user.getByActiveUserId.route,
	);

	if (loading) return <Loading />;

	return (
		<Card>
			<Image src={user} wrapped ui={false} />
			<CardContent>
				<CardHeader>
					{data?.firstName} {data?.lastName}
				</CardHeader>
				{data?.email}
				<CardMeta>
					<span className="date">Joined {formatDate(data?.createdAt)}</span>
				</CardMeta>
			</CardContent>
		</Card>
	);
}
