// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAfJhEz7yhT1NsVxeWiZ7w0C3IniWwi3tI",
  authDomain: "reactapp-7cb33.firebaseapp.com",
  databaseURL: "https://reactapp-7cb33-default-rtdb.firebaseio.com",
  projectId: "reactapp-7cb33",
  storageBucket: "reactapp-7cb33.firebasestorage.app",
  messagingSenderId: "500912694935",
  appId: "1:500912694935:web:b59d534f89698e941aebd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)