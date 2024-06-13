// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC8QtWdGc5j0Hzi6Ded4e_kLzJs3rb-tc0",
	authDomain: "art-of-wuxia-rpg.firebaseapp.com",
	projectId: "art-of-wuxia-rpg",
	storageBucket: "art-of-wuxia-rpg.appspot.com",
	messagingSenderId: "972531018213",
	appId: "1:972531018213:web:679bb27f12a36941a4a70c",
	measurementId: "G-XJCKDC69NF"
};
console.log("Starting firebase...")

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
