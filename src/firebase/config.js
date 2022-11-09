import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAaLw5gnwzpBLme5aEUW3S-uOjLYT8RwQ0",
  authDomain: "gallery-app-62926.firebaseapp.com",
  projectId: "gallery-app-62926",
  storageBucket: "gallery-app-62926.appspot.com",
  messagingSenderId: "692529182060",
  appId: "1:692529182060:web:1eae2d56e9cc3d1d1bef49"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };