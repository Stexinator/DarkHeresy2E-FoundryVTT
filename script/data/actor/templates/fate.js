const fields = foundry.data.fields;

/**
 * Fate
 * @returns {object} fate
 */
export default function fate() {
    return {
        max: new fields.NumberField({ initial: 0}),
        value: new fields.NumberField({ initial: 0})
    };
}
