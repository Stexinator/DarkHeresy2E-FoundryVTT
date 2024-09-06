const fields = foundry.data.fields;

/**
 * A generic characteristic
 * @param {string} label of characteristic
 * @param {string} short of characteristic
 * @param {Array} aptitudes of characteristic
 * @returns {object} a characterisitc
 */
export default function characteristic(label, short, aptitudes) {
    return {
        label: new fields.StringField({initial: label}),
        short: new fields.StringField({initial: short}),
        base: new fields.NumberField({ initial: 0}),
        bonus: new fields.NumberField({ initial: 0}),
        advance: new fields.NumberField({ initial: 0}),
        unnatural: new fields.NumberField({ initial: 0}),
        aptitudes: new fields.ArrayField(new fields.StringField({ blank: false}), { initial: aptitudes }),
        cost: new fields.NumberField({ initial: 0}),
        damage: new fields.NumberField({ initial: 0})
    };
}
