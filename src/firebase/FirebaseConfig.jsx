import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAavmgIvmtBYpJzwDDY8v_6e27XhB28tBI",
  authDomain: "pbh-store.firebaseapp.com",
  projectId: "pbh-store",
  storageBucket: "pbh-store.appspot.com",
  messagingSenderId: "1033451036981",
  appId: "1:1033451036981:web:950c3f8a72b881391c2c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;