import {Grid, GridColumn, GridRow} from "semantic-ui-react";
import {Statistics} from "./components/Statistics";

export function Home() {
    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    <p>Welcome to History Hall, your virtual walk through history!</p>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn>
                    <Statistics />
                </GridColumn>
            </GridRow>
        </Grid>
    );
}