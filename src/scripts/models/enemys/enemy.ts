import {PhaserObject} from "../phaserObjects/phaserObject";
import 'phaser'
export class Enemy extends PhaserObject {
    damage: number;
    hp: number;
    enemenyName: number;
    range: number;
    sensors: any;


    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, damage: number, hp: number, name: number, range: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
        this.damage = damage;
        this.hp = hp;
        this.enemenyName = name;
        this.setPhysics();
    }

    /**
     *
     * @param damage
     */
    public takeDamage(damage: number): void {
        this.hp = this.hp - damage;
    }

    protected setPhysics() {
        let detection =  MatterJS.Bodies.circle(this.x, this.y, this.range);

        this.sensors = {
            detection: detection
        }
    }
}