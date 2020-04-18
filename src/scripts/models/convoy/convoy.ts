import { PhaserObject } from "../phaserObjects/phaserObject";

export class Convoy extends PhaserObject {

    hp: number;

    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, hp: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
        this.hp = hp;
        this.collisionCat = 2;
    }

    /**
     *
     * @param damage
     */
    public takeDamage(damage: number): void {
        this.hp = this.hp - damage;
    }
}