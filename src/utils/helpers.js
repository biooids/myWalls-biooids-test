// utils/helpers.js
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/firebase.config.js";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    console.log("Attempting Google sign-in");
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google sign-in successful");

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log("Google Access Token: " + token);

    const user = result.user;
    console.log("User signed in: " + JSON.stringify(user));
  } catch (error) {
    console.log("Error during sign-in with Google: " + error.message);
    console.error("Error during sign-in with Google:", error);
  }
};
