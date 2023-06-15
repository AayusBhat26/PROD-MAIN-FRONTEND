import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD6IUh8R8OGTBUftD0TOR1uyvcEeGqoP5I",
  authDomain: "prod-main-548d6.firebaseapp.com",
  projectId: "prod-main-548d6",
  storageBucket: "prod-main-548d6.appspot.com",
  messagingSenderId: "60664292689",
  appId: "1:60664292689:web:5b9be761c9513bb1ad9f70",
  measurementId: "G-2Z58BWY7Y1",
};
const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app);