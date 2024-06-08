<script type="ts">
  import { createEventDispatcher } from "svelte";
  import Dialog from "./Dialog.svelte";
  const dispatch = createEventDispatcher();
  export let skill;
  export let character;
  export let lockSheet;

  const genericUpdate = (key, value) =>
    dispatch("update", { skill, value: { ...skill, [key]: value } });

  const up = () => {
    if (skill.level >= 6) return;
    genericUpdate("level", (skill.level += 1));
  };
  const down = () => {
    if (skill.level <= 0) return;
    genericUpdate("level", (skill.level -= 1));
  };
</script>

<tr>
  <td>{skill.name}</td>
  <td>{skill.baseAbility}/2 ({$character[skill.baseAbility]})</td>
  <td>
    {#if !lockSheet}<button on:click={up}>🔼</button>{/if}
    <input
      type="number"
      min="0"
      max="6"
      disabled={lockSheet}
      bind:value={skill.level}
      on:change={(event) =>
        genericUpdate("level", Number(event?.target?.value || 0))}
    />
    {#if !lockSheet}<button on:click={down}>🔽</button>{/if}
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
    <Dialog>
      <h3>{skill.name} Abilities</h3>
      {#each skill.linkedSkill.abilities as ability, index}
        <div>
          <h4>{ability.name}</h4>
          <p>{ability.desc}</p>
        </div>
      {/each}
    </Dialog>
  </td>
</tr>

<style>
  .left {
    text-align: left;
  }

  td {
    border: 1px solid;
    padding: 2px;
    padding-right: 10px;
  }
</style>
