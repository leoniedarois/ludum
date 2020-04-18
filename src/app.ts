import MainScene from "./scripts/scenes/MainScene";
import "./styles/style.scss";
import "phaser";

const gameConfig: Phaser.Types.Core.GameConfig = {
  backgroundColor: "#000000",
  height: 500,
  width: 500,
  parent: 'game',
  physics: {
    default: 'matter',

    matter: {
      debug: true, // true for collisions debug
      gravity: {
        y: 0,
        x: 0
      }
    },
  },
  scene: [MainScene],
  type: Phaser.AUTO,
  scale: {
    height: 1280,
    width: 1920,
    mode: Phaser.Scale.FIT,
  }

};
// tslint:disable-next-line: no-unused-expression
const game = new Phaser.Game(gameConfig);