// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu6wBFnBMNVR8gri25DjVr3_ROM0B53p4",
  authDomain: "drive-clone-b02d2.firebaseapp.com",
  projectId: "drive-clone-b02d2",
  storageBucket: "drive-clone-b02d2.appspot.com",
  messagingSenderId: "57983114130",
  appId: "1:57983114130:web:3f69b772613b616aca7f4b",
  measurementId: "G-WJY9KJJERR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const database = getFirestore(app);