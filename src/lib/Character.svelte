<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { SkillScore, AOWCharacterForm, KungFuStyle } from "./dataTypes";
  import { kungFuStyles } from "./dataTypes";
  import SkillDisplay from "./SkillDisplay.svelte";

  export let character;

  function handleUpdate(event) {
    const { skill, value } = event.detail;
    console.log(event.detail);
    $character[skill.name] = value;
  }
</script>

<div class="character-form">
  <h2>Character Sheet</h2>
  <div class="top-level-stats">
    <h3>Basics</h3>
    <label>
      Name:
      <input type="text" bind:value={$character.name} />
    </label>
    <label>
      Description:
      <textarea bind:value={$character.Description} />
    </label>
    <label>
      CP:
      <input type="text" bind:value={$character.CP} />
    </label>
    <label>
      Rank:
      <input type="text" value={$character.Rank} />
    </label>
  </div>

  <div class="secondary-stats">
    <h3>Secondary Stats</h3>
    <label>
      BP:
      <input type="text" value={$character.BP} />
    </label>

    <label>
      DR:
      <input type="text" value={$character.DR} />
    </label>

    <label>
      Qi:
      <input type="text" bind:value={$character.Qi} />
    </label>
  </div>

  <div class="ability-scores">
    <h3>Ability Scores</h3>
    <label>
      STR:
      <input type="number" bind:value={$character.STR} />
    </label>

    <label>
      DEX:
      <input type="number" bind:value={$character.DEX} />
    </label>

    <label>
      LOG:
      <input type="number" bind:value={$character.LOG} />
    </label>

    <label>
      WIL:
      <input type="number" bind:value={$character.WIL} />
    </label>
  </div>

  <div class="skill-scores">
    <h3>Skill Scores</h3>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Style</th>

          <th>Level</th>
          <th>PS</th>
          <th>Melee (STR {$character.STR}) %</th>
          <th>Ranged (DEX {$character.DEX}) %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Warrior of the {$character.Warrior1.style.name}</td>
          <td>
            <select bind:value={$character.Warrior1.style}>
              {#each kungFuStyles as style, index}
                <option value={style}>{style.name}</option>
              {/each}
              <option value={""}>None</option>
            </select>
          </td>
          <td
            ><input
              type="number"
              min="0"
              max="6"
              bind:value={$character.Warrior1.level}
            /></td
          >
          <select bind:value={$character.Warrior1.relation}>
            <option value={2}>Primary (+20)</option>
            <option value={1}>Secondary (+10)</option>
            <option value={0}>None</option>
          </select>
          <td
            ><input
              type="number"
              disabled
              value={$character.Warrior1MeleeScore}
            /></td
          >
          <td
            ><input
              type="number"
              disabled
              value={$character.Warrior1RangedScore}
            /></td
          >
        </tr>
      </tbody>
    </table>

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
		<SkillDisplay skill={$character.Warrior1} on:update={handleUpdate} score={$character.Warrior1MeleeScore} score2={$character.Warrior1RangedScore} />
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
  </div>
</div>
