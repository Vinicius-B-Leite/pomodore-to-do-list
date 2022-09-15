import { initializeApp } from "firebase/app";
import { getFirestore, CollectionReference, collection, } from "firebase/firestore";
import { ITarefa } from "../types/ITarefa";

const firebaseConfig = {
  apiKey: "AIzaSyBdkcjSQOIcFH9Oeq-xEmdvVQJQh1BV_RY",
  authDomain: "todolist-b0c6c.firebaseapp.com",
  projectId: "todolist-b0c6c",
  storageBucket: "todolist-b0c6c.appspot.com",
  messagingSenderId: "1035972780704",
  appId: "1:1035972780704:web:1f6b2412f3c5612b8b5fc5",
  measurementId: "G-PPZQKWQ120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const colecaoTarefas = collection(db, 'tarefa') as CollectionReference<ITarefa>