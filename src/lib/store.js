import { collectionStore, } from "sveltefire";
import { firestore } from "./firebase";
import { derived } from "svelte/store";


import { AOWCharacterForm } from "./dataTypes";
import { writable } from "svelte/store";
export let character = writable(new AOWCharacterForm());

export let selectedCharacterId = writable();


export const characters = collectionStore(firestore, "characters");

export let selectedCharacter = derived(
	[characters, selectedCharacterId],
	([$a, $b]) => {
		console.log();
		for (const cloudSheet of $a) {
			if (cloudSheet.id && cloudSheet.id == $b) {
				console.log("selected", cloudSheet.Name);

				let t = new AOWCharacterForm();
				t.redefine(cloudSheet);

				return t;
			}
		}
		//   if (!selectedCharacterId) return null;
		//   let char = $a.find((e) => e?.id == selectedCharacterId);
		return null;
	}
);




export function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}
