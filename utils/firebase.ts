// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp,   } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp4mvJJVNTPk6PRuWV5lEtA4-ZyY0wLMs",
  authDomain: "fitness-4f2b4.firebaseapp.com",
  projectId: "fitness-4f2b4",
  storageBucket: "fitness-4f2b4.appspot.com",
  messagingSenderId: "953815312798",
  appId: "1:953815312798:web:689eaf839a92a3c7c94e8f",
  measurementId: "G-M1DWY0KS07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
