const fields = foundry.data.fields;

/**
 * Wounds
 * @returns {object} wounds
 */
export default function wounds() {
    return {
        max: new fields.NumberField({ initial: 0}),
        value: new fields.NumberField({ initial: 0}),
        critical: new fields.NumberField({ initial: 0})
    };
}
