import 'phaser';
export class PhaserObject extends Phaser.Physics.Matter.Sprite {
    protected collisionCat: number;

    constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
        super(world, x, y, texture, frame, options);
    }

    /**
     * Get the collisionCat of the phaserObject
     */
    public getCollisionCat(): number {
        return this.collisionCat;
    }
}