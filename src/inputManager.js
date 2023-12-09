class InputManager {
    oberservers = [];

    subscribe(fn) {
        this.oberservers.push(fn);
    }
    unsubscribe(fn) {
        this.oberservers = this.oberservers.filter(subscriber => subscriber !== fn);
    }

    broadcast(action, data) {
        this.oberservers.forEach(subscriber => subscriber(action, data));
    }

    handleKeys = e => {
        e.preventDefault();
        switch (e.keyCode) {
            case 37:
                this.broadcast('move', { x: -1, y: 0 });
                break;
            case 38:
                this.broadcast('move', { x: 0, y: -1 });
                break;
            case 39:
                this.broadcast('move', { x: 1, y: 0 });
                break;
            case 40:
                this.broadcast('move', { x: 0, y: 1 });
                break;
            default:
                break;
        }
    };


    bindKeys() {
        document.addEventListener('keydown', this.handleKeys)
    }
    unbindKeys() {
        document.removeEventListener('keydown', this.handleKeys)
    }
}

export default InputManager;