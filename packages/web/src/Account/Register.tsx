import * as Schema from 'hh-orion-schema/dist'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {Button, Form, FormField, Input, Message} from "semantic-ui-react";
import {useMutation} from "../useMutation";

export function Register() {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const {call} = useMutation<Schema.accounts.user.register.response, Schema.accounts.user.register.params>(Schema.accounts.user.register.route);
    const [inputs, setInputs] = useState<{firstName?: string, lastName?: string, email?: string, password1?: string, password2?: string}>({firstName: '', lastName: '', email: '', password1: '', password2: ''})

    function handleSubmit() {
        const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        if(!inputs.firstName) {
            setErrorMessage("Please enter your first name");
        } else if(!inputs.lastName) {
            setErrorMessage("Please enter your second name");
        } else if(!inputs.email) {
            setErrorMessage("Please enter a valid email");
        } else if(!emailRegex.test(inputs.email)) {
            setErrorMessage("The email you entered is not valid.");
        }  else if(!inputs.password1) {
            setErrorMessage("Please enter a password");
        } else if(inputs.password1 !== inputs.password2) {
            setErrorMessage("Your passwords do not match");
        } else {
            setErrorMessage("");
            call({firstName: inputs.firstName, lastName: inputs.lastName, email: inputs.email, password1: inputs.password1, password2: inputs.password2}, (data, status, error) => {
                if(status === 200) {
                    if(data) {
                        toast.success('You have successfully registered an account!');
                        navigate('/profile/login');
                    }
                } else {
                    toast.error(error);
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
                <Input placeholder='Password' type="password" value={inputs.password1} onChange={event => setInputs({...inputs, password1: event.target.value})} />
            </FormField>
            <FormField>
                <label>Confirm Password</label>
                <Input placeholder='Confirm Password' type="password" value={inputs.password2} onChange={event => setInputs({...inputs, password2: event.target.value})} />
            </FormField>
            <Button type='submit'>Register</Button>
        </Form>
    );
}