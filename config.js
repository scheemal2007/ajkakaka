import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyDHwsMJ205F2o5y-6t9n9sRal2Ad0GwQhE",
  authDomain: "complaint-forum-e5285.firebaseapp.com",
  projectId: "complaint-forum-e5285",
  storageBucket: "complaint-forum-e5285.appspot.com",
  messagingSenderId: "10687125475",
  appId: "1:10687125475:web:cc8097e278e94f755c72d6"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

