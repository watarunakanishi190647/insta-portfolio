// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD63PMwXHa6PU8oIlQLasRFFnAwgC9RIRA",
  authDomain: "inst-2-pf.firebaseapp.com",
  projectId: "inst-2-pf",
  storageBucket: "inst-2-pf.appspot.com",
  messagingSenderId: "1013997253446",
  appId: "1:1013997253446:web:f2a65073af77baef496b47"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };