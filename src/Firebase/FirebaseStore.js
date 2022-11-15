
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKHyxz44XB_cvZ6Ofs7n7uJ41Qq64i9FA",
  authDomain: "iplextest-b85dd.firebaseapp.com",
  projectId: "iplextest-b85dd",
  storageBucket: "iplextest-b85dd.appspot.com",
  messagingSenderId: "970298579719",
  appId: "1:970298579719:web:4a010d3ba5e59594b183a2"
};


const app = initializeApp(firebaseConfig);


export const db= getFirestore(app)