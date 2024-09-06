const fields = foundry.data.fields;

/**
 * Encumbrance
 * @returns {object} encumbrance
 */
export default function encumbrance() {
    return {
        max: new fields.NumberField({ initial: 0}),
        value: new fields.NumberField({ initial: 0})
    };
}
