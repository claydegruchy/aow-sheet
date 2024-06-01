
type relationRange = 0 | 1 | 2



// class Skill {
// 	name: string;
// 	level: number;
// }

// class Ability {
// 	name: string;
// 	level: number;
// 	relation: relationRange;
// 	baseSkill: Skill;
// 	score?: number; // Calculated based on primary attributes
// }




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

export const moralCodes = ['Kind', 'Cruel', 'Focused', 'Unfocused', 'Selfless', 'Selfish', 'Honorable', 'Deceitful', 'Brave', 'Cowardly']



export class AOWCharacterForm {
	Name: string = "";
	Description: string = "";
	CP: number = 10;
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

	get BaseBP(): number {
		return Math.round(this.STR / 2) + Math.max(0, (10 * (this.Rank - 1)))
	}
	BP: number = this.BaseBP

	Qi: number = 0;

	get MOV(): number {
		// MOV (see movement page 57) begins at 8, add +1 if your STR is 65 or higher, add +1 if your DEX is 65 or higher. Apply your armor penalty, if any.
		let mov = 8
		if (this.STR >= 65) mov += 1;
		if (this.DEX >= 65) mov += 1;

		return mov
	}
	get INIT(): number {
		// Initiative (INIT) starts at 1. Add +1 if your LOG is 65 or greater, add an additional +1 if your DEX is 65 or greater.
		let init = 1
		if (this.LOG >= 65) init += 1;
		if (this.DEX >= 65) init += 1;
		return init
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



	MoralCodes = {
		Totally: -1,
		Somewhat: -1,
		Very: -1
	}

	learnedTechniques: string[] = []

	// Abilities: string[] = new Array(16).fill("");
	// Gear: string[] = new Array(16).fill("");
	// INIT: number = 1;
	// MOV: string = "";
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





export type Ability = {
	name: string;
	desc: string;
}


export type Skill = {
	name: string;
	desc: string,
	score: string,
	titles: string[]
	abilities: Ability[],
}


// this has mostly been rewritten
const warriorSkill: Skill = {
	name: "Warrior",
	desc: `This skill covers various martial arts styles. It represents expertise gained from training in kung fu, military service, or as a mercenary or xia. 
	When chosen as a primary or secondary skill, bonuses apply to all future Warrior skills.
	This skill can be used as an untrained fighting score; you just won’t have any kung fu techniques or other benefits of training.
	When designating the Warrior skill as a primary or secondary skill, apply the bonus to all Warrior skills you take in the future.`,
	score: `Note this skill has two scores as follows; melee equals half STR +10 per Warrior level (includes unarmed combat), and ranged equals half DEX +10 per Warrior level (includes thrown weapons).`,
	titles: ["Novice", "Pupil", "Expert", "Shifu (teacher)", "Champion", "Master"],
	abilities: [
		{
			"name": "Marksman",
			"desc": "Utilizes ranged weaponry such as bows, dart projectiles, hurled daggers, and needle-like objects."
		},
		{
			"name": "Melee",
			"desc": "Utilizes a range of handheld tools including blades, blunt instruments, and empty-handed techniques to engage opponents in close quarters combat."
		},
		{
			"name": "Kung Fu",
			"desc": "Selecting a kung fu style when leveling up in Warrior grants you a unique moniker, combining your role with the chosen style (e.g., Warrior of Dragon's Claw). Your proficiency in various techniques equals your current Warrior level."
		},
		{
			"name": "Kung Fu Damage",
			"desc": "Your kung fu style and unarmed attacks deal increased damage as your Warrior skill rises. Refer to Kung Fu for details on specific weapon effects."
		}
	]
};



// Sorcerer Skill
const sorcererSkill: Skill = {
	name: "Sorcerer",
	desc: `This skill reflects the ability to wield magical powers and create powerful objects through strength of will.`,
	score: `half WIL +10 per sorcerer level. Cannot be attempted unskilled.`,
	titles: ["Acolyte", "Adept", "Mage", "Warlock", "Sorcerer", "Grand Sorcerer"],
	abilities: [
		{
			"name": "High Sorcery",
			"desc": "Knows a multitude of spells matching your Sorcerer level."
		},
		{
			"name": "Low Sorcery",
			"desc": `You may perform any one of the following once per round, no check required:
				- Illuminate a 5-space area with soft light
				- Create a convincing auditory illusion within 5 spaces
				- Display minor magic in a visual effect that's easy to see
				- Enlist small objects to assist you - like mops or dishes
				- Amplify the volume and authority of your voice or another's for up to 5 spaces
				- Repair minor damage to everyday items
				- Complete other simple magical tasks approved by the GM`
		},
		{
			"name": "Raw Talent",
			"desc": "Detect and interpret magical phenomena including written spells and incantations after declaring intent to do so. Move small objects using focused mental energy without requiring a skill check."
		},
		{
			"name": "Enchantment",
			"desc": "Craft bespoke magical objects using spells or abilities, a process that unfolds over days or weeks, as detailed in Magic Item Creation on page 68."
		}
	]
};

// Thief Skill
const thiefSkill: Skill = {
	name: "Thief",
	desc: `This skill represents the expertise acquired by rogues or thieves through talent and opportunity.`,
	score: `half DEX +10 per Thief level.`,
	titles: ["Footpad", "Cutpurse", "Burglar", "Robber", "Thief", "Master Thief"],
	abilities: [
		{
			"name": "Deception",
			"desc": "Master deception techniques, fabricate convincing documents, convincingly assume identities, and maintain realistic disguises for others."
		},
		{
			"name": "Security Systems",
			"desc": "Recognize and disable hidden dangers, craft clever lockpicks, and execute minor mechanical fixes, all while relying on the precision of thieves' tools."
		},
		{
			"name": "Sleight of Hand",
			"desc": "You possess cunning skills of pilfering small items, palming valuables and concealing them with ease."
		},
		{
			"name": "Stealth",
			"desc": "Unseen strike: You become nearly invisible, gaining +5 to attack and deal increased damage per Thief level when striking from concealment."
		}
	]
};



// Scholar Skill
const scholarSkill: Skill = {
	name: "Scholar",
	desc: `This skill represents knowledge gained from education and access to books, legends, and lore.`,
	score: `half LOG +10 per Scholar level. Cannot be attempted unskilled.`,
	titles: ["Student", "Cultivated Talent", "Researcher", "Scholar", "Promoted Scholar", "Master Scholar"],
	abilities: [
		{
			"name": "Diplomat",
			"desc": "Gain +5 per level to ability checks for understanding cultural norms, influencing others through diplomacy, building rapport, negotiating fairly, interacting with nobility, persuading others, and similar social exchanges. Learn an extra language at the same rate."
		},
		{
			"name": "High Scholar",
			"desc": "Gain a unique expertise at every even level, boosting relevant skill checks by +10 for 3 hours. Choose from roles like administrator, calligrapher, trader, librarian, poet, or select others with your GM's approval."
		},
		{
			"name": "Historian",
			"desc": "Uncover esoteric knowledge and obscure connections between legendary figures, notable locations, and cultural artifacts, revealing hidden patterns and relationships that shape history."
		},
		{
			"name": "Signs & Portents",
			"desc": "As needed, pose a query to the Game Master about the narrative context and receive a straightforward truth-based reply."
		}
	]
};

// Scout Skill
const scoutSkill: Skill = {
	name: "Scout",
	desc: `This skill represents training or experience in wilderness survival, outdoor life, training of animals, and ranger duties.`,
	score: `half LOG +10 per Scout level.`,
	titles: ["Runner", "Tracker", "Warden", "Scout", "Pathfinder", "Ranger"],
	abilities: [
		{
			"name": "Animal Handling",
			"desc": "Engage with, soothe, provoke, or mentor indigenous wildlife species."
		},
		{
			"name": "Navigation",
			"desc": "Familiar with cardinal directions and able to pinpoint position on a given map, decode various types of maps, generate new maps, and navigate spatial information effectively."
		},
		{
			"name": "Stalking",
			"desc": "Track natural landscapes, gather intel from environmental clues, disregard terrain-based drawbacks, and stalk prey undetected in the wild."
		},
		{
			"name": "Survival",
			"desc": "Craft objects from organic resources, construct shelters, ignite flames, forage for sustenance, locate potable water sources, detect and neutralize natural obstacles and threats."
		}
	]
};


// Leader Skill
const leaderSkill: Skill = {
	name: "Leader",
	desc: `This skill represents experience and training in personal and strategic combat on the battlefield.`,
	score: `half WIL +10 per Leader level. Cannot be attempted unskilled.`,
	titles: ["Protector", "Defender", "Guardian", "Knight", "Warlord", "Highlord"],
	abilities: [
		{
			"name": "Battle Commander",
			"desc": `Initiative rolled, you may make a skill check. Success grants one of the following benefits until the turn ends, does not count as an action:
				+ Tactics: Team gets +1 initiative.
				+ Assault: Uncover enemy vulnerabilities such as exposed flesh or unshielded areas.
				+ Inspire: Grant adjacent allies +5 to hit and damage per Leader level.`
		},
		{
			"name": "Guardian",
			"desc": "When an adjacent ally takes damage, you can redirect the attack and absorb the hit, ignoring your Defense Rating. No roll needed."
		},
		{
			"name": "Leader",
			"desc": "Attract followers proportionate to leader level: 1/2D at Level 3, 1D at Level 4, 2D at Level 5, and entire armies at Level 6."
		},
		{
			"name": "Warlord",
			"desc": `On your turn choose one effect. Lasts until the turn ends. Counts as an action. No skill check required.
				- Unite: You and allies gain +10 to hit and damage for the rest of the turn.
				- Fortify: Allies resisting dark powers, magic, fear, etc. gain +20 on LOG or WIL checks.
				- Overwhelm: If outnumbering a foe 2:1 in melee, you or ally makes two attacks, choosing which roll to keep. Foe takes damage and is knocked prone. Counts as a single action.`
		}
	]
};

// Mystic Skill
const mysticSkill: Skill = {
	name: "Mystic",
	desc: `This skill reflects years of devotion to an ascetic lifestyle and cultivation of senses to interact with natural energy.`,
	score: `half WIL +10 per Mystic level. Cannot be attempted unskilled.`,
	titles: ["Novitiate", "Brother/Sister", "Priest", "Chant Leader", "Chief Monk", "Abbot"],
	abilities: [
		{
			"name": "Qi Focus",
			"desc": "Gain an extra qi point at levels 1, 3, and 6. Moreover, you can utilize qi healing and transfer abilities without Warrior level requirements."
		},
		{
			"name": "Harmony Sense",
			"desc": "Detect spirits and demons within 15 meters per level, identify powerful energy signatures, or perceive moral resonance of entities and locations. Separate checks required for each distinct application; active declaration of intent necessary."
		},
		{
			"name": "Spirit Sword",
			"desc": "Spending one qi enables temporary empowerment of the spirit sword in hand. Spirit swords are ornate wooden jian adorned with mystical symbols. At Mystic level 1, you can forge spirit swords at no cost. With a charged spirit sword, any ally may vanquish demons and ghosts as if wielding a magical weapon, effect lasting for one day."
		},
		{
			"name": "Wards",
			"desc": "Erect protective barriers around areas, rooms, buildings, or entire towns with torii gates. Demons and ghosts of lower rank than you are blocked from entering the warded space. Establishing a local ward takes 10 minutes, while a town-wide ward requires one hour per gate, with at least one torii gate present. Both types of wards persist for a month."
		}
	]
};



// Diviner Skill
const divinerSkill: Skill = {
	name: "Diviner",
	desc: `This skill represents the ability to interpret signs, predict fortunes, and make decisions based on cosmic forces.`,
	score: `half LOG +10 per Diviner level. Cannot be attempted unskilled.`,
	titles: ["Fortune Teller", "Augur", "Soothsayer", "Astrologer", "Seer", "Master Diviner"],
	abilities: [
		{
			"name": "Hunch",
			"desc": "Once per encounter, disrupt the dice by shouting a warning or making a sudden move that causes anyone to re-roll their result, including the GM. You must be able to convey your message to fellow players. Out-of-turn usage incurs multi-action penalties."
		},
		{
			"name": "Foresight",
			"desc": "Place an object in the world once per session with a value up to 100 taels per level, considering location and potential requirements for successful placement."
		},
		{
			"name": "Reading",
			"desc": `Divine Insight: You may ask the GM up to your Diviner level questions each session. They will provide accurate answers. To perform a reading, you'll need a diviners kit and a few minutes of focus. Some examples of questions you might ask include:
				- Is this individual morally inclined towards kindness or cruelty?
				- When did someone pass away?
				- Where did they meet their end?
				- How did that person depart from this world?
				- Where can I find...?
				- Are there magical energies at play on this being/object/place?
				- Is something hidden here or nearby?
				- What's being said? (Eavesdrop up to 100 feet away.)
				- What's unfolding visually? (Witness an event up to 100 feet away.)
				- What will the weather be like for the next two days?
				- Is this a genuine occurrence, or is illusion at play?
				- Are there traps in place?
				- Is this substance toxic?
				- Is what someone is saying the truth?`
		},
		{
			"name": "Identify Convergence Point",
			"desc": "You sense the confluence of paths. Using this insight helps you choose a course. Identifying a nexus requires a diviner's kit, 2 qi. Success leaves you \"drained\" (see Drained Condition). The used qi may not be recovered until the nexus is resolved. A nexus can be abandoned at any time. Abandonment allows normal qi recovery and returns strength in one week. Only one nexus can be identified at once. A second nexus cannot be identified until the previous one's duration has passed, even if it was abandoned early."
		}
	]
};




// Alchemist Skill
const alchemistSkill: Skill = {
	name: "Alchemist",
	desc: `This skill represents expertise in understanding substances and their effects on the body.`,
	score: `half LOG +10 per Alchemist level. Cannot be attempted unskilled.`,
	titles: ["Herbalist", "Apothecary", "Doctor", "Physician", "Alchemist", "Master Alchemist"],
	abilities: [
		{
			"name": "Alchemy",
			"desc": "Choose a specific area of alchemical expertise for each level: antidote formulas, catalyst compounds, debilitating extracts, deadly concoctions, explosive mixtures, or medicinal elixirs. Operating an alchemist's lab demands possession of an alchemist's kit."
		},
		{
			"name": "Diagnose",
			"desc": "Diagnose medical conditions including poisoning identifying root causes through observation of symptoms pulse body odor and questioning patients' families. Hard penalty -20 applies without alchemy kit or clinic/hospital facilities."
		},
		{
			"name": "Wound Mending",
			"desc": "Instantly restore 1D BP plus 2BP per alchemist level to a wounded character, potentially reviving them from harm's way. Characters can only benefit once per encounter, regardless of the number of alchemists on hand, assuming their injury occurred during the encounter itself. This skill demands either an alchemist kit or a fully-equipped clinic/hospital for successful execution."
		},
		{
			"name": "Surgery",
			"desc": "A successful skill check in a properly equipped medical facility allows the alchemist to restore 3D lost body points plus one additional point per level to a wounded character. This takes half-day and the patient remains incapacitated for a minimum of 24 hours, with potential for longer recovery at the GM's discretion."
		}
	]
};

// Detective Skill
const detectiveSkill: Skill = {
	name: "Detective",
	desc: `This skill represents training in finding the truth, spotting clues, interrogating, and making arrests.`,
	score: `half LOG +10 per Detective level.`,
	titles: ["Officer", "Examiner", "Investigator", "Inspector", "Detective", "Master Detective"],
	abilities: [
		{
			"name": "Detect Clues",
			"desc": "Adept at deciphering subtle hints, consolidating data, and solving intricate enigmas through astute analysis of existing information."
		},
		{
			"name": "Interrogation",
			"desc": "Expertly elicits reliable information from captured individuals via nuanced questioning tactics. Successful interrogation demands a contested roll against the captive's WIL."
		},
		{
			"name": "Shadowing and Trailing",
			"desc": "Mastered the ability to discreetly observe or track individuals without drawing attention, achieved through subtle blending and situational awareness, allowing for unobtrusive surveillance of suspects."
		},
		{
			"name": "Connections",
			"desc": "Establish network connections. A skilled investigator is only as effective as their access points, having up to Detective level contacts. Collaborate with the player and GM to develop these connections. They might be sources, insiders, associates, or others who can provide support, intel, or influence. These contacts may operate in prominent or obscure roles, offering assistance or information when needed. The detective can sever a connection to replace it with another, pending story and GM approval."
		}
	]
};




// Strategist Skill
const strategistSkill: Skill = {
	name: "Strategist",
	desc: `An alternative to the Diviner skill, the Strategist skill focuses on practical maneuvering and political intrigue, providing a toolkit for navigating power dynamics and outsmarting adversaries`,
	score: `half LOG +10 per Strategist level. Cannot be attempted unskilled.`,
	titles: ["Cunning Agent", "Discerning Operative", "Sagacious Observer", "Clever Architect", "Master Strategist", "Divine Talent"],
	abilities: [
		{
			"name": "Spy Reports",
			"desc": "Pursue intel on high-priority targets through discreet inquiries, with one question per game session per Strategist level. Sources within your network provide valuable insights. Failure risks compromising a spy, losing access to this info for a month."
		},
		{
			"name": "Damage Control",
			"desc": "Interrupt an opponent once per encounter to divert attention from damaging revelations, rephrasing their statement or setting them up for success with a reroll on a poor diplomacy attempt."
		},
		{
			"name": "One Step Ahead",
			"desc": "Insert a minor NPC into a scene, making it a reliable ally for the duration of the game session."
		},
		{
			"name": "Retroactive Planning",
			"desc": "Represents strategic planning without the supernatural element, reflecting exhaustion from overwork rather than magical depletion."
		}
	]
};


export const skills = [
	warriorSkill,
	sorcererSkill,
	thiefSkill,
	scholarSkill,
	scoutSkill,
	leaderSkill,
	mysticSkill,
	divinerSkill,
	alchemistSkill,
	detectiveSkill,
	strategistSkill,
]




// var name is the weapon name with spaces and other characters replaced by underscores. keep capitalisation
// eg "Hammer/Mace" => "Hammer_Mace"


type ItemType = "Weapon" | "Armour" | "Companion" | "Hireling" | "Mount" | "Medicine" | "General";

export type Item = {
	name: string;
	desc?: string,
	itemType: ItemType
	cost: string,
}

export type WeaponTypes = "Melee" | "Ranged";
export type Weapon = Item & {
	image_name: string,
	subType: WeaponTypes;   // Melee or Ranged
	hands: number; // Number of hands required to wield the weapon
	range: number; // Range of the weapon
	attributes: string[]; // Minimum attributes required to wield the weapon
	damage: string; // Damage dealt by the weapon
}



const battleaxe: Weapon = {
	itemType: "Weapon",
	image_name: "battle-axe",
	name: "Battleaxe",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["STR 50"],
	damage: "2D+2",
	cost: "10tl",
	desc: "A mighty two-handed axe, often wielded by the bravest warriors in our realm.",
};

const bian: Weapon = {
	itemType: "Weapon",
	image_name: "chained-arrow-heads",
	name: "Bian (Hard Whip)",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["STR 55"],
	damage: "2D",
	cost: "20tl",
	desc: "A rigid whip with a sharpened edge, favored by skilled horsemen and guards.",
};

const butterfly_sword: Weapon = {
	itemType: "Weapon",
	image_name: "crossed-sabres",
	name: "Butterfly Sword",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: [],
	damage: "1D+2",
	cost: "15tl",
	desc: "Twin short swords, cherished by martial artists and guardians of ancient secrets.",
};

const chain_whip_flying_claw: Weapon = {
	itemType: "Weapon",
	image_name: "grapple",
	name: "Chain Whip/Flying Claw",
	subType: "Melee",
	hands: 1,
	range: 3,
	attributes: ["DEX 60"],
	damage: "1D+1",
	cost: "12tl",
	desc: "A whip interwoven with chains, mastered by the elite defenders of our empire.",
};

const club: Weapon = {
	itemType: "Weapon",
	image_name: "spiked-mace",
	name: "Club",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: [],
	damage: "1D+1",
	cost: "1tl",
	desc: "A sturdy wooden bludgeon, common among foot soldiers and village guardians.",
};

const chui: Weapon = {
	itemType: "Weapon",
	image_name: "flanged-mace",
	name: "Chui",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["STR 65"],
	damage: "2D+4",
	cost: "12tl",
	desc: "A weighty mace with a solid head, feared by foes for its devastating blows.",
};

const crescent_moon_knife: Weapon = {
	itemType: "Weapon",
	image_name: "crescent-blade",
	name: "Crescent Moon Knife",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["DEX 60"],
	damage: "1D+3",
	cost: "5tl",
	desc: "A curved blade resembling the moon's crescent, prized by our elite swordsmen.",
};

const crossbow: Weapon = {
	itemType: "Weapon",
	image_name: "crossbow",
	name: "Crossbow",
	subType: "Ranged",
	hands: 2,
	range: 80,
	attributes: [],
	damage: "2D+2",
	cost: "15tl",
	desc: "A handheld weapon of remarkable precision, revolutionizing our battlefield tactics.",
};

const dagger_dark_judges_brush: Weapon = {
	itemType: "Weapon",
	image_name: "plain-dagger",
	name: "Dagger/Dark Judge's Brush",
	subType: "Melee",
	hands: 1,
	range: 10,
	attributes: [],
	damage: "1D",
	cost: "2tl",
	desc: "A short blade, essential for every warrior's arsenal, even among the secretive judges of the night.",
};

const dao: Weapon = {
	itemType: "Weapon",
	image_name: "machete",
	name: "Dao (Heavy Sabre)",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["STR 55"],
	damage: "2D+2",
	cost: "12tl",
	desc: "A curved saber renowned for its deadly slashes, cherished by our finest generals.",
};

const dart: Weapon = {
	itemType: "Weapon",
	image_name: "shuriken",
	name: "Dart/Star",
	subType: "Ranged",
	hands: 1,
	range: 15,
	attributes: [],
	damage: "1D",
	cost: "2tl",
	desc: "Small throwing projectiles, favored by our scouts and marksmen for swift strikes.",
};

const greataxe: Weapon = {
	itemType: "Weapon",
	image_name: "battered-axe",
	name: "Greataxe",
	subType: "Melee",
	hands: 2,
	range: NaN,
	attributes: ["STR 70"],
	damage: "3D",
	cost: "40tl",
	desc: "An imposing two-handed axe, symbolizing the strength and ferocity of our warriors.",
};

const great_club: Weapon = {
	itemType: "Weapon",
	image_name: "wood-club",
	name: "Great club",
	subType: "Melee",
	hands: 2,
	range: NaN,
	attributes: ["STR 55"],
	damage: "2D",
	cost: "15tl",
	desc: "A massive wooden club, wielded by guardians of our sacred temples and fortress gates.",
};

const hammer_mace: Weapon = {
	itemType: "Weapon",
	image_name: "spiked-mace",
	name: "Hammer/Mace",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["STR 45"],
	damage: "1D+3",
	cost: "8tl",
	desc: "A blunt instrument of war, prized for its ability to crush armor and bones alike.",
};

const handaxe: Weapon = {
	itemType: "Weapon",
	image_name: "fire-axe",
	name: "Handaxe",
	subType: "Melee",
	hands: 1,
	range: 15,
	attributes: [],
	damage: "1D+2",
	cost: "2tl",
	desc: "A versatile one-handed axe, indispensable for woodcutters and guardians alike.",
};

const hook_sword: Weapon = {
	itemType: "Weapon",
	image_name: "hook-swords",
	name: "Hook sword",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["DEX 60"],
	damage: "2D",
	cost: "20tl",
	desc: "A unique weapon with a hooked blade, passed down through generations of skilled warriors.",
};

const improvised_small: Weapon = {
	itemType: "Weapon",
	image_name: "beer-stein",
	name: "Improvised, Small+",
	subType: "Melee",
	hands: 1,
	range: 10,
	attributes: [],
	damage: "1D",
	cost: "--",
	desc: "- Lasts only 3 turns then breaks, also breaks on a critical success or failure.",
};

const improvised_medium: Weapon = {
	itemType: "Weapon",
	image_name: "bar-stool",
	name: "Improvised, Medium",
	subType: "Melee",
	hands: 1,
	range: 5,
	attributes: [],
	damage: "1D+3",
	cost: "--",
	desc: "- Lasts only 3 turns then breaks, also breaks on a critical success or failure.",
};

const improvised_large: Weapon = {
	itemType: "Weapon",
	image_name: "table",
	name: "Improvised, Large",
	subType: "Melee",
	hands: 2,
	range: 3,
	attributes: ["STR 65"],
	damage: "2D",
	cost: "--",
	desc: "- Lasts only 3 turns then breaks, also breaks on a critical success or failure.",
};


const iron_wrist_rings: Weapon = {
	itemType: "Weapon",
	image_name: "ring",
	name: "Iron Wrist Rings",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["STR 70"],
	damage: "+3 unarmed",
	cost: "5tl",
	desc: "Metal bands worn as protection, favored by our honorable fighters in the arenas.",
};

const javelin: Weapon = {
	itemType: "Weapon",
	image_name: "thrown-spear",
	name: "Javelin",
	subType: "Ranged",
	hands: 1,
	range: 30,
	attributes: ["STR 45"],
	damage: "1D+2",
	cost: "2tl",
	desc: "A thrown spear, favored by our horsemen for swift and deadly strikes.",
};

const jian_longsword: Weapon = {
	itemType: "Weapon",
	image_name: "broadsword",
	name: "Jian (Longsword)",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["STR 50 & DEX 50"],
	damage: "2D+1",
	cost: "15tl",
	desc: "A graceful longsword, embodying the elegance and precision of our ancient traditions.",
};

const kwandao: Weapon = {
	itemType: "Weapon",
	image_name: "halberd",
	name: "Kwandao",
	subType: "Melee",
	hands: 2,
	range: NaN,
	attributes: ["STR 55"],
	damage: "2D+3",
	cost: "12tl",
	desc: "A long-handled saber, revered by our noble defenders and champions of the realm.",
};

const lajatang: Weapon = {
	itemType: "Weapon",
	image_name: "crescent-staff",
	name: "Lajatang",
	subType: "Melee",
	hands: 2,
	range: NaN,
	attributes: ["STR 50 & DEX 50"],
	damage: "2D",
	cost: "12tl",
	desc: "A polearm with multiple blades, wielded by our most skilled defenders against invaders.",
};

const longbow: Weapon = {
	itemType: "Weapon",
	image_name: "bow-string",
	name: "Longbow*",
	subType: "Ranged",
	hands: 2,
	range: 100,
	attributes: ["STR 60"],
	damage: "2D+3",
	cost: "35tl",
	desc: "- 20 ammo cost 1tl. \bA powerful bow, masterfully crafted by our finest bowyers for long-range warfare.",
};

const maul_great_flail_warhammer: Weapon = {
	itemType: "Weapon",
	image_name: "flail",
	name: "Maul, Great Flail, Warhammer",
	subType: "Melee",
	hands: 2,
	range: NaN,
	attributes: ["STR 50"],
	damage: "2D+3",
	cost: "10tl",
	desc: "Large and fearsome weapons, wielded by our mightiest warriors on the fields of battle.",
};

const meteor_hammer: Weapon = {
	itemType: "Weapon",
	image_name: "hammer-drop",
	name: "Meteor Hammer",
	subType: "Ranged",
	hands: 2,
	range: 3,
	attributes: ["DEX 70"],
	damage: "2D+2",
	cost: "5tl",
	desc: "A weapon of legend, its chains and weights wielded with deadly skill by our most elite fighters.",
};

const needle: Weapon = {
	itemType: "Weapon",
	image_name: "dart",
	name: "Needle*",
	subType: "Ranged",
	hands: 1,
	range: 10,
	attributes: [],
	damage: "1",
	cost: "1tl",
	desc: "- 20 ammo cost 1tl. \bA slender weapon, favored by our assassins and spies for silent and swift strikes.",
};

const nunchaku: Weapon = {
	itemType: "Weapon",
	image_name: "nunchaku",
	name: "Nunchaku",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: ["DEX 55"],
	damage: "1D+3",
	cost: "5tl",
	desc: "A martial arts weapon, passed down through generations of our disciplined monks.",
};

const shortbow: Weapon = {
	itemType: "Weapon",
	image_name: "bow-arrow",
	name: "Shortbow*",
	subType: "Ranged",
	hands: 2,
	range: 60,
	attributes: ["STR 50"],
	damage: "2D+1",
	cost: "12tl",
	desc: "- 20 ammo cost 1tl. \bA compact bow, beloved by our hunters and scouts for its portability and accuracy.",
};

const shortsword: Weapon = {
	itemType: "Weapon",
	image_name: "broadsword",
	name: "Shortsword",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: [],
	damage: "1D+3",
	cost: "8tl",
	desc: "A short-bladed weapon, common among our foot soldiers and palace guards.",
};

const spear: Weapon = {
	itemType: "Weapon",
	image_name: "trident",
	name: "Spear/Trident",
	subType: "Melee",
	hands: 1,
	range: 20,
	attributes: ["STR 50"],
	damage: "2D",
	cost: "10tl",
	desc: "A polearm, our primary weapon of war, used by soldiers and generals alike.",
};

const staff: Weapon = {
	itemType: "Weapon",
	image_name: "wizard-staff",
	name: "Staff",
	subType: "Melee",
	hands: 2,
	range: NaN,
	attributes: [],
	damage: "1D+3",
	cost: "4tl",
	desc: "A staff, the symbol of our martial arts mastery and the discipline of our warriors.",
};

const three_section_staff: Weapon = {
	itemType: "Weapon",
	image_name: "bo",
	name: "Three-section Staff",
	subType: "Melee",
	hands: 2,
	range: NaN,
	attributes: ["DEX 55"],
	damage: "1D+2",
	cost: "8tl",
	desc: "A martial arts weapon of incredible skill and dexterity, passed down by our master teachers.",
};

const two_handed_sword: Weapon = {
	itemType: "Weapon",
	image_name: "two-handed-sword",
	name: "Two-handed Sword",
	subType: "Melee",
	hands: 2,
	range: NaN,
	attributes: ["STR 65"],
	damage: "2D+4",
	cost: "40tl",
	desc: "A massive sword, wielded by our mightiest champions in the name of honor and duty.",
};

const unarmed_no_kung_fu: Weapon = {
	itemType: "Weapon",
	image_name: "fist",
	name: "Unarmed (no kung fu)",
	subType: "Melee",
	hands: 1,
	range: NaN,
	attributes: [],
	damage: "1/2D",
	cost: "--",
	desc: "Combat without weapons, the essence of our martial arts philosophy and discipline.",
};

const whip: Weapon = {
	itemType: "Weapon",
	image_name: "whip",
	name: "Whip",
	subType: "Melee",
	hands: 1,
	range: 3,
	attributes: ["DEX 65"],
	damage: "1D+2",
	cost: "3tl",
	desc: "A flexible weapon, sometimes used by our horsemen and temple guardians in times of need.",
};

// pairs
const crescent_moon_knife_pair = crescent_moon_knife
crescent_moon_knife_pair.name += " (pair)"

const butterfly_sword_pair: Weapon = butterfly_sword;
butterfly_sword_pair.name += " (pair)";

const hook_sword_pair: Weapon = hook_sword;
hook_sword_pair.name += " (pair)"

const chui_pair: Weapon = chui;
chui_pair.name += " (pair)"

const handaxe_pair: Weapon = handaxe;
handaxe_pair.name += " (pair)";


export const weapons = [
	battleaxe,
	bian,
	butterfly_sword,
	chain_whip_flying_claw,
	club,
	chui,
	crescent_moon_knife,
	crossbow,
	dagger_dark_judges_brush,
	dao,
	dart,
	greataxe,
	great_club,
	hammer_mace,
	handaxe,
	hook_sword,
	improvised_small,
	improvised_medium,
	improvised_large,
	iron_wrist_rings,
	javelin,
	jian_longsword,
	kwandao,
	lajatang,
	longbow,
	maul_great_flail_warhammer,
	meteor_hammer,
	needle,
	nunchaku,
	shortbow,
	shortsword,
	spear,
	staff,
	three_section_staff,
	two_handed_sword,
	unarmed_no_kung_fu,
	whip,
]



// kung fu
export type KungFuType = "Internal" | "External"

// var name is the tecnique name with spaces replaced by underscores
// eg "Kung Fu Shou Ji" => "Kung_Fu_Shou_Ji"
export type Technique = {
	name: string;
	desc: string;
}



// techniques

const accupoint_strike: Technique = {
	name: "Accupoint Strike",
	desc: "Attack paralyzes limb or renders mute/unmute.",
}
const arrow_cutting: Technique = {
	name: "Arrow Cutting",
	desc: "No Hard penalty for resisting ranged attacks.",
}
const battle_magic: Technique = {
	name: "Battle Magic",
	desc: "Cast 1 spell, ignore multi- action penalty but advance it normally.",
}
const blind_fighting: Technique = {
	name: "Blind Fighting",
	desc: "No penalty fighting unarmed/melee in the dark, in fog, against unseen foes, etc.",
}
const counter_attack: Technique = {
	name: "Counter Attack",
	desc: "If resist (or are missed by) unarmed/melee attack, may attack attacker, multi-action applies.",
}
const danger_sense: Technique = {
	name: "Danger Sense",
	desc: "No hard penalty resisting hidden attacks. Re-roll failed LOG checks for surprise & when attacked from stealth.",
}
const deadly_attack: Technique = {
	name: "Deadly Attack",
	desc: "+2 to dmg to unarmed or with style’s weapon. Take multiple times for even more dmg!",
}
const defender: Technique = {
	name: "Defender",
	desc: "Make physical resistance checks for anyone adjacent, even if they fail their resistance roll.",
}
const disarm: Technique = {
	name: "Disarm",
	desc: "Attack knocks item foe holds 1⁄2D spaces random direction. Critical success, you get what they had. Two handed weapons & iron wrist rings hard to disarm.",
}
const distant_strike: Technique = {
	name: "Distant Strike",
	desc: "Melee attacks have a range of 10 spaces. Take multiple times to strike very far away!",
}
const explosive_attack: Technique = {
	name: "Explosive Attack",
	desc: "Attack does 1⁄2D dmg & knocks adjacent foes back 1 space per Warrior level. Resistance checks against this are hard. If rank of foe is half your Warrior level or less, they are knocked prone as well.",
}
const feint: Technique = {
	name: "Feint",
	desc: "Declare one successful attack a feint. If foe fails resistance check you cause half normal dmg & if your next attack (this turn or next) against same foe hits, treat as critical success.",
}
const hidden_weapons: Technique = {
	name: "Hidden Weapons",
	desc: "Attacks from your small hidden weapons are hard to defend against or find when you’re searched. Danger sense cancels resistance check penalty.",
}
const hold: Technique = {
	name: "Hold",
	desc: "Inflicts unarmed attack dmg to held enemy each turn the hold is maintained. Foes may break free of hold by winning a contested Warrior skill check.",
}
const improved_landing: Technique = {
	name: "Improved Landing",
	desc: "Warrior skill check, take no dmg from being thrown/ hurled or from falling 10 spaces per Warrior level.",
}
const instant_stand: Technique = {
	name: "Instant Stand",
	desc: "At any time get up from prone position, no check required & multi-action penalty unaffected.",
}
const iron_skin: Technique = {
	name: "Iron Skin",
	desc: "Warrior level 1: very light armor. Level 3: light. Level 5: medium. If wearing armor, treat DR one level higher than the best of iron skin or armor worn (max DR 1D+2).",
}
const keep_at_bay: Technique = {
	name: "Keep at Bay",
	desc: "Using long weapon, may attack out of turn if foe moves into adjacent space. If cause dmg, move foe one space away.",
}
const meditation: Technique = {
	name: "Meditation",
	desc: "Recover one bonus qi. Each hour of trance equals two hours sleep. Aware of surroundings.",
}
const mighty_blows: Technique = {
	name: "Mighty Blows",
	desc: "+1D to dmg caused with two-handed weapons. Or normal dmg to two adjacent foes with one attack (defended against separately).",
}
const move_by: Technique = {
	name: "Move-By",
	desc: "If attack roll succeeds, MOV x2 & attack one target along path without stopping. If fail, MOV+2 & miss target. If move past multiple targets, may make attack against each with normal multi-action rules. Foes may not press the attack against someone using move-by.",
}
const multiple_attacks: Technique = {
	name: "Multiple Attacks",
	desc: "One extra melee or ranged weapon attack per turn. Ignore multi-action penalty but advance it normally.",
}
const multiple_defenses: Technique = {
	name: "Multiple Defenses",
	desc: "One extra physical resistance check per turn. Ignore multi- action penalty but advance it normally.",
}
const one_against_all: Technique = {
	name: "One Against All",
	desc: "No hard penalty when fighting outnumbered.",
}
const power_attack: Technique = {
	name: "Power Attack",
	desc: "For each -10 to attack you accept, dmg +2.",
}
const power_defense: Technique = {
	name: "Power Defense",
	desc: "No hard penalty when fighting armed foes when without a weapon.",
}
const qi_resistance: Technique = {
	name: "Qi Resistance",
	desc: "+10 per Warrior level to resist spells.",
}
const reverse_hold: Technique = {
	name: "Reverse Hold",
	desc: "Successful attack roll while held reverse the hold.",
}
const roll_with_the_impact: Technique = {
	name: "Roll with the Impact",
	desc: "Gain DR equal to Warrior level x2 when you move 1⁄2D spaces away from enemy. Enemy chooses direction. DR stacks with any other DR.",
}
const suspension: Technique = {
	name: "Suspension",
	desc: "Enter trance to appear dead for duration you choose. Successful Alchemist or Detective skill check detects suspension.",
}
const swiftness: Technique = {
	name: "Swiftness",
	desc: "Always add Warrior level to MOV score. Use Warrior score for DEX when sprinting if it is higher.",
}
const take_down: Technique = {
	name: "Take Down",
	desc: "One attack causes normal dmg & knocks foe prone.",
}
const _throw: Technique = {
	name: "Throw",
	desc: "One attack hurls foe 1D spaces any direction you choose, causes normal dmg & renders foe prone.",
}
const two_weapon_fighting: Technique = {
	name: "Two-Weapon Fighting",
	desc: "+10 to melee score, +10 to physical resistance checks when fighting with two one-handed weapons.",
}
const unblockable_attack: Technique = {
	name: "Unblockable Attack",
	desc: "One attack may be declared unblockable per foe per encounter. Critical success needed to resist.",
}
const vivacity: Technique = {
	name: "Vivacity",
	desc: "Use DEX (instead of STR) to calculate melee Warrior skill.",
}
const whirlwind_attack: Technique = {
	name: "Whirlwind Attack",
	desc: "Make one attack roll per turn to hit all adjacent foes. One dmg roll is used for all foes.",
}


export const techniques = [
	accupoint_strike,
	arrow_cutting,
	battle_magic,
	blind_fighting,
	counter_attack,
	danger_sense,
	deadly_attack,
	defender,
	disarm,
	distant_strike,
	explosive_attack,
	feint,
	hidden_weapons,
	hold,
	improved_landing,
	instant_stand,
	iron_skin,
	keep_at_bay,
	meditation,
	mighty_blows,
	move_by,
	multiple_attacks,
	multiple_defenses,
	one_against_all,
	power_attack,
	power_defense,
	qi_resistance,
	reverse_hold,
	roll_with_the_impact,
	suspension,
	swiftness,
	take_down,
	_throw,
	two_weapon_fighting,
	unblockable_attack,
	vivacity,
	whirlwind_attack,
]


export type KungFuStyle = {
	name: string;
	desc: string,
	type: KungFuType,
	weapons: Weapon[],
	techniques: Technique[],
}

// needs rewrite
export const kungFuStyles: KungFuStyle[] = [


	{
		name: "Ascending Dragon Fist",
		desc: "Favored by tough pugilists, this style teaches few weapons. Rather it teaches how to take hard blows from blunt weapons, how to dodge sharp-edged weapons, and how to hit like a hammer.",
		type: "External",
		weapons: [iron_wrist_rings],
		techniques: [
			deadly_attack,
			explosive_attack,
			iron_skin,
			multiple_attacks,
			power_attack,
			power_defense,
		]
	},
	{
		name: "Bandit Beating Staff",
		desc: "This style is taught by the Beggar Sect. The staff is used to strike at the head and feet while elbows and knees are used to strike the body. Staggering and spinning out of reach helps in their defense. This style teaches many methods of getting out of danger.",
		type: "Internal",
		weapons: [club, dagger_dark_judges_brush, staff, three_section_staff],
		techniques: [
			blind_fighting,
			danger_sense,
			feint,
			keep_at_bay,
			multiple_defenses,
			roll_with_the_impact,
		]
	},
	{
		name: "Bowing Dragon",
		desc: "This style is taught exclusively to Bowing Dragon Monks. They practice humility and study the harmonies of qi. Many of Bowing Dragon monks have levels in the Mystic skill. Their renowned Bowing Dragon style combines kicks, back fists, knee strikes, use of the staff, and a few exotic weapons.",
		type: "Internal",
		weapons: [staff, iron_wrist_rings, spear, three_section_staff, meteor_hammer],
		techniques: [
			arrow_cutting,
			qi_resistance,
			counter_attack,
			disarm,
			meditation,
			power_defense,
		]
	},
	{
		name: "Fiery Dragon",
		desc: "This energetic style uses close-in strikes, accupoint strikes, and short quick kicks. It is taught in all areas of Longzhi.",
		type: "External",
		weapons: [chain_whip_flying_claw, crescent_moon_knife_pair, iron_wrist_rings, lajatang, nunchaku],
		techniques: [
			accupoint_strike,
			danger_sense,
			move_by,
			multiple_defenses,
			one_against_all,
			two_weapon_fighting,
		]
	},
	{
		name: "Flying Daggers",
		desc: "This style is taught by the White Lotus Assassins. Standard blocks, punches, and kicks round out this style's exceptional melee and thrown knife techniques.",
		type: "Internal",
		weapons: [dagger_dark_judges_brush, jian_longsword, shortbow, dart],
		techniques: [
			accupoint_strike,
			blind_fighting,
			danger_sense,
			deadly_attack,
			feint,
			hidden_weapons,
		]
	},
	{
		name: "Flying Serpent",
		desc: "This kung fu style is marked by fluid snake-like movements to confuse and coil around a foe.",
		type: "Internal",
		weapons: [bian, dagger_dark_judges_brush, spear, whip],
		techniques: [
			hold,
			move_by,
			reverse_hold,
			roll_with_the_impact,
			_throw,
			vivacity,
		]
	},
	{
		name: "Golden Fist",
		desc: "Golden Fist is taught to imperial troops. It is a solid fighting style, if a bit unimaginative. The style is now common as many retired soldiers have opened kung fu schools.",
		type: "External",
		weapons: [bian, crossbow, battleaxe, dao, kwandao, spear],
		techniques: [
			accupoint_strike,
			defender,
			disarm,
			mighty_blows,
			take_down,
			whirlwind_attack,
		]
	},
	{
		name: "Honorable Way of Thunder",
		desc: "This style uses the 'Big Sweeper' flail (greatflail). The striking end of the flail is quite heavy (often studded) and the handle is at least 2-4 times as long. The unarmed skills of this style emphasize powerful stomps and elbow strikes. It is taught throughout the empire. Practitioners tend to be large and strong.",
		type: "External",
		weapons: [chui, greataxe, great_club, two_handed_sword, maul_great_flail_warhammer],
		techniques: [
			defender,
			explosive_attack,
			mighty_blows,
			power_attack,
			unblockable_attack,
			whirlwind_attack,
		]
	},
	{
		name: "Judgment of the Dark Count",
		desc: "The Dark Judges are a very secret organization. Only whispers of them are ever heard. What is known is that they work for someone powerful and kill without mercy. They operate in the dead of night, wearing all black clothing and veiled hats to hide their features.",
		type: "Internal",
		weapons: [bian, dagger_dark_judges_brush, jian_longsword, lajatang, whip],
		techniques: [
			blind_fighting,
			counter_attack,
			disarm,
			feint,
			suspension,
			swiftness,
		]
	},
	{
		name: "Law of a Thousand Strikes",
		desc: "A style emphasizing strong short strikes with the staff and flying kicks and staff sweeps. Law of a Thousand Strikes is taught throughout the lands.",
		type: "External",
		weapons: [staff, dart, nunchaku, javelin],
		techniques: [
			counter_attack,
			distant_strike,
			explosive_attack,
			multiple_attacks,
			one_against_all,
			whirlwind_attack,
		]
	},
	{
		name: "Path of One Hundred Flying Eagles",
		desc: "This style combines maneuverability with rapid arrow shots that can knock other arrows out of the air.",
		type: "Internal",
		weapons: [javelin, jian_longsword, longbow, shortbow],
		techniques: [
			arrow_cutting,
			deadly_attack,
			multiple_attacks,
			power_attack,
			swiftness,
			vivacity,
		]
	},
	{
		name: "Peach Blossoms",
		desc: "Favored by dancers, minstrels, and temptresses, this style relies on subtle movements and hidden weapons. Long sleeves and loose-fitting clothing are used to hide weapons and misdirect opponents. The Jianmei or 'Sword Sister' sect teaches this style of kung fu to its members.",
		type: "Internal",
		weapons: [dagger_dark_judges_brush, dart, jian_longsword, needle, shortsword],
		techniques: [
			accupoint_strike,
			arrow_cutting,
			hidden_weapons,
			improved_landing,
			multiple_attacks,
			vivacity,
		]
	}

	,


	{
		name: "Pouncing Panther",
		desc: "This style is less common than the others in this list. Its teachers are secretive. It emphasizes a sudden and lethal attack to end the fight quickly. It is said that some of these techniques were stolen from the White Lotus Assassins who do not share their secret techniques. All students of the Pouncing Panther style take the Deadly Attack technique at least twice. This is why this style only teaches five techniques.",
		type: "External",
		weapons: [butterfly_sword_pair, lajatang, shortbow],
		techniques: [
			deadly_attack,
			power_attack,
			swiftness,
			two_weapon_fighting,
			unblockable_attack,
		]
	},
	{
		name: "Red Crane Wodan",
		desc: "A branch of the Wodan Monks practices this unique kung fu style, mixing sword and sorcery to deadly effect. All Wodan monks are known to right wrongs in the world, but the Red Cranes are active hunters of evil. They tend to work alone but sometimes join like-minded groups.",
		type: "Internal",
		weapons: [dagger_dark_judges_brush, jian_longsword, staff, dart],
		techniques: [
			battle_magic,
			qi_resistance,
			danger_sense,
			distant_strike,
			one_against_all,
			whirlwind_attack,
		]
	},
	{
		name: "Reveling Scholar",
		desc: "This style feigns the appearance of a swaying and staggering drunkard. The practitioner is not drunk but is using very deceptive techniques to draw his opponents in and lower their defenses.",
		type: "External",
		weapons: [bian, dart, jian_longsword, shortsword, spear],
		techniques: [
			counter_attack,
			disarm,
			feint,
			instant_stand,
			multiple_defenses,
			power_defense,
		]
	},
	{
		name: "Shower of Flowers",
		desc: "This style combines agile kicks and knife-hand strikes with small hidden, thrown weapons.",
		type: "External",
		weapons: [dagger_dark_judges_brush, dart, needle, dart],
		techniques: [
			deadly_attack,
			hidden_weapons,
			multiple_attacks,
			one_against_all,
			unblockable_attack,
			vivacity,
		]
	},
	{
		name: "Soaring Dragon in the Sky",
		desc: "This common saber style is favored by mercenaries, bandits, and many escort services. It is easy to learn though not very elegant.",
		type: "External",
		weapons: [staff, dao, spear, handaxe],
		techniques: [
			danger_sense,
			deadly_attack,
			instant_stand,
			keep_at_bay,
			multiple_defenses,
			power_attack,
		]
	},
	{
		name: "Spiraling Wind Storms",
		desc: "This style teaches one to use the energy of others and then add more external energy to devastate them.",
		type: "External",
		weapons: [butterfly_sword, dagger_dark_judges_brush, nunchaku],
		techniques: [
			hold,
			instant_stand,
			meditation,
			power_defense,
			reverse_hold,
			_throw,
		]
	},
	{
		name: "Ten Styles of Life Taking Swift Sword",
		desc: "The Lustrous Phoenix Society made this style famous. It is favored by those that use agility over strength; the melee weapons are often used in pairs.",
		type: "Internal",
		weapons: [dart, jian_longsword, shortsword, needle],
		techniques: [
			counter_attack,
			disarm,
			multiple_attacks,
			two_weapon_fighting,
			unblockable_attack,
			vivacity,
		]
	},

	{
		name: "Tiger Strike",
		desc: "This style is fast and furious. It has short quick kicks and lightning-fast punches with arm and foot blocks. Tiger Strike is synonymous with the Red Tiger Clan kung fu sect. Their students are taught to seek out fights (not necessarily lethal) to better their skill.",
		type: "External",
		weapons: [crescent_moon_knife_pair, hook_sword_pair, kwandao, spear],
		techniques: [
			blind_fighting,
			explosive_attack,
			improved_landing,
			iron_skin,
			multiple_attacks,
			two_weapon_fighting,
		]
	},
	{
		name: "Tawn Blade",
		desc: "Named after one of the five great heroes, this style uses close-in sword blocks and resting the flat of the blade along the body or limbs to block attacks followed by swift thrusts, kicks, and sweeps. This style is very good at taking advantage of an opponent's mistakes. The Red Pelican Sect is known for using this kung fu style and their roots may originate with the famous hero Tsun.",
		type: "Internal",
		weapons: [chain_whip_flying_claw, dart, jian_longsword, hook_sword],
		techniques: [
			counter_attack,
			improved_landing,
			instant_stand,
			move_by,
			multiple_attacks,
			multiple_defenses,
		]
	},
	{
		name: "Unrelenting River",
		desc: "This style teaches its students to weather all attacks to survive and finish off the opponent.",
		type: "External",
		weapons: [butterfly_sword_pair, chui_pair, handaxe_pair, iron_wrist_rings],
		techniques: [
			qi_resistance,
			iron_skin,
			multiple_defenses,
			power_defense,
			roll_with_the_impact,
			two_weapon_fighting,
		]
	},
	{
		name: "Unyielding Wall",
		desc: "This style favors the use of a shield and dao. The shield is just large enough to cover the whole body when crouching. The wearer can roll with the shield between their body and the opponent to maximize defense while getting in close melee range. The shield is used to block attacks as well as hide attacks.",
		type: "Internal",
		weapons: [dao, dart, hook_sword, javelin],
		techniques: [
			arrow_cutting,
			defender,
			feint,
			move_by,
			multiple_defenses,
			unblockable_attack,
		]
	},
	{
		name: "Willow Blade Song",
		desc: "A style marked by darting movements and whipping of the sword blade, followed by close-in backhand punches and strikes with elbows and knees. With these fast movements come a weaving and circling motion much like that of the branches of a weeping willow tree.",
		type: "Internal",
		weapons: [dart, jian_longsword, shortsword],
		techniques: [
			arrow_cutting,
			distant_strike,
			hidden_weapons,
			meditation,
			roll_with_the_impact,
			take_down,
		]
	},
	{
		name: "Wodon",
		desc: "The Wodan Monks meditate in hidden mountaintop monasteries in Mount Wodan. There they practice qi cultivation and their Wodan style of martial arts. Many Wodan monks have levels in sorcerer. This style is marked by rapid kicks and punches and single or twin swords.",
		type: "Internal",
		weapons: [dagger_dark_judges_brush, jian_longsword, staff, dart],
		techniques: [
			qi_resistance,
			defender,
			disarm,
			distant_strike,
			one_against_all,
			whirlwind_attack,
		]
	}
];

export type Armour = Item & {
	DR: string,
	requirement: string | null,

}


// items
export const armour: Armour[] = [
	{
		name: "Very Light Armour",
		desc: "Heavy Furs, Leather Cuirass",
		DR: "1-2",
		requirement: "45",
		cost: "50tl",
		itemType: "Armour",

	},
	{
		name: "Light Armour",
		desc: "Leather, Lamellar Cuirass",
		DR: "1/2D",
		requirement: "55",
		cost: "200tl",
		itemType: "Armour",

	},
	{
		name: "Medium Armour",
		desc: "Ceremonial, Full Lamellar",
		DR: "1D",
		requirement: "65",
		cost: "550tl",
		itemType: "Armour",

	},
	{
		name: "Heavy Armour",
		desc: "Mirror Armor, Mountain Pattern",
		DR: "1D+2",
		requirement: "75",
		cost: "1250tl",
		itemType: "Armour",

	},
	{
		name: "Very Heavy Armour",
		desc: "Dragonplate, Demonplate",
		DR: "1D+4",
		requirement: "95",
		cost: "5000tl",
		itemType: "Armour",

	},
	{
		name: "Shield**",
		desc: "Grants +20 to physical resistance checks, cannot be used with 2-handed weapons",
		DR: "--",
		requirement: "--",
		cost: "10tl",
		itemType: "Armour",

	}
]


export const hirelings: Item[] =
	[
		{
			name: "Alchemist, Magical advisor, etc.",
			cost: "20tl (per day)",
			itemType: "Companion",
		},
		{
			name: "Archer (Rank:1-3)*",
			desc: "Minor NPC with a score equal to 40+10xRank.",
			cost: "2tl X Rank (per day)",
			itemType: "Companion",
		},
		{
			name: "Artist (novice/pro/expert)",
			cost: "3/15/50tl (per day)",
			itemType: "Companion",
		},
		{
			name: "Craftsman (novice/pro/expert)",
			cost: "2/10/25tl (per day)",
			itemType: "Companion",
		},
		{
			name: "Sailor/Captain (Rank:1/5)*",
			desc: "Minor NPC with a score equal to 40+10xRank.",
			cost: "2tl/50tl (per day)",
			itemType: "Companion",
		},
		{
			name: "Servant (unskilled/skilled)",
			cost: "1tl/5tl (per day)",
			itemType: "Companion",
		},
		{
			name: "Footman (Rank:1-3)*",
			desc: "Minor NPC with a score equal to 40+10xRank.",
			cost: "1tl X Rank (per day)",
			itemType: "Companion",
		},
		{
			name: "Horseman (Rank:1-3)*",
			desc: "Minor NPC with a score equal to 40+10xRank.",
			cost: "4tl X Rank (per day)",
			itemType: "Companion",
		},
		{
			name: "Sellsword (Rank:3-5)*",
			desc: "Minor NPC with a score equal to 40+10xRank.",
			cost: "5tl X Rank (per day)",
			itemType: "Companion",
		}
	]

export const animal_companions: Item[] =
	[
		{
			name: "Bird, pigeon or song bird/hawk",
			cost: "1tl/30tl",
			itemType: "Companion"
		},
		{
			name: "Dog, domestic/guard",
			cost: "4tl/25tl",
			itemType: "Companion"
		},
		{
			name: "Monkey",
			cost: "15tl",
			itemType: "Companion"
		}
	]

export const mounts: Item[] =
	[
		{
			name: "Donkey",
			desc: "150 lbs.",
			cost: "8tl",
			itemType: "Mount"
		},
		{
			name: "Mule",
			desc: "650 lbs.",
			cost: "25tl",
			itemType: "Mount"
		},
		{
			name: "Riding Horse",
			desc: "450 lbs.",
			cost: "75tl",
			itemType: "Mount"
		},
		{
			name: "War Horse",
			desc: "600 lbs.",
			cost: "250tl",
			itemType: "Mount"
		}
	]

export const medicine: Item[] =
	[
		{
			name: "Cures for Minor Ailments (fever, headache, rash)",
			cost: "20tl",
			itemType: "Medicine"

		},
		{
			name: "Mild Poison Antidote (Mild poisons 60%)*",
			cost: "100tl",
			itemType: "Medicine"

		},
		{
			name: "Moderate Poison Antidote (Moderate poisons 60%)*",
			cost: "200tl",
			itemType: "Medicine"

		},
		{
			name: "Strong Poison Antidote (Strong poisons 60%)*",
			cost: "400tl",
			itemType: "Medicine"

		},
		{
			name: "Pill of the Ox (STR)*",
			cost: "100tl/+10 bonus",
			itemType: "Medicine"

		},
		{
			name: "Pill of Unmatched Grace (DEX) **",
			cost: "100tl/+10 bonus",
			itemType: "Medicine"

		},
		{
			name: "Pill of the Focused Scholar (LOG) **",
			cost: "100tl/+10 bonus",
			itemType: "Medicine"

		},
		{
			name: "Pill of Unwavering Determination (WIL) **",
			cost: "100tl/+10 bonus",
			itemType: "Medicine"

		},
		{
			name: "Heavenly Pill (1D Healing)***",
			cost: "100tl/1D Healing",
			itemType: "Medicine"

		}
	]


export const general: Item[] =

	[
		{
			name: "Alchemist Kit (50tl materials)",
			cost: "85tl",
			itemType: "General",

		},
		{
			name: "Backpack/Rucksack (empty)",
			cost: "2tl",
			itemType: "General",

		},
		{
			name: "Barrel, wooden",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Book (50 pages, blank)",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Blanket or bedroll",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Block and tackle",
			cost: "5tl",
			itemType: "General",

		},
		{
			name: "Boat (river/sail)",
			cost: "1,000tl/4,000tl",
			itemType: "General",

		},
		{
			name: "Boots (simple/fine)",
			cost: "5tl/10tl+",
			itemType: "General",

		},
		{
			name: "Box, small/large",
			cost: "10tl/30tl",
			itemType: "General",

		},
		{
			name: "Bowl (small/large)",
			cost: "1tl/3tl",
			itemType: "General",

		},
		{
			name: "Building (small/large)",
			cost: "250tl/2,000tl",
			itemType: "General",

		},
		{
			name: "Candles (10)",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Cart/Wagon",
			cost: "55tl/200tl",
			itemType: "General",

		},
		{
			name: "Case, map or scroll",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Castle (small/large)",
			cost: "20,000tl/200,000th",
			itemType: "General",

		},
		{
			name: "Chest, small/large",
			cost: "2tl/4tl",
			itemType: "General",

		},
		{
			name: "Clothes (simple/fine)",
			cost: "1tl/25tl+",
			itemType: "General",

		},
		{
			name: "Crowbar",
			cost: "2tl",
			itemType: "General",

		},
		{
			name: "Diviner kit",
			cost: "50tl",
			itemType: "General",

		},
		{
			name: "Fan (simple/fine)",
			cost: "1tl/12tl",
			itemType: "General",

		},
		{
			name: "Firecrackers (long strip)***",
			cost: "2tl",
			itemType: "General",

		},
		{
			name: "Flask or Vial",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Flint and steel",
			cost: "2tl",
			itemType: "General",

		},
		{
			name: "Grappling hook",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Hammer",
			cost: "5tl",
			itemType: "General",

		},
		{
			name: "Incense (9 sticks)",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Incense (ceremonial burner)",
			cost: "5tl",
			itemType: "General",

		},
		{
			name: "Ink stick",
			cost: "2tl",
			itemType: "General",

		},
		{
			name: "Iron manacles w/key",
			cost: "5tl",
			itemType: "General",

		},
		{
			name: "Iron pot",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Junk (ship small/large)",
			cost: "12,000tl/32,000tl",
			itemType: "General",

		},
		{
			name: "Ladder, 10-foot",
			cost: "1tl",
			itemType: "General",

		},
		{
			name: "Lantern",
			cost: "9tl",
			itemType: "General",

		},
		{
			name: "Lock",
			cost: "20tl",
			itemType: "General",
		},
		{
			name: "Meal (simple/great feast)",
			cost: "1tl/5tl+",
			itemType: "General",

		}
	]


export const items: Item[] = [
	...weapons,
	...armour,
	...hirelings,
	...animal_companions,
	...mounts,
	...medicine,
	...general,
]