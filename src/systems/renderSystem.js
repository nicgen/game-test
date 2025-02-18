// src/systems/renderSystem.js
export function renderEntities(entities) {
    entities.forEach(entity => {
        if (entity.render) {
            entity.render.updatePosition(entity.position);
        }
    });
}