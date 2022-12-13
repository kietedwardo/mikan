import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyANiTQ1cSVCBguGGKsh5wORjWIkTKaHeUQ",
  authDomain: "mikan-289f9.firebaseapp.com",
  projectId: "mikan-289f9",
  storageBucket: "mikan-289f9.appspot.com",
  messagingSenderId: "563306647746",
  appId: "1:563306647746:web:76d5c2056030920e3d6b5b",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
