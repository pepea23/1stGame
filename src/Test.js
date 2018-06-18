class Test extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Test'
        });
    }
    create() {
        let style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        this.add.text(this.scene.scene.physics.world.bounds.width*0.5, this.scene.scene.physics.world.bounds.height*0.5, "Hello", style);
        //this.stage.backgroundColor = "#4488AA";
        //console.log(this.scene.scene.physics.world.bounds.width+'+'+this.scene.scene.physics.world.bounds.height);
    }
}
export default Test;