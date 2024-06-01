<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type {
    SkillScore,
    AOWCharacterForm,
    KungFuStyle,
    techniques,
  } from "./dataTypes";
  import { kungFuStyles, moralCodes } from "./dataTypes";
  import SkillDisplay from "./SkillDisplay.svelte";
  import SimpleCard from "./SimpleCard.svelte";

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
		<SkillDisplay skill={$character.Alchemy} base={$character.LOG} on:update={handleUpdate} score={$character.AlchemyScore} />
        <SkillDisplay skill={$character.Detective} base={$character.LOG} on:update={handleUpdate} score={$character.DetectiveScore} />
        <SkillDisplay skill={$character.Diviner} base={$character.LOG} on:update={handleUpdate} score={$character.DivinerScore} />
        <SkillDisplay skill={$character.Leader} base={$character.WIL} on:update={handleUpdate} score={$character.LeaderScore} />
        <SkillDisplay skill={$character.Mystic} base={$character.WIL} on:update={handleUpdate} score={$character.MysticScore} />
        <SkillDisplay skill={$character.Scholar} base={$character.LOG} on:update={handleUpdate} score={$character.ScholarScore} />
        <SkillDisplay skill={$character.Scout} base={$character.LOG} on:update={handleUpdate} score={$character.ScoutScore} />
        <SkillDisplay skill={$character.Sorcerer} base={$character.WIL} on:update={handleUpdate} score={$character.SorcererScore} />
        <SkillDisplay skill={$character.Thief} base={$character.DEX} on:update={handleUpdate} score={$character.ThiefScore} />
      </tbody>
    </table>

    <div>
      <section>
        <div>
          Warrior of the
          <select bind:value={$character.Warrior1.style}>
            <option value={""}>Not selected</option>
            {#each kungFuStyles as style, index}
              <option value={style}>{style.name}</option>
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
              <td rowspan="2">Warrior 1</td>
              <td>Melee (STR {$character.STR})</td>
              <td rowspan="2"
                ><input
                  type="number"
                  min="0"
                  max="6"
                  bind:value={$character.Warrior1.level}
                /></td
              >
              <td rowspan="2">
                <select bind:value={$character.Warrior1.relation}>
                  <option value={2}>Primary (+20)</option>
                  <option value={1}>Secondary (+10)</option>
                  <option value={0}>None</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  disabled
                  value={$character.Warrior1MeleeScore}
                />
              </td>
            </tr>
            <tr>
              <td>Ranged (DEX {$character.DEX})</td>
              <input
                type="number"
                disabled
                value={$character.Warrior1RangedScore}
              />
            </tr>
            <tr> </tr>
            <tr></tr>
          </tbody>
        </table>
        {#if $character.Warrior1.style}
          <div>
            <h4>
              Techniques of the {$character.Warrior1.style.name} style
            </h4>
            <button on:click={toggleShowUnknownTechniques}
              >{showUnknownTechniques ? "Hide" : "Show"} unlearned techniques</button
            >
            <div class="techniques-list">
              {#each $character.Warrior1.style.techniques as technique, index}
                {#if $character.learnedTechniques?.includes(technique.name)}
                  <SimpleCard class="red" {...technique} />
                {:else}
                  <!--  -->
                  {#if showUnknownTechniques}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <a on:click={() => toggleTechnique(technique.name)}>
                      <SimpleCard class="wiggle" {...technique} />
                    </a>
                  {/if}
                  <!--  -->
                {/if}
              {/each}
            </div>
          </div>
        {/if}
      </section>
      <section>
        <div>
          Warrior of the
          <select bind:value={$character.Warrior2.style}>
            <option value={""}>Not selected</option>
            {#each kungFuStyles as style, index}
              <option value={style}>{style.name}</option>
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
              <td rowspan="2">Warrior 2</td>
              <td>Melee (STR {$character.STR})</td>
              <td rowspan="2"
                ><input
                  type="number"
                  min="0"
                  max="6"
                  bind:value={$character.Warrior2.level}
                /></td
              >
              <td rowspan="2">
                <select bind:value={$character.Warrior2.relation}>
                  <option value={2}>Primary (+20)</option>
                  <option value={1}>Secondary (+10)</option>
                  <option value={0}>None</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  disabled
                  value={$character.Warrior2MeleeScore}
                />
              </td>
            </tr>
            <tr>
              <td>Ranged (DEX {$character.DEX})</td>
              <input
                type="number"
                disabled
                value={$character.Warrior2RangedScore}
              />
            </tr>
            <tr> </tr>
            <tr></tr>
          </tbody>
        </table>

        {#if $character.Warrior1.style}
          <div>
            <h4>
              Techniques of the {$character.Warrior1.style.name} style
            </h4>
            <button on:click={toggleShowUnknownTechniques}
              >{showUnknownTechniques ? "Hide" : "Show"} unlearned techniques</button
            >
            <div class="techniques-list">
              {#each $character.Warrior1.style.techniques as technique, index}
                {#if $character.learnedTechniques?.includes(technique.name)}
                  <SimpleCard class="red" {...technique} />
                {:else}
                  <!--  -->
                  {#if showUnknownTechniques}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <a on:click={() => toggleTechnique(technique.name)}>
                      <SimpleCard class="wiggle" {...technique} />
                    </a>
                  {/if}
                  <!--  -->
                {/if}
              {/each}
            </div>
          </div>
        {/if}
      </section>
    </div>
  </div>

  <div class="talents-spells-abilities"></div>
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
