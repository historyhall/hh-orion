import * as Schema from "hh-orion-schema/dist";
import {useEffect} from "react";
import {toast} from "react-toastify";
import {Button} from "semantic-ui-react";
import {useMutation} from "../useMutation";

export function SearchStatusSidebar() {
    const {data, call} = useMutation<boolean>(Schema.system.search.indexDocuments.route);

    useEffect(() => {
        if(data) {
            toast.success('Indexing has started');
        }
    }, [data])

    return (
        <Button fluid icon="search plus" content="Recreate index" size="small" onClick={() => call([''])} disabled={data} />
    )
}