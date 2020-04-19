import {ElementType} from "../elementType/elementType";

export class Element {
    elementType: ElementType;


    constructor(elementType: ElementType) {
        this.elementType = elementType;
    }
}