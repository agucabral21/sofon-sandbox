import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxWa4z9IceIxS6x0uQCyPiCmb6mUsJzY8",
    authDomain: "coderhouse-ecommerce-a37a9.firebaseapp.com",
    projectId: "coderhouse-ecommerce-a37a9",
    storageBucket: "coderhouse-ecommerce-a37a9.appspot.com",
    messagingSenderId: "60503745061",
    appId: "1:60503745061:web:a35319be3c3390fbac55cc"
};

const DB = firebase.initializeApp(firebaseConfig);
const storeDB = firebase.firestore(DB);

export {storeDB};