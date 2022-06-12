import React from 'react';

import { createUserDocumentFromAuth, signInWithGooglePopUp } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const res = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(res.user)
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
};

export default SignIn;