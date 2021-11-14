import React from 'react'
import { Container, Form, Icon, FormContent, FormInput, FormLabel, FormWrap,FormH1, FormButton, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">AJX</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your Account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>   
        </>
    )
}

export default SignIn
