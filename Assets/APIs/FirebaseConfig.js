import * as firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC-7lLZmzBH1MJEelHQLri9mBh8uy2buaY",
  authDomain: "the-golden-rule-cb2d4.firebaseapp.com",
  databaseURL: "https://the-golden-rule-cb2d4.firebaseio.com",
  projectId: "the-golden-rule-cb2d4",
  storageBucket: "",
  messagingSenderId: "315658741926"

};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
