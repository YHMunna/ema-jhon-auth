// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

// Initialize Firebase
const initializeAuth = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuth;
// steps for authentication
/*
01.firebase: Create Obj
02.create web app
03.get configuration
04.initialize firebase
05.enable auth method

*/
