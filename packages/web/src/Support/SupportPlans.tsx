import {Button, Icon, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from 'semantic-ui-react';
import {useIsMobile} from '../useIsMobile';

export function SupportPlans() {
	const isMobile = useIsMobile();

	return (
		<Table definition celled unstackable compact={isMobile ? 'very' : undefined}>
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
					<TableCell>
						<Icon color="yellow" name="warning circle" />
						Coming Soon
					</TableCell>
					<TableCell>
						<Icon color="yellow" name="warning circle" />
						Coming Soon
					</TableCell>
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
						<Button content="Subscribe" positive disabled size={isMobile ? 'tiny' : 'medium'} style={{padding: isMobile ? 6 : undefined}} />
					</TableCell>
					<TableCell>
						<Button content="Subscribe" positive disabled size={isMobile ? 'tiny' : 'medium'} style={{padding: isMobile ? 6 : undefined}} />
					</TableCell>
					<TableCell>
						<Button content="Subscribe" positive disabled size={isMobile ? 'tiny' : 'medium'} style={{padding: isMobile ? 6 : undefined}} />
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
