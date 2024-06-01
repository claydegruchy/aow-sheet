<script type="ts">
  import { createEventDispatcher } from "svelte";
  import { kungFuStyles } from "./dataTypes";
  // import type { SkillScore, WarriorScore } from "./dataTypes";

  const dispatch = createEventDispatcher();
  export let skill;
  export let base;
  export let score;
  export let score2 = null;

  let warrior = false;
  if (score2 != null) warrior = true;
  console.log({ score2, warrior, skill: skill.name });

  const genericUpdate = (key, value) =>
    dispatch("update", { skill, value: { ...skill, [key]: value } });
</script>

<tr>
  <td>{skill.name}</td>
  <td>
    {#if !warrior}
      <!-- Base Ability -->
      {skill.baseAbility} ({base})
    {:else}
      <!-- Style -->
      <select
        bind:value={skill.style}
        on:change={(event) => genericUpdate("style", event.target.value)}
      >
        {#each kungFuStyles as style, index}
          <option value={style.name}>{style.name}</option>
        {/each}
        <option value={""}>None</option>
      </select>
    {/if}
  </td>
  <td
    ><input
      type="number"
      min="0"
      max="6"
      bind:value={skill.level}
      on:change={(event) =>
        genericUpdate("level", Number(event?.target?.value || 0))}
    /></td
  >
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
  <td><input type="number" disabled value={score} /></td>
</tr>

<tr> </tr>

<style></style>
