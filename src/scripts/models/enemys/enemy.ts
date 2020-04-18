import {PhaserObject} from "../phaserObjects/phaserObject";

export class Enemy extends PhaserObject{
    damage: number;
    hp: number;
    enemenyName: number;


    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, damage: number, hp: number, name: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
        this.damage = damage;
        this.hp = hp;
        this.enemenyName = name;
    }

    /**
     *
     * @param damage
     */
    public takeDamage(damage: number): void {
        this.hp = this.hp - damage;
    }
}