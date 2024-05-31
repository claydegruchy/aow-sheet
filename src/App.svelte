<script lang="ts">
  import { AOWCharacterForm } from "./lib/dataTypes";
  import Character from "./lib/Character.svelte";
  // import writable
  import { writable } from "svelte/store";

  var character = writable(new AOWCharacterForm());
</script>

<main>
  <Character {character} />
</main>

<style>
</style>
