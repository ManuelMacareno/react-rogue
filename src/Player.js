import Entity from './Entity.js';

class Player extends Entity {
    inventory = [];

    attributes = {
        name: 'Player',
        ascii: '@',
        health: 10
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    add(item) {
        this.inventory.push(item)
    }

    copyPlayer() {
        let newPlayer = new Player();
        Object.assign(newPlayer, this);
        return newPlayer;
    }
}

export default Player;