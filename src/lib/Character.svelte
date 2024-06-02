<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { SkillScore, AOWCharacterForm, KungFuStyle } from "./dataTypes";
  import { kungFuStyles, moralCodes, techniques } from "./dataTypes";
  import SkillDisplay from "./SkillDisplay.svelte";
  import SimpleCard from "./SimpleCard.svelte";
  import WarriorSkillDisplay from "./WarriorSkillDisplay.svelte";
  export let character;

  function handleUpdate(event) {
    const { skill, value } = event.detail;
    console.log(event.detail);
    $character[skill.name] = value;
  }

  let showUnknownTechniques = false;
  function toggleShowUnknownTechniques() {
    showUnknownTechniques = !showUnknownTechniques;
  }

  function toggleTechnique(name: string) {
    $character.learnedTechniques.push(name);
    $character = $character;
  }

  //   let spendingCP = true;
  //   //   $: $character.CP, $character.CP <= 0 ? (spendingCP = false) : "";

  //   function toggleSpendCp() {
  //     spendingCP = !spendingCP;
  //   }

  //   auto update bp on hp max change
  //   $: $character.BaseBP, ($character.BP = $character.BaseBP);
</script>

<div class="character-form">
  <h2>Character Sheet</h2>
  <!-- <button on:click={toggleSpendCp}>
    {spendingCP ? "Stop Spending" : "Spend CP"}
  </button> -->
  <div class="top-level-stats">
    <h3>Basics</h3>
    <div>
      <label>
        Name:
        <input type="text" bind:value={$character.name} />
      </label>
    </div>
    <div>
      <label>
        Description:
        <textarea bind:value={$character.Description} />
      </label>
    </div>
    <div>
      <label>
        CP:
        <input
          type="number"
          min="0"
          max="999"
          disabled
          bind:value={$character.CP}
        />
      </label>
    </div>
    <div>
      <label>
        Rank:
        <input
          type="number"
          min="0"
          max="999"
          disabled
          value={$character.Rank}
        />
      </label>
    </div>
  </div>

  <div class="morals">
    <h3>Morals</h3>

    {#each ["Totally", "Very", "Somewhat"] as devotion, idx}
      <div>
        {devotion}
        <select bind:value={$character.MoralCodes[devotion]}>
          <option value={-1}>-</option>
          {#each moralCodes as moral, index}
            <option value={index}>{moral}</option>
          {/each}
        </select>
      </div>
    {/each}
  </div>

  <div class="secondary-stats">
    <h3>Secondary Stats</h3>
    <div>
      <label>
        BP:
        <input type="number" min="0" max="999" value={$character.BP} />
        <a on:click={() => ($character.BP = $character.BaseBP)}>Reset</a>
      </label>
    </div>

    <div>
      <label>
        DR:
        <input type="number" min="0" max="999" disabled value={$character.DR} />
      </label>
    </div>

    <div>
      <label>
        Qi:
        <input type="number" min="0" max="999" bind:value={$character.Qi} />
      </label>
    </div>
  </div>

  <div class="tertiary-stats">
    <h3>tertiary stats</h3>

    <div>
      <label>
        INIT:
        <input
          type="number"
          min="0"
          max="999"
          disabled
          bind:value={$character.INIT}
        />
      </label>
    </div>
    <div>
      <label>
        MOV:
        <input
          type="number"
          min="0"
          max="999"
          disabled
          bind:value={$character.MOV}
        />
      </label>
    </div>
  </div>

  <div class="ability-scores">
    <h3>Ability Scores</h3>
    <div>
      <label>
        STR:
        <input type="number" min="0" max="999" bind:value={$character.STR} />
      </label>
    </div>

    <div>
      <label>
        DEX:
        <input type="number" min="0" max="999" bind:value={$character.DEX} />
      </label>
    </div>

    <div>
      <label>
        LOG:
        <input type="number" min="0" max="999" bind:value={$character.LOG} />
      </label>
    </div>

    <div>
      <label>
        WIL:
        <input type="number" min="0" max="999" bind:value={$character.WIL} />
      </label>
    </div>
  </div>

  <div class="skill-scores">
    <h3>Skill Scores</h3>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Base Ability</th>
          <th>Level</th>
          <th>Relation</th>
          <th>%</th>
        </tr>
      </thead>

      <!-- prettier-ignore -->
      <tbody>
		<SkillDisplay on:update={handleUpdate} {character} skill={$character.Alchemy}/>
        <SkillDisplay on:update={handleUpdate} {character} skill={$character.Detective}/>
        <SkillDisplay on:update={handleUpdate} {character} skill={$character.Diviner}/>
        <SkillDisplay on:update={handleUpdate} {character} skill={$character.Leader}/>
        <SkillDisplay on:update={handleUpdate} {character} skill={$character.Mystic}/>
        <SkillDisplay on:update={handleUpdate} {character} skill={$character.Scholar}/>
        <SkillDisplay on:update={handleUpdate} {character} skill={$character.Scout} />
        <SkillDisplay on:update={handleUpdate} {character} skill={$character.Sorcerer}/>
        <SkillDisplay on:update={handleUpdate} {character} skill={$character.Thief} />
      </tbody>
    </table>
    <!-- prettier-ignore -->
    <div>
      <section>
        <WarriorSkillDisplay on:update={handleUpdate} {character} skill={$character.Warrior1} />
        <WarriorSkillDisplay on:update={handleUpdate} {character} skill={$character.Warrior2} />
      </section>
    </div>
  </div>

  <div class="talents-spells-abilities">
    <h4>Techniques</h4>
    <div>
      {#each techniques as technique, index}
        {#if $character.Warrior1.style?.techniques?.includes(technique.name)}
          <SimpleCard class="red" {...technique} />
        {/if}
      {/each}
    </div>
    <h4>Spells</h4>
    <div>
      {#each $character.spells as spell, index}
        {spell}
      {/each}
    </div>
  </div>

  <div class="equipment"></div>
</div>

<style>
  .techniques-list {
    display: flex;
    flex-direction: row;
    /* wrap */
    flex-wrap: wrap;
  }
  input[type="checkbox"] {
    display: none;
  }
  .red {
    color: #ff0000;
  }
</style>
