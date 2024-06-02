<script>
  export let item;
  const { itemType } = item;
</script>

<!-- name: string;
desc?: string,
itemType: ItemType
cost: string,
ame: string,

subType: WeaponTypes;   // Melee or Ranged
hands: number; // Number of hands required to wield the weapon
range: number; // Range of the weapon
attributes: string[]; // Minimum attributes required to wield the weapon
damage: string; // Dama -->

<!-- DR: string,
	requirement: string | null, -->

<div>
  <h4>{item.name}</h4>
  {item.desc}
  {#if itemType == "Weapon"}
    {item.hands}
  {/if}

  {#if itemType == "Armour"}
    {item.DR}
  {/if}
</div>
