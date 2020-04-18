import "phaser";

export default class MainScene extends Phaser.Scene {
  tilemap: Phaser.Tilemaps.Tilemap;
  constructor() {
    super({
      key: "MainScene",
    });
  }
  preload() {
    this.load.tilemapTiledJSON('map', 'assets/levels/level1.json');
    this.load.multiatlas('road', 'assets/graphics/Spritesheets/spritesheet-map.json', 'assets/graphics/Spritesheets');
  }
  create() {
    const map = this.add.tilemap('map');
    const tileSet = map.addTilesetImage('road', 'road');
    const worldLayer = map.createStaticLayer('terrain', tileSet, 0, 0);
    const pathLayer = map.createStaticLayer('road', tileSet, 0, 0);
    const worldLayerCollide = map.createStaticLayer('collide', tileSet, 0, 0);
  }

}

