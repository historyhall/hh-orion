import {Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "semantic-ui-react";
import {Loading} from "../Layout";
import {useFetch} from "../server";

export function Migrations() {
    const {data, loading} = useFetch<{id: string, name: string, date: Date, success: boolean}[]>('migrations/get-all');
    if(loading) return <Loading />

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Date</TableHeaderCell>
                    <TableHeaderCell>Success</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map(migration => {
                    return (
                        <TableRow key={migration.id}>
                            <TableCell>
                                {migration.name}
                            </TableCell>
                            <TableCell>
                                {migration.date.toString()}
                            </TableCell>
                            <TableCell>
                                {migration.success.toString()}
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
}