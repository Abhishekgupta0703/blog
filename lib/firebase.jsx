// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtzr7VD9iOEZLFP0kV5MpGvv1qULcRSqk",
  authDomain: "quantum-blog.firebaseapp.com",
  projectId: "quantum-blog",
  storageBucket: "quantum-blog.appspot.com",
  messagingSenderId: "1031326162799",
  appId: "1:1031326162799:web:492514bc49e135f7aed29a",
  measurementId: "G-KQZN2JCH43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db=getFirestore();
export const auth=getAuth();
export const storage =getStorage();