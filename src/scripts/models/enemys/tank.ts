import {Enemy} from "./enemy";

export class Tank extends Enemy{

    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, damage: number, hp: number, name: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, damage, hp, name, options);
    }
}