import react, { useState } from 'react'
import './App.css'
import {FaFacebook, FaSearch, FaAlignJustify} from "react-icons/fa";

function App() {

  return (
    <div className="App">
      <div className='header'>
        <div className='headerLeft'>
            <div className='logo-fb'>
              <FaFacebook/>
            </div>
            <div className='search-fb'>
            <FaSearch/>
            </div>
            <div className='menu-fb'>
            <FaAlignJustify/>
            </div>
        </div>
        <div className='headerRight'>
          <div className='plusBtn'>
            +
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

/* 
19:48

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5kdX3TUStnT4qYXtFtF2ijWK1RkTFPVg",
  authDomain: "clone-facebook-8aeba.firebaseapp.com",
  projectId: "clone-facebook-8aeba",
  storageBucket: "clone-facebook-8aeba.appspot.com",
  messagingSenderId: "380030812338",
  appId: "1:380030812338:web:2f776d7c3b0ae801cd89ab",
  measurementId: "G-MZ392XMFM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/