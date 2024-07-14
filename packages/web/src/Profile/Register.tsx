import {useState} from "react";
import {Button, Form, FormField, Input, Message} from "semantic-ui-react";
import {useMutation} from "../useMutation";
import * as Schema from 'hh-orion-schema/dist'
import {toast} from "react-toastify";

export function Register() {
    const [errorMessage, setErrorMessage] = useState("");
    const {data, call} = useMutation<Schema.accounts.user.register.response, Schema.accounts.user.register.params>(Schema.accounts.user.register.route);
    const [inputs, setInputs] = useState<{firstName?: string, lastName?: string, email?: string, password1?: string, password2?: string}>({})

    function handleSubmit() {
        if(!inputs.firstName) {
            setErrorMessage("Please enter your first name");
        } else if(!inputs.lastName) {
            setErrorMessage("Please enter your second name");
        } else if(!inputs.email) {
            setErrorMessage("Please enter a valid email");
        } else if(!inputs.password1) {
            setErrorMessage("Please enter a password");
        } else if(inputs.password1 !== inputs.password2) {
            setErrorMessage("Your passwords do not match");
        } else {
            setErrorMessage("");
            call({firstName: inputs.firstName, lastName: inputs.lastName, email: inputs.email, password1: inputs.password1, password2: inputs.password2}).then(() => {
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
                <label>First Name</label>
                <Input placeholder='First Name' value={inputs.firstName} onChange={event => setInputs({...inputs, firstName: event.target.value})} />
            </FormField>
            <FormField>
                <label>Last Name</label>
                <Input placeholder='Last Name' value={inputs.lastName} onChange={event => setInputs({...inputs, lastName: event.target.value})} />
            </FormField>
            <FormField>
                <label>Email</label>
                <Input placeholder='Email' value={inputs.email} onChange={event => setInputs({...inputs, email: event.target.value})} />
            </FormField>
            <FormField>
                <label>Password</label>
                <Input placeholder='Password' value={inputs.password1} onChange={event => setInputs({...inputs, password1: event.target.value})} />
            </FormField>
            <FormField>
                <label>Confirm Password</label>
                <Input placeholder='Confirm Password' value={inputs.password2} onChange={event => setInputs({...inputs, password2: event.target.value})} />
            </FormField>
            <Button type='submit' onClick={handleSubmit}>Register</Button>
        </Form>
    );
}