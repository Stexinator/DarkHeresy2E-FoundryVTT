import characteristics from "./templates/characteristics.js";
import encumbrance from "./templates/encumbrance.js";
import fate from "./templates/fate.js";
import fatigue from "./templates/fatigue.js";
import initiative from "./templates/initiative.js";
import movement from "./templates/movement.js";
import psy from "./templates/psy.js";
import wounds from "./templates/wounds.js";

const fields = foundry.data.fields;

export default class CommonActorData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            characteristics: new fields.SchemaField(characteristics()),
            encumbrance: new fields.SchemaField(encumbrance()),
            fate: new fields.SchemaField(fate()),
            fatigue: new fields.SchemaField(fatigue()),
            initiative: new fields.SchemaField(initiative()),
            movement: new fields.SchemaField(movement()),
            psy: new fields.SchemaField(psy()),
            wounds: new fields.SchemaField(wounds())
        };
    }
}
