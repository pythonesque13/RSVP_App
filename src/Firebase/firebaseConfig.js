
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqQP5FEqn0lvizlP3jLRypAHhVm10pWcg",
  authDomain: "rsvp-dd987.firebaseapp.com",
  projectId: "rsvp-dd987",
  storageBucket: "rsvp-dd987.appspot.com",
  messagingSenderId: "718365254785",
  appId: "1:718365254785:web:ccf1668b2ed4c1e3049980"
};


 export const app = initializeApp(firebaseConfig);

 export const db=getFirestore(app)