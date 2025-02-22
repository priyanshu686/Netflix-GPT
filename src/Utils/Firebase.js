// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATsSWLlSfIG8YoFpQWz8LO9nNkDBOdHTM",
  authDomain: "netflix-gpt-41c33.firebaseapp.com",
  projectId: "netflix-gpt-41c33",
  storageBucket: "netflix-gpt-41c33.firebasestorage.app",
  messagingSenderId: "1020362511860",
  appId: "1:1020362511860:web:3a1bbab94952b621b695a1",
  measurementId: "G-1ZS273VYJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();