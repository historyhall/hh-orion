import {Grid} from "semantic-ui-react";
import {Searchbar} from "./components/Searchbar";
import {SearchResults} from "./components/SearchResults";

export function Search() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Searchbar />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <SearchResults />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}