import { Player } from './entities/player.js';
import { Bomb } from './entities/bomb.js';
// import { handleInput } from './systems/inputSystem.js';
import { handleInput, updateInput } from './systems/inputSystem.js';
import { renderEntities } from './systems/renderSystem.js';
import { GameLoop } from './systems/gameloop.js';
import { UI } from './systems/ui.js';

export class Game {
    constructor() {
        this.entities = [];
        this.gameAreaWidth = 400; // Width of the game area
        this.gameAreaHeight = 400; // Height of the game area
        this.player = new Player(0, 0, this.gameAreaWidth, this.gameAreaHeight);
        this.entities.push(this.player);
        this.ui = new UI();
        handleInput(this.player);
        // this.gameLoop = new GameLoop(this.update.bind(this));
        this.gameLoop = new GameLoop(this.update.bind(this), 60);
        this.fps = 0;
        this.lastFrameTime = 0;
        this.frameCount = 0;

        this.gameLoop.start();
    }

    createBomb(x, y) {
        const bomb = new Bomb(x, y);
        this.entities.push(bomb);
    }

    // update() {
    //     updateInput(this.player, this);
    //     // Update game logic here (e.g., collision detection)
    //     renderEntities(this.entities);
    // }

    update(deltaTime) {
        // Update game logic here (e.g., collision detection)
        if (!this.ui.paused) {
            updateInput(this.player, this);
            // console.log(this.entities);
            renderEntities(this.entities);
            this.ui.updateTimer();
            this.frameCount++;
            this.calculateFPS();
        }
    }

    calculateFPS() {
        const now = performance.now();
        if (now - this.lastFrameTime >= 1000) {
            this.ui.updateFPS(this.frameCount);
            this.frameCount = 0;
            this.lastFrameTime = now;
        }
    }

    togglePause() {
        this.ui.togglePause();
        if (this.ui.paused) {
            this.gameLoop.stop();
        } else {
            this.gameLoop.start();
        }
    }

    checkWinCondition() {
        // Implement win condition logic
        return false; // Change this based on your game logic
    }

    checkLoseCondition() {
        // Implement lose condition logic
        return false; // Change this based on your game logic
    }
}
