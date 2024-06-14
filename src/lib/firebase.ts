// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// import sveltefire for easier stores
import { docStore, collectionStore, userStore } from "sveltefire";
// import { character, firebaseStatus } from "./store";



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

// init firestores
export const user = userStore(auth);

user.subscribe(async u => {

	if (!u) return

	const ref = doc(firestore, "users", u?.uid)
	const docSnap = await getDoc(ref);
	if (!docSnap.exists()) {
		// firebaseStatus.set("Creating new user")
		await setDoc(ref, { email: u.email, });
		// firebaseStatus.set("New user creation complete")

	} else {
		console.log("existing user found", docSnap.data().email)
	}

	/*
		// const post = docStore(firestore, "users/" + u?.uid);
		// console.log({ post }, u?.uid,)
	
	
	
	
	
		//   gets a single docutment as a store
		//   const post = docStore(firestore, "users/CzGrC8nwFC2Go1DQ9FHq");
		//   console.log($post?.email);
	
		//   handles the sending of data to firebase
		//   import { debounce } from "./store";
		//   import { AOWCharacterForm } from "./dataTypes";
	
		//   var debounced_firebaseUpdate = debounce(async (characterObject: Object) => {
		//     console.log({ auth, user: $user?.uid });
		//     if ($character.id.length < 5 || $character.Name.length < 1) return;
		//     if (!$user) return;
		//     let payload = {
		//       ...characterObject,
		//       uid: $user.uid,
		//     };
		//     console.log("sending to firebase...", { payload });
		//     let outcome = await setDoc(
		//       doc(firestore, "characters", $character.id),
		//       payload
		//     );
		//     console.log({ outcome });
		//   }, 500);
	
		//   character.subscribe((characterForm) => {
		//     debounced_firebaseUpdate(characterForm.webExport);
		//   });
	
		 */
})


export const cloudCharacter = docStore(firestore, 'users/' + user?.uid);


export const writeCharacter = debounce(async (data: Object) => {
	console.log("writing", { uid: auth?.currentUser?.uid, data })
	// console.log({ auth, user: $user?.uid });
	// if ($character.id.length < 5 || $character.Name.length < 1) return;
	// if (!$user) return;
	// let payload = {
	// 	...characterObject,
	// 	uid: $user.uid,
	// };
	// console.log("sending to firebase...", { payload });
	// let outcome = await setDoc(
	// 	writeToStore($user.uid)
	// 	doc(firestore, "characters", $character.id),
	// 	payload
	// );
	// console.log({ outcome });
}, 500);


// export const writeCharacter = (data) => console.log("writing", { uid: $user?.uid, data })






export function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}



import { AOWCharacterForm } from "./dataTypes";
import { writable } from "svelte/store";

export let character = writable(new AOWCharacterForm());

export let firebaseStatus = writable()


character.subscribe((characterForm) => {
	let e = characterForm?.webExport;
	if (e) writeCharacter(characterForm.webExport);
});