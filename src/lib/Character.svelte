<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { SkillScore, AOWCharacterForm, KungFuStyle } from "./dataTypes";
  import {
    kungFuStyles,
    moralCodes,
    techniques,
    spells,
    equipment,
    armour,
    weapons,
  } from "./dataTypes";
  import SkillDisplay from "./SkillDisplay.svelte";
  import SimpleCard from "./SimpleCard.svelte";
  import WarriorSkillDisplay from "./WarriorSkillDisplay.svelte";
  import SpellCard from "./SpellCard.svelte";
  import ItemCard from "./ItemCard.svelte";
  import WeaponTable from "./WeaponTable.svelte";
  import Dialog from "./Dialog.svelte";
  export let character;

  function handleUpdate(event) {
    const { skill, value } = event.detail;
    console.log(event.detail);
    $character[skill.name] = value;
  }

  let lockSheet = false;
</script>

<h1>Character Sheet</h1>
<label
  >Lock Sheet
  <input type="checkbox" bind:checked={lockSheet} />
</label>
<div class="character-form">
  <div class="name-desc">
    <div>
      <label>
        Name:
        <input disabled={lockSheet} type="text" bind:value={$character.name} />
      </label>
    </div>
    <div>
      <label>
        Description:
        <textarea bind:value={$character.Description} />
      </label>
    </div>
  </div>

  <div class="cp-rank">
    <label>
      CP:
      <input type="number" min="0" max="999" bind:value={$character.CP} />
    </label>
    <div>
      Rank: {$character.Rank}
    </div>
  </div>

  <div class="morals">
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

  <div class="dr-bq-qi">
    <div>
      <label>
        BP:
        <input
          type="number"
          min="0"
          max={$character.BP}
          value={$character.BP}
          inputmode="numeric"
        />
        <a class="flip" on:click={() => ($character.BP = $character.BaseBP)}>
          ↩️
        </a>
      </label>
    </div>

    <div>
      DR: {$character.DR}
    </div>

    <div>
      <label>
        Qi:
        <input
          disabled={lockSheet}
          type="number"
          min="0"
          max="999"
          bind:value={$character.Qi}
        />
      </label>
    </div>
  </div>

  <div class="init-mov">
    <div>
      INIT: {$character.INIT}
    </div>
    <div>
      MOV: {$character.MOV}
    </div>
  </div>

  <div class="base-stats">
    <div>
      <label>
        STR:
        <input
          disabled={lockSheet}
          type="number"
          min="0"
          max="999"
          bind:value={$character.STR}
        />
      </label>
    </div>

    <div>
      <label>
        DEX:
        <input
          disabled={lockSheet}
          type="number"
          min="0"
          max="999"
          bind:value={$character.DEX}
        />
      </label>
    </div>

    <div>
      <label>
        LOG:
        <input
          disabled={lockSheet}
          type="number"
          min="0"
          max="999"
          bind:value={$character.LOG}
        />
      </label>
    </div>

    <div>
      <label>
        WIL:
        <input
          disabled={lockSheet}
          type="number"
          min="0"
          max="999"
          bind:value={$character.WIL}
        />
      </label>
    </div>
  </div>

  <div class="skill-scores">
    <section class="specialist skills">
      <table class="skills">
        <thead>
          <tr>
            <th>Name</th>
            <th>Base Ability</th>
            <th>Level</th>
            <th>P/S</th>
            <th>%</th>
            <th>Notes</th>
          </tr>
        </thead>

        <!-- prettier-ignore -->
        <tbody>
		<SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Alchemy}/>
        <SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Detective}/>
        <SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Diviner}/>
        <SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Leader}/>
        <SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Mystic}/>
        <SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Scholar}/>
        <SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Scout} />
        <SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Sorcerer}/>
        <SkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Thief} />
      </tbody>
      </table>
    </section>
    <!-- prettier-ignore -->
    <section class="warrior skills">
        <WarriorSkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Warrior1} />
        <WarriorSkillDisplay {lockSheet} on:update={handleUpdate} {character} skill={$character.Warrior2} />
      </section>
  </div>

  <div class="abilities">
    {#if $character.learnedTechniques.length > 0 || !lockSheet}
      <h3>Techniques</h3>
    {/if}
    {#if !lockSheet}
      <select multiple bind:value={$character.learnedTechniques}>
        {#each techniques as technique, index}
          {#if $character.allowedTechniques.includes(technique)}
            <option value={technique.name}>{technique.name} </option>
          {/if}
        {/each}
      </select>
    {/if}
    <div>
      {#each techniques as technique, index}
        {#if $character.learnedTechniques.includes(technique.name)}
          <SimpleCard class="red" {...technique} />
        {/if}
      {/each}
    </div>

    {#if $character.spells.length > 0 || !lockSheet}
      <h3>Spells</h3>
    {/if}
    {#if !lockSheet}
      <select multiple bind:value={$character.spells}>
        {#each spells as spell, index}
          <option value={spell.name}>{spell.name}</option>
        {/each}
      </select>
    {/if}
    <div>
      {#each spells as spell, index}
        {#if $character.spells.includes(spell.name)}
          <SpellCard {...spell} />
        {/if}
      {/each}
    </div>
  </div>

  <div class="equipment">
    {#if $character.equipment.length > 0 || !lockSheet}
      <h3>equipment</h3>
    {/if}
    {#if !lockSheet}
      <select multiple bind:value={$character.equipment}>
        {#each [...new Set(equipment.reduce((a, c) => [...a, c.itemType], []))] as type, i}
          <optgroup label={type}>
            {#each equipment.filter((e) => e.itemType == type) as g, index}
              <option value={g.name}>[{g.cost}]{g.name}</option>
            {/each}
          </optgroup>
        {/each}
      </select>
    {/if}

    {#each equipment as x, i}
      {#if $character.equipment.includes(x.name)}
        <ItemCard item={x} />
      {/if}
    {/each}
    <div class="armour">
      {#if $character.armour.length > 0 || !lockSheet}
        <h3>armour</h3>
      {/if}
      {#if !lockSheet}
        <select multiple bind:value={$character.armour}>
          {#each armour as g, index}
            <option value={g.name}>[{g.cost}] {g.name}</option>
          {/each}
        </select>
      {/if}
      {#each armour as x, i}
        {#if $character.armour.includes(x.name)}
          <ItemCard item={x} />
        {/if}
      {/each}
    </div>
  </div>

  <div class="weapons">
    <h3>weapons</h3>
    {#if !lockSheet}
      <select multiple bind:value={$character.weapons}>
        {#each [...new Set(weapons.reduce((a, c) => [...a, c.subType], []))] as type, i}
          <optgroup label={type}>
            {#each weapons.filter((e) => e.subType == type) as g, index}
              <option value={g.name}
                >[{g.cost}] {g.name}
                {$character.trainedWithWeapon(g) ? "(T)" : ""}</option
              >
            {/each}
          </optgroup>
        {/each}
      </select>
    {/if}
    <WeaponTable {character} />
  </div>
</div>

<style>
  tr {
    text-align: left;
  }

  .techniques-list {
    display: flex;
    flex-direction: row;
    /* wrap */
    flex-wrap: wrap;
  }
  input [type="checkbox"] {
    display: none;
  }
  .red {
    color: #ff0000;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    /* black lines */
    border: 1px solid;

    /* padding: 1px; */
  }

  table,
  th,
  td {
    border: 1px solid;
    padding: 2px;
    padding-right: 10px;
  }

  @media (max-width: 1px) {
    .character-form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        "name-desc name-desc name-desc cp-rank morals morals"
        "base-stats skill-scores skill-scores skill-scores skill-scores skill-scores"
        "base-stats skill-scores skill-scores skill-scores skill-scores skill-scores"
        "init-mov skill-scores skill-scores skill-scores skill-scores skill-scores"
        "dr-bq-qi abilities abilities abilities abilities equipment"
        ". abilities abilities abilities abilities equipment"
        "weapons weapons weapons weapons weapons equipment";
    }
  }

  @media (max-width: 76800000px) {
    .character-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "name-desc name-desc"
        "morals cp-rank"
        "base-stats dr-bq-qi"
        "init-mov ."
        "skill-scores skill-scores"
        "skill-scores skill-scores"
        "abilities abilities"
        "abilities abilities"
        "equipment equipment"
        "weapons weapons";
    }

    .name-desc,
    .morals,
    .cp-rank,
    .base-stats,
    .skill-scores,
    .init-mov,
    .dr-bq-qi,
    .equipment,
    .weapons,
    .abilities {
      margin-bottom: 10px; /* Add some spacing between sections */
    }

    table > * {
      font-size: 20%;
    }
  }

  .name-desc {
    grid-area: name-desc;
  }

  .morals {
    grid-area: morals;
  }

  .cp-rank {
    grid-area: cp-rank;
  }

  .base-stats {
    grid-area: base-stats;
  }

  .skill-scores {
    grid-area: skill-scores;
  }

  .init-mov {
    grid-area: init-mov;
  }

  .dr-bq-qi {
    grid-area: dr-bq-qi;
  }

  .equipment {
    grid-area: equipment;
  }

  .weapons {
    grid-area: weapons;
  }

  .abilities {
    grid-area: abilities;
  }
</style>
