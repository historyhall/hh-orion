import * as Schema from 'hh-orion-schema/dist'
import { useState} from "react";
import {toast} from "react-toastify";
import {Button, Form, FormField, Input, Message} from "semantic-ui-react";
import {useMutation} from "../useMutation";

export function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const {data, call} = useMutation<Schema.accounts.user.login.response, Schema.accounts.user.login.params>(Schema.accounts.user.login.route);
    const [inputs, setInputs] = useState<{email?: string, password?: string}>({})

    function handleSubmit() {
        if(!inputs.email) {
            setErrorMessage("Please enter a valid email");
        } else if(!inputs.password) {
            setErrorMessage("Please enter a password");
        } else {
            setErrorMessage("");
            call({email: inputs.email, password: inputs.password}).then(() => {
                if(data) {
                    toast.success('You have successfully logged in!');
                } else {
                    toast.error('Your username or password was incorrect');
                }
            });
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