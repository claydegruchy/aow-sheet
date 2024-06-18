<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { kungFuStyles, techniques } from "./dataTypes";
  import Dialog from "./Dialog.svelte";
  import SimpleCard from "./SimpleCard.svelte";
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

  let expandStyles = false;
</script>

<div class="container">
  <table class="format">
    <thead>
      <tr>
        <th>
          Warrior

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
            <h3>{skill.name} Abilities</h3>
            {#each skill.linkedSkill.abilities as ability, index}
              <div>
                <h4>{ability.name}</h4>
                <p>{ability.desc}</p>
              </div>
            {/each}
            <!-- <p>
              <label>
                {expandStyles ? "Hide" : "Show"} List of Possible Styles
                <span>
                  <input hidden type="checkbox" bind:checked={expandStyles} />
                </span>
              </label>

              {#if expandStyles}
                {#each kungFuStyles as style, index}
                  <h3>{style.name}</h3>
                  <p>{style.desc}</p>
                  <p>
                    Uses: {style.weapons.map((w) => w.name).join(", ")}
                  </p>
                  <h4>Has Techniques</h4>
                  <p>
                    {#each style.techniques as technique, index}
                      <SimpleCard {...technique} />
                    {/each}
                  </p>
                {/each}
              {/if}
            </p> -->
          </Dialog>
        </th>
        <th>Ability</th>
        <th>Level</th>
        <th>Relation</th>
        <th class="score"> %</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">
          {#if lockSheet}
            {skill.style || "Untrained"}
          {:else}
            <select
              disabled={lockSheet}
              bind:value={skill.style}
              on:change={(event) =>
                genericUpdate("style", event?.target?.value || "")}
            >
              <option value={""}>Untrained</option>
              {#each kungFuStyles as style, index}
                <option value={style.name}>{style.name}</option>
              {/each}
            </select>
          {/if}
        </td>
        <td>Melee (STR {$character.STR})</td>
        <td rowspan="2">
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
        <td rowspan="2">
          {#if !lockSheet}
            <select
              class="thin"
              bind:value={skill.relation}
              disabled={skill.level <= 0}
              on:change={(event) =>
                genericUpdate("relation", Number(event?.target?.value || 0))}
            >
              <option value={2}>Primary (+20)</option>
              <option value={1}>Seconary (+10)</option>
              <option value={0}>None</option>
            </select>
          {:else if skill.relation == 2}
            P (+20)
          {:else if skill.relation == 1}
            S (+10)
          {/if}
        </td>
        <td class="score">
          {$character[skill.name + "MeleeScore"]}
        </td>
      </tr>
      <tr>
        <td>Ranged (DEX {$character.DEX})</td>
        <td class="score">
          {$character[skill.name + "RangedScore"]}
        </td>
      </tr>
      <tr> </tr>
      <tr></tr>
    </tbody>
  </table>
</div>

<style>
  td,
  th {
    border: 1px solid;
    padding: 2px;
    padding-right: 10px;
    width: 0%;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    /* black lines */
    border: 1px solid;

    /* padding: 1px; */
  }
  .container {
    border: 1px solid;
    margin: 3px;
  }
</style>
