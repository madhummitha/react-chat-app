// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlul9_16zyjoi7EiZP32rlsg6Yt8FNsRM",
  authDomain: "react-chat-e80e6.firebaseapp.com",
  projectId: "react-chat-e80e6",
  storageBucket: "react-chat-e80e6.appspot.com",
  messagingSenderId: "1033647822870",
  appId: "1:1033647822870:web:a8cd93e5528382bef63d37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);