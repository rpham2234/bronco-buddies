// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvykLaaUNqZx8JCJgPsH8VTmNtWs8cP7g",
  authDomain: "broncobuddies-f42b4.firebaseapp.com",
  projectId: "broncobuddies-f42b4",
  storageBucket: "broncobuddies-f42b4.appspot.com",
  messagingSenderId: "1007637325322",
  appId: "1:1007637325322:web:7dc4bc32744ed0c4a5a1f3",
  measurementId: "G-18X725T0SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("signupButton").addEventListener("click", testFunction);


function testFunction() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider(); // Create Google provider instance
    signInWithRedirect(auth, provider); // Redirect to Google sign-in
  }  