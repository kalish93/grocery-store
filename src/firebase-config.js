import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "grocery-store-fe53f.firebaseapp.com",
    projectId: "grocery-store-fe53f",
    storageBucket: "grocery-store-fe53f.appspot.com",
    messagingSenderId: "997784021719",
    appId: "1:997784021719:web:4e236856f210ba00c75e92",
    measurementId: "G-S0G2H4W5MS"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app)