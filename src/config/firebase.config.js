import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.React_APP_API_KEY,
  authDomain: "mywalls-biooids-test.firebaseapp.com",
  projectId: "mywalls-biooids-test",
  storageBucket: "mywalls-biooids-test.appspot.com",
  messagingSenderId: "933673174816",
  appId: "1:933673174816:web:47342d308dfd5407bff945",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
