import { AOWCharacterForm } from "./dataTypes";
import { writable } from "svelte/store";
export let character = writable(new AOWCharacterForm());