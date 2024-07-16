import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        document.cookie = `hh_token=`
        navigate('/');
        toast.success('You have been logged out!');
    })

    return <p>You are being logged out...</p>;
}