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

<div>
  Warrior of the
  <select
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
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Base Ability</th>
      <th>Level</th>
      <th>Relation</th>
      <th> %</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">{skill.name}</td>
      <td>Melee (STR {$character.STR})</td>
      <td rowspan="2">
        <input
          type="number"
          min="0"
          max="6"
          bind:value={skill.level}
          on:change={(event) =>
            genericUpdate("level", Number(event?.target?.value || 0))}
        />
      </td>
      <td rowspan="2">
        <select
          bind:value={skill.relation}
          on:change={(event) =>
            genericUpdate("relation", Number(event?.target?.value || 0))}
        >
          <option value={2}>Primary (+20)</option>
          <option value={1}>Secondary (+10)</option>
          <option value={0}>None</option>
        </select>
      </td>
      <td>
        <input
          type="number"
          disabled
          value={$character[skill.name + "MeleeScore"]}
        />
      </td>
    </tr>
    <tr>
      <td>Ranged (DEX {$character.DEX})</td>
      <input
        type="number"
        disabled
        value={$character[skill.name + "RangedScore"]}
      />
    </tr>
    <tr> </tr>
    <tr></tr>
  </tbody>
</table>
