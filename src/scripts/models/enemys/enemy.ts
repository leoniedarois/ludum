import {PhaserObject} from "../phaserObjects/phaserObject";
import 'phaser'
export class Enemy extends PhaserObject {
    damage: number;
    hp: number;
    enemenyName: number;
    range: number;
    sensors: any;
    target: PhaserObject = null;
    projectileInfo: any;



    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, damage: number, hp: number, name: number, range: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
        this.damage = damage;
        this.hp = hp;
        this.range = range;
        this.enemenyName = name;
        this.collisionCat = 1;
        this.setPhysics();
    }

    /**
     *
     * @param damage
     */
    public takeDamage(damage: number): void {
        this.hp = this.hp - damage;
    }

    /**
     * Build the Physic of the object
     */
    protected setPhysics() {
        let detection =  this.scene.matter.bodies.circle(this.x, this.y, this.range*10, {isSensor: true});
        const body = this.scene.matter.bodies.rectangle(this.x, this.y, 10, 10, {
            chamfer: { radius: 17 }
        });

        this.sensors = {
            detection: detection
        };
        const compoundBody = this.scene.matter.body.create({
            parts: [ body, this.sensors.detection],
            inertia: Infinity
        });
        this.setExistingBody(compoundBody);
        this.setCollisionCategory(this.collisionCat);
        this.enterShootingRange();
    }

    /**
     * Set the target of the enemy
     * @param target
     */
    protected setTarget(target: PhaserObject): void {
        this.target = target;
    }

    /**
     * tell us if the enemy has a target
     */
    protected hasTarget(): boolean {
        return this.target !== null;
    }

    /**
     * Handle when the target enter the shootingRange
     */
    private enterShootingRange(): void {
        this.scene.matter.world.on('collisionstart', function (event: any, bodyA: any, bodyB: any) {
            if (bodyB.isSensor && !bodyB.gameObject.hasTarget()) {
                //Begin firing to the target
                console.log(bodyB);
                bodyB.gameObject.setTarget(bodyA.gameObject);
                bodyB.gameObject.fire();
            }
        });
        this.scene.matter.world.on('collisionend', function (event: any, bodyA: any, bodyB: any) {
            if (bodyB.isSensor && bodyB.gameObject.hasTarget()) {
                //Begin firing to the target
                console.log('leave shooting range of turret');
                bodyB.gameObject.setTarget(null);
            }
        });
    }

    private fire(): void {
        //world, x, y, frame, options
        this.projectileInfo.create(this.world, this.x, this.y, this.target, this);
    }
}