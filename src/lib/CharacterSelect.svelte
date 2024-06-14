<script lang="ts">
  import { collectionStore, userStore } from "sveltefire";
  import { doc, setDoc } from "firebase/firestore";
  import { firestore, auth } from "./firebase";
  import { character, selectedCharacterId, characters } from "./store";

  const user = userStore(auth);

  import { debounce } from "./store";
  import { AOWCharacterForm } from "./dataTypes";

  var debounced_firebaseUpdate = debounce(async (characterObject: Object) => {
    console.log({ auth, user: $user?.uid });
    if ($character.id.length < 5 || $character.Name.length < 1) return;
    if (!$user) return;
    let payload = {
      ...characterObject,
      uid: $user.uid,
    };
    console.log("sending to firebase...", { payload });
    let outcome = await setDoc(
      doc(firestore, "characters", $character.id),
      payload
    );
    console.log({ outcome });
  }, 500);

  character.subscribe((characterForm) => {
    let e = characterForm?.webExport;
    if (e) debounced_firebaseUpdate(characterForm.webExport);
  });

  //   handles character selection
  function selectCharacter(event: Event) {
    console.log(event?.target?.value);
    if (!event?.target?.value) return;
    let char = $characters.find((e) => e.id == event?.target?.value);

    // $character = $character.redefine(char);
    let t = new AOWCharacterForm();
    t.redefine(char);
    $character = t;
  }

  function newCharacter() {
    let t = new AOWCharacterForm();
    t.id = [...Array(16)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
    $character = t;
  }

  let confirmDelete = false;
  function deleteCharacter() {
    if (!confirmDelete) {
      confirmDelete = true;
      setTimeout(() => (confirmDelete = false), 3000);
      return;
    }

    console.log("deleting", $character.id);
  }
</script>

<div>
  <select bind:value={$selectedCharacterId}>
    <option value={""}>None</option>

    {#each $characters as cloudChar}
      <option value={cloudChar.id}>{cloudChar.Name}</option>
    {/each}
  </select>
  <button on:click={deleteCharacter}>
    {confirmDelete ? "⁉️" : "🗑️"}
  </button>
  <button on:click={newCharacter}>New</button>
  <div>
    <small>
      {$character?.id || "Select a character to begin"}
    </small>
  </div>
</div>

<style>
  small {
    font-size: xx-small;
  }
</style>
