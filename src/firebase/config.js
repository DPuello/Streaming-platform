// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApRctnkcOwdyFbF1lgU7tSJPLey6R0D-0",
  authDomain: "streaming-bemaster.firebaseapp.com",
  projectId: "streaming-bemaster",
  storageBucket: "streaming-bemaster.appspot.com",
  messagingSenderId: "186777088687",
  appId: "1:186777088687:web:4552bacb79069c4234da5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);