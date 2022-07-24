// import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkWwcgQdyKGqMOB5voVFJ8tZITqjluZMw",
  authDomain: "catalogo-series-f632b.firebaseapp.com",
  projectId: "catalogo-series-f632b",
  storageBucket: "catalogo-series-f632b.appspot.com",
  messagingSenderId: "604896153265",
  appId: "1:604896153265:web:8083d1318e054bcb549c90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });