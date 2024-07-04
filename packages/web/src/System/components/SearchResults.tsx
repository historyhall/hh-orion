import {schema} from "hh-orion-schema/dist";
import {Link, useParams} from "react-router-dom";
import {Card, CardContent, Divider, Label, List} from "semantic-ui-react";
import {Loading} from "../../Layout";
import {useFetch} from "../../useFetch";

type SearchResultsEntity = {
    id: string;
    version: number;
    createdAt: string;
    name: string;
    bytes: number;
    storagePath: String;
    filename: String;
}

export function SearchResults() {
    const {searchTerm} = useParams<{searchTerm: string}>()
    const {data, loading} = useFetch<SearchResultsEntity[]>(schema.documents.document.getNameLike.route, [searchTerm || '']);

    if(loading) return <Loading />;

    return (
        <>
            {data?.length === 0 && <p>No results found...</p>}
            {data?.map(searchResult => {
                return (
                    <Link to={`/document/${searchResult.id}`} key={searchResult.id} style={{width: '100%', padding: '8px'}}>
                        <Card fluid color='yellow'>
                            <CardContent>
                                <Card.Header>
                                    <List.Icon name="file alternate" size="large" verticalAlign="middle" />
                                    {searchResult.name}
                                </Card.Header>
                                <Divider />
                                <Label size="small" color="yellow">
                                    {searchResult.createdAt}
                                </Label>
                                <Label size="small" color="yellow">
                                    {searchResult.bytes}
                                </Label>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
        </>
    )
}