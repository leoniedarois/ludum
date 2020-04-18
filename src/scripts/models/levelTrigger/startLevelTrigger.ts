import "phaser";

import LevelTrigger from "./levelTrigger";
export default class StartLevelTrigger extends LevelTrigger {
    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
    }
}