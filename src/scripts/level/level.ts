import 'phaser';
import * as _ from "lodash";
import Tile = Phaser.Tilemaps.Tile;
import {ENEMYS_TYPE_INFO} from "../models/enemys/enemyTypeInfo";
import {Enemy} from "../models/enemys/enemy";
export class Level {
    private map: Phaser.Tilemaps.Tilemap;
    private worldLayer: Phaser.Physics.Matter.World;
    private scene: Phaser.Scene;

    /**
     * Construct our level
     * @param map
     * @param worldLayer
     * @param scene
     */
    constructor(map: Phaser.Tilemaps.Tilemap, worldLayer: Phaser.Physics.Matter.World, scene: Phaser.Scene) {
        this.map = map;
        this.worldLayer = worldLayer;
        this.scene = scene;
    }

    getTilebyXY(x: number, y: number): Tile {
        return this.map.getTileAtWorldXY(x, y);
    }

    public spawnEnemy(): void {
        this.map.findObject('EnemysSpawn/spawn', (obj : any) => {
            let enemy = _.sample(ENEMYS_TYPE_INFO);
            enemy.create(this.worldLayer, obj.x, obj.y, 'textureString', 'frameString', {});
        })
    }
}