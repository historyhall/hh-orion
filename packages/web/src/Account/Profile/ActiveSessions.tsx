import * as Schema from 'hh-orion-schema';
import Cookies from 'js-cookie';
import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import {
	Button,
	Header as SemanticHeader,
	HeaderContent,
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow,
} from 'semantic-ui-react';
import {Loading} from '../../Layout';
import {useFetch} from '../../useFetch';
import {useMutation} from '../../useMutation';

export function ActiveSessions() {
	const [sessions, setSessions] = useState<Schema.accounts.session.getByActiveUserId.response>();
	const {data, loading} = useFetch<Schema.accounts.session.getByActiveUserId.response, Schema.accounts.session.getByActiveUserId.params>(
		Schema.accounts.session.getByActiveUserId.route,
	);
	const {call} = useMutation<Schema.accounts.session.deleteById.response, Schema.accounts.session.deleteById.params>(
		Schema.accounts.session.deleteById.route,
	);

	useEffect(() => {
		if (data && !sessions) {
			setSessions(data.sort((a, b) => new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime()));
		}
	}, [data, sessions]);

	if (loading) return <Loading />;

	return (
		<>
			<SemanticHeader size="medium">
				<HeaderContent>Active Sessions</HeaderContent>
			</SemanticHeader>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderCell>Expiry Date</TableHeaderCell>
						<TableHeaderCell>IP Address</TableHeaderCell>
						<TableHeaderCell>Agent</TableHeaderCell>
						<TableHeaderCell />
					</TableRow>
				</TableHeader>
				<TableBody>
					{sessions?.map(session => {
						return (
							<TableRow key={session.id} positive={session.token === Cookies.get('hh_token')}>
								<TableCell>{session.expiryDate.toString()}</TableCell>
								<TableCell>{session.ipAddress}</TableCell>
								<TableCell>{session.agent}</TableCell>
								<TableCell>
									<Button
										icon="sign out"
										color="red"
										content="Log Out"
										disabled={session.token === Cookies.get('hh_token')}
										onClick={() => {
											call({id: session.id}, () => {
												let updateSessions: Schema.accounts.session.getByActiveUserId.response = [];
												sessions.forEach(s => {
													if (session.id !== s.id) {
														updateSessions.push(s);
													}
												});
												setSessions(updateSessions);
												toast.success('This session was logged out.');
											}).catch(error => toast.error(error));
										}}
									/>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</>
	);
}
