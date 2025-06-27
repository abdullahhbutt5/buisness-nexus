import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAxK1O0Rqvhe_TqOeH7_6JakyYTrKxmCPQ",
  authDomain: "business-nexus-d4eb0.firebaseapp.com",
  databaseURL: "https://business-nexus-d4eb0-default-rtdb.firebaseio.com/",
  projectId: "business-nexus-d4eb0",
  storageBucket: "business-nexus-d4eb0.firebasestorage.app",
  messagingSenderId: "872408135767",
  appId: "1:872408135767:web:e13c212f5c10bff53c8b12",
  measurementId: "G-T8V7N4YWC5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app); 
export { db };