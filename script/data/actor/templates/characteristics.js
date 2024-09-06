import characteristic from "./characteristic";

const fields = foundry.data.fields;

/**
 * A generic characteristic
 * @returns {object} all characterisitcs
 */
export default function characteristics() {
    return {
        weaponSkill: new fields.SchemaField(characteristic("CHARACTERISTIC.WEAPON_SKILL", "WS", ["Weapon Skill", "Offence"])),
        ballisticSkill: new fields.SchemaField(characteristic("CHARACTERISTIC.BALLISTIC_SKILL", "BS", ["Ballistic Skill", "Finesse"])),
        strength: new fields.SchemaField(characteristic("CHARACTERISTIC.STRENGTH", "S", ["Strength", "Offence"])),
        toughness: new fields.SchemaField(characteristic("CHARACTERISTIC.TOUGHNESS", "WS", ["Toughness", "Defence"])),
        agility: new fields.SchemaField(characteristic("CHARACTERISTIC.AGILITY", "Ag", ["Agility", "Finesse"])),
        intelligence: new fields.SchemaField(characteristic("CHARACTERISTIC.INTELLIGENCE", "Int", ["Intelligence", "Knowledge"])),
        perception: new fields.SchemaField(characteristic("CHARACTERISTIC.PERCEPTION", "Per", ["Perception", "Fieldcraft"])),
        willpower: new fields.SchemaField(characteristic("CHARACTERISTIC.WILLPOWER", "WP", ["Willpower", "Psyker"])),
        fellowship: new fields.SchemaField(characteristic("CHARACTERISTIC.FELLOWSHIP", "Fel", ["Fellowship", "Social"])),
        influence: new fields.SchemaField(characteristic("CHARACTERISTIC.INFLUENCE", "Inf", []))
    };
}
