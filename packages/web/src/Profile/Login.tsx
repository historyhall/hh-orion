import {Button, Form, FormField} from "semantic-ui-react";

export function Login() {
    return (
        <Form>
            <FormField>
                <label>Email</label>
                <input placeholder='Email' />
            </FormField>
            <FormField>
                <label>Password</label>
                <input placeholder='Password' />
            </FormField>
            <Button type='submit'>Login</Button>
        </Form>
    );
}