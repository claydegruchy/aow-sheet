<script>
  export let character;
  import { weapons } from "./dataTypes";

  let mainWeapon;
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Hands</th>
        <th>Range</th>
        <th>Requires</th>
        <th>Dam</th>
        <th>Roll</th>
      </tr>
    </thead>
    <tbody>
      {#each weapons as x, i}
        {#if $character.weapons.includes(x.name)}
          <tr class={$character.canUseWeapon(x) ? "" : "error"}>
            <td>
              {x.name} ({$character.canUseWeapon(x) ? "" : "Cannot use"})</td
            >
            <td> {x.hands}</td>
            <td> {x.range || 0}</td>
            <td> {x.attributes}</td>
            <td> {x.damage}</td>
            <td>
              {#if $character.canUseWeapon(x)}
                <button on:click={() => (mainWeapon = x)}
                  >{mainWeapon == x ? "Main" : "Set main"}</button
                >
              {:else}
                Cannot use{/if}
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>

<style>
  .error {
    background-color: pink;
  }
</style>
