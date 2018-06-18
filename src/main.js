import 'phaser';
import Test from './Test';


const WIDTH = document.body.clientWidth;
const HEIGHT = screen.height*0.9; 
let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: WIDTH,
    height: HEIGHT,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        Test
    ]
};

let game = new Phaser.Game(config);
