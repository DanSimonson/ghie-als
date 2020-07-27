import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB01CjM2yALCwE7RuKKM-wZOVqSvEMZWRk",
  authDomain: "ghie-als.firebaseapp.com",
  databaseURL: "https://ghie-als.firebaseio.com",
  projectId: "ghie-als",
  storageBucket: "ghie-als.appspot.com",
  messagingSenderId: "107020850017",
  appId: "1:107020850017:web:95a69e43ec82cf1d832b20",
  measurementId: "G-HWVSWWRYS9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
