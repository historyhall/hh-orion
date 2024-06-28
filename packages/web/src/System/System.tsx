import {Card, CardContent, CardHeader, CardMeta, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

export function System() {
    return (
        <Card>
            <CardContent>
                <CardHeader>
                    <Link to={pages}>
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