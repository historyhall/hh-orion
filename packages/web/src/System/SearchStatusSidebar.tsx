import Schema from "hh-orion-schema/dist";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Button} from "semantic-ui-react";
import {useFetch} from "../useFetch";

export function SearchStatusSidebar() {
    const [waiting, setWaiting] = useState(true);
    const {data} = useFetch<boolean>(Schema.system.search.indexDocuments.route, [''], waiting);

    useEffect(() => {
        if(data) {
            toast.success('Indexing has started');
        }
    }, [data])

    return (
        <Button fluid icon="search plus" content="Recreate index" size="small" onClick={() => setWaiting(false)} disabled={data} />
    )
}