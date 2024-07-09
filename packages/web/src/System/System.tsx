import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardMeta, Icon} from "semantic-ui-react";
import pages from "./index";

export function System() {
    return (
        <>
            <Card>
                <CardContent>
                    <CardHeader>
                        <Link to={pages.migrationStatus.path} style={{color:"black"}}>
                            <Icon name="database"/>
                            Migrations
                        </Link>
                    </CardHeader>
                </CardContent>
                <CardContent>
                    <CardMeta>View current migration status</CardMeta>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <CardHeader>
                        <Link to={pages.searchStatus.path} style={{color:"black"}}>
                            <Icon name="searchengin"/>
                            Search Status
                        </Link>
                    </CardHeader>
                </CardContent>
                <CardContent>
                    <CardMeta>View current search status</CardMeta>
                </CardContent>
            </Card>
        </>
    );
}