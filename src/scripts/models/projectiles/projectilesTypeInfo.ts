import {Projectile} from "./projectile";
import {PhaserObject} from "../phaserObjects/phaserObject";

export const PROJECTILES_TYPE_INFO = {
    textureKey: 'objects',
    Rocket: {
        damage: 9,
        speed: 8,
        name: 'rocket.png',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, target: any, initiator: PhaserObject, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new Projectile(world, x, y, PROJECTILES_TYPE_INFO.textureKey, PROJECTILES_TYPE_INFO.Rocket.name, this.damage, this.speed, this.name, target, initiator, options)
        }
    },
    Grenade: {
        damage: 5,
        speed: 3,
        name: 'gameplay/fireparticule1.png',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, target: any, initiator: PhaserObject, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new Projectile(world, x, y, PROJECTILES_TYPE_INFO.textureKey, PROJECTILES_TYPE_INFO.Rocket.name, this.damage, this.speed, this.name, target, initiator, options)
        }
    },
    FrostGrenade: {
        damage: 2,
        speed: 2,
        name: 'gameplay/fireparticule1.png',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, target: any, initiator: PhaserObject, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new Projectile(world, x, y, PROJECTILES_TYPE_INFO.textureKey, PROJECTILES_TYPE_INFO.Rocket.name, this.damage, this.speed, this.name, target, initiator, options)
        }
    },
};