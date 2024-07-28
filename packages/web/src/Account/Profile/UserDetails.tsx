import * as Schema from 'hh-orion-schema';
import {Card, CardContent, CardHeader, CardMeta, Image} from 'semantic-ui-react';
import {Loading} from '../../Layout';
import {formatDate} from '../../lib/formatDate';
import {useFetch} from '../../useFetch';
import user from './user.png';

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
