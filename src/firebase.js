import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAY2dzqOT_rcZQYgletervmG8e4fO5tpMk",
  authDomain: "chat-app-de7d5.firebaseapp.com",
  projectId: "chat-app-de7d5",
  storageBucket: "chat-app-de7d5.appspot.com",
  messagingSenderId: "337111583348",
  appId: "1:337111583348:web:e79fe35c314cacfee19f21",
  measurementId: "G-15JXN0K1SB"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();