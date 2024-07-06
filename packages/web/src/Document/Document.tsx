import Schema from "hh-orion-schema/dist";
import {useParams} from "react-router-dom";
import {BodyHeader, Loading} from "../Layout";
import {Tags} from "../Layout/Tags";
import {Tag} from "../types";
import {useFetch} from "../useFetch";

export function Document() {
    const {documentId} = useParams<{documentId: string}>()
    const {data, loading} = useFetch<{authors: {id: string, firstName: string, lastName: string, organization: string}[], name: string, version: number, createdAt: string, bytes: number, storagePath: string, filename: string}>(Schema.Documents.Document.routes.getById, [documentId || '']);

    if(loading) return <Loading />
    console.log(data?.authors);

    function getAuthorName(author: {firstName: string, lastName: string, organization: string}) {
        if(author.firstName) {
            let name = author.firstName;
            if(author.lastName) name += ` ${author.lastName}`
            if(author.organization) name += ` (${author.organization})`
            return name;
        }
        return author.organization;
    }

    const authors = data?.authors?.map(author => {
        return {id: author.id, text: getAuthorName(author), icon: 'user'};
    }) || [];

    const tags: Tag[] = [
        ...authors,
        {id: '1', text: `Created at: ${data?.createdAt}`, icon: 'calendar alternate'},
        {id: '2', text: `Bytes: ${data?.bytes}`, icon: 'disk'}
    ] as Tag[];

    return (
        <>
            <BodyHeader header={{name: data?.name || '', icon: 'file alternate'}}/>
            <Tags tags={tags}/>
        </>
    );
}