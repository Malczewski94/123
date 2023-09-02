import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAX4g8uts7IotkaVWEqFYInyVQFShhjPfM",
  authDomain: "proyectofinal-react1.firebaseapp.com",
  projectId: "proyectofinal-react1",
  storageBucket: "proyectofinal-react1.appspot.com",
  messagingSenderId: "949587388583",
  appId: "1:949587388583:web:6cfd9d0986767ff8491382"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default db;