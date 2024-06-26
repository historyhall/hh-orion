import {useParams} from "react-router-dom";
import {BodyHeader, Loading} from "../Layout";
import {useFetch} from "../server";

export function Document() {
    const {documentId} = useParams<{documentId: string}>()
    const {data, loading} = useFetch<{name: string, version: number, createdAt: string, bytes: number, storagePath: string, filename: string}>('documents/get-by-id', [documentId || '']);

    if(loading) return <Loading />
    return (
        <>
            <BodyHeader header={{name: data?.name || '', icon: 'file alternate'}}/>
            <p>Created at: {data?.createdAt}</p>
            <p>Bytes: {data?.bytes}</p>
        </>
    );
}