import Schema from "hh-orion-schema/dist";
import {useParams} from "react-router-dom";
import {Button} from "semantic-ui-react";
import {Loading} from "../Layout";
import {environment} from "../environment";
import {useFetch} from "../useFetch";

export function DocumentSidebar() {
    const {documentId} = useParams<{documentId: string}>()
    const {data, loading} = useFetch<Schema.documents.document.getById.response>(Schema.documents.document.getById.route, [documentId || '']);

    if(loading) return <Loading />

    return (
        <Button fluid icon="download" content="Download Source Document" size="small" onClick={() => window.location.assign(`${environment.serverURL}/content${data?.storagePath}${data?.filename}`)} />
    )
}