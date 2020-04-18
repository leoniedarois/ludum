import "phaser";
import { Level } from "../level/level";
import { PhaserObject } from "../models/phaserObjects/phaserObject";
import { Convoy } from "../models/convoy/convoy";
export default class MainScene extends Phaser.Scene {
  tilemap: Phaser.Tilemaps.Tilemap;
  finder: any;
  convoy: Phaser.Physics.Matter.Sprite
  constructor() {
    super({
      key: "MainScene",
    });

  }
  preload() {
    this.load.tilemapTiledJSON('map', 'assets/levels/level1.json');
    this.load.multiatlas('road', 'assets/graphics/Spritesheets/spritesheet-map.json', 'assets/graphics/Spritesheets');
    this.load.image('car', 'assets/graphics/gameplay/car.png')
  }
  create() {
    this.tilemap = this.add.tilemap('map');

    const tileSet = this.tilemap.addTilesetImage('road', 'road');
    const worldLayer = this.tilemap.createStaticLayer('terrain', tileSet, 0, 0);
    const pathLayer = this.tilemap.createStaticLayer('road', tileSet, 0, 0);

    this.spawnConvoy();


    // this.goPathfinding(pathLayer);
    let currentLevel = new Level(this.tilemap, this.matter.world.convertTilemapLayer(worldLayer));
    currentLevel.spawnEnemy();
  }

  /**
   * Spawn the convoy
   */
  spawnConvoy() {
    // typing is wrong here
    this.tilemap.findObject('Start', (startPoint: any) => {
      this.convoy =
        this.convoy = this.matter.add.sprite(startPoint.x, startPoint.y, "car", null, {
          frictionAir: 0,
        });

    })
  }

}

