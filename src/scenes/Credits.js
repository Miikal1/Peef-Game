class Credits extends Phaser.Scene {
    constructor() {
        super('credits');
    }

    preload(){

        this.load.image('credits', "assets/credits.png");

    }

    create(){

        let width = config.width;
        let height = config.height;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'credits').setOrigin(0,0);

    }

    update(){

        if (Phaser.Input.Keyboard.JustDown(this.keyW)){
            this.scene.switch('title');
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyA)){
            this.scene.switch('title');
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyD)){
            this.scene.switch('title');
        }

    }    

}    