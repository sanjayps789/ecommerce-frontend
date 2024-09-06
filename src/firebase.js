// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-ecommerce-c5ad6.firebaseapp.com",
  projectId: "mern-ecommerce-c5ad6",
  storageBucket: "mern-ecommerce-c5ad6.appspot.com",
  messagingSenderId: "338455881015",
  appId: "1:338455881015:web:fca7a3d40bd97ff21466b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);