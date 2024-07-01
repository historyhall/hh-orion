import {Link, useParams} from "react-router-dom";
import {Card, CardContent, CardGroup, Divider, Label, List} from "semantic-ui-react";
import {Loading} from "../../Layout";
import {useFetch} from "../../server";

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
    const {data, loading} = useFetch<SearchResultsEntity[]>('documents/get-like-name', [searchTerm || '']);

    if(loading) return <Loading />;

    return (
        <>
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