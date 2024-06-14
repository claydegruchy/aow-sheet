import { writable, derived } from "svelte/store";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// import sveltefire for easier stores
import { docStore, collectionStore, userStore } from "sveltefire";
// import  character sheet shit
import { AOWCharacterForm } from "./dataTypes";





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




// setting up store for character
export let character = writable();
export let firebaseStatus = writable()


let unsubscribeSnapshot: any = null
let cloudCharacterRef: any = null
export let cloudCharacter = writable()


export let firebaseUserState = writable()



user.subscribe(async u => {
	if (!u) {
		character.set(null)
		return
	}

	const ref = doc(firestore, "users", u?.uid)
	const docSnap = await getDoc(ref);
	let t = new AOWCharacterForm()
	if (!docSnap.exists()) {
		firebaseUserState.set("Creating new user")
		await setDoc(ref, { email: u.email, character: new AOWCharacterForm().webExport });
		character.set(t)
		firebaseUserState.set("User created")

	} else {
		console.log("existing user found", docSnap.data().email)
		t.redefine(docSnap.data().character)
		character.set(t)
		firebaseUserState.set("Loaded existing character")
	}

	cloudCharacterRef = doc(firestore, 'users', u.uid);

	// Subscribe to Firestore document updates
	if (unsubscribeSnapshot) unsubscribeSnapshot(); // Unsubscribe from previous listener
	unsubscribeSnapshot = onSnapshot(cloudCharacterRef, (doc) => {
		firebaseUserState.set("Received downstream")
		if (doc.exists()) {
			let t = new AOWCharacterForm()
			t.redefine(doc.data().character)
			t.skipNextWebWrite = true
			character.set(t);
			console.log("updated cloudCharacter", doc.data().character)
		}
	});


	console.log({ cloudCharacterRef })

})

export const writeDataToFirebase = debounce(async (data: Object) => {
	console.group("writeDataToFirebase")
	firebaseUserState.set("Sending...")
	let { currentUser: { uid, email } } = auth
	if (!uid) return
	let path = "users/" + uid + "/character"
	console.log("writing", path, data)


	const ref = doc(firestore, "users", uid)
	await setDoc(ref, { email, character: data });
	firebaseUserState.set(null)



	console.groupEnd()
}, 500);




export function debounce(func: Function, delay: number) {
	let timeoutId;

	return function (...args) {
		firebaseUserState.set("Sending...")
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}


character.subscribe((characterForm: any) => {
	console.log(characterForm)
	if (characterForm?.skipNextWebWrite) {
		characterForm.skipNextWebWrite = false
		return
	}
	let e = characterForm?.webExport;
	if (e) writeDataToFirebase(characterForm.webExport);
});