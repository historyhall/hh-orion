import {Button, Icon, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from 'semantic-ui-react';

export function SupportPlans() {
	return (
		<Table definition celled>
			<TableHeader>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>Public</TableHeaderCell>
					<TableHeaderCell>Team</TableHeaderCell>
					<TableHeaderCell>Education</TableHeaderCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Cost</TableCell>
					<TableCell>Free</TableCell>
					<TableCell>Coming Soon</TableCell>
					<TableCell>Coming Soon</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Private Documents</TableCell>
					<TableCell>No</TableCell>
					<TableCell>
						<Icon color="green" name="check circle" />
						Yes
					</TableCell>
					<TableCell>
						<Icon color="green" name="check circle" />
						Yes
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell />
					<TableCell>
						<Button content="Subscribe Now" positive disabled />
					</TableCell>
					<TableCell>
						<Button content="Subscribe Now" positive disabled />
					</TableCell>
					<TableCell>
						<Button content="Subscribe Now" positive disabled />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
