import React, { useState } from 'react';
import './SignIn.scss'
import Button from '../../components/Button/Button';
import FormInput from '../../components/FormInput/FormInput';

import { createUserDocumentFromAuth, signInWithGooglePopUp, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultValue = {
    email: '',
    password: '',
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultValue);
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultValue)
    }

    const signInWithGoogle = async () => {
        const res = await signInWithGooglePopUp()
        await createUserDocumentFromAuth(res.user)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({...formFields, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields()
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('incorrect password!')
                    break;

                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                
                default:
                    console.log(err)
            }
        }
    }

    return (
        <div className='signin-container'>
            <h1>Already have an account?</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput 
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;