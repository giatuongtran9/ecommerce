import { initializeApp } from 'firebase/app'

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRc7R6SjX-VxgyQXrT-GFgCEY-etfMb20",
    authDomain: "ecommerce-db-c923a.firebaseapp.com",
    projectId: "ecommerce-db-c923a",
    storageBucket: "ecommerce-db-c923a.appspot.com",
    messagingSenderId: "474399353291",
    appId: "1:474399353291:web:4c3aacad44bd457f49ae4e"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    // if user not exist then add to the database
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (err) {
            console.log('error creating the user', err.message)
        }
    }

    // if user exist then return the doc ref
    return userDocRef
}