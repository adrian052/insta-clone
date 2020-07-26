import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCpIaMLchq9bkWBUb0NYwsx5XXlohecuG4",
    authDomain: "instagram-clone-react-3fee2.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-3fee2.firebaseio.com",
    projectId: "instagram-clone-react-3fee2",
    storageBucket: "instagram-clone-react-3fee2.appspot.com",
    messagingSenderId: "312281863243",
    appId: "1:312281863243:web:04dbb72fead6e91ff769ce",
    measurementId: "G-4HGEZCMXCD"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{db,auth,storage}