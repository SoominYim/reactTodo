// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import Home from "./pages/Home";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJxQc-XqKHazk2KGCjOZHW1WtVBgnVMdk",
  authDomain: "test01-aba47.firebaseapp.com",
  projectId: "test01-aba47",
  storageBucket: "test01-aba47.appspot.com",
  messagingSenderId: "28784931534",
  appId: "1:28784931534:web:b240d8e7fd5e4f94a2169f",
  measurementId: "G-X0DXRMD433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();