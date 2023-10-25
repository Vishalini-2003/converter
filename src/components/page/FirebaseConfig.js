// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6cGrcyGrg2pw8reryPDF1DSgH5JQLxmU",
  authDomain: "converter-lindr.firebaseapp.com",
  projectId: "converter-lindr",
  storageBucket: "converter-lindr.appspot.com",
  messagingSenderId: "1003859239713",
  appId: "1:1003859239713:web:7a12d4f79921b73bd85460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);