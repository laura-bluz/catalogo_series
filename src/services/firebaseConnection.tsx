// import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage, StorageReference } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkWwcgQdyKGqMOB5voVFJ8tZITqjluZMw",
  authDomain: "catalogo-series-f632b.firebaseapp.com",
  projectId: "catalogo-series-f632b",
  storageBucket: "catalogo-series-f632b.appspot.com",
  messagingSenderId: "604896153265",
  appId: "1:604896153265:web:8083d1318e054bcb549c90"
};

export const app = initializeApp(firebaseConfig);

export let auth = getAuth(app);

getAuth(app).onAuthStateChanged((user) => {
  auth = getAuth(app)
})
// laura: FI6WRHYfr7R88GFnVI272X52EFK2

// console.log(auth.currentUser?.uid);

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
export const db = getFirestore(app);

export const storage = getStorage(app);