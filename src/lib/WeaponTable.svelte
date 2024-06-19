<script lang="ts">
  export let character;
  import { weapons } from "./dataTypes";

  let mainWeapon;

  //   $: character,

  let ab = (bonus) => (bonus == 0 ? "" : "+" + bonus);

  let bs = ({ subType }) => {
    let b = 0;
    if (subType == "Ranged") {
      b = Math.max(
        $character.Warrior1RangedScore,
        $character.Warrior2RangedScore
      );
    } else {
      b = Math.max(
        $character.Warrior1MeleeScore,
        $character.Warrior2MeleeScore
      );
    }

    // <!--
    // 		Warrior1MeleeScore

    // 		Warrior2MeleeScore -->

    //           {$character[x.subType + "Score"]}
    //           <!-- {$character[skill.name + "RangedScore"]} -->
    return b;
  };

  let w = [];
  $: character,
    (w = weapons
      .filter((weapon) => $character.weapons.includes(weapon.name))
      .map((weapon) => {
        let g = {
          ...weapon,
          meetRequirements: $character.canUseWeapon(weapon),
          trained: $character.trainedWithWeapon(weapon),
          bonus:
            weapon.subType == "Melee"
              ? $character.MeleeDamageModifier
              : $character.RangedDamageModifier,
        };
        return g;
      }));

  //
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Hands</th>
        <th>Range</th>
        <th>Requires</th>
        <th>Dam</th>
        <th class="score">%</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Unarmed</td>
        <td>1</td>
        <td>0</td>
        <td>Hand</td>
        <td>{$character.kungFuDamage}{ab($character.MeleeUnarmedModifier)}</td>
        <!-- below is a hack that uses an unused variable to force refresh -->
        <td>{bs({ subType: "Melee", c: $character })}</td>
      </tr>
      {#each w as x, i}
        <tr>
          <td> {x.name} {x.trained ? "(T)" : ""}</td>
          <td> {x.hands}</td>
          <td> {x.range || 0}</td>
          <td> {x.attributes} {x.meetRequirements ? "" : "❌"}</td>
          <td> {x.meetRequirements ? x.damage + ab(x.bonus) : "0"}</td>
          <td class="score">
            {x.meetRequirements ? bs(x) : 0}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .error {
    background-color: pink;
  }

  table {
    border-collapse: collapse;
  }
</style>
