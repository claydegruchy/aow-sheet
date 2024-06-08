<script>
  import { character } from "./store";
  export let v;
  export let lockSheet;
  export let max = -1;

  const up = () => {
    console.log(max, $character[v]);
    if (max > 0) {
      if ($character[v] >= max) return;
    }
    $character[v] += 1;
  };
  const down = () => {
    if ($character[v] <= 0) return;
    $character[v] -= 1;
  };
</script>

{#if $character[v] == undefined && typeof !$character[v] != "number"}
  ERROR
{:else if lockSheet}
  <slot />
{:else}
  <div>
    <button on:click={up}>🔼</button>
    <slot />
    <button on:click={down}>🔽</button>
  </div>
{/if}

<style>
  div {
    border: 1px solid black;
    touch-action: manipulation;
  }
  button {
    height: 4em;
  }

  .disable-dbl-tap-zoom {
  }
</style>
