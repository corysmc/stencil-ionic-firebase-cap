import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyCBSEGiyOvdw_0gMs_lbGDY_EjGYlRlQGI",
  authDomain: "dev-app-e8e00.firebaseapp.com",
  projectId: "dev-app-e8e00",
  storageBucket: "dev-app-e8e00.appspot.com",
  messagingSenderId: "1020832564541",
  appId: "1:1020832564541:web:1b05884e8e0d0b2a02f154",
});
export const firebaseAuth = getAuth(app);

export const signInWithEmail = (params: {
  email: string;
  password: string;
}) => {
  return FirebaseAuthentication.signInWithEmailAndPassword(params);
};

export const signInWithASA = () => {
  console.log("tapped sign in with ASA");
};

export const getCurrentUser = async () => {
  const result = await FirebaseAuthentication.getCurrentUser();
  return result.user;
};

export const signOut = async () => {
  await FirebaseAuthentication.signOut();
};
