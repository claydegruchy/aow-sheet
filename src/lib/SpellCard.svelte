<script>
  export let name;
  export let range;
  export let usage;
  export let duration;
  export let resist;
  export let effect;

  let shink = true;
  function toggleShrink() {
    shink = !shink;
  }
</script>

<div>
  <h4>{name}</h4>
  {#if shink}
    {effect}
  {:else}
    <p>{usage} {duration} {resist} {effect}</p>
  {/if}
</div>
