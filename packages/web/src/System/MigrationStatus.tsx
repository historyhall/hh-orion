import * as Schema from "hh-orion-schema";
import {Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "semantic-ui-react";
import {Loading} from "../Layout";
import {useFetch} from "../useFetch";

export function MigrationStatus() {
    const {data, loading} = useFetch<Schema.system.migration.getAll.response, Schema.system.migration.getAll.params>(Schema.system.migration.getAll.route);
    if (loading) return <Loading />

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
                        <TableRow key={migration.id} positive={migration.success} negative={!migration.success}>
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