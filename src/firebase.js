// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAehqbbgvenORpyOI6R7PzdGHmsnmbYcLo",
  authDomain: "react-auth-4528f.firebaseapp.com",
  projectId: "react-auth-4528f",
  storageBucket: "react-auth-4528f.appspot.com",
  messagingSenderId: "478380130204",
  appId: "1:478380130204:web:3f6088b76d178bedbe9259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
