import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHaFyzJda2FC-JJsB82CYS8S-HQsbIrOI",
    authDomain: "messenger-52074.firebaseapp.com",
    databaseURL: "https://messenger-52074.firebaseio.com",
    projectId: "messenger-52074",
    storageBucket: "messenger-52074.appspot.com",
    messagingSenderId: "901322959995",
    appId: "1:901322959995:web:7fba313df067aae40c86de"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;