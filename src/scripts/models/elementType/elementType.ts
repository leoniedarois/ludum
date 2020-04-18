import {ElementTypeEnum} from "./elementTypeEnum";
import {elementTypeWeakTabs} from "../elementTypeWeakness/elementTypeWeakTabs";
import {elementTypeStrongTabs} from "../elementTypeStrong/elementTypeStrongTabs";

export class ElementType {
    public name: ElementTypeEnum;
    public weakness: Array<ElementTypeEnum>;
    public strong: Array<ElementTypeEnum>;


    constructor(name: ElementTypeEnum) {
        this.name = name;
        this.weakness = elementTypeWeakTabs.getWeaknessByName(name);
        this.strong = elementTypeStrongTabs.getStrongByName(name);
    }
}