import Schema from "hh-orion-schema/dist";
import {Link, useParams} from "react-router-dom";
import {Card, CardContent, Divider, Label, List} from "semantic-ui-react";
import {Loading} from "../../Layout";
import {useFetch} from "../../useFetch";



type DocumentEntity = {
    id: string;
    version: number;
    createdAt: string;
    name: string;
    bytes: number;
    storagePath: String;
    filename: String;
}

type Hit = {
    _index: string,
    _type: string,
    _id: string,
    _score: number,
    _source: DocumentEntity,
    highlight?: {
        content: string[]
    }
}

type SearchResult = {
    took: number,
    time_out: boolean,
    _shards: {
        total: number,
        successful: number,
        skipped: number,
        failed: number,
    }
    hits: {
        total: {
            value: 0,
            relation: string,
        }
        max_score: number | null,
        hits: Hit[]
    }
}

export function SearchResults() {
    const {searchTerm} = useParams<{searchTerm: string}>()
    const {data, loading} = useFetch<SearchResult>(Schema.System.Search.routes.query, [searchTerm || '']);

    if(loading) return <Loading />;

    return (
        <>
            {data?.hits.hits.map(searchResult => {
                return (
                    <Link to={`/document/${searchResult._source.id}`} key={searchResult._source.id} style={{width: '100%', padding: '8px'}}>
                        <Card fluid color='yellow'>
                            <CardContent>
                                <Card.Header>
                                    <List.Icon name="file alternate" size="large" verticalAlign="middle" />
                                    {searchResult._source.name}
                                </Card.Header>
                                <Divider />
                                {searchResult.highlight?.content.map((text, index) => {
                                    if(index < 3) {
                                        return (
                                            <p key={index} style={{color: 'black'}} dangerouslySetInnerHTML={{__html: text}}/>
                                        );
                                    }
                                })}
                                <Divider/>
                                <Label size="small" color="yellow">
                                {searchResult._source.createdAt}
                                </Label>
                                <Label size="small" color="yellow">
                                    {searchResult._source.bytes}
                                </Label>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
            {data?.hits.hits.length === 0 && <div>No results found...</div>}
            {data?.hits && data.hits.total.value > 0 && <div>Displaying {data?.hits.hits.length} of {data?.hits.total.value} results.</div>}
        </>
    )
}
