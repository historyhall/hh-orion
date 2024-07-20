import {Link} from 'react-router-dom';
import {Button, Header} from 'semantic-ui-react';

export function Contribute() {
	return (
		<>
			<Header size="medium">Donate</Header>
			<p>We are a non profit, and our main source of revenue as we build our platform is donations.</p>
			<p>Donations go directly towards developing and expanding our software.</p>
			<Link to="https://www.paypal.com/donate/?hosted_button_id=PBT7UJNSAX9LY" target="_blank">
				<Button content="Donate" color="yellow" icon="gift" />
			</Link>
			<Header size="medium">Write Code</Header>
			<p>
				As a non profit, we believe that giving back to society is important. Therefore, we have decided to make our project open source!. This means
				that all our source code is publicly available. Not only can you use it for your own projects, but you can also contribute to it! Code
				contributions, bug reports, and feature requests are very much appreciated. To find out more, check out our repository on Github.
			</p>
			<Link to="https://github.com/historyhall/hh-orion" target="_blank">
				<Button content="Github" color="yellow" icon="github" />
			</Link>
			<Header size="medium">Submit Documents</Header>
			<p>Document submission has not yet been made public, but it will be soon!</p>
		</>
	);
}
