import 'phaser';
import * as _ from "lodash";
import Tile = Phaser.Tilemaps.Tile;
import {ENEMYS_TYPE_INFO} from "../models/enemys/enemyTypeInfo";
import {Enemy} from "../models/enemys/enemy";
export class Level {
    private map: Phaser.Tilemaps.Tilemap;
    private worldLayer: Phaser.Physics.Matter.World;

    /**
     * Construct our level
     * @param map
     * @param worldLayer
     */
    constructor(map: Phaser.Tilemaps.Tilemap, worldLayer: Phaser.Physics.Matter.World) {
        this.map = map;
        this.worldLayer = worldLayer;
    }

    getTilebyXY(x: number, y: number): Tile {
        return this.map.getTileAtWorldXY(x, y);
    }

    public spawnEnemy(): void {
        this.map.findObject('EnemysSpawn/spawn', (obj : any) => {
            let enemy = _.sample(ENEMYS_TYPE_INFO);
            let test = enemy.create(this.worldLayer, obj.x, obj.y, 'textureString', 'frameString', {});
            console.log(test)
        })
    }
}