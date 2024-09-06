const fields = foundry.data.fields;

/**
 * Fatigue
 * @returns {object} fatigue
 */
export default function fatigue() {
    return {
        max: new fields.NumberField({ initial: 0}),
        value: new fields.NumberField({ initial: 0})
    };
}
