import {PhaserObject} from "../phaserObjects/phaserObject";
import {Element} from "../element/element";
import {Enemy} from "../enemys/enemy";

export class Tower extends PhaserObject{
    hp: number;
    name: string;
    element: Element;
    damage: number;
    /**
     * Pixel range of the tower
     */
    range: number;

    /**
     *
     * @param world
     * @param x
     * @param y
     * @param texture
     * @param frame
     * @param options
     * @param hp
     * @param name
     * @param element
     * @param range In pixel
     * @param damage
     */
    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, hp: number, name: string, element: Element, damage: number, range: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
        this.hp = hp;
        this.name = name;
        this.element = element;
        this.damage = damage;
        this.range = range;
    }

    /**
     * Do damage to enemy
     * @param target
     */
    public doDamage(target: Enemy): void {
        target.takeDamage(this.damage);
    };

    /**
     * Function will trigger the projectile creation
     */
    public fire(): void {

    }
}