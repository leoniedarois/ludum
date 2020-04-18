import {Tower} from "./tower";
import {Element} from "../element/element";
import {ElementType} from "../elementType/elementType";
import {ElementTypeEnum} from "../elementType/elementTypeEnum";

export class MolotovTower extends Tower{

    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        let elementType = new ElementType(ElementTypeEnum.FIRE);
        let element = new Element(elementType);
        super(world, x, y, texture, frame, 5, 'MolotovTower', element, 3, options);
    }
}