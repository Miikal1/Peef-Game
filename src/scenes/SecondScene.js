class SecondScene extends Phaser.Scene {
    constructor() {
        super('secondScene');
    }

preload(){

    this.load.image('testBackground', "assets/testBackground.png");
    this.load.image('testGround', "assets/testGround.png");
    this.load.image('TestCharacter', "assets/TestCharacter.png");
    this.load.image('testNPC', "assets/testNPC.png");
    this.load.image('testPlatform', "assets/testPlatform.png");
    this.load.image('testDoor', "assets/testDoor.png");

}

create(){

    let width = config.width;
    let height = config.height;
    this.physics.world.gravity.y = 1000;

    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);

    this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'testBackground').setOrigin(0,0);
    //this.cameras.main.setBackgroundColor('#CCC');

    this.ground = this.physics.add.sprite(800, 900, 'testGround');
    this.ground.body.immovable = true;
    this.ground.body.allowGravity = false;

    this.door = this.physics.add.sprite(14.5, 770, 'testDoor');
    this.door.body.immovable = true;
    this.door.body.allowGravity = false;

    //this.menuConfig = {
    //    fontFamily: 'Courier',
    //   fontSize: '28px',
    //    backgroundColor: '#F3B141',
    //    color: '#843605',
    //    align: 'right',
    //    padding: {
    //        top: 5,
    //        bottom: 5,
    //     },
    //    fixedWidth: 0
    //}

    this.p1 = this.physics.add.sprite(500, 500, 'TestCharacter');
    this.p1.setCollideWorldBounds(true);

    this.talker = this.physics.add.sprite(600, 774.5, 'testNPC');

    this.low = this.physics.add.sprite(600, 720, 'testPlatform');
    this.low.body.immovable = true;
    this.low.body.allowGravity = false;

    this.physics.add.collider(this.p1, this.ground);
    this.physics.add.collider(this.talker, this.ground);
    this.physics.add.collider(this.p1, this.low);

    

}

update(){
    
    if (Math.round(this.low.x) == 600){       
         this.low.setVelocityX(100);  
    }

    if (Math.round(this.low.x) == 1500){
        this.low.setVelocityX(-100);
    }

    if(this.keyA.isDown) {
        this.p1.setVelocityX(-200);
    }
    else if(this.keyD.isDown) {
        this.p1.setVelocityX(200);
    }
    else {
        this.p1.setVelocityX(0);
    }

    if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW)) {
        this.p1.body.setVelocityY(-500);
    }

    if (this.checkCollision(this.p1, this.talker)) {
        this.add.text(game.config.width/2, 30, 'blah blah blah)', { font: '14px Futura', fill: '#FFFFFF' }).setOrigin(0.5);
    }

    if (this.checkCollision(this.p1, this.door) && Phaser.Input.Keyboard.JustDown(this.keyT)){
        this.p1.x = 55;
        console.log(Phaser.Input.Keyboard.JustDown(this.keyT));
        this.scene.switch('play');
    }
    

}

checkCollision(a, b) {
    // simple AABB checking
    if ((a.x < b.x + b.width && 
        a.x + a.width > b.x && 
        a.y < b.y + b.height &&
        a.height + a.y > b.y) ) {
            return true;
    } 
    else {
        return false;
    }
}

}