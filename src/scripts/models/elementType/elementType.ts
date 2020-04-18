import {ElementTypeEnum} from "./elementTypeEnum";
import {elementTypeWeakTabs} from "../elementTypeWeakness/elementTypeWeakTabs";

export class ElementType {
    public name: ElementTypeEnum;
    public weakness: Array<ElementTypeEnum>;
    public strong: [ElementType];


    constructor(name: ElementTypeEnum) {
        this.name = name;
        this.weakness = elementTypeWeakTabs[this.name];
    }
}