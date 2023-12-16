import app from "./firebase-config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default async function signUp(email, password) {
  let result = null,
    error = null;
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    result = userCredentials;
  } catch (e) {
    error = e;
  }

  return { result, error };
}
