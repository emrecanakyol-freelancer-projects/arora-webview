import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD5dfOnM3f3eMYwsJ0j371W-kNLToGPhGY",
  authDomain: "arora-3e9a9.firebaseapp.com",
  projectId: "arora-3e9a9",
  storageBucket: "arora-3e9a9.appspot.com",
  messagingSenderId: "756932195756",
  appId: "1:756932195756:web:2721d3531727afd1adb609",
  measurementId: "G-9DVN7DSCYX"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});