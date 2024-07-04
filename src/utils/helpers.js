// utils/helpers.js
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/firebase.config.js";

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("email"); // Ensure the email scope is added

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User:", user);
    console.log("User Email:", user?.email);
  } catch (error) {
    console.log("Error during sign-in with Google: " + error.message);
    console.error("Error during sign-in with Google:", error);
  }
};
