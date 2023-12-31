import Loot from './Loot.js';
import Monster from './Monster.js';

const lootTable = [
    { name: 'Long Sword', color: 'darkgrey', ascii: '/', offset: { x: 6, y: 3 } },
    { name: 'Health Potion', color: 'red', ascii: '!', offset: { x: 5, y: 3 } },
    { name: 'Gold coin', color: 'yellow', ascii: '$', offset: { x: 3, y: 3 } },
    { name: 'Light Armor', color: 'lightgrey', ascii: '#', offset: { x: 4, y: 3 } }
]

const monsterTable = [
    { name: 'Long Sword', color: 'darkgrey', ascii: '/', offset: { x: 6, y: 3 } },
    { name: 'Health Potion', color: 'red', ascii: '!', offset: { x: 5, y: 3 } },
    { name: 'Gold coin', color: 'yellow', ascii: '$', offset: { x: 3, y: 3 } },
    { name: 'Light Armor', color: 'lightgrey', ascii: '#', offset: { x: 4, y: 3 } }
]

class Spawner {
    constructor(world) {
        this.world = world;
    }
    spawn(spawnCount, createEntity) {
        for (let count = 0; count < spawnCount; count++) {
            let entity = createEntity();
            this.world.add(entity);
            this.world.moveToSpace(entity);
        }
    }

    spawnLoot(spawnCount) {
        this.spawn(spawnCount, () => {
            return new Loot(
                getRandomInt(this.world.width),
                getRandomInt(this.world.height),
                this.world.tilesize,
                lootTable[getRandomInt(lootTable.length)])
        })
    }

    spawnMonsters(spawnCount) {
        this.spawn(spawnCount, () => {
            return new Monster(
                getRandomInt(this.world.width),
                getRandomInt(this.world.height),
                this.world.tilesize,
                monsterTable[getRandomInt(lootTable.length)])
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

export default Spawner;