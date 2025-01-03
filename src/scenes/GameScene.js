import {DebugOverlay} from "../debug/DebugOverlay.js";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        DebugOverlay.init(this);
        DebugOverlay.log('MainScene created!')
    }
}