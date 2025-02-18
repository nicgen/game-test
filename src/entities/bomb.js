// src/entities/bomb.js
import { Position } from '../components/position.js';
import { Render } from '../components/render.js';

export class Bomb {
    constructor(x, y) {
        this.position = new Position(x, y);
        this.element = document.createElement('div');
        this.element.className = 'bomb';
        document.getElementById('gameArea').appendChild(this.element);
        this.render = new Render(this.element);
        this.render.updatePosition(this.position);
    }
}
