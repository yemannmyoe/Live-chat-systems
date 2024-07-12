// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcRIbh6svazI6EsKw9zSHMIsGYMaigcXM",
  authDomain: "vue-blog-system-b526b.firebaseapp.com",
  projectId: "vue-blog-system-b526b",
  storageBucket: "vue-blog-system-b526b.appspot.com",
  messagingSenderId: "48031322828",
  appId: "1:48031322828:web:6a28cb245bd808d7fda869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

// Get server timestamp
const timestamp = serverTimestamp();

export { db, auth, timestamp };
