import 'phaser';
import Test from './Test';


let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 400,
    height: 240,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [
        Test
    ]
};

let game = new Phaser.Game(config);

/*
https://codepen.io/samme/pen/JMVBeV*/