import {Grid, GridColumn, GridRow, Header} from "semantic-ui-react";
import {Searchbar} from "../System/search/Searchbar";
import {Statistics} from "./home/Statistics";

export function Home() {

    return (
        <Grid>
            <GridRow>
                <GridColumn>
                    <Header content="Welcome to History Hall" />
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn>
                    <p>We are an advanced research database and virtual museum. Start searching below to explore our virtual halls.</p>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn>
                    <Header content="Search our Collection" />
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn>
                    <Searchbar />
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn>
                    <Header content="Current Statistics" />
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