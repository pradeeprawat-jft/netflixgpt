// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqSEAoG3Yt1JOzjhnch4b88l2wHyPD34Q",
  authDomain: "netflixgpt-9eb08.firebaseapp.com",
  projectId: "netflixgpt-9eb08",
  storageBucket: "netflixgpt-9eb08.appspot.com",
  messagingSenderId: "1085861857640",
  appId: "1:1085861857640:web:fac026dda4f757313a2edd",
  measurementId: "G-ZH8QMGRHW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
