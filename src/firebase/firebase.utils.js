import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// project-344383568856
const config = {
  apiKey: "AIzaSyDmNrrpHxrBwVIKGWx4S01pVb5qNPl86hE",
  authDomain: "anything-55a61.firebaseapp.com",
  databaseURL: "https://anything-55a61.firebaseio.com",
  projectId: "anything-55a61",
  storageBucket: "anything-55a61.appspot.com",
  messagingSenderId: "344383568856",
  appId: "1:344383568856:web:38f07c86606305da0790ad",
  measurementId: "G-R8DYCCR08C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
