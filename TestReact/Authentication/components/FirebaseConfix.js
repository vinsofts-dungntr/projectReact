import firebase from '@firebase/app'
import '@firebase/auth'

 var config = {
    apiKey: "AIzaSyAJaWXbU4UyOHH_kZi7L2btEPjvxZvI3Ks",
    authDomain: "fir-react-8208c.firebaseapp.com",
    databaseURL: "https://fir-react-8208c.firebaseio.com",
    projectId: "fir-react-8208c",
    storageBucket: "fir-react-8208c.appspot.com",
    messagingSenderId: "995686199629"
  };
  export const firebaseApp = firebase.initializeApp(config);