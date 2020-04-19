import "phaser";
import { PhaserObject } from "../../models/phaserObjects/phaserObject";
export default class LevelTrigger extends PhaserObject {
    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
    }
}