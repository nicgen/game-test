// src/entities/player.js
import { Position } from '../components/position.js';
import { Render } from '../components/render.js';

export class Player {
    constructor(x, y, gameAreaWidth, gameAreaHeight) {
        this.position = new Position(x, y);
        this.element = document.createElement('div');
        this.element.className = 'player';
        document.getElementById('gameArea').appendChild(this.element);
        this.render = new Render(this.element);
        this.render.updatePosition(this.position);
        this.gameAreaWidth = gameAreaWidth;
        this.gameAreaHeight = gameAreaHeight;
    }

    move(dx, dy) {
        // this.position.x += dx;
        // this.position.y += dy;
        const newX = this.position.x + dx;
        const newY = this.position.y + dy;

        // boundaries
        if (newX >= 0 && newX <= this.gameAreaWidth - this.element.offsetWidth) {
            this.position.x = newX;
        }
        if (newY >= 0 && newY <= this.gameAreaHeight - this.element.offsetHeight) {
            this.position.y = newY;
        }

        this.render.updatePosition(this.position);
    }
}
