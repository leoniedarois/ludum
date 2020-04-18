import {ElementTypeEnum} from "../elementType/elementTypeEnum";

export const elementTypeWeakTabs = {
    PHYSICAL: [ElementTypeEnum.NOTHING],
    FIRE: [ElementTypeEnum.ELECTRIC],
    ICE: [ElementTypeEnum.FIRE],
    ELECTRIC: [ElementTypeEnum.ICE],

    getWeaknessByName: function (name: string): Array<ElementTypeEnum>  {
        return this[name];
    }

};