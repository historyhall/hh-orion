import {useFetch} from "../server";
import {Loading} from "../Layout";

export function Migrations() {
    const {data, loading} = useFetch('migrations/get-all');
    if(loading) return <Loading />

    return <>Migrations {JSON.stringify(data)}</>;
}