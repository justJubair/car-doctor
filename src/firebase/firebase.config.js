// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9IO5Nlw-4lhEPz_rs9W4s6DpUPGXkJsE",
  authDomain: "car-doctor-client-c0dd0.firebaseapp.com",
  projectId: "car-doctor-client-c0dd0",
  storageBucket: "car-doctor-client-c0dd0.appspot.com",
  messagingSenderId: "571149959623",
  appId: "1:571149959623:web:a0a465d3df87c0c6b499e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 