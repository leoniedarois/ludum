import {Tank} from "./tank";
import {LightTroop} from "./lightTroop";

export const ENEMYS_TEXTURE_KEY = {
    textureKey: 'objects'
};

export const ENEMYS_TYPE_INFO = {
    Tank: {
        hp: 10,
        damage: 2,
        range: 9,
        cooldown: 5,
        name: 'Tank',
        frame: 'ennemyturret.png',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new Tank(world, x, y, ENEMYS_TEXTURE_KEY.textureKey, this.frame, this.damage, this.hp, this.name, this.range, this.cooldown, options)
        }
    },
    light_Troops: {
        hp: 15,
        damage: 4,
        range: 2,
        cooldown: 25,
        name: 'light_Troops',
        frame: '',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new LightTroop(world, x, y, ENEMYS_TEXTURE_KEY.textureKey, this.frame, this.damage, this.hp, this.name, this.range, this.cooldown, options)
        }
    },
    heavy_Troops: {
        hp: 30,
        damage: 9,
        range: 15,
        cooldown: 2,
        name: 'heavy_Troops',
        frame: '',
        create: function (world: Phaser.Physics.Matter.World, x: number, y: number, options: Phaser.Types.Physics.Matter.MatterBodyConfig) {
            return new Tank(world, x, y, ENEMYS_TEXTURE_KEY.textureKey, this.frame, this.damage, this.hp, this.name, this.range, this.cooldown, options)
        }
    },
};