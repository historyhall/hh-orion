import {ActiveSessions} from './Profile/ActiveSessions';
import {UserDetails} from './Profile/UserDetails';

export function Profile() {
	return (
		<>
			<UserDetails />
			<ActiveSessions />
		</>
	);
}
