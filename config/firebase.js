// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZnYpagWbN56EJg4NLKci6MIF_fETMPN8",
  authDomain: "arora-24bf8.firebaseapp.com",
  projectId: "arora-24bf8",
  storageBucket: "arora-24bf8.appspot.com",
  messagingSenderId: "494332783117",
  appId: "1:494332783117:web:cb9fc8eaed8906e90cc344",
  measurementId: "G-ZGSNE5NC2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);