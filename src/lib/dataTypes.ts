
type relationRange = 0 | 1 | 2
export type SkillScore = {
	name: string,
	level: number;
	relation: relationRange;
	baseAbility: string,
	score?: number; // Calculated based on primary attributes
};

export type WarriorScore = {
	name: string,
	style: string;
	level: number;
	relation: relationRange;
	meleeScore?: number; // Calculated based on STR
	rangedScore?: number; // Calculated based on DEX
};

export type MoralCode = {
	code: 'Kind' | 'Cruel' | 'Focused' | 'Unfocused' | 'Selfless' | 'Selfish' | 'Honorable' | 'Deceitful' | 'Brave' | 'Cowardly';
	devotion: string;
};

export class AOWCharacterForm {
	Name: string = "";
	Description: string = "";
	CP: number = 0;
	// rank is derived by the following formula
	get Rank(): number {

		return 0
	};
	// main skills
	STR: number = 0;
	DEX: number = 0;
	LOG: number = 0;
	WIL: number = 0;

	//derived
	get BP(): number {
		return Math.round(this.STR / 2) + Math.max(0, (10 * (this.Rank - 1)))
	}


	Qi: number = 0;

	//derived 
	// MOV (see movement page 57) begins at 8, add +1 if your STR is 65 or higher, add +1 if your DEX is 65 or higher. Apply your armor penalty, if any.

	get MOV(): number {
		let mov = 8
		if (this.STR >= 65) mov += 1;
		if (this.DEX >= 65) mov += 1;

		return mov
	}

	DR: number = 0;


	getSkillScore(ability: SkillScore, stat: number): number {
		if (ability.level == 0) return 0
		let mod = 0
		return stat / 2 + ability.level * 10 + ability.relation * 10;
	};

	// skills
	Alchemy: SkillScore = { name: "Alchemy", baseAbility: "LOG", level: 0, relation: 0, };
	Detective: SkillScore = { name: "Detective", baseAbility: "LOG", level: 0, relation: 0 };
	Diviner: SkillScore = { name: "Diviner", baseAbility: "LOG", level: 0, relation: 0 };
	Leader: SkillScore = { name: "Leader", baseAbility: "WIL", level: 0, relation: 0 };
	Mystic: SkillScore = { name: "Mystic", baseAbility: "WIL", level: 0, relation: 0 };
	Scholar: SkillScore = { name: "Scholar", baseAbility: "LOG", level: 0, relation: 0 };
	Scout: SkillScore = { name: "Scout", baseAbility: "LOG", level: 0, relation: 0 };
	Sorcerer: SkillScore = { name: "Sorcerer", baseAbility: "WIL", level: 0, relation: 0 };
	Thief: SkillScore = { name: "Thief", baseAbility: "DEX", level: 0, relation: 0 };
	Warrior1: WarriorScore = { name: "Warrior1", style: "", level: 0, relation: 0 };
	Warrior2: WarriorScore = { name: "Warrior2", style: "", level: 0, relation: 0 };





	get AlchemyScore(): number { return this.getSkillScore(this.Alchemy, this.LOG); }
	get DetectiveScore(): number { return this.getSkillScore(this.Detective, this.LOG); }
	get DivinerScore(): number { return this.getSkillScore(this.Diviner, this.LOG); }
	get LeaderScore(): number { return this.getSkillScore(this.Leader, this.WIL); }
	get MysticScore(): number { return this.getSkillScore(this.Mystic, this.WIL); }
	get ScholarScore(): number { return this.getSkillScore(this.Scholar, this.LOG); }
	get ScoutScore(): number { return this.getSkillScore(this.Scout, this.LOG); }
	get SorcererScore(): number { return this.getSkillScore(this.Sorcerer, this.WIL); }
	get ThiefScore(): number { return this.getSkillScore(this.Thief, this.DEX); }

	get Warrior1RangedScore(): number { return this.getSkillScore(this.Warrior1, this.DEX); }
	get Warrior1MeleeScore(): number { return this.getSkillScore(this.Warrior1, this.STR); }
	get Warrior2RangedScore(): number { return this.getSkillScore(this.Warrior2, this.DEX); }
	get Warrior2MeleeScore(): number { return this.getSkillScore(this.Warrior2, this.STR); }


	// MoralCodes: MoralCode[] = [
	// 	{ code: "Kind", devotion: "" },
	// 	{ code: "Focused", devotion: "" },
	// 	{ code: "Selfless", devotion: "" },
	// 	{ code: "Honorable", devotion: "" },
	// 	{ code: "Brave", devotion: "" }
	// ];
	// Abilities: string[] = new Array(16).fill("");
	// Gear: string[] = new Array(16).fill("");
	INIT: number = 1;
	MOV: string = "";
	// MeleeDamageModifier: string = "";
	// RangedDamageModifier: string = "";
	// Appearance: string = "";
	// Quote: string = "";
	// Passionate: string = "";
	// Code: boolean[] = [false, false, false];
	// Family: string[] = new Array(6).fill("");
	// PlotHooks: string[] = new Array(4).fill("");

	// Derived stats




	// get WeaponScores(): WeaponDetail[] {
	// 	return this.Weapons.map(weapon => ({
	// 		...weapon,
	// 		score: this.STR / 2 // Or other logic based on the weapon type
	// 	}));
	// }
}
