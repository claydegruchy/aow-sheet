<script type="ts">
  import { createEventDispatcher } from "svelte";
  import Dialog from "./Dialog.svelte";
  import { items, skills } from "./dataTypes";
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
  <td>
    {skill.name}
    <Dialog>
      <h3>{skill.name}</h3>
      <p>
        {skill.linkedSkill.desc}
      </p>
      {#if skill.linkedSkill.requiredForAttempt}
        You must have at least one level to attempt this skills.
      {:else}
        You may attempt this skill, even if you do not have a level in it.
      {/if}
      <h4>Ranks</h4>
      <p>{skill.linkedSkill.titles.join(", ")}</p>
    </Dialog>
  </td>
  <td class="score">
    {$character[skill.name + "Score"]}
  </td>
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
    {#if !lockSheet}
      <select
        class="thin"
        bind:value={skill.relation}
        disabled={skill.level <= 0}
        on:change={(event) =>
          genericUpdate("relation", Number(event?.target?.value || 0))}
      >
        <option value={2}>Primary (+20)</option>
        <option value={1}>Secondary (+10)</option>
        <option value={0}>None</option>
      </select>
    {:else if skill.relation == 2}
      P (+20)
    {:else if skill.relation == 1}
      S (+10)
    {/if}
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
</style>
