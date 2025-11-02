// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFrq4-xz8zSvjaXyW8eo9grfkvZFdJQS4",
  authDomain: "mediconnect-fc0d9.firebaseapp.com",
  projectId: "mediconnect-fc0d9",
  storageBucket: "mediconnect-fc0d9.firebasestorage.app",
  messagingSenderId: "1012618078431",
  appId: "1:1012618078431:web:6082822bbbfbe96071a16a",
  measurementId: "G-3L7WZHVVM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
