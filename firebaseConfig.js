import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

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

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getDatabase(app);

export { db };
