import {Label} from 'semantic-ui-react';
import {Tag} from '../../types';

interface Props {
	tags: Tag[];
}

export function Tags({tags}: Props) {
	return (
		<>
			{tags.map(tag => (
				<Label icon={tag.icon} key={tag.id} content={tag.text} />
			))}
		</>
	);
}
