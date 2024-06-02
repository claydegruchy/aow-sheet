<script type="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let skill;
  export let character;

  const genericUpdate = (key, value) =>
    dispatch("update", { skill, value: { ...skill, [key]: value } });
</script>

<tr>
  <td>{skill.name}</td>
  <td>{skill.baseAbility} ({$character[skill.baseAbility]})</td>
  <td>
    <input
      type="number"
      min="0"
      max="6"
      bind:value={skill.level}
      on:change={(event) =>
        genericUpdate("level", Number(event?.target?.value || 0))}
    />
  </td>
  <td>
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
  <td
    ><input
      type="number"
      disabled
      value={$character[skill.name + "Score"]}
    /></td
  >
</tr>

<tr> </tr>

<style></style>
