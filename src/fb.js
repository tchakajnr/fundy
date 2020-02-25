import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBFhYITUaysUZlBDdczdDAsgjCH2u85I1w",
    authDomain: "skug-todo.firebaseapp.com",
    databaseURL: "https://skug-todo.firebaseio.com",
    projectId: "skug-todo",
    storageBucket: "skug-todo.appspot.com",
    messagingSenderId: "570527274175",
    appId: "1:570527274175:web:a9addc44a50c0eef99e20a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

export default db;