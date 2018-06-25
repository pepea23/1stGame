import 'phaser';
import Test from './Test';
import socket from './socket';

const WIDTH = document.body.clientWidth;
const HEIGHT = screen.height*0.9; 
let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: WIDTH,
    height: HEIGHT,
    scaleMode: 0, // Phaser.ScaleManager.EXACT_FIT,
    physics: {
        default: 'arcade',
        arcade : {
            debug: false
        }
    },
    scene: [
        Test
    ]
};
socket.on('news', (data) => {
    console.log(data)
 });
let game = new Phaser.Game(config);
