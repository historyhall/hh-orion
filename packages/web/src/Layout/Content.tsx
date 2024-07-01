import {JSX} from "react";
import {Grid, GridColumn, GridRow} from "semantic-ui-react";
import {Header} from "../types";
import {BodyHeader} from "./BodyHeader";

interface Props {
    main: () => JSX.Element;
    sidebar?: () => JSX.Element;
    header?: Header;
}

export function Content(page: Props) {
    const contentWidth = page.sidebar ? 14 : 16
    return (
        <Grid padded stackable divided>
            <GridRow>
                <GridColumn width={contentWidth}>
                    {page.header && <BodyHeader header={page.header} />}
                    <page.main />
                </GridColumn>
                {page?.sidebar && <GridColumn width={2}>Sidebar</GridColumn>}
            </GridRow>
        </Grid>
    )
}