import React, { useState } from 'react';
import "./SignUp.scss"

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultValue = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultValue)
    const {displayName, email, password, confirmPassword} = formFields

    const resetFormFields = () => {
        setFormFields(defaultValue)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value })
        console.log(formFields)
    }

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }

        try {
            const res = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(res.user, { displayName })
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log(err)
            }
        }
    }

    return (
        <div className='signup-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label='Display Name'
                type='text'
                required
                onChange={handleChange}
                name='displayName'
                value={displayName}
                />

                <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
                />

                <FormInput
                label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
                />

                <FormInput
                label='Confirm Password'
                type='password'
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;