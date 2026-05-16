// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAExdafcliwJVPPPjoKYfvS-_Ba8vVlT-Q",
  authDomain: "adoptaelsalvador.firebaseapp.com",
  projectId: "adoptaelsalvador",
  storageBucket: "adoptaelsalvador.firebasestorage.app",
  messagingSenderId: "153965426534",
  appId: "1:153965426534:web:8c2689bc8c4b528727faa7",
  measurementId: "G-ZP4V3G0E48"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();