import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDKtg4lYGdDVZSSf3A9UR7OkskyX2r12_Y",
    authDomain: "linkedin-clone-c0e10.firebaseapp.com",
    projectId: "linkedin-clone-c0e10",
    storageBucket: "linkedin-clone-c0e10.appspot.com",
    messagingSenderId: "723743770174",
    appId: "1:723743770174:web:6312056e4f922832baf36f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};