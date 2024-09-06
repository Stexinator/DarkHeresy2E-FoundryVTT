const fields = foundry.data.fields;

/**
 * Content of bio tab
 * @returns {object} content of bio tab
 */
export default function bio() {
    return {
        homeWorld: new fields.StringField({initial: ""}),
        background: new fields.StringField({initial: ""}),
        role: new fields.StringField({initial: ""}),
        elite: new fields.StringField({initial: ""}),
        divination: new fields.StringField({initial: ""}),
        gender: new fields.StringField({initial: ""}),
        age: new fields.StringField({initial: ""}),
        build: new fields.StringField({initial: ""}),
        complexion: new fields.StringField({initial: ""}),
        hair: new fields.StringField({initial: ""}),
        quirks: new fields.StringField({initial: ""}),
        superstition: new fields.StringField({initial: ""}),
        momentos: new fields.StringField({initial: ""}),
        notes: new fields.StringField({initial: ""})
    };
}
