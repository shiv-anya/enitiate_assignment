import app from "./firebase-config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default async function login(email, password) {
  let result = null,
    error = null;
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    result = userCredentials.user;
  } catch (e) {
    error = e.message;
  }

  return { result, error };
}
