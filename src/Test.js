class Test extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Test'
        });
    }
    create() {
        let style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        this.add.text(200, 100, "- phaser -\nwith a sprinkle of\npixi dust", style);
    }
}
export default Test;