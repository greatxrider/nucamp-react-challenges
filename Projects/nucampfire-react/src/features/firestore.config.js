import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlJsb_2SzQ_nj1JORP1Y5x65mNGwJuPno",
    authDomain: "nucampfire-424516.firebaseapp.com",
    projectId: "nucampfire-424516",
    storageBucket: "nucampfire-424516.appspot.com",
    messagingSenderId: "132834902070",
    appId: "1:132834902070:web:d25896ff3fb80c9783d897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
