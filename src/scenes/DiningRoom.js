class DiningRoom extends Phaser.Scene {
    constructor() {
        super('diningRoom');
    }

    preload(){

        this.load.image('diningRoom', "assets/diningRoom.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('chairSeatSide', "assets/chairSeatSide.png");
        this.load.image('tableSurface', "assets/tableSurface.png");
        this.load.image('needle', "assets/needle.png");
        this.load.image('ropeCoil', "assets/ropeCoil.png");
        this.load.image('stool', "assets/stool.png");
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
        this.keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'diningRoom').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 864, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.platforms = this.add.group();

        this.farLeftChair = this.physics.add.sprite(140, 488, 'chairSeatSide');
        this.farLeftChair.body.immovable = true;
        this.farLeftChair.body.allowGravity = false;
        this.platforms.add(this.farLeftChair);

        this.farRightChair = this.physics.add.sprite(1480, 488, 'chairSeatSide');
        this.farRightChair.body.immovable = true;
        this.farRightChair.body.allowGravity = false;
        this.platforms.add(this.farRightChair);

        this.tableTop = this.physics.add.sprite(816, 322, 'tableSurface');
        this.tableTop.body.immovable = true;
        this.tableTop.body.allowGravity = false;
        this.platforms.add(this.tableTop);

        this.needleOne = this.physics.add.sprite(300, 270, 'needle');

        this.rope = this.physics.add.sprite(130, 430, 'ropeCoil');

        this.doorLeft = this.physics.add.sprite(14.5, 735, 'clearDoor');
        this.doorLeft.body.immovable = true;
        this.doorLeft.body.allowGravity = false;

        this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        this.doorRight.body.immovable = true;
        this.doorRight.body.allowGravity = false;
        
        this.p1 = this.physics.add.sprite(1535, 730, 'PeefSide');
        this.p1.setCollideWorldBounds(true);
        this.p1.setFlip(true, false);

        this.stool = this.physics.add.sprite(1350, 730, 'stool');
        this.stool.body.immovable = true;
        this.stool.body.allowGravity = false;

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.p1, this.platforms);
        this.physics.add.collider(this.p1, this.stool);
        this.physics.add.collider(this.needleOne, this.platforms);
        this.physics.add.collider(this.rope, this.platforms);

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

        if(this.checkCollision(this.p1, this.farLeftChair) && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-650);
            console.log(this.p1.velocityY);
            console.log("1");
        }
        
        if(this.checkCollision(this.p1, this.farRightChair) && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-650);
            console.log(this.p1.velocityY);
            console.log("2");
        }

        if(this.checkCollision(this.p1, this.stool) && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-800);
            console.log(this.p1.velocityY);
            console.log("3");
        }

        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-500);
            console.log(this.p1.velocityY);
            console.log("4");
        }

        if (this.checkCollision(this.p1, this.doorLeft)){
            this.p1.x = 55;
            this.scene.switch('stairRoom');
        }

        if (this.checkCollision(this.p1, this.doorRight)){
            this.p1.x = 1535;
            this.scene.switch('livingRoom');
        }

        if (this.checkCollision(this.p1, this.needleOne) && Phaser.Input.Keyboard.JustDown(this.keyT)){
            inventory.push("needleOne");
            this.needleOne.destroy();
        }

        if (this.checkCollision(this.p1, this.rope) && Phaser.Input.Keyboard.JustDown(this.keyT)){
            inventory.push("rope");
            this.rope.destroy();
        }

        //if (Phaser.Input.Keyboard.JustDown(this.keyV)){
        //    inventory.splice(inventory.indexOf("neeldeOne"));
        //}

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