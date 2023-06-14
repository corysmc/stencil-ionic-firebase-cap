import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { ClientApiParams, ClientApiResponse } from "@og-shared/types";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { initEmulators } from "./firebase-emulators";

const app = initializeApp({
  apiKey: "AIzaSyCBSEGiyOvdw_0gMs_lbGDY_EjGYlRlQGI",
  authDomain: "dev-app-e8e00.firebaseapp.com",
  projectId: "dev-app-e8e00",
  storageBucket: "dev-app-e8e00.appspot.com",
  messagingSenderId: "1020832564541",
  appId: "1:1020832564541:web:1b05884e8e0d0b2a02f154",
});
initEmulators();
export const firebaseAuth = getAuth(app);

export const signInWithEmail = (params: {
  email: string;
  password: string;
}) => {
  return FirebaseAuthentication.signInWithEmailAndPassword(params);
};

export const signInWithASA = async () => {
  console.log("tapped sign in with ASA");
  const params = { data: "test-data-from-client" };
  const res = await httpsCallable<ClientApiParams, ClientApiResponse>(
    getFunctions(),
    "clientApi"
  )(params);
  console.log("res", res);
};

export const getCurrentUser = async () => {
  const result = await FirebaseAuthentication.getCurrentUser();
  return result.user;
};

export const signOut = async () => {
  await FirebaseAuthentication.signOut();
};
