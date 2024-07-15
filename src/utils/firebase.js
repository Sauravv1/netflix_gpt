// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyColsI0jZ_9a2DQ_ajEtBiNKzKtuAKgJPA",
  authDomain: "netflixgpt-e2251.firebaseapp.com",
  projectId: "netflixgpt-e2251",
  storageBucket: "netflixgpt-e2251.appspot.com",
  messagingSenderId: "934768762490",
  appId: "1:934768762490:web:93cfe1990c0333d0bbe5c3",
  measurementId: "G-N7BBDG18WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();