// src/systems/inputSystem.js
const keys = {};

export function handleInput(player) {
    window.addEventListener('keydown', (event) => {
        keys[event.key] = true; // Mark the key as pressed
    });

    window.addEventListener('keyup', (event) => {
        keys[event.key] = false; // Mark the key as released
    });
}

export function updateInput(player,game) {
    const speed = 5; // Adjust speed as needed

    if (keys['ArrowUp']) {
        player.move(0, -speed);
    }
    if (keys['ArrowDown']) {
        player.move(0, speed);
    }
    if (keys['ArrowLeft']) {
        player.move(-speed, 0);
    }
    if (keys['ArrowRight']) {
        player.move(speed, 0);
    }
    if (keys[' ']) {
        game.createBomb(player.position.x, player.position.y);
    }
    if (keys['Escape']) {
        game.togglePause();
    }
    // console.log(keys)
    game.ui.updateKeys(keys);
}
