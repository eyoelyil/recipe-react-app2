// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZNULKpuOEPESx3zRbYk2xI1UPTSSJvb4",
  authDomain: "react-recipe-app-d1a39.firebaseapp.com",
  projectId: "react-recipe-app-d1a39",
  storageBucket: "react-recipe-app-d1a39.appspot.com",
  messagingSenderId: "949492824661",
  appId: "1:949492824661:web:a71b1c6f12053bfcaa72dc",
  measurementId: "G-W9Z8XSREG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
