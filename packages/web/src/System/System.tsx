import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardMeta, Icon} from "semantic-ui-react";
import pages from "./index";

export function System() {
    return (
        <Card>
            <CardContent>
                <CardHeader>
                    <Link to={pages.systemMigrations.path}>
                        <Icon name="database"/>
                        Migrations
                    </Link>
                </CardHeader>
            </CardContent>
            <CardContent>
                <CardMeta>View current migration status</CardMeta>
            </CardContent>
        </Card>
    );
}