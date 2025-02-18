// export class UI {
//     constructor() {
//         this.modal = document.createElement('div');
//         this.modal.className = 'modal';
//         this.modal.style.display = 'none';
//         document.body.appendChild(this.modal);
//
//         this.message = document.createElement('div');
//         this.modal.appendChild(this.message);
//
//         this.restartButton = document.createElement('button');
//         this.restartButton.innerText = 'Restart';
//         this.restartButton.onclick = () => this.restartGame();
//         this.modal.appendChild(this.restartButton);
//     }
//
//     show(message) {
//         this.message.innerText = message;
//         this.modal.style.display = 'block';
//     }
//
//     hide() {
//         this.modal.style.display = 'none';
//     }
//
//     restartGame() {
//         // Logic to restart the game
//         this.hide();
//         // Call a method to reset the game state
//     }
// }
// src/ui.js
export class UI {
    constructor() {
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.modal.style.display = 'none';
        document.body.appendChild(this.modal);

        this.message = document.createElement('div');
        this.modal.appendChild(this.message);

        this.restartButton = document.createElement('button');
        this.restartButton.innerText = 'Restart';
        this.restartButton.onclick = () => this.restartGame();
        this.modal.appendChild(this.restartButton);

        // UI Elements
        this.scoreElement = document.createElement('div');
        this.timerElement = document.createElement('div');
        this.fpsElement = document.createElement('div');
        this.keysElement = document.createElement('div');

        document.body.appendChild(this.scoreElement);
        document.body.appendChild(this.timerElement);
        document.body.appendChild(this.fpsElement);
        document.body.appendChild(this.keysElement);

        this.score = 0;
        this.startTime = Date.now();
        this.paused = false;
    }

    show(message) {
        this.message.innerText = message;
        this.modal.style.display = 'block';
    }

    hide() {
        this.modal.style.display = 'none';
    }

    restartGame() {
        this.hide();
        // Logic to restart the game
    }

    updateScore(newScore) {
        this.score = newScore;
        this.scoreElement.innerText = `Score: ${this.score}`;
    }

    updateTimer() {
        const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
        this.timerElement.innerText = `Time: ${elapsedTime}s`;
    }

    updateFPS(fps) {
        this.fpsElement.innerText = `FPS: ${fps}`;
    }

    updateKeys(pressedKeys) {
        // console.log('pressedKeys', pressedKeys);
        // this.keysElement.innerText = `Keys: ${pressedKeys.join(', ')}`;
    }

    togglePause() {
        this.paused = !this.paused;
        this.modal.style.display = this.paused ? 'block' : 'none';
    }
}
