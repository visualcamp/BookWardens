// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's simple configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtu9LuUxVcVpKXAWP_0LxfzxtA7jiglvs",
    authDomain: "projectbookwardens.firebaseapp.com",
    projectId: "projectbookwardens",
    storageBucket: "projectbookwardens.firebasestorage.app",
    messagingSenderId: "899637962758",
    appId: "1:899637962758:web:4d80f85c2a92b90fe2bb87",
    measurementId: "G-399LJTC6GB"
};

// Initialize Firebase
// Use getApps() to prevent re-initialization error in Next.js hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
