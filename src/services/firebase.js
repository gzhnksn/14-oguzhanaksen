// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCU1bM3-4wHTPSklFDTAQXu6SCwitCqKy8",
  authDomain: "oguzhanaksen-d4836.firebaseapp.com",
  projectId: "oguzhanaksen-d4836",
  storageBucket: "oguzhanaksen-d4836.appspot.com",
  messagingSenderId: "679034728344",
  appId: "1:679034728344:web:7b9d23f094f2c5852705ed",
  measurementId: "G-W59KKV56NC"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});