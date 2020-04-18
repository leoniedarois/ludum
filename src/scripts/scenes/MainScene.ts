import "phaser";
import roadTile from "../../assets/graphics/road.png";
import level1 from "../../assets/levels/level1.csv";
export default class MainScene extends Phaser.Scene {
  tilemap: Phaser.Tilemaps.Tilemap;
  constructor() {
    super({
      key: "MainScene",
    });
  }
  preload() {
    console.log(level1)
    // this.load.image("gameImage", "assets/graphics/ui/game.png");
    this.load.image('road', roadTile);
    this.load.tilemapCSV("level1", level1)
    // this.load.tilemapTiledJSON("road", level1)
    // this.load.tilemapTiledJSON(level1)
  }
  create() {
    // this.add.image(400, 300, "gameImage");
    this.tilemap = this.make.tilemap(level1);
    const tileset = this.tilemap.addTilesetImage('road');
    const layer = this.tilemap.createStaticLayer("road", "road", 0, 0)
  }

}

