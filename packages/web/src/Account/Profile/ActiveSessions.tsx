import * as Schema from "hh-orion-schema"
import {
    Header as SemanticHeader,
    HeaderContent,
    Table,
    TableBody, TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow
} from "semantic-ui-react";
import {Loading} from "../../Layout";
import {useFetch} from "../../useFetch";

export function ActiveSessions() {
    const {data, loading} = useFetch<Schema.accounts.session.getByUserId.response, Schema.accounts.session.getByUserId.params>(Schema.accounts.session.getByUserId.route);
    if (loading) return <Loading />

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
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map(session => {
                        return (
                            <TableRow key={session.id}>
                                <TableCell>
                                    {session.expiryDate.toString()}
                                </TableCell>
                                <TableCell>
                                    {session.ipAddress}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    );
}