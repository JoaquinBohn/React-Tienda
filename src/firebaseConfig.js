// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRChhBoHpacXmqGFgCu8bi9-2NkL096fM",
  authDomain: "tienda-libros-26ca4.firebaseapp.com",
  projectId: "tienda-libros-26ca4",
  storageBucket: "tienda-libros-26ca4.appspot.com",
  messagingSenderId: "753460077775",
  appId: "1:753460077775:web:8d0f46219789c5f6bd03ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
