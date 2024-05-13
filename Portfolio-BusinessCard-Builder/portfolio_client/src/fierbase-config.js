// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1cDfFTwQRuhRkeFuR5XnF91lzhE2Sr9U",
  authDomain: "portfolio-website-2b0c1.firebaseapp.com",
  projectId: "portfolio-website-2b0c1",
  storageBucket: "portfolio-website-2b0c1.appspot.com",
  messagingSenderId: "982659361257",
  appId: "1:982659361257:web:ba5ea05338cf14c7a40378",
  measurementId: "G-T5RB7BC7G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, analytics, auth };

