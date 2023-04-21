import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyC5kdX3TUStnT4qYXtFtF2ijWK1RkTFPVg",
    authDomain: "clone-facebook-8aeba.firebaseapp.com",
    projectId: "clone-facebook-8aeba",
    storageBucket: "clone-facebook-8aeba.appspot.com",
    messagingSenderId: "380030812338",
    appId: "1:380030812338:web:2f776d7c3b0ae801cd89ab",
    measurementId: "G-MZ392XMFM4"
  });



const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export{db, auth, storage, functions};


/* 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseApp);
const analytics = getAnalytics(app);
*/