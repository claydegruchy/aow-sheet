<script>
  export let open = false;
  function toggle() {
    open = !open;
  }
</script>

<a on:click={toggle}>?</a>
<dialog {open}>
  <slot />
  <form method="dialog">
    <button class="close">X</button>
  </form>
</dialog>

<style>
  /* top right close button */
  .close {
    position: absolute;
    top: 1em;
    right: 1em;
  }

  dialog {
    margin-left: 1em;
    margin-right: 1em;
    font-weight: normal;
  }
</style>
