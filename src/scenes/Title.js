class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }


    preload(){

        this.load.image('title', "assets/title.png");
        this.load.image('pointer', "assets/pointer.png");

    }

    create(){

        let width = config.width;
        let height = config.height;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'title').setOrigin(0,0);

        this.arrow = this.physics.add.sprite(300, 800, 'pointer');
        this.arrow.body.immovable = true;

    }

    update(){

        if(Phaser.Input.Keyboard.JustDown(this.keyA)){
            this.arrow.x = 300;
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyD)){
            this.arrow.x = 870;
        }

        if (this.arrow.x == 300 && Phaser.Input.Keyboard.JustDown(this.keyW)){
            this.scene.switch('livingRoom');
        }

        if (this.arrow.x == 870 && Phaser.Input.Keyboard.JustDown(this.keyW)){
            this.scene.switch('credits');
        }

    }

}    