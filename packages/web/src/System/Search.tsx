import {Grid} from "semantic-ui-react";
import {SearchResults} from "./search/SearchResults";
import {Searchbar} from "./search/Searchbar";

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