import { Game, AUTO, Scale} from 'phaser'
import GameScene from "./scenes/GameScene.js";
import {MraidManager} from "./managers/mraidManager.js";

const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    backgroundColor: '#ffffff',
    parent: 'game-container',
    scene: [GameScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

let game;

function startGame() {
    if (!game) {
        game = new Phaser.Game(config);
    } else {
        // Если уже есть, возможно, надо resume() - зависти от логики
    }
}

function destroyGame() {
    if (game) {
        game.destroy(true);
        game = null;
    }
}

// Инициализация MRAID
MraidManager.initialize(startGame, destroyGame);

// Обработчик глобального клика (если нужно)
document.addEventListener('click', () => {
    MraidManager.handleClick();
});
