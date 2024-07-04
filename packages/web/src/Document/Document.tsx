import {schema} from "hh-orion-schema/dist";
import {useParams} from "react-router-dom";
import {BodyHeader, Loading} from "../Layout";
import {useFetch} from "../useFetch";
import {Tags} from "../Layout/Tags";
import {Tag} from "../types";

export function Document() {
    const {documentId} = useParams<{documentId: string}>()
    const {data, loading} = useFetch<{authors: {id: string, firstName: string, secondName: string, organization: string}[], name: string, version: number, createdAt: string, bytes: number, storagePath: string, filename: string}>(schema.documents.document.getById.route, [documentId || '']);

    if(loading) return <Loading />

    function getAuthorName(author: {firstName: string, secondName: string, organization: string}) {
        if(author.firstName) {
            let name = author.firstName;
            if(author.secondName) name += ` ${author.secondName}`
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