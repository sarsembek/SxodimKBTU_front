import app from "firebase/compat/app"
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBlT0TcuJ-HUt0qRZIMNtK_qLpeG61x6fA",
  authDomain: "sxodimkbtu.firebaseapp.com",
  databaseURL: "https://sxodimkbtu-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sxodimkbtu",
  storageBucket: "sxodimkbtu.appspot.com",
  messagingSenderId: "812741817728",
  appId: "1:812741817728:web:ca18ad2187190f1cd8bd65",
  measurementId: "G-TECMY71WV6"
}

const firebase = app.initializeApp(config);
const auth = getAuth(firebase);

export { firebase, auth };