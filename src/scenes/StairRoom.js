class StairRoom extends Phaser.Scene {
    constructor() {
        super('stairRoom');
    }

    preload(){

        this.load.image('stairRoom', "assets/stairRoom.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('stairStep', "assets/stairStep.png");
        this.load.image('stairPillarThin', "assets/stairPillarThin.png");
        this.load.image('stairPillarThick', "assets/stairPillarThick.png");
        this.load.image('needle', "assets/needle.png");
        this.load.spritesheet('PeefSide', "assets/PeefSide.png", {frameWidth: 50, frameHeight: 60});
        this.load.image('clearDoor', "assets/clearDoor.png");

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

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'stairRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.stairStepOne = this.physics.add.sprite(1084, 678, 'stairStep');
        this.stairStepOne.body.immovable = true;
        this.stairStepOne.body.allowGravity = false;
        this.platforms.add(this.stairStepOne);

        this.stairPillarOne = this.physics.add.sprite(1044, 635, 'stairPillarThick');
        this.stairPillarOne.body.immovable = true;
        this.stairPillarOne.body.allowGravity = false;
        this.platforms.add(this.stairPillarOne);

        this.stairStepTwo = this.physics.add.sprite(1004, 590, 'stairStep');
        this.stairStepTwo.body.immovable = true;
        this.stairStepTwo.body.allowGravity = false;
        this.platforms.add(this.stairStepTwo);

        this.stairPillarTwo = this.physics.add.sprite(962, 545, 'stairPillarThin');
        this.stairPillarTwo.body.immovable = true;
        this.stairPillarTwo.body.allowGravity = false;
        this.platforms.add(this.stairPillarTwo);

        this.stairStepThree = this.physics.add.sprite(920, 502, 'stairStep');
        this.stairStepThree.body.immovable = true;
        this.stairStepThree.body.allowGravity = false;
        this.platforms.add(this.stairStepThree);

        this.stairPillarThree = this.physics.add.sprite(880, 457, 'stairPillarThick');
        this.stairPillarThree.body.immovable = true;
        this.stairPillarThree.body.allowGravity = false;
        this.platforms.add(this.stairPillarThree);

        this.stairStepFour = this.physics.add.sprite(840, 414, 'stairStep');
        this.stairStepFour.body.immovable = true;
        this.stairStepFour.body.allowGravity = false;
        this.platforms.add(this.stairStepFour);

        this.stairPillarFour = this.physics.add.sprite(798, 369, 'stairPillarThin');
        this.stairPillarFour.body.immovable = true;
        this.stairPillarFour.body.allowGravity = false;
        this.platforms.add(this.stairPillarFour);

        this.stairStepFive = this.physics.add.sprite(756, 326, 'stairStep');
        this.stairStepFive.body.immovable = true;
        this.stairStepFive.body.allowGravity = false;
        this.platforms.add(this.stairStepFive);

        this.stairPillarFive = this.physics.add.sprite(716, 281, 'stairPillarThick');
        this.stairPillarFive.body.immovable = true;
        this.stairPillarFive.body.allowGravity = false;
        this.platforms.add(this.stairPillarFive);

        this.stairStepSix = this.physics.add.sprite(676, 238, 'stairStep');
        this.stairStepSix.body.immovable = true;
        this.stairStepSix.body.allowGravity = false;
        this.platforms.add(this.stairStepSix);

        this.stairPillarFour = this.physics.add.sprite(634, 193, 'stairPillarThin');
        this.stairPillarFour.body.immovable = true;
        this.stairPillarFour.body.allowGravity = false;
        this.platforms.add(this.stairPillarFour);

        this.stairStepSeven = this.physics.add.sprite(592, 150, 'stairStep');
        this.stairStepSeven.body.immovable = true;
        this.stairStepSeven.body.allowGravity = false;
        this.platforms.add(this.stairStepSeven);

        this.stairPillarFive = this.physics.add.sprite(552, 105, 'stairPillarThick');
        this.stairPillarFive.body.immovable = true;
        this.stairPillarFive.body.allowGravity = false;
        this.platforms.add(this.stairPillarFive);

        this.stairStepEight = this.physics.add.sprite(512, 62, 'stairStep');
        this.stairStepEight.body.immovable = true;
        this.stairStepEight.body.allowGravity = false;
        this.platforms.add(this.stairStepEight);

        this.needleTwo = this.physics.add.sprite(592, 130, 'needle');

      //  this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
      //  this.doorLeft.body.immovable = true;
      //  this.doorLeft.body.allowGravity = false;

        this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        this.doorRight.body.immovable = true;
        this.doorRight.body.allowGravity = false;
        
        this.p1 = this.physics.add.sprite(1535, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);
        this.p1.setFlip(true, false);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.needleTwo, this.platforms);

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('PeefSide', { start: 0, end: 7, first: 0}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: [{key: 'PeefSide', frame: 0}],
        });

    }

    update(){

        if(this.keyA.isDown) {
            this.p1.setVelocityX(-200);
            this.p1.setFlip(true, false);
            this.p1.anims.play('walk', true);
        }
        else if(this.keyD.isDown) {
            this.p1.setVelocityX(200);
            this.p1.resetFlip();
            this.p1.anims.play('walk', true);
        }
        else {
            this.p1.setVelocityX(0);
            this.p1.anims.play('idle', true);
        }
    
        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-500);
        }

        if(Phaser.Input.Keyboard.JustDown(this.keyG)){
            console.log(this.has("needleTwo"));
        }
        
        if (this.checkCollision(this.p1, this.needleTwo) && Phaser.Input.Keyboard.JustDown(this.keyT)){
            inventory.push("needleTwo");
            this.needleTwo.destroy();
        }

        //if (Phaser.Input.Keyboard.JustDown(this.keyV)){
        //    inventory.splice(inventory.indexOf("neeldeTwo"));
        //}

        //if (this.checkCollision(this.p1, this.doorLeft)){
        //    this.p1.x = 55;
        //    this.scene.switch('stairRoom');
        //}

        if (this.checkCollision(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('diningRoom');
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

    has(item){
        this.space = 0;
        this.result = false
        while (this.space < inventory.length){
            if (inventory[this.space] == item){
                this.result = true;
                break;
            }
            else {
                this.space += 1;
            }
        }
        return this.result;
    }

}