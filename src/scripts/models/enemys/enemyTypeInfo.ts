import {Tank} from "./tank";
import {LightTroop} from "./lightTroop";

export const ENEMYS_TYPE_INFO = {
    Tank: {
        hp: 10,
        damage: 2,
        range: 9,
        cooldown: 5,
        name: 'Tank',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new Tank(world, x, y, texture, frame, this.damage, this.hp, this.name, this.range, this.cooldown, options)
        }
    },
    light_Troops: {
        hp: 15,
        damage: 4,
        range: 2,
        cooldown: 25,
        name: 'light_Troops',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new LightTroop(world, x, y, texture, frame, this.damage, this.hp, this.name, this.range, this.cooldown, options)
        }
    },
    heavy_Troops: {
        hp: 30,
        damage: 9,
        range: 15,
        cooldown: 2,
        name: 'heavy_Troops',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, frame: string | number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new Tank(world, x, y, texture, frame, this.damage, this.hp, this.name, this.range, this.cooldown, options)
        }
    },
};