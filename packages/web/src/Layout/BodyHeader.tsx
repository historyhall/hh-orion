import {Header as SemanticHeader, HeaderContent, Icon} from "semantic-ui-react";
import {Header} from "../types";

interface Props {
    header: Header;
}
export function BodyHeader({header}: Props) {
    return (
        <SemanticHeader size="medium">
            <Icon name={header.icon} />
            <HeaderContent>{header.name}</HeaderContent>
        </SemanticHeader>
    )
}