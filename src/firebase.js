// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlT0TcuJ-HUt0qRZIMNtK_qLpeG61x6fA",
  authDomain: "sxodimkbtu.firebaseapp.com",
  databaseURL: "https://sxodimkbtu-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sxodimkbtu",
  storageBucket: "sxodimkbtu.appspot.com",
  messagingSenderId: "812741817728",
  appId: "1:812741817728:web:ca18ad2187190f1cd8bd65",
  measurementId: "G-TECMY71WV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
