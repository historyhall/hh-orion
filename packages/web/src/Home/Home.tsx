import {Grid, GridColumn, GridRow, Header, Icon, Input} from "semantic-ui-react";
import {Statistics} from "./components/Statistics";
import {useNavigate} from 'react-router-dom';
import {KeyboardEvent, useState} from "react";

export function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    function onSearchClick() {
        if(searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
    }
    function onSearchKeyChange(event: KeyboardEvent<HTMLInputElement>) {
        if(event.code === 'Enter' && searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
    }

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
                    <Input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder='Search...' fluid icon={<Icon name="search" link circular onClick={onSearchClick}/>} onKeyPress={onSearchKeyChange} />
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