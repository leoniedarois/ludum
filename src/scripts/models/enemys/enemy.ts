import {PhaserObject} from "../phaserObjects/phaserObject";
import 'phaser'
import {PROJECTILES_TYPE_INFO} from "../projectiles/projectilesTypeInfo";
import {Projectile} from "../projectiles/projectile";
export class Enemy extends PhaserObject {
    damage: number;
    hp: number;
    enemenyName: number;
    range: number;
    sensors: any;
    target: PhaserObject = null;
    projectileInfo: any;
    scene: any;
    /**
     * Cooldown in seconds
     */
    cooldown: number;
    incooldown: boolean = false;



    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, damage: number, hp: number, name: number, range: number, cooldown: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
        this.damage = damage;
        this.hp = hp;
        this.range = range;
        this.enemenyName = name;
        this.collisionCat = 1;
        this.cooldown = cooldown;
        this.setPhysics();
        this.handleCollision();
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
        this.setStatic(true);
        this.scene.add.existing(this);
        this.setCollisionCategory(this.collisionCat);
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
    private enterShootingRange({ bodyA, bodyB }): void {
        if (bodyB.gameObject instanceof Enemy || bodyB.gameObject instanceof Projectile){
            return;
        }
        if (bodyA.isSensor && !bodyA.gameObject.hasTarget()) {
            //Begin firing to the target
            console.log('enter shooting range of turret');
            bodyA.gameObject.setTarget(bodyB.gameObject);
        }
    }

    /**
     * Handle when the target leave the shootingRange
     */
    private leaveShootingRange({ bodyA, bodyB }): void {
        if (bodyB.gameObject instanceof Enemy || bodyB.gameObject instanceof Projectile){
            return;
        }
        if (bodyA.isSensor && bodyA.gameObject.hasTarget()) {
            //Begin firing to the target
            console.log('leave shooting range of turret');
            bodyA.gameObject.setTarget(null);
        }
    }

    /**
     * Handle when the target enter the shootingRange
     */
    private fireWhileTargetAtRange({ bodyA, bodyB }): void {
        if (bodyB.gameObject instanceof Enemy || bodyB.gameObject instanceof Projectile){
            return;
        }
        if (bodyA.isSensor && bodyA.gameObject.hasTarget()) {
            //Begin firing to the target
            if (!bodyA.gameObject.isInCooldown()){
                bodyA.gameObject.fire();
            }
        }
    }

    private handleCollision() {
        this.scene.matterCollision.addOnCollideStart({
            objectA: [this.sensors.detection],
            callback: this.enterShootingRange,
            context: this
        });
        this.scene.matterCollision.addOnCollideActive({
            objectA: [this.sensors.detection],
            callback: this.fireWhileTargetAtRange,
            context: this
        });
        this.scene.matterCollision.addOnCollideEnd({
            objectA: [this.sensors.detection],
            callback: this.leaveShootingRange,
            context: this
        })
    }

    /**
     * return if the enemy is in cooldown
     */
    private isInCooldown(): boolean {
        return this.incooldown;
    }

    private fire(): void {
        console.log('Fire');
        this.incooldown = true;
        setTimeout(() => {
            this.incooldown = false;
            console.log('reloaded')
        }, this.cooldown * 1000);
        //world, x, y, frame, options
        this.projectileInfo.create(this.world, this.x, this.y, this.target, this);

    }
}