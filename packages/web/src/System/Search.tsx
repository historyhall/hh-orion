import {Grid} from "semantic-ui-react";
import {SearchResults} from "./components/SearchResults";
import {Searchbar} from "./components/Searchbar";

export function Search() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Searchbar />
                    <SearchResults />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}