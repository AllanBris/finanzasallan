// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtUg2Ykyr3wm5QnNyAIxr2Z3ax4RxWeJo",
  authDomain: "finanzas-personales1.firebaseapp.com",
  projectId: "finanzas-personales1",
  storageBucket: "finanzas-personales1.firebasestorage.app",
  messagingSenderId: "408370866115",
  appId: "1:408370866115:web:1941c5c6f7f3e42a03ff76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);