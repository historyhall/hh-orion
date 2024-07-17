import {Schema} from "hh-orion-schema/dist";
import {toast} from "react-toastify";
import {Button} from "semantic-ui-react";
import {useMutation} from "../useMutation";

export function SearchStatusSidebar() {
    const {call} = useMutation<Schema.system.search.indexDocuments.response, Schema.system.search.indexDocuments.params>(Schema.system.search.indexDocuments.route);

    return (
        <Button fluid icon="search plus" content="Recreate index" size="small" onClick={() => call(undefined, () => toast.success('Indexing has started'))} />
    )
}