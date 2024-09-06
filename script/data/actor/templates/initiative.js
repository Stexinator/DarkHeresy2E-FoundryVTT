const fields = foundry.data.fields;

/**
 * Initiative
 * @returns {object} initiative
 */
export default function initiative() {
    return {
        characteristic: new fields.StringField({ initial: "agility"}),
        base: new fields.StringField({ initial: "1d10"}),
        bonus: new fields.NumberField({ initial: 0})
    };
}
