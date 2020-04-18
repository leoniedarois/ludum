import "phaser";
import {Level} from "../level/level";
import {Projectile} from "../models/projectiles/projectile";
import {PhaserObject} from "../models/phaserObjects/phaserObject";
import {PROJECTILES_TYPE_INFO} from "../models/projectiles/projectilesTypeInfo";

export default class MainScene extends Phaser.Scene {
  tilemap: Phaser.Tilemaps.Tilemap;
  finder: any;
  convoy: Phaser.Physics.Matter.Image;
  constructor() {
    super({
      key: "MainScene",
    });

  }
  preload() {
    this.load.tilemapTiledJSON('map', 'assets/levels/level1.json');
    this.load.multiatlas('road', 'assets/graphics/Spritesheets/spritesheet-map.json', 'assets/graphics/Spritesheets');
    this.load.multiatlas('objects', 'assets/graphics/Spritesheets/spritesheet-objects.json', 'assets/graphics/Spritesheets');
    this.load.image('car', 'assets/graphics/gameplay/car.png')
  }
  create() {
    this.tilemap = this.add.tilemap('map');

    const tileSet = this.tilemap.addTilesetImage('road', 'road');
    const worldLayer = this.tilemap.createStaticLayer('terrain', tileSet, 0, 0);
    const pathLayer = this.tilemap.createStaticLayer('road', tileSet, 0, 0);

    this.spawnConvoy();

    // this.goPathfinding(pathLayer);
    let currentLevel = new Level(this.tilemap, this.matter.world.convertTilemapLayer(worldLayer), this);
    currentLevel.spawnEnemy();

    this.matter.world.on('collisionstart', function (event: any, bodyA: MatterJS.Bodies, bodyB: MatterJS.Bodies) {
      console.log(bodyA);
      console.log(bodyB);

    });
  }

  /**
   * Spawn the convoy
   */
  spawnConvoy() {
    // typing is wrong here
    this.tilemap.findObject('Start', (startPoint: any) => {
      this.convoy = this.matter.add.sprite(startPoint.x, startPoint.y, "car", null, {
        frictionAir: 0,
      });
      this.convoy.setVelocityX(2)

    })
  }

  goPathfinding(map: Phaser.Tilemaps.StaticTilemapLayer) {
    //const finder = new Easystar;

    // We create the 2D array representing all the tiles of our map
    let grid = [];
    for (var y = 0; y < map.height; y++) {
      let col: any = [];
      for (var x = 0; x < map.width; x++) {
        // In each cell we store the ID of the tile, which corresponds
        // to its index in the tileset of the map ("ID" field in Tiled)

        const tile = map.getTileAt(0, 0);
        if (tile) {
          col.push(tile.index);
        }
      }
      grid.push(col);
    }
   // console.log(finder.setGrid(grid));
  }


}

