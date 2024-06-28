import {useFetch} from "../server";
import {Loading} from "../Layout";
import {Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "semantic-ui-react";

export function Migrations() {
    const {data, loading} = useFetch<{id: string, name: string, index: number, date: Date, success: boolean}[]>('migrations/get-all');
    if(loading) return <Loading />

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Index</TableHeaderCell>
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
                                {migration.index}
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