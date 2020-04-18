import {Enemy} from "./enemy";
import {PROJECTILES_TYPE_INFO} from "../projectiles/projectilesTypeInfo";

export class Tank extends Enemy{

    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, damage: number, hp: number, name: number, range: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, damage, hp, name, range, options);
        this.projectileInfo = PROJECTILES_TYPE_INFO.Rocket;
    }
}