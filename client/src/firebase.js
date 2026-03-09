// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-c9c1d.firebaseapp.com",
  projectId: "genwebai-c9c1d",
  storageBucket: "genwebai-c9c1d.firebasestorage.app",
  messagingSenderId: "284349990992",
  appId: "1:284349990992:web:c9ecbbb8fbc298b079e955",
  measurementId: "G-9V0BQBG12T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}