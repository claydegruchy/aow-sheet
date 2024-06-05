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
  export let character;

  function handleUpdate(event) {
    const { skill, value } = event.detail;
    console.log(event.detail);
    $character[skill.name] = value;
  }

  let lockSheet = false;
</script>

<div class="character-form">
  <h1>Character Sheet</h1>
  <label
    >Lock Sheet
    <input type="checkbox" bind:checked={lockSheet} />
  </label>
  <div class="top-level-stats">
    <h2>Basics</h2>
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
    <div>
      <label>
        CP:
        <input type="number" min="0" max="999" bind:value={$character.CP} />
      </label>
    </div>
    <div>
      Rank: {$character.Rank}
    </div>
  </div>

  <div class="morals">
    <h2>Morals</h2>

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
    <h2>Secondary Stats</h2>
    <div>
      <label>
        BP:
        <input
          disabled={lockSheet}
          type="number"
          min="0"
          max="999"
          value={$character.BP}
        />
        <a on:click={() => ($character.BP = $character.BaseBP)}>Reset</a>
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

  <div class="tertiary-stats">
    <h2>tertiary stats</h2>

    <div>
      INIT: {$character.INIT}
    </div>
    <div>
      MOV: {$character.MOV}
    </div>
  </div>

  <div class="damage-modifiers">
    Damage Mods
    <table>
      <thead>
        <tr>
          <th>Melee (W)</th>
          <th>Melee (UA)</th>
          <th>Ranged</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{$character.MeleeDamageModifier}</td>
          <td>{$character.MeleeUnarmedModifier}</td>
          <td>{$character.RangedDamageModifier}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="ability-scores">
    <h2>Ability Scores</h2>
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
    <h2>Skill Scores</h2>

    <section class="specialist skills">
      <table>
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

  <div class="talents-spells-abilities">
    <h3>Techniques</h3>
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

    <h3>Spells</h3>
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
    <h3>equipment</h3>
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
  </div>

  <div class="armour">
    <h3>armour</h3>
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
</style>
