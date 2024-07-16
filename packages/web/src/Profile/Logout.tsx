import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Cookies from "js-cookie";

export function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        Cookies.remove('hh_token');
        toast.success('You have been logged out!');
        navigate('/');
    })

    return <Fragment />;
}