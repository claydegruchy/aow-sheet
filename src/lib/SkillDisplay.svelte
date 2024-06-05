<script type="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let skill;
  export let character;
  export let lockSheet;

  const genericUpdate = (key, value) =>
    dispatch("update", { skill, value: { ...skill, [key]: value } });
</script>

<tr>
  <td>{skill.name}</td>
  <td>{skill.baseAbility}/2 ({$character[skill.baseAbility]})</td>
  <td>
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
  <td>
    <select
      bind:value={skill.relation}
      disabled={skill.level <= 0}
      on:change={(event) =>
        genericUpdate("relation", Number(event?.target?.value || 0))}
    >
      <option value={2}>P (+20)</option>
      <option value={1}>S (+10)</option>
      <option value={0}>None</option>
    </select>
  </td>
  <td>
    <div>
      {$character[skill.name + "Score"]}
    </div>
  </td>
  <td class="left">
    {skill.linkedSkill.abilities.map((e) => e.name).join(", ")}
    <a>?</a>
  </td>
</tr>

<style>
  .left {
    text-align: left;
  }
</style>
