<script lang="ts">
  import AuthHandler from "./lib/AuthHandler.svelte";
  import Character from "./lib/Character.svelte";
  import NotificationHandler from "./lib/NotificationHandler.svelte";
  console.log("starting");
</script>

<main>
  <AuthHandler>
    <NotificationHandler />
    <Character />
  </AuthHandler>
</main>

<style>
</style>
