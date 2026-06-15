import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDCsoUxdBAThOIcd1F8CpEQQIJ5pEWEvY",
  authDomain: "anana-torneo.firebaseapp.com",
  projectId: "anana-torneo",
  storageBucket: "anana-torneo.firebasestorage.app",
  messagingSenderId: "129194599721",
  appId: "1:129194599721:web:d5a945dad562e694440338"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
