import MainScene from "./scripts/scenes/MainScene";
import "./styles/style.scss";
import "phaser";

const gameConfig: Phaser.Types.Core.GameConfig = {
  backgroundColor: "#000000",
  height: window.innerHeight,
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
  width: document.body.offsetWidth,
};
// tslint:disable-next-line: no-unused-expression
new Phaser.Game(gameConfig);
