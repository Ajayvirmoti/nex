// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCanCuYN4P1tbi0LqJAnr0D8w1Bc1d-0CA",
  authDomain: "nex-talk.firebaseapp.com",
  databaseURL: "https://nex-talk-default-rtdb.firebaseio.com",
  projectId: "nex-talk",
  storageBucket: "nex-talk.appspot.com",
  messagingSenderId: "44943157429",
  appId: "1:44943157429:web:8eb68ac7403e41d4e7b6fc",
  measurementId: "G-7WRBPN4SGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

