import "phaser";

export default class MainScene extends Phaser.Scene {
  tilemap: Phaser.Tilemaps.Tilemap;
  constructor() {
    super({
      key: "MainScene",
    });
  }
  preload() {
    this.load.image("gameImage", "assets/graphics/ui/game.png");
    this.load.image('road', 'assets/graphics/road.png');
    this.load.spritesheet('road', 'assets/graphics/road.tsx');
    this.load.tilemapTiledJSON('map', 'assets/levels/level1.json');
  }
  create() {
    // this.add.image(400, 300, "gameImage");
    this.tilemap = this.make.tilemap({ key: 'map', tileWidth: 30, tileHeight: 20 });
    const tileset = this.tilemap.addTilesetImage('gameImage', null, 32, 32, 1, 2);
    const layer = this.tilemap.createStaticLayer(0, tileset, 0, 0);
  }

}

