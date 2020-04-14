  import firebase from 'firebase'
  
  // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCdIRCXaD3uxvMcyoQVd257ESyxOE7mVPI",
    authDomain: "mystagram-6a1e0.firebaseapp.com",
    databaseURL: "https://mystagram-6a1e0.firebaseio.com",
    projectId: "mystagram-6a1e0",
    storageBucket: "mystagram-6a1e0.appspot.com",
    messagingSenderId: "940673300171",
    appId: "1:940673300171:web:ca15b100c1ce65e3874d4e",
    measurementId: "G-9Z5ZX1VHBL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
  export default firebase;