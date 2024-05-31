<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { SkillScore, AOWCharacterForm } from "./dataTypes";
  import SkillDisplay from "./SkillDisplay.svelte";

  export let character;

  function handleUpdate(event) {
    const { skill,  value } = event.detail;
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
          <th>Level</th>
          <th>PS</th>
          <th>Melee (STR {$character.STR}) %</th>
          <th>Ranged (DEX {$character.DEX}) %</th>
        </tr>
      </thead>
      <!-- prettier-ignore -->
      <tbody>

		  <tr>
			  <td>Warrior of the {$character.Warrior1.style}</td>          
			  <td><input type="number" bind:value={$character.Warrior1.level} /></td>
			  <td></td>
			  <td><input type="number" disabled value={$character.Warrior1MeleeScore} /></td>
			  <td><input type="number" disabled value={$character.Warrior1RangedScore} /></td>
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

		<SkillDisplay skill={$character.Alchemy} on:update={handleUpdate} />

        <tr>
          <td>Alchemy</td>          
		  <td>LOG ({$character.LOG})</td>
          <td><input type="number" bind:value={$character.Alchemy.level} /></td>
          <td>
			<select bind:value={$character.Alchemy.relation} >
				<option value={2}>Primary (+20)</option>
				<option value={1}>Secondary (+10)</option>
				<option value={0}>None</option>
			</select>	
		  </td>
          <td><input type="number" disabled value={$character.AlchemyScore} /></td>
        </tr>
        <tr>
          <td>Detective</td>          
		  <td>LOG ({$character.LOG})</td>
          <td><input type="number" bind:value={$character.Detective.level} /></td>
          <td></td>
          <td><input type="number" disabled value={$character.DetectiveScore} /></td>
        </tr>
        <tr>
          <td>Diviner</td>          
		  <td>LOG ({$character.LOG})</td>
          <td><input type="number" bind:value={$character.Diviner.level} /></td>
          <td></td>
          <td><input type="number" disabled value={$character.DivinerScore} /></td>
        </tr>
        <tr>
          <td>Leader</td>          
		  <td>WIL ({$character.WIL})</td>
          <td><input type="number" bind:value={$character.Leader.level} /></td>
          <td></td>
          <td><input type="number" disabled value={$character.LeaderScore} /></td>
        </tr>
        <tr>
          <td>Mystic</td>          
		  <td>WIL ({$character.WIL})</td>
          <td><input type="number" bind:value={$character.Mystic.level} /></td>
          <td></td>
          <td><input type="number" disabled value={$character.MysticScore} /></td>
        </tr>
        <tr>
          <td>Scholar</td>          
		  <td>LOG ({$character.LOG})</td>
          <td><input type="number" bind:value={$character.Scholar.level} /></td>
          <td></td>
          <td><input type="number" disabled value={$character.ScholarScore} /></td>
        </tr>
        <tr>
          <td>Scout</td>          
		  <td>LOG ({$character.LOG})</td>
          <td><input type="number" bind:value={$character.Scout.level} /></td>
          <td></td>
          <td><input type="number" disabled value={$character.ScoutScore} /></td>
        </tr>
        <tr>
          <td>Sorcerer</td>          
		  <td>WIL ({$character.WIL})</td>
          <td><input type="number" bind:value={$character.Sorcerer.level} /></td>
          <td></td>
          <td><input type="number" disabled value={$character.SorcererScore} /></td>
        </tr>
        <tr>
          <td>Thief</td>          
		  <td>DEX ({$character.DEX})</td>
          <td><input type="number" bind:value={$character.Thief.level} /></td>
          <td></td>
          <td><input type="number" disabled value={$character.ThiefScore} /></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
