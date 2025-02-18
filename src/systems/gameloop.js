// src/gameLoop.js
// export class GameLoop {
//     constructor(updateCallback) {
//         this.updateCallback = updateCallback;
//         this.lastTime = 0;
//         this.deltaTime = 0;
//         this.running = false;
//     }
//
//     start() {
//         this.running = true;
//         requestAnimationFrame(this.loop.bind(this));
//     }
//
//     stop() {
//         this.running = false;
//     }
//
//     loop(timestamp) {
//         if (!this.running) return;
//
//         this.deltaTime = timestamp - this.lastTime;
//         this.lastTime = timestamp;
//
//         this.updateCallback(this.deltaTime);
//         requestAnimationFrame(this.loop.bind(this));
//     }
// }
export class GameLoop {
    constructor(updateCallback, fps = 60) {
        this.updateCallback = updateCallback;
        this.lastTime = 0;
        this.deltaTime = 0;
        this.running = false;
        this.fps = fps;
        this.frameDuration = 1000 / fps; // Calculate the duration of each frame in milliseconds
    }

    start() {
        this.running = true;
        requestAnimationFrame(this.loop.bind(this));
    }

    stop() {
        this.running = false;
    }

    loop(timestamp) {
        if (!this.running) return;

        this.deltaTime = timestamp - this.lastTime;

        // Only update if enough time has passed
        if (this.deltaTime >= this.frameDuration) {
            this.lastTime = timestamp - (this.deltaTime % this.frameDuration); // Adjust lastTime to account for any excess time
            this.updateCallback(this.deltaTime);
        }

        requestAnimationFrame(this.loop.bind(this));
    }
}