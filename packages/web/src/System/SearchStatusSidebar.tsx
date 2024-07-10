import Schema from "hh-orion-schema/dist";
import {Button} from "semantic-ui-react";
import {useFetch} from "../useFetch";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export function SearchStatusSidebar() {
    const [waiting, setWaiting] = useState(true);
    const {data} = useFetch<boolean>(Schema.System.Search.routes.indexDocuments, [''], waiting);

    useEffect(() => {
        if(data) {
            toast.success('Indexing has started');
        }
    }, [data])

    return (
        <Button fluid icon="search plus" content="Recreate index" size="small" onClick={() => setWaiting(false)} disabled={data} />
    )
}