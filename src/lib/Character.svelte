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
  import WeaponTable from "./WeaponTable.svelte";

  import { character } from "./store";

  function handleUpdate(event) {
    const { skill, value } = event.detail;
    console.log(event.detail);
    $character[skill.name] = value;
  }

  let lockSheet = false;
  const toggleLock = () => (lockSheet = !lockSheet);

  const upNumber = (e) => console.log(e);
</script>

<div class="fixed">
  <button on:click={toggleLock}>{lockSheet ? "🔒" : "🔓"}</button>
</div>

<div>
  <button value="lmao" on:click={upNumber}>text</button>
</div>

<div class="character-form">
  <div class="name-desc">
    <div>
      <label>
        <span>Name</span>
        <input disabled={lockSheet} type="text" bind:value={$character.name} />
      </label>
    </div>
    <div>
      <label>
        <span> Description </span>
        <textarea disabled={lockSheet} bind:value={$character.Description} />
      </label>
    </div>
  </div>

  <div class="cp-rank">
    <label>
      <span> CP</span>
      <input type="number" min="0" max="999" bind:value={$character.CP} />
    </label>
    <label>
      <span> Rank</span>
      <input type="number" min="0" max="10" disabled value={$character.Rank} />
    </label>
  </div>

  <div class="morals">
    {#each ["Totally", "Very", "Somewhat"] as devotion, idx}
      <div>
        <label>
          <span>
            {devotion}
          </span>
          <select
            disabled={lockSheet}
            bind:value={$character.MoralCodes[devotion]}
          >
            <option value={-1}>-</option>
            {#each moralCodes as moral, index}
              <option value={index}>{moral}</option>
            {/each}
          </select>
        </label>
      </div>
    {/each}
  </div>

  <div class="dr-bq-qi v-align">
    <div>
      <label>
        <span> BP</span>
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
      <label>
        <span>DR</span>
        <input disabled type="number" min="0" max="10" value={$character.DR} />
      </label>
    </div>

    <div>
      <label>
        <span>Qi</span>
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
    <label>
      <span>INIT</span>
      <input disabled type="number" min="0" max="10" value={$character.INIT} />
    </label>
    <label>
      <span>MOV</span>
      <input disabled type="number" min="0" max="10" value={$character.MOV} />
    </label>
  </div>

  <div class="base-stats">
    <div>
      <label>
        <span> STR</span>
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
        <span> DEX</span>
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
        <span> LOG</span>
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
        <span> WIL</span>
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
      <table class="theme">
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

  <section class="abilities">
    <div class="techniques">
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
      <div class="card-deck">
        {#each techniques as technique, index}
          {#if $character.learnedTechniques.includes(technique.name)}
            <SimpleCard {...technique} />
          {/if}
        {/each}
      </div>
    </div>
    <div class="spells">
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
      <div class="card-deck">
        {#each spells as spell, index}
          {#if $character.spells.includes(spell.name)}
            <SimpleCard {...spell} />
          {/if}
        {/each}
      </div>
    </div>

    <div class="gear">
      {#if $character.equipment.length > 0 || !lockSheet}
        <h3>equipment</h3>
      {/if}
      {#if !lockSheet}
        <select class="thin" multiple bind:value={$character.equipment}>
          {#each [...new Set(equipment.reduce((a, c) => [...a, c.itemType], []))] as type, i}
            <optgroup label={type}>
              {#each equipment.filter((e) => e.itemType == type) as g, index}
                <option value={g.name}>[{g.cost}]{g.name}</option>
              {/each}
            </optgroup>
          {/each}
        </select>
      {/if}
      <div class="card-deck">
        {#each equipment as x, i}
          {#if $character.equipment.includes(x.name)}
            <SimpleCard {...x} />
          {/if}
        {/each}
      </div>
    </div>
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
      <div class="card-deck">
        {#each armour as x, i}
          {#if $character.armour.includes(x.name)}
            <SimpleCard {...x} />
          {/if}
        {/each}
      </div>
    </div>
  </section>

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

  .fixed {
    position: fixed;
    bottom: 2%;
    right: 2%;
    font-size: 150%;
    cursor: pointer;
  }
  .fixed > button {
    font-size: 0.8em;
  }

  .v-align {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 8px; /* Adjust vertical gap between items if needed */
    text-align: left;
  }

  .card-deck {
    display: flex;
    flex-wrap: wrap;
	justify-content: space-around;
    gap: 5px;
  }
</style>
