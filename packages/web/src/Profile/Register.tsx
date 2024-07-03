import {Button, Form, FormField} from "semantic-ui-react";

export function Register() {
    return (
        <Form>
            <FormField>
                <label>First Name</label>
                <input placeholder='Email' />
            </FormField>
            <FormField>
                <label>Last Name</label>
                <input placeholder='Email' />
            </FormField>
            <FormField>
                <label>Email</label>
                <input placeholder='Email' />
            </FormField>
            <FormField>
                <label>Password</label>
                <input placeholder='Password' />
            </FormField>
            <FormField>
                <label>Confirm Password</label>
                <input placeholder='Password' />
            </FormField>
            <Button type='submit'>Register</Button>
        </Form>
    );
}