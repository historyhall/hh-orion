import {Grid, GridColumn, GridRow} from "semantic-ui-react";
import {Statistics} from "./home/Statistics";
import {Search} from "./home/Search";
import {Introduction} from "./home/Introduction";

export function Home() {

    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    <Introduction />
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn>
                    <Search />
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