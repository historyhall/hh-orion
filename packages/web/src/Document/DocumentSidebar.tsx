import {Button} from "semantic-ui-react";
import {useParams} from "react-router-dom";
import {useFetch} from "../useFetch";
import Schema from "hh-orion-schema/dist";
import {Loading} from "../Layout";
import {environment} from "../environment";

export function DocumentSidebar() {
    const {documentId} = useParams<{documentId: string}>()
    const {data, loading} = useFetch<{authors: {id: string, firstName: string, lastName: string, organization: string}[], name: string, version: number, createdAt: string, bytes: number, storagePath: string, filename: string, content: string}>(Schema.Documents.Document.routes.getById, [documentId || '']);

    if(loading) return <Loading />

    return (
        <Button fluid icon="download" content="Download Source Document" size="small" onClick={() => window.location.assign(`${environment.serverURL}/content${data?.storagePath}${data?.filename}`)} />
    )
}