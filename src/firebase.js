import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDfi9qHRqH7h1q8eI0HRZm-OQZo0m64lkg",
    authDomain: "react-project-fe418.firebaseapp.com",
    databaseURL: "https://react-project-fe418-default-rtdb.firebaseio.com",
    projectId: "react-project-fe418",
    storageBucket: "react-project-fe418.appspot.com",
    messagingSenderId: "599546189568",
    appId: "1:599546189568:web:10992d63febc27be4f05e5"
  };
  
firebase.initializeApp(config);

export default firebase;