import {Header, List, ListItem} from 'semantic-ui-react';

export function About() {
	return (
		<>
			<p>History Hall is an advanced research platform designed for Historians, Professors, and Archaeologists.</p>
			<p>History Hall was founded by Explorer Shayne Thiessen in June 2024</p>
			<Header size="medium" content="Our Services" />
			<List>
				<ListItem
					header="Document Preservation"
					content="Digital storage of documents means that they are stored forever and will not deteriorate or get damaged!"
				/>
				<ListItem
					header="Document Catagorization"
					content="Documents are categorized by geo location and timeframe, allowing users to easiliy search and discover what they are looking for."
				/>
			</List>
		</>
	);
}
