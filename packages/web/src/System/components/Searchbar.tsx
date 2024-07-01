import {useState} from "react";
import {KeyboardEvent} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Icon, Input} from "semantic-ui-react";

export function Searchbar() {
    const navigate = useNavigate();
    const {searchTerm: urlSearchTerm} = useParams<{searchTerm: string}>()

    const [searchTerm, setSearchTerm] = useState("");

    function onSearchClick() {
        if(searchTerm) {
            navigate(`/search/${encodeURIComponent(searchTerm)}`)
        }
    }
    function onSearchKeyChange(event: KeyboardEvent<HTMLInputElement>) {
        if(event.code === 'Enter' && searchTerm) {
            navigate(`/search/${encodeURIComponent(searchTerm)}`)
        }
    }
    return (
        <Input
            value={searchTerm || urlSearchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='Search...'
            fluid
            icon={<Icon name="search" link circular onClick={onSearchClick}/>}
            onKeyPress={onSearchKeyChange}
        />
    )
}