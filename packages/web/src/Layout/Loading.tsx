import {Container, Icon} from 'semantic-ui-react';

export function Loading() {
	return (
		<Container textAlign="center" style={{paddingTop: 50}}>
			<Icon loading name="circle notched" size="big" color="grey" />
		</Container>
	);
}
