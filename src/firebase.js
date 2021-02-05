import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB796tKao6biRkleK78U0R6J_kYt35b-vU",
    authDomain: "clone-51ef4.firebaseapp.com",
    projectId: "clone-51ef4",
    storageBucket: "clone-51ef4.appspot.com",
    messagingSenderId: "322597497779",
    appId: "1:322597497779:web:20a3c636ebbc6be6d2b9c6",
    measurementId: "G-3ZN6HS5BNJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };