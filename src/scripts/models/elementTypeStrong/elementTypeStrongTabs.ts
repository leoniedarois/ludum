import {ElementTypeEnum} from "../elementType/elementTypeEnum";

export const elementTypeStrongTabs = {
    PHYSICAL: [ElementTypeEnum.NOTHING],
    FIRE: [ElementTypeEnum.ICE],
    ICE: [ElementTypeEnum.ELECTRIC],
    ELECTRIC: [ElementTypeEnum.FIRE],

    getStrongByName: function (name: string): Array<ElementTypeEnum>  {
        return this[name];
    }

};