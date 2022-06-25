import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0Gpnn61SqDarUFaBk_wjLkjluJcZ_qaQ",
  authDomain: "spacex-6c218.firebaseapp.com",
  projectId: "spacex-6c218",
  storageBucket: "spacex-6c218.appspot.com",
  messagingSenderId: "254899866568",
  appId: "1:254899866568:web:7f81f8488b18bac6c7cefd",
  measurementId: "G-3HK1BNBMX8"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;