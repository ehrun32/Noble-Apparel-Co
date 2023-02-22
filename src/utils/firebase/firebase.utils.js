import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import{
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClg-KMTwCReeWk4Y797jO6TUnWM0NEXPU",
    authDomain: "crown-clothing-db-c0237.firebaseapp.com",
    projectId: "crown-clothing-db-c0237",
    storageBucket: "crown-clothing-db-c0237.appspot.com",
    messagingSenderId: "692139742388",
    appId: "1:692139742388:web:45ea36814a05554127b3e1"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
 
 const googleProvider = new GoogleAuthProvider();

 googleProvider.setCustomParameters({
     prompt:"select_account",
 });

 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
 export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);
 
 export const db = getFirestore();

 export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
     if(!userAuth) return;
     const userDocRef = doc(db, 'users', userAuth.uid);

     console.log(userDocRef);

     const userSnapshot = await getDoc(userDocRef);
     console.log(userSnapshot);
     console.log(userSnapshot.exists());

     // if user data exist

     // if user data does not exist
     // create/ set the document with the data from userAuth in my Collection

     if(!userSnapshot.exists()) {
         const { displayName, email} = userAuth;
         const createdAt = new Date();

         try {
             await setDoc(userDocRef, {
                 displayName,
                 email,
                 createdAt,
                 ...additionalInformation,
             });
         } catch(error) {
             console.log('error creating the user', error.message);

         }
     }
     
     return userDocRef;
 };

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
     if(!email || !password) return

     return await createUserWithEmailAndPassword(auth, email, password);
 }
