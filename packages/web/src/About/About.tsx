import {useEffect, useState} from "react";

export function About() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5001/user/get-all')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return <>About: {JSON.stringify(data)}</>;
}