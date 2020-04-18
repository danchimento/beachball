export default class Scene1 extends Phaser.Scene {
    constructor() {
        super({ key: "scene 1" });

        // This shouldn't change
        this.ballImageSize  = 100;
        this.joeImageWidth = 50;
        this.joeImageHeight = 100;
        
        this.ball = null;
        this.ballInitialRotation = 1;
        this.ballMinimumRotation = 30;
        this.ballMaximumRotation = 300;
        this.ballScale = .75;
        this.ballStartOffset = 30;
        this.ballStartY = 100;
        
        this.joe = null;
        this.joeScale = .75;
        
        this.cursors = null;
        this.groundHeight = 100;

        this.scoreText = null;
        this.highscoreText = null;
        var muted = false;

        this.resetGame();
    }

    resetGame() {
        this.speed = 400;
        this.joeSpeed = 200;
        this.ballVelocityAddition = .75;
        this.joeVelocityAddition = 1;
        this.score = 0;
        this.ballBounciness = .75;
        this.gravity = 400;
        this.beatHighscore = false;
        this.hittingTimer = 0;
    }

    incrementDifficulty() {
        this.speed += 10;
        this.ballVelocityAddition += .1;
    }

    lose() {
        if (this.score > 0) {
            this.resetGame();
        }

        this.missSound.play();
    }

    init() {
        console.log("Initializing scene 1...")
    }

    preload() {
        console.log("Preloading...");

        this.load.image('background', 'assets/background.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.spritesheet('joe_run', 'assets/joe_run.png', { frameWidth: this.joeImageWidth, frameHeight: 100 });
        this.load.spritesheet('joe_stand', 'assets/joe_stand.png', { frameWidth: this.joeImageWidth, frameHeight: 100 });
        this.load.spritesheet('joe_hit', 'assets/joe_hit.png', { frameWidth: this.joeImageWidth, frameHeight: 100 });
        this.load.spritesheet('joe_run_hit', 'assets/joe_run_hit.png', { frameWidth: this.joeImageWidth, frameHeight: 100 });
        this.load.image('ground', 'assets/joe.png');
        this.load.image('floor', 'assets/floor.png');
        this.load.spritesheet('bird', 'assets/bird.png', { frameWidth: 100, frameHeight: 50 });

        this.load.audio('miss', 'assets/miss.mp3');
        this.load.audio('bounce', 'assets/bounce.mp3');
        this.load.audio('score', 'assets/score.mp3');
    }

    createBall() {
        this.ball = this.physics.add.sprite(this.sys.game.config.width / 2 + this.ballStartOffset, this.ballStartY, 'ball', 0);
        this.ball.setGravityY(this.gravity);
        this.ball.setCircle(this.ballImageSize / 2);
        this.ball.setBounce(this.ballBounciness);
        this.ball.setAngularVelocity(this.ballMinimumRotation);
        this.ball.setScale(this.ballScale);
    }

    createPlayer() {
        this.joe = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height - ((this.groundHeight) + (this.joeImageHeight * this.joeScale / 2)), 'joe_stand');
        
        this.anims.create({
            key: 'joe_stand',
            repeat: 0,
            frameRate: 2,
            frames: this.anims.generateFrameNames('joe_stand'),
        });

        this.anims.create({
            key: 'joe_hit',
            repeat: 0,
            frameRate: 2,
            frames: this.anims.generateFrameNames('joe_hit'),
        });

        this.anims.create({
            key: 'joe_run',
            frames: this.anims.generateFrameNames('joe_run'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'joe_run_hit',
            frames: this.anims.generateFrameNames('joe_run_hit'),
            frameRate: 10,
            repeat: -1
        });

        this.joe.setImmovable();
        this.joe.setCollideWorldBounds(true);
        this.joe.setScale(this.joeScale);
    }

    createScenery() {
        this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'background');
        this.bird = this.physics.add.sprite(this.sys.game.config.width - 100, 100, 'bird');
        var flyAnimation = this.anims.create({
            key: 'fly',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNames('bird')
        });
        
        this.bird.anims.load(flyAnimation);
        this.bird.setVelocityX(-60);
        this.bird.anims.play('fly');
    }

    createBounds() {
        let ground = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height - (this.groundHeight / 2), "floor");
        ground.setImmovable();

        let leftWall = this.physics.add.sprite(0, this.sys.game.config.height / 2, "floor");
        leftWall.displayWidth = 0;
        leftWall.displayHeight = 10000;
        leftWall.setImmovable();
        this.physics.add.collider(this.ball, leftWall);

        let rightwall = this.physics.add.sprite(this.sys.game.config.width, this.sys.game.config.height / 2, "floor");
        rightwall.displayWidth = 0;
        rightwall.displayHeight = 10000;
        rightwall.setImmovable();
        this.physics.add.collider(this.ball, rightwall);
        this.physics.add.collider(this.ball, ground, () => this.lose());
    }

    createSounds() {
        var soundConfig = { volume: .1 };
        this.bounceSound = this.sound.add('bounce', soundConfig);
        this.scoreSound = this.sound.add('score', soundConfig);
        this.missSound = this.sound.add('miss', soundConfig);
    }

    createScoreText() {
        let textStyle = { color: '#000', fontFamily: 'ponde' }
        this.scoreText = this.add.text(10, 10, "Score: 0", textStyle);
        this.scoreText.color = "black";
        this.highscoreText = this.add.text(this.sys.game.config.width - 190, 10, "Highscore: " + localStorage.getItem('highscore'), textStyle);
        this.highscoreText.width = 400;
        this.highscoreText.setAlign("right");
    }

    onBounce() {
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

        var randomAngularVelocity = Math.floor(Math.random() * this.ballMaximumRotation) + this.ballMinimumRotation;
        var randomDirection = Math.random() > .5 ? -1 : 1;
        this.ball.setAngularVelocity(randomAngularVelocity * randomDirection);

        if (this.score > this.highscore) {
            this.saveHighscore(this.score);

            if (!this.beatHighscore) {
                this.scoreSound.play();
                this.beatHighscore = true;
            }
        }

        this.bounceSound.play();
        this.hittingTimer = 10;
    }

    saveHighscore(score) {
        this.highscore = score;
        localStorage.setItem('highscore', score);
    }

    create() {
        console.log("Creating...");

        this.highscore = localStorage.getItem('highscore');
        if (this.highscore == null)
        {
            this.highscore = 0;
        }
        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.pointer = this.input.activePointer;

        this.input.on('pointerdown', (pointer) => { 
            this.pointer = pointer;
        });

        this.createScenery();
        this.createBall();
        this.createPlayer();
        this.createBounds();
        this.createSounds();
        this.createScoreText();
        
        this.physics.add.collider(this.ball, this.joe, () => this.onBounce());

        var muted = localStorage.getItem('muted');
        if (muted == null)
        {
            this.setMute(false);
        } else {
            this.muted = muted;
            this.setMute(this.muted);
        }

        this.input.keyboard.on("keydown_M", () => {
            this.setMute(!this.sound.mute)
        });
    }

    setMute(muted) {
        this.sound.setMute(muted);
        localStorage.setItem('muted', muted);
    }

    update() {
        this.joe.setVelocity(0);

        this.hittingTimer--;
        var runAnimation = this.hittingTimer <= 0 ? 'joe_run' : 'joe_run_hit';
        var standAnimation = this.hittingTimer <= 0 ? 'joe_stand' : 'joe_hit';

        if (this.cursors.left.isDown) {
            this.joe.setVelocityX(-this.joeSpeed);
            this.joe.anims.play(runAnimation, true);
            this.joe.flipX = true;
        } else if (this.cursors.right.isDown) {
            this.joe.setVelocityX(this.joeSpeed);
            this.joe.anims.play(runAnimation, true);
            this.joe.flipX = false;
        } else {
            this.joe.anims.play(standAnimation, true);
        }

        if (this.ball.body.angularVelocity > this.ballMinimumRotation) {
            this.ball.body.angularVelocity--;
        }

        if (this.bird.x < -500) {
            this.bird.x = this.sys.game.config.width + 100;
        }

        this.scoreText.text = `Score: ${this.score}`
        this.highscoreText.text = `Highscore: ${this.highscore}`
    }
}