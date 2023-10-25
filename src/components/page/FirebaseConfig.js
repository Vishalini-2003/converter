// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbnmhQBl34FZ0BupI3eChMP_JShONBoNk",
  authDomain: "textractor-lindr.firebaseapp.com",
  projectId: "textractor-lindr",
  storageBucket: "textractor-lindr.appspot.com",
  messagingSenderId: "851658570149",
  appId: "1:851658570149:web:33380f95bc8755c390d04c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);