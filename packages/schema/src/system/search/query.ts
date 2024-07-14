import {AggregationsAggregate, SearchResponse} from "@elastic/elasticsearch/lib/api/types"
import {QueryType} from "./QueryType";

export type response =  SearchResponse<QueryType, Record<string, AggregationsAggregate>>;
export type params = {query: string};
export const route = 'search/query';