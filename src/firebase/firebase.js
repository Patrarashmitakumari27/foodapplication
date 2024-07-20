// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZP_WowUahNwv6ONrD9CrcVhby0vx5AFw",
  authDomain: "authentication-163ba.firebaseapp.com",
  projectId: "authentication-163ba",
  storageBucket: "authentication-163ba.appspot.com",
  messagingSenderId: "276709209075",
  appId: "1:276709209075:web:bcc226b46a68ba86c41886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export { app };
