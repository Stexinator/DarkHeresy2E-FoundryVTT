import { DarkHeresyItemSheet } from "./item.js";

export class ArmourSheet extends DarkHeresyItemSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["dark-heresy", "sheet", "armour"],
            template: "systems/dark-heresy/template/sheet/armour.hbs",
            width: 500,
            height: 369,
            tabs: [
                {
                    navSelector: ".sheet-tabs",
                    contentSelector: ".sheet-body",
                    initial: "stats"
                }
            ]
        });
    }

    _getHeaderButtons() {
        let buttons = super._getHeaderButtons();
        buttons = [].concat(buttons);
        return buttons;
    }

    activateListeners(html) {
        super.activateListeners(html);
    }
}
