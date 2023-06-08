import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA9sxoMHgUxEx3ZkrGxX_jeM-vizO3VnA",
  authDomain: "protube-21ab3.firebaseapp.com",
  projectId: "protube-21ab3",
  storageBucket: "protube-21ab3.appspot.com",
  messagingSenderId: "36829834631",
  appId: "1:36829834631:web:68c479c7962e94918ab722"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);