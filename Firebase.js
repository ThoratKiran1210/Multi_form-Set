import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2Dk8ILS8Y8ww1gC7PLhY4Zp4xQWOlKq4",
  authDomain: "multi-step-form-f2e54.firebaseapp.com",
  projectId: "multi-step-form-f2e54",
  storageBucket: "multi-step-form-f2e54.appspot.com",
  messagingSenderId: "1082094406055",
  appId: "1:1082094406055:web:2f189768b41395d4390e82",
  measurementId: "G-2P2TCLJNFR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };