export default class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "scene 1" });

        this.ball = null;
        this.joe = null;
        this.cursors = null;
        this.groundHeight = 50;
        this.ballSize = 75;
        this.ballStartOffset = 30;
        this.ballStartY = 100;
        this.joeWidth = 30;
        this.joeHeight = 60;

        var debugText = null;

        this.resetGame();
    }

    resetGame() {
        this.speed = 400;
        this.joeSpeed = 200;
        var ratio = 1.0;
        this.ballVelocityAddition = .75;
        this.joeVelocityAddition = 1;
        this.score = 0;
        this.ballBounciness = .75;
        this.gravity = 400;
    }

    incrementDifficulty() {
        this.speed += 10;
        this.ballVelocityAddition += .1;
    }

    init() {
        console.log("Initializing scene 1...")
    }

    preload() {
        console.log("Preloading...");

        this.load.image('ball', 'assets/ball.png');
        this.load.image('joe', 'assets/joe.png');
        this.load.image('ground', 'assets/joe.png');
    }

    create() {
        console.log("Creating...");

        // For some reason none of the objects appear if this isn't here
        this.debugText = this.add.text(10, 10, "v1.0");

        this.cursors = this.input.keyboard.createCursorKeys();

        this.ball = this.physics.add.sprite(this.sys.game.config.width / 2 + this.ballStartOffset, this.ballStartY, 'ball');
        this.ball.displayWidth = this.ballSize;
        this.ball.displayHeight = this.ballSize;
        this.ball.setGravityY(this.gravity);
        this.ball.setCircle(38);
        this.ball.setBounce(this.ballBounciness);
        this.ball.width = this.ballSize;

        this.joe = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height - ((this.groundHeight) + (this.joeHeight / 2)), 'joe');
        this.joe.displayWidth = this.joeWidth;
        this.joe.displayHeight = this.joeHeight;
        this.joe.width = this.joeWidth;
        this.joe.setCircle(38, 0, -(this.joeWidth / 2));
        this.joe.setImmovable();
        this.joe.setCollideWorldBounds(true);

        let ground = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height - (this.groundHeight / 2), "ground");
        ground.displayWidth = this.sys.game.config.width * 1.1;
        ground.displayHeight = this.groundHeight;
        ground.setImmovable();

        let leftWall = this.physics.add.sprite(0, this.sys.game.config.height / 2, "ground");
        leftWall.displayWidth = 0;
        leftWall.displayHeight = 10000;
        leftWall.setImmovable();
        this.physics.add.collider(this.ball, leftWall);

        let rightwall = this.physics.add.sprite(this.sys.game.config.width, this.sys.game.config.height / 2, "ground");
        rightwall.displayWidth = 0;
        rightwall.displayHeight = 10000;
        rightwall.setImmovable();
        this.physics.add.collider(this.ball, rightwall);
        
        this.physics.add.collider(this.ball, ground, () => this.resetGame());
        this.physics.add.collider(this.ball, this.joe, () => {
            
            this.score++;
            this.incrementDifficulty();

            var joeCenter = this.joe.x;
            var ballCenter = this.ball.x;

            var contactArea = (this.joe.width + (2 * this.ball.width) / 2);

            var offCenter = Math.abs(joeCenter - ballCenter);
            var percentOffCenter = offCenter / contactArea;

            var xVelocity = this.speed * percentOffCenter;
            var yVelocity = -(this.speed - xVelocity);

            xVelocity += Math.abs(this.ball.body.velocity.x * this.ballVelocityAddition);
            xVelocity += Math.abs(this.joe.body.velocity.x * this.joeVelocityAddition);

            xVelocity *= (ballCenter < joeCenter ? -1 : 1);

            this.ball.setVelocity(xVelocity, yVelocity);
        });
    }

    update() {
        this.joe.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.joe.setVelocityX(-this.joeSpeed);
        }
        else if (this.cursors.right.isDown)
        {
            this.joe.setVelocityX(this.joeSpeed);
        }

        this.debugText.text = `Score: ${this.score}`
    }
}