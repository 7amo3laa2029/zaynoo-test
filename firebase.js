// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqXr5fR-hnq2GVz6NQniMSxo1POur6XZc",
  authDomain: "zaynoo-a176e.firebaseapp.com",
  projectId: "zaynoo-a176e",
  storageBucket: "zaynoo-a176e.appspot.com",
  messagingSenderId: "652257259407",
  appId: "1:652257259407:web:bb81ce5ef6e31e8ffbe5fa"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
