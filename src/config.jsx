import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpWG-M1EbX6e4LdZlDnVuz_ATT9uV3au0",
  authDomain: "insta-bill.firebaseapp.com",
  databaseURL: "https://insta-bill-default-rtdb.firebaseio.com",
  projectId: "insta-bill",
  storageBucket: "insta-bill.appspot.com",
  messagingSenderId: "94074254405",
  appId: "1:94074254405:web:918e24488b2e0b909edf2c"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);