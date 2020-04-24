import Scene1 from './Scene1.js';
import PathFollowerPlugin from 'phaser3-rex-plugins/plugins/pathfollower-plugin.js';

console.log("Initializing game...")
new Phaser.Game({
    type: Phaser.AUTO,
    parent: "game",
    width: 600,
    height: 600,
    backgroundColor: "#2B4570",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    plugins: {
        global: [{
            key: 'rexPathFollower',
            plugin: PathFollowerPlugin,
            start: true
        }]
    },
    scene: [
        Scene1
    ]
});