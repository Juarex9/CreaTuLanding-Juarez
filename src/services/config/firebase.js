import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
 

const firebaseConfig = {
  apiKey: "AIzaSyDPOmyunEG-lZ7_su6zwYcgK9AM_wPxG8U",
  authDomain: "coderhouse-react-89d1f.firebaseapp.com",
  projectId: "coderhouse-react-89d1f",
  storageBucket: "coderhouse-react-89d1f.firebasestorage.app",
  messagingSenderId: "393611698838",
  appId: "1:393611698838:web:c1c657b9d0dc8289aa18b7",
  measurementId: "G-ZS9RG5EHKC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();