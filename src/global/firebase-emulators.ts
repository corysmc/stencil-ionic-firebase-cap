import { getApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

// Emulator UI http://127.0.0.1:4000

export function initEmulators() {
  const firestoreDb = getFirestore();
  connectFirestoreEmulator(firestoreDb, "localhost", 8080);

  const firebaseFunctions = getFunctions(getApp());
  connectFunctionsEmulator(firebaseFunctions, "localhost", 5001);

  const auth = getAuth();
  connectAuthEmulator(auth, "http://localhost:9099");
}
