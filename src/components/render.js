// src/components/render.js
export class Render {
    constructor(element) {
        this.element = element;
    }

    updatePosition(position) {
        this.element.style.left = `${position.x}px`;
        this.element.style.top = `${position.y}px`;
    }
}