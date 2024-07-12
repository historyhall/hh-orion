export namespace Search {
    type QueryResponse = {
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
            hits: {
                _index: string,
                _type: string,
                _id: string,
                _score: number,
                _source: {
                    id: string;
                    version: number;
                    createdAt: string;
                    name: string;
                    authors: String;
                },
                highlight?: {
                    content: string[]
                }
            }[]
        }
    }

    export namespace IndexDocuments {
        export type Response = boolean;
        export const route = 'search/index-documents';
    }

    export namespace Query {
        export type Response = QueryResponse;
        export const route = 'search/query';
    }
}