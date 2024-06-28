import {Header} from "../types";
import {Header as SemanticHeader, HeaderContent, Icon} from "semantic-ui-react";

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