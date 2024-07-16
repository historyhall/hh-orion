import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {Fragment, useEffect} from "react";

export function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        document.cookie = `hh_token=;SameSite=Strict`
        toast.success('You have been logged out!');
        navigate('/');
    })

    return <Fragment />;
}