import {gql, useQuery} from "@apollo/client";

const HELLO_QUERY = gql`
    query getApiVersion {
        apiVersion
    }
`;


export function Home() {
    const { data, loading, error } = useQuery(HELLO_QUERY);

    return <>Home, Server Version: {data?.apiVersion}</>;
}