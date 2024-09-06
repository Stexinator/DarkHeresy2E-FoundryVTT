const fields = foundry.data.fields;

/**
 * Movement
 * @returns {object} movement
 */
export default function movement() {
    return {
        half: new fields.NumberField({ initial: 0}),
        full: new fields.NumberField({ initial: 0}),
        charge: new fields.NumberField({ initial: 0}),
        run: new fields.NumberField({ initial: 0})
    };
}
