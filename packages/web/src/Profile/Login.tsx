import * as Schema from 'hh-orion-schema/dist'
import {useState} from "react";
import {toast} from "react-toastify";
import {Button, Form, FormField, Input, Message} from "semantic-ui-react";
import {useMutation} from "../useMutation";
import {useNavigate} from "react-router-dom";

export function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const {call} = useMutation<Schema.accounts.user.login.response, Schema.accounts.user.login.params>(Schema.accounts.user.login.route);
    const [inputs, setInputs] = useState<{email?: string, password?: string}>({email: '', password: ''})

    function handleSubmit() {
        if(!inputs.email) {
            setErrorMessage("Please enter a valid email");
        } else if(!inputs.password) {
            setErrorMessage("Please enter a password");
        } else {
            setErrorMessage("");
            call({email: inputs.email, password: inputs.password}, (data, status, error) => {
                if(status === 200) {
                    if(data) {
                        toast.success('You have successfully logged in!');
                        document.cookie = `hh_token=${data}`
                        navigate('/');
                    }
                } else {
                    toast.error(error);
                }
            })
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            {errorMessage && <Message header="Login Error" content={errorMessage} negative />}
            <FormField>
                <label>Email</label>
                <Input placeholder='Email' value={inputs.email} onChange={event => setInputs({...inputs, email: event.target.value})} />
            </FormField>
            <FormField>
                <label>Password</label>
                <Input placeholder='Password' type="password" value={inputs.password} onChange={event => setInputs({...inputs, password: event.target.value})}/>
            </FormField>
            <Button type='submit'>Login</Button>
        </Form>
    );
}