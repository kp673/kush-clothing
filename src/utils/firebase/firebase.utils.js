// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsmCxnLn8Q4f8wo_l4s1Ey6E2FGv9qWw4",
  authDomain: "kush-clothing-db.firebaseapp.com",
  projectId: "kush-clothing-db",
  storageBucket: "kush-clothing-db.appspot.com",
  messagingSenderId: "690717355550",
  appId: "1:690717355550:web:68a2c6ec83874184be880f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);