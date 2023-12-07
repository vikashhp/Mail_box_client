// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEC5WJUzn_qvkKG-D94c-zWp2eS5zdh2w",
  authDomain: "react-mail-box-ed7db.firebaseapp.com",
  databaseURL: "https://react-mail-box-ed7db-default-rtdb.firebaseio.com",
  projectId: "react-mail-box-ed7db",
  storageBucket: "react-mail-box-ed7db.appspot.com",
  messagingSenderId: "45737478382",
  appId: "1:45737478382:web:39be1fe4e59d4089fb0bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);