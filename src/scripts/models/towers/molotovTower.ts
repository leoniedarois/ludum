import {Tower} from "./tower";
import {Element} from "../element/element";
import {ElementType} from "../elementType/elementType";
import {ElementTypeEnum} from "../elementType/elementTypeEnum";
import {TOWERS_TYPE_INFO} from "./towerTypeInfo";

export class MolotovTower extends Tower{

    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        let elementType = new ElementType(ElementTypeEnum.FIRE);
        let element = new Element(elementType);
        super(world, x, y, texture, frame, TOWERS_TYPE_INFO.MolotovTower.hp, 'MolotovTower', element, TOWERS_TYPE_INFO.MolotovTower.damage, TOWERS_TYPE_INFO.MolotovTower.range, TOWERS_TYPE_INFO.MolotovTower.cost, options);
    }
}