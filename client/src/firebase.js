// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-48b38.firebaseapp.com",
    projectId: "mern-blog-48b38",
    storageBucket: "mern-blog-48b38.appspot.com",
    messagingSenderId: "702221701785",
    appId: "1:702221701785:web:31f10ee33aedeaa6bb5e08",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
