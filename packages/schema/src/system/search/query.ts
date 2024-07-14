import {AggregationsAggregate, SearchResponse} from "@elastic/elasticsearch/lib/api/types"
import {QueryType} from "./QueryType";

export type response =  SearchResponse<QueryType, Record<string, AggregationsAggregate>>;
export const route = 'search/query';