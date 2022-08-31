// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASsRUwLp3kni8PlqriGV-x23zvrqMFLf4",
  authDomain: "fir-auth-8d111.firebaseapp.com",
  projectId: "fir-auth-8d111",
  storageBucket: "fir-auth-8d111.appspot.com",
  messagingSenderId: "450290443662",
  appId: "1:450290443662:web:a8b86baad8eddb394530df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 

export const auth = getAuth(app);
