import {PhaserObject} from "../phaserObjects/phaserObject";
import {Enemy} from "../enemys/enemy";
import {Convoy} from "../convoy/convoy";

export class Projectile extends PhaserObject {
    private damage: number;
    private speed: number;
    private projName: string;
    private target: any;
    private initiator: PhaserObject;
    public scene: any;


    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, damage: number, speed: number, name: string, target: any, initiator: PhaserObject,  options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
        this.damage = damage;
        this.speed = speed;
        this.projName = name;
        this.target = target;
        this.initiator = initiator;
        this.collisionCat = target.getCollisionCat();
        this.setPhysics();
        this.moveProjectileToTarget();
        this.scene.events.on('update', (time, delta) => { this.update()} );
        this.scene.matterCollision.addOnCollideStart({objectA: this,
            callback: this.onCollision,
            context: this
        });
    }

    private moveProjectileToTarget(): void {
        if (this.scene !== undefined) {
            const direction = Math.atan((this.target.x - this.x) / (this.target.y - this.y));
            const speed2 = this.target.y >= this.y ? this.speed : -this.speed;

            this.setVelocity(speed2 * Math.sin(direction), speed2 * Math.cos(direction));
        }
    }

    /**
     * Build the Physic of the object
     */
    protected setPhysics() {
        const body = this.scene.matter.bodies.rectangle(this.x, this.y, 32, 32);

        const compoundBody = this.scene.matter.body.create({
            parts: [body],
            inertia: Infinity
        });
        this.setExistingBody(compoundBody);
        this.scene.add.existing(this);
    }

    public getInitiator(): PhaserObject {
        return this.initiator;
    }

    public onCollision({ bodyA, bodyB }): void {
        if (bodyB.gameObject.issensor){
            return;
        }
        console.log(bodyB.gameObject);
        if (bodyA.gameObject.getInitiator() instanceof Enemy) {
            if (bodyB.gameObject instanceof Convoy) {
                console.log('Convoy Hit !!');
                this.scene.matterCollision.removeOnCollideStart({objectA: this,
                    callback: this.onCollision,
                    context: this
                });
                this.destroy();
            }
        }
    }

    public update(): void {
        this.moveProjectileToTarget();
    }
}