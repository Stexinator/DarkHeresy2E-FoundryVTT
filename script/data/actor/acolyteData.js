import CommonActorData from "./commonActorData";
import bio from "./templates/bio";

const fields = foundry.data.fields;

export default class AcolyteData extends CommonActorData {

    static defineSchema() {

        const commonData = super.defineSchema();
        return {
            // Using destructuring to effectively append our additional data here
            ...commonData,
            bio: new fields.SchemaField(bio()),

            insanity: new fields.NumberField({ initial: 0}),
            insanityBonus: new fields.NumberField({ initial: 0}),
            corruption: new fields.NumberField({ initial: 0}),
            corruptionBonus: new fields.NumberField({ initial: 0}),
            size: new fields.NumberField({ initial: 4})
        };
    }
}
