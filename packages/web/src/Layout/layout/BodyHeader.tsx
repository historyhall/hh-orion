import {Header as SemanticHeader, HeaderContent, Icon, HeaderSubheader} from 'semantic-ui-react';
import {Header} from '../../types';

interface Props {
	header: Header;
}

export function BodyHeader({header}: Props) {
	return (
		<SemanticHeader size="medium">
			<Icon name={header.icon} />
			<HeaderContent>{header.name}</HeaderContent>
			{header.description && <HeaderSubheader>{header.description}</HeaderSubheader>}
		</SemanticHeader>
	);
}
