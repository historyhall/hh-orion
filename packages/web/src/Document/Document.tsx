import {useParams} from "react-router-dom";

export function Document() {
    const {documentId} = useParams<{documentId: string}>()
    console.log(documentId);
    return <p>Virtually walk through history</p>;
}