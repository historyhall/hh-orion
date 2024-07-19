import {Grid, GridColumn, GridRow} from "semantic-ui-react";
import {Introduction} from "./home/Introduction";
import {Search} from "./home/Search";
import {Statistics} from "./home/Statistics";

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