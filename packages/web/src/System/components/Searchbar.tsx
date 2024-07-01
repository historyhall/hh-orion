import {Icon, Input} from "semantic-ui-react";
import {useState} from "react";
import {KeyboardEvent} from "react";
import {useNavigate} from "react-router-dom";

export function Searchbar() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    function onSearchClick() {
        if(searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
    }
    function onSearchKeyChange(event: KeyboardEvent<HTMLInputElement>) {
        if(event.code === 'Enter' && searchTerm) {
            navigate(`/search/${searchTerm}`)
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