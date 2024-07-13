import {AggregationsAggregate, SearchResponse} from "@elastic/elasticsearch/lib/api/types"

type QueryType = {
    id: string;
    version: number;
    createdAt: string;
    name: string;
    authors: String;
}

export type response =  SearchResponse<QueryType, Record<string, AggregationsAggregate>>;
export const route = 'search/query';