import {useParams} from "react-router-dom";
import {BodyHeader, Loading} from "../Layout";
import {useFetch} from "../useFetch";
import {schema} from "hh-orion-schema/dist";

export function Document() {
    const {documentId} = useParams<{documentId: string}>()
    const {data, loading} = useFetch<{name: string, version: number, createdAt: string, bytes: number, storagePath: string, filename: string}>(schema.documents.document.getById.route, [documentId || '']);

    if(loading) return <Loading />
    return (
        <>
            <BodyHeader header={{name: data?.name || '', icon: 'file alternate'}}/>
            <p>Created at: {data?.createdAt}</p>
            <p>Bytes: {data?.bytes}</p>
        </>
    );
}