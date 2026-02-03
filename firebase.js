// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEvxxWL7HRPoJqQ5C0n0eOz84ee5OZKJs",
  authDomain: "rainbow-paints-18fb9.firebaseapp.com",
  projectId: "rainbow-paints-18fb9",
  storageBucket: "rainbow-paints-18fb9.firebasestorage.app",
  messagingSenderId: "1087939800638",
  appId: "1:1087939800638:web:dfd179dd8f1df3e27feb6f",
  measurementId: "G-DPR3FQ9XF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
