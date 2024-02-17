// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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