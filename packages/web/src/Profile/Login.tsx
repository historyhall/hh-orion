import { useState} from "react";
import {Button, Form, FormField, Input, Message} from "semantic-ui-react";

export function Login() {
    const [errorMessage, setErrorMessage] = useState("");
    const [inputs, setInputs] = useState<{email?: string, password?: string}>({})

    function handleSubmit() {
        if(!inputs.email) {
            setErrorMessage("Please enter a valid email");
        } else if(!inputs.password) {
            setErrorMessage("Please enter a password");
        } else {
            setErrorMessage("");
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