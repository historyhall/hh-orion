import * as Schema from "hh-orion-schema"
import {
    Button,
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
import {useMutation} from "../../useMutation";
import {toast} from "react-toastify";
import Cookies from "js-cookie";
import {useEffect, useState} from "react";

export function ActiveSessions() {
    const {data, loading} = useFetch<Schema.accounts.session.getByUserId.response, Schema.accounts.session.getByUserId.params>(Schema.accounts.session.getByUserId.route);
    const {call} = useMutation<Schema.accounts.session.deleteById.response, Schema.accounts.session.deleteById.params>(Schema.accounts.session.deleteById.route)
    const [sessions, setSessions] = useState<Schema.accounts.session.getByUserId.response>();

    useEffect(() => {
        if(data && !sessions) {
            setSessions(data.sort((a, b) => new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime()));
        }
    }, [data]);

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
                        <TableHeaderCell>Agent</TableHeaderCell>
                        <TableHeaderCell />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sessions?.map(session => {
                        return (
                            <TableRow key={session.id} positive={session.token === Cookies.get('hh_token')}>
                                <TableCell>
                                    {session.expiryDate.toString()}
                                </TableCell>
                                <TableCell>
                                    {session.ipAddress}
                                </TableCell>
                                <TableCell>
                                    {session.agent}
                                </TableCell>
                                <TableCell>
                                    <Button icon="sign out" color="red" content="Log Out" disabled={session.token === Cookies.get('hh_token')} onClick={() => {
                                        call({id: session.id}).then(() => {
                                            let updateSessions: Schema.accounts.session.getByUserId.response = [];
                                            sessions.forEach(s => {
                                                if (session.id !== s.id) {
                                                    updateSessions.push(s);
                                                }
                                            })
                                            setSessions(updateSessions);
                                            toast.success('This session was logged out.');
                                        }).catch(error => toast.error(error));
                                    }}/>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    );
}