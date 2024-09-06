const fields = foundry.data.fields;

/**
 * Psy
 * @returns {object} psy
 */
export default function psy() {
    return {
        rating: new fields.NumberField({ initial: 0}),
        sustained: new fields.NumberField({ initial: 0}),
        class: new fields.StringField({ initial: "bound"}),
        cost: new fields.NumberField({ initial: 0}),
        currentRating: new fields.NumberField({ initial: 0})
    };
}
