import {useState} from "react";
import {KeyboardEvent} from "react";
import {useNavigate} from "react-router-dom";
import {Icon, Input} from "semantic-ui-react";

export function Searchbar() {
    const navigate = useNavigate();

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
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='Search...'
            fluid
            icon={<Icon name="search" link circular onClick={onSearchClick}/>}
            onKeyPress={onSearchKeyChange}
        />
    )
}