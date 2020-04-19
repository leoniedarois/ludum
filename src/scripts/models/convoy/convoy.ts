import { PhaserObject } from "../phaserObjects/phaserObject";

export class Convoy extends PhaserObject {

    hp: number;

    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, hp: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, 'objects', 'gameplay/convoyright.png', options);
        this.hp = hp;
        this.collisionCat = 2;
        this.setPhysics();
    }

    /**
     * Build the Physic of the object
     */
    protected setPhysics() {
        const body = this.scene.matter.bodies.rectangle(this.x, this.y, 64, 64, {
            chamfer: {radius: 10}
        });

        const compoundBody = this.scene.matter.body.create({
            parts: [body],
            inertia: Infinity
        });
        this.setExistingBody(compoundBody);
        this.setFriction(0);
        this.setFrictionAir(0);
        this.scene.add.existing(this);
    }

    /**
     *
     * @param damage
     */
    public takeDamage(damage: number): void {
        this.hp = this.hp - damage;
    }
}