// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZWrOhZ2ObfsGP5RW6AasXjffc_v_uDdI",
  authDomain: "coffee-store-app-539da.firebaseapp.com",
  projectId: "coffee-store-app-539da",
  storageBucket: "coffee-store-app-539da.firebasestorage.app",
  messagingSenderId: "224232830709",
  appId: "1:224232830709:web:e62d9489b6d0da84e0b7bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);