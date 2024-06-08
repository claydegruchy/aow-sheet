<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { kungFuStyles } from "./dataTypes";
  export let skill;
  export let character;
  export let lockSheet;

  const genericUpdate = (key, value) =>
    dispatch("update", { skill, value: { ...skill, [key]: value } });
</script>

<div class="container">
  <div>
    Warrior of the
    <select
      disabled={lockSheet}
      bind:value={skill.style}
      on:change={(event) => genericUpdate("style", event?.target?.value || "")}
    >
      <option value={""}>Not selected</option>
      {#each kungFuStyles as style, index}
        <option value={style.name}>{style.name}</option>
      {/each}
    </select>
    style
  </div>
  <table class="format">
    <thead>
      <tr>
        <th>Name</th>
        <th>Ability</th>
        <th>Level</th>
        <th>Relation</th>
        <th> %</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">{skill.style || "Untrained"}</td>
        <td>Melee (STR {$character.STR})</td>
        <td rowspan="2">
          <input
            type="number"
            min="0"
            max="6"
            disabled={lockSheet}
            bind:value={skill.level}
            on:change={(event) =>
              genericUpdate("level", Number(event?.target?.value || 0))}
          />
        </td>
        <td rowspan="2">
          <select
            bind:value={skill.relation}
            disabled={skill.level <= 0 || lockSheet === true}
            on:change={(event) =>
              genericUpdate("relation", Number(event?.target?.value || 0))}
          >
            <option value={2}>P (+20)</option>
            <option value={1}>S (+10)</option>
            <option value={0}>None</option>
          </select>
        </td>
        <td>
          {$character[skill.name + "MeleeScore"]}
        </td>
      </tr>
      <tr>
        <td>Ranged (DEX {$character.DEX})</td>
        {$character[skill.name + "RangedScore"]}
      </tr>
      <tr> </tr>
      <tr></tr>
    </tbody>
  </table>
</div>

<style>
  td,
  th {
    border: 1px solid;
    padding: 2px;
    padding-right: 10px;
    width: 0%;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    /* black lines */
    border: 1px solid;

    /* padding: 1px; */
  }
  .container {
    border: 1px solid;
    margin: 3px;
  }
</style>
