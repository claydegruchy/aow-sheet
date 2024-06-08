<script>
  // basics
  export let name;
  export let desc;

  // items
  export let itemType;

  // armour
  export let DR;
  //   weapons
  export let hands;
  // spells
  export let range;
  export let usage;
  export let duration;
  export let resist;
  export let effect;

  let shrink = true;
</script>

<div class="card">
  <h4>{name}</h4>
  {#if desc}{desc}{/if}
  {#if itemType == "Weapon"}
    {hands}
  {/if}

  {#if itemType == "Armour"}
    {DR}
  {/if}

  <div>
    {#if !shrink}
      <p>
        {#if range}
          {range} |
        {/if}
        {#if resist}
          {resist} |
        {/if}
        {#if duration}
          {duration}
        {/if}
      </p>
      {#if usage}
        <p>usage: {usage}</p>
      {/if}
    {/if}

    {#if effect}
      <p>{effect}</p>
    {/if}
  </div>
</div>

<style>
  .card {
    width: 30%;
    border: 1px solid black;
    padding: 5px;
    min-width: 140px;
  }
</style>
