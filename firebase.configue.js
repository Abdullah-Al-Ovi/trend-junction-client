
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY9MzghoTvxDP7OK0LMu1DQdkDoQctJNk",
  authDomain: "brandreseller-9274c.firebaseapp.com",
  projectId: "brandreseller-9274c",
  storageBucket: "brandreseller-9274c.appspot.com",
  messagingSenderId: "122344827784",
  appId: "1:122344827784:web:98e36fa61435c9fdcce83d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);