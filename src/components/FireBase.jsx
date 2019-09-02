import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDQaF5c-SMFbkJkY2bBPlz508_QuYuM2Pc",
    authDomain: "e-commerce-d5b6f.firebaseapp.com",
    databaseURL: "https://e-commerce-d5b6f.firebaseio.com",
    projectId: "e-commerce-d5b6f",
    storageBucket: "e-commerce-d5b6f.appspot.com",
    messagingSenderId: "770114268245",
    appId: "1:770114268245:web:9bf2be0dc982f360"
};

  firebase.initializeApp(firebaseConfig);




  export const auth = firebase.auth();

/****************************************************************FireStore Database********************************/

 export const db = firebase.firestore();



  export default firebase;

