// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA--ySRB3g55JOWY_A9ExRQJmyYzpxewGE",
  authDomain: "aisely.firebaseapp.com",
  projectId: "aisely",
  storageBucket: "aisely.appspot.com",
  messagingSenderId: "23303909850",
  appId: "1:23303909850:web:4b2ce08e69c91deed390e3",
  measurementId: "G-YNMF495ZV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);