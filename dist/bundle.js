/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Scene1.js":
/*!*******************!*\
  !*** ./Scene1.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene1; });
class Scene1 extends Phaser.Scene {
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

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scene1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene1.js */ "./Scene1.js");
/* harmony import */ var phaser3_rex_plugins_plugins_pathfollower_plugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser3-rex-plugins/plugins/pathfollower-plugin.js */ "./node_modules/phaser3-rex-plugins/plugins/pathfollower-plugin.js");



console.log("Initializing game...")
new Phaser.Game({
    type: Phaser.AUTO,
    parent: "game",
    width: 600,
    height: 600,
    backgroundColor: "#2B4570",
    physics: {
        default: 'arcade',
        arcade: {
         //   debug: true,
        }
    },
    plugins: {
        global: [{
            key: 'rexPathFollower',
            plugin: phaser3_rex_plugins_plugins_pathfollower_plugin_js__WEBPACK_IMPORTED_MODULE_1__["default"],
            start: true
        }]
    },
    scene: [
        _Scene1_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    ]
});

/***/ }),

/***/ "./node_modules/phaser3-rex-plugins/plugins/behaviors/pathfollower/PathFollower.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/phaser3-rex-plugins/plugins/behaviors/pathfollower/PathFollower.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_system_GetSceneObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/system/GetSceneObject.js */ "./node_modules/phaser3-rex-plugins/plugins/utils/system/GetSceneObject.js");
/* harmony import */ var _utils_math_DegToRad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/math/DegToRad.js */ "./node_modules/phaser3-rex-plugins/plugins/utils/math/DegToRad.js");
/* harmony import */ var _utils_math_DegToRad_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_math_DegToRad_js__WEBPACK_IMPORTED_MODULE_1__);



const GetValue = Phaser.Utils.Objects.GetValue;
const AngleBetween = Phaser.Math.Angle.Between;

class PathFollower {
    constructor(gameObject, config) {
        this.gameObject = gameObject;
        this.scene = Object(_utils_system_GetSceneObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(gameObject);

        this._t = 0;
        this.pathVector = undefined;
        this.resetFromJSON(config);
        this.boot();
    }

    resetFromJSON(o) {
        this.setPath(GetValue(o, 'path', undefined));
        var t = GetValue(o, 't', undefined);
        if (t !== undefined) {
            this.setT(t);
        }

        var rotateToPath = GetValue(o, 'rotateToPath', false);
        var rotationOffset = GetValue(o, 'rotationOffset', undefined);
        if (rotationOffset === undefined) {
            rotationOffset = _utils_math_DegToRad_js__WEBPACK_IMPORTED_MODULE_1___default()(GetValue(o, 'angleOffset', 0));
        }
        this.setRotateToPath(rotateToPath, rotationOffset);
        return this;
    }

    toJSON() {
        return {
            path: this.path,
            t: this.t,
            rotateToPath: this.rotateToPath,
            rotationOffset: this.rotationOffset
        };
    }

    boot() {
        if (this.gameObject.once) { // oops, bob object does not have event emitter
            this.gameObject.once('destroy', this.destroy, this);
        }
    }

    shutdown() {
        this.gameObject = undefined;
        this.scene = undefined;
    }

    destroy() {
        this.shutdown();
    }

    setPath(path) {
        this.path = path;
        return this;
    }

    setT(t) {
        this.t = t;
        return this;
    }

    get t() {
        return this._t;
    }

    set t(value) {
        this._t = value;
        this.update();
    }

    setRotateToPath(rotateToPath, rotationOffset) {
        this.rotateToPath = rotateToPath;
        this.rotationOffset = rotationOffset;
        return this;
    }

    update() {
        if (this.path === undefined) {
            return;
        }

        var gameObject = this.gameObject;
        var curX = gameObject.x,
            curY = gameObject.y;
        this.pathVector = this.path.getPoint(this.t, this.pathVector);
        var newX = this.pathVector.x,
            newY = this.pathVector.y;

        if ((curX === newX) && (curY === newY)) {
            return;
        }

        gameObject.setPosition(newX, newY);
        if (this.rotateToPath) {
            gameObject.rotation = AngleBetween(curX, curY, newX, newY) + this.rotationOffset;
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (PathFollower);

/***/ }),

/***/ "./node_modules/phaser3-rex-plugins/plugins/pathfollower-plugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/phaser3-rex-plugins/plugins/pathfollower-plugin.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pathfollower_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathfollower.js */ "./node_modules/phaser3-rex-plugins/plugins/pathfollower.js");


class PathFollowerPlugin extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
        super(pluginManager);
    }

    start() {
        var eventEmitter = this.game.events;
        eventEmitter.once('destroy', this.destroy, this);
    }

    add(gameObject, config) {
        return new _pathfollower_js__WEBPACK_IMPORTED_MODULE_0__["default"](gameObject, config);
    }

}

/* harmony default export */ __webpack_exports__["default"] = (PathFollowerPlugin);

/***/ }),

/***/ "./node_modules/phaser3-rex-plugins/plugins/pathfollower.js":
/*!******************************************************************!*\
  !*** ./node_modules/phaser3-rex-plugins/plugins/pathfollower.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _behaviors_pathfollower_PathFollower_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behaviors/pathfollower/PathFollower.js */ "./node_modules/phaser3-rex-plugins/plugins/behaviors/pathfollower/PathFollower.js");

/* harmony default export */ __webpack_exports__["default"] = (_behaviors_pathfollower_PathFollower_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/phaser3-rex-plugins/plugins/utils/math/DegToRad.js":
/*!*************************************************************************!*\
  !*** ./node_modules/phaser3-rex-plugins/plugins/utils/math/DegToRad.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

const DEG_TO_RAD = Math.PI / 180;

/**
 * Convert the given angle from degrees, to the equivalent angle in radians.
 *
 * @function Phaser.Math.DegToRad
 * @since 3.0.0
 *
 * @param {integer} degrees - The angle (in degrees) to convert to radians.
 *
 * @return {number} The given angle converted to radians.
 */
var DegToRad = function (degrees)
{
    return degrees * DEG_TO_RAD;
};

module.exports = DegToRad;


/***/ }),

/***/ "./node_modules/phaser3-rex-plugins/plugins/utils/system/GetSceneObject.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/phaser3-rex-plugins/plugins/utils/system/GetSceneObject.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IsSceneObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsSceneObject.js */ "./node_modules/phaser3-rex-plugins/plugins/utils/system/IsSceneObject.js");


var GetSceneObject = function (object) {
    if (Object(_IsSceneObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) { // object = scene
        return object;
    } else if (object.scene && Object(_IsSceneObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object.scene)) { // object = game object
        return object.scene;
    } else if (object.parent && object.parent.scene && Object(_IsSceneObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object.parent.scene)) { // parent = bob object
        return object.parent.scene;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GetSceneObject);

/***/ }),

/***/ "./node_modules/phaser3-rex-plugins/plugins/utils/system/IsSceneObject.js":
/*!********************************************************************************!*\
  !*** ./node_modules/phaser3-rex-plugins/plugins/utils/system/IsSceneObject.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SceneClass = Phaser.Scene;
var IsSceneObject = function (object) {
    return (object instanceof SceneClass);
}
/* harmony default export */ __webpack_exports__["default"] = (IsSceneObject);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU2NlbmUxLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvYmVoYXZpb3JzL3BhdGhmb2xsb3dlci9QYXRoRm9sbG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy9wYXRoZm9sbG93ZXItcGx1Z2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvcGF0aGZvbGxvd2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvdXRpbHMvbWF0aC9EZWdUb1JhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3V0aWxzL3N5c3RlbS9HZXRTY2VuZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3V0aWxzL3N5c3RlbS9Jc1NjZW5lT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxlQUFlLGlCQUFpQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFLG1EQUFtRDtBQUNuSCxvRUFBb0UsbURBQW1EO0FBQ3ZILGdFQUFnRSxtREFBbUQ7QUFDbkgsd0VBQXdFLG1EQUFtRDtBQUMzSDtBQUNBO0FBQ0EsMERBQTBELG1DQUFtQzs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsV0FBVztBQUNuRCxnREFBZ0QsZUFBZTtBQUMvRDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pTQTtBQUFBO0FBQUE7QUFBaUM7QUFDbUQ7O0FBRXBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEZBQWtCO0FBQ3RDO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLFFBQVEsa0RBQU07QUFDZDtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDMUJEO0FBQUE7QUFBQTtBQUFBO0FBQWtFO0FBQ2Q7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtFQUFjOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOERBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDJFQUFZLEU7Ozs7Ozs7Ozs7OztBQ3pHM0I7QUFBQTtBQUE2Qzs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdEQUFZO0FBQy9COztBQUVBOztBQUVlLGlGQUFrQixFOzs7Ozs7Ozs7Ozs7QUNuQmpDO0FBQUE7QUFBb0U7QUFDckQsOElBQVksRTs7Ozs7Ozs7Ozs7QUNEM0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBK0M7O0FBRS9DO0FBQ0EsUUFBUSxpRUFBYSxXQUFXO0FBQ2hDO0FBQ0EsS0FBSywwQkFBMEIsaUVBQWEsaUJBQWlCO0FBQzdEO0FBQ0EsS0FBSyxrREFBa0QsaUVBQWEsd0JBQXdCO0FBQzVGO0FBQ0E7QUFDQTs7QUFFZSw2RUFBYyxFOzs7Ozs7Ozs7Ozs7QUNaN0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDRFQUFhLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lMSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHsga2V5OiBcInNjZW5lIDFcIiB9KTtcblxuICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBjaGFuZ2VcbiAgICAgICAgdGhpcy5iYWxsSW1hZ2VTaXplICA9IDEwMDtcbiAgICAgICAgdGhpcy5qb2VJbWFnZVdpZHRoID0gNTA7XG4gICAgICAgIHRoaXMuam9lSW1hZ2VIZWlnaHQgPSAxMDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJhbGwgPSBudWxsO1xuICAgICAgICB0aGlzLmJhbGxJbml0aWFsUm90YXRpb24gPSAxO1xuICAgICAgICB0aGlzLmJhbGxNaW5pbXVtUm90YXRpb24gPSAzMDtcbiAgICAgICAgdGhpcy5iYWxsTWF4aW11bVJvdGF0aW9uID0gMzAwO1xuICAgICAgICB0aGlzLmJhbGxTY2FsZSA9IC43NTtcbiAgICAgICAgdGhpcy5iYWxsU3RhcnRPZmZzZXQgPSAzMDtcbiAgICAgICAgdGhpcy5iYWxsU3RhcnRZID0gMTAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5qb2UgPSBudWxsO1xuICAgICAgICB0aGlzLmpvZVNjYWxlID0gLjc1O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJzb3JzID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncm91bmRIZWlnaHQgPSAxMDA7XG5cbiAgICAgICAgdGhpcy5zY29yZVRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpZ2hzY29yZVRleHQgPSBudWxsO1xuICAgICAgICB2YXIgbXV0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgIH1cblxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDQwMDtcbiAgICAgICAgdGhpcy5qb2VTcGVlZCA9IDIwMDtcbiAgICAgICAgdGhpcy5iYWxsVmVsb2NpdHlBZGRpdGlvbiA9IC43NTtcbiAgICAgICAgdGhpcy5qb2VWZWxvY2l0eUFkZGl0aW9uID0gMTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuYmFsbEJvdW5jaW5lc3MgPSAuNzU7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDQwMDtcbiAgICAgICAgdGhpcy5iZWF0SGlnaHNjb3JlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGl0dGluZ1RpbWVyID0gMDtcbiAgICB9XG5cbiAgICBpbmNyZW1lbnREaWZmaWN1bHR5KCkge1xuICAgICAgICB0aGlzLnNwZWVkICs9IDEwO1xuICAgICAgICB0aGlzLmJhbGxWZWxvY2l0eUFkZGl0aW9uICs9IC4xO1xuICAgIH1cblxuICAgIGxvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjb3JlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWlzc1NvdW5kLnBsYXkoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBzY2VuZSAxLi4uXCIpXG4gICAgfVxuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcmVsb2FkaW5nLi4uXCIpO1xuXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsICdhc3NldHMvYmFja2dyb3VuZC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdiYWxsJywgJ2Fzc2V0cy9iYWxsLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2pvZV9ydW4nLCAnYXNzZXRzL2pvZV9ydW4ucG5nJywgeyBmcmFtZVdpZHRoOiB0aGlzLmpvZUltYWdlV2lkdGgsIGZyYW1lSGVpZ2h0OiAxMDAgfSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnam9lX3N0YW5kJywgJ2Fzc2V0cy9qb2Vfc3RhbmQucG5nJywgeyBmcmFtZVdpZHRoOiB0aGlzLmpvZUltYWdlV2lkdGgsIGZyYW1lSGVpZ2h0OiAxMDAgfSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnam9lX2hpdCcsICdhc3NldHMvam9lX2hpdC5wbmcnLCB7IGZyYW1lV2lkdGg6IHRoaXMuam9lSW1hZ2VXaWR0aCwgZnJhbWVIZWlnaHQ6IDEwMCB9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdqb2VfcnVuX2hpdCcsICdhc3NldHMvam9lX3J1bl9oaXQucG5nJywgeyBmcmFtZVdpZHRoOiB0aGlzLmpvZUltYWdlV2lkdGgsIGZyYW1lSGVpZ2h0OiAxMDAgfSk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZ3JvdW5kJywgJ2Fzc2V0cy9qb2UucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmxvb3InLCAnYXNzZXRzL2Zsb29yLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2JpcmQnLCAnYXNzZXRzL2JpcmQucG5nJywgeyBmcmFtZVdpZHRoOiAxMDAsIGZyYW1lSGVpZ2h0OiA1MCB9KTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21pc3MnLCAnYXNzZXRzL21pc3MubXAzJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnYm91bmNlJywgJ2Fzc2V0cy9ib3VuY2UubXAzJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnc2NvcmUnLCAnYXNzZXRzL3Njb3JlLm1wMycpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJhbGwoKSB7XG4gICAgICAgIHRoaXMuYmFsbCA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoIC8gMiArIHRoaXMuYmFsbFN0YXJ0T2Zmc2V0LCB0aGlzLmJhbGxTdGFydFksICdiYWxsJywgMCk7XG4gICAgICAgIHRoaXMuYmFsbC5zZXRHcmF2aXR5WSh0aGlzLmdyYXZpdHkpO1xuICAgICAgICB0aGlzLmJhbGwuc2V0Q2lyY2xlKHRoaXMuYmFsbEltYWdlU2l6ZSAvIDIpO1xuICAgICAgICB0aGlzLmJhbGwuc2V0Qm91bmNlKHRoaXMuYmFsbEJvdW5jaW5lc3MpO1xuICAgICAgICB0aGlzLmJhbGwuc2V0QW5ndWxhclZlbG9jaXR5KHRoaXMuYmFsbE1pbmltdW1Sb3RhdGlvbik7XG4gICAgICAgIHRoaXMuYmFsbC5zZXRTY2FsZSh0aGlzLmJhbGxTY2FsZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICB0aGlzLmpvZSA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoIC8gMiwgdGhpcy5zeXMuZ2FtZS5jb25maWcuaGVpZ2h0IC0gKCh0aGlzLmdyb3VuZEhlaWdodCkgKyAodGhpcy5qb2VJbWFnZUhlaWdodCAqIHRoaXMuam9lU2NhbGUgLyAyKSksICdqb2Vfc3RhbmQnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2pvZV9zdGFuZCcsXG4gICAgICAgICAgICByZXBlYXQ6IDAsXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDIsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCdqb2Vfc3RhbmQnKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnam9lX2hpdCcsXG4gICAgICAgICAgICByZXBlYXQ6IDAsXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDIsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCdqb2VfaGl0JyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2pvZV9ydW4nLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygnam9lX3J1bicpLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnam9lX3J1bl9oaXQnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygnam9lX3J1bl9oaXQnKSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuam9lLnNldEltbW92YWJsZSgpO1xuICAgICAgICB0aGlzLmpvZS5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG4gICAgICAgIHRoaXMuam9lLnNldFNjYWxlKHRoaXMuam9lU2NhbGUpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lcnkoKSB7XG4gICAgICAgIHRoaXMuYWRkLnNwcml0ZSh0aGlzLnN5cy5nYW1lLmNvbmZpZy53aWR0aCAvIDIsIHRoaXMuc3lzLmdhbWUuY29uZmlnLmhlaWdodCAvIDIsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAgIHRoaXMuYmlyZCA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoIC0gMTAwLCAxMDAsICdiaXJkJyk7XG4gICAgICAgIHZhciBmbHlBbmltYXRpb24gPSB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdmbHknLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAyLFxuICAgICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ2JpcmQnKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmlyZC5hbmltcy5sb2FkKGZseUFuaW1hdGlvbik7XG4gICAgICAgIHRoaXMuYmlyZC5zZXRWZWxvY2l0eVgoLTYwKTtcbiAgICAgICAgdGhpcy5iaXJkLmFuaW1zLnBsYXkoJ2ZseScpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJvdW5kcygpIHtcbiAgICAgICAgbGV0IGdyb3VuZCA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoIC8gMiwgdGhpcy5zeXMuZ2FtZS5jb25maWcuaGVpZ2h0IC0gKHRoaXMuZ3JvdW5kSGVpZ2h0IC8gMiksIFwiZmxvb3JcIik7XG4gICAgICAgIGdyb3VuZC5zZXRJbW1vdmFibGUoKTtcblxuICAgICAgICBsZXQgbGVmdFdhbGwgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSgwLCB0aGlzLnN5cy5nYW1lLmNvbmZpZy5oZWlnaHQgLyAyLCBcImZsb29yXCIpO1xuICAgICAgICBsZWZ0V2FsbC5kaXNwbGF5V2lkdGggPSAwO1xuICAgICAgICBsZWZ0V2FsbC5kaXNwbGF5SGVpZ2h0ID0gMTAwMDA7XG4gICAgICAgIGxlZnRXYWxsLnNldEltbW92YWJsZSgpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYmFsbCwgbGVmdFdhbGwpO1xuXG4gICAgICAgIGxldCByaWdodHdhbGwgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSh0aGlzLnN5cy5nYW1lLmNvbmZpZy53aWR0aCwgdGhpcy5zeXMuZ2FtZS5jb25maWcuaGVpZ2h0IC8gMiwgXCJmbG9vclwiKTtcbiAgICAgICAgcmlnaHR3YWxsLmRpc3BsYXlXaWR0aCA9IDA7XG4gICAgICAgIHJpZ2h0d2FsbC5kaXNwbGF5SGVpZ2h0ID0gMTAwMDA7XG4gICAgICAgIHJpZ2h0d2FsbC5zZXRJbW1vdmFibGUoKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJhbGwsIHJpZ2h0d2FsbCk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5iYWxsLCBncm91bmQsICgpID0+IHRoaXMubG9zZSgpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTb3VuZHMoKSB7XG4gICAgICAgIHZhciBzb3VuZENvbmZpZyA9IHsgdm9sdW1lOiAuMSB9O1xuICAgICAgICB0aGlzLmJvdW5jZVNvdW5kID0gdGhpcy5zb3VuZC5hZGQoJ2JvdW5jZScsIHNvdW5kQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zY29yZVNvdW5kID0gdGhpcy5zb3VuZC5hZGQoJ3Njb3JlJywgc291bmRDb25maWcpO1xuICAgICAgICB0aGlzLm1pc3NTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdtaXNzJywgc291bmRDb25maWcpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjb3JlVGV4dCgpIHtcbiAgICAgICAgbGV0IHRleHRTdHlsZSA9IHsgY29sb3I6ICcjMDAwJywgZm9udEZhbWlseTogJ3BvbmRlJyB9XG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dCgxMCwgMTAsIFwiU2NvcmU6IDBcIiwgdGV4dFN0eWxlKTtcbiAgICAgICAgdGhpcy5zY29yZVRleHQuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuaGlnaHNjb3JlVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy5zeXMuZ2FtZS5jb25maWcud2lkdGggLSAxOTAsIDEwLCBcIkhpZ2hzY29yZTogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyksIHRleHRTdHlsZSk7XG4gICAgICAgIHRoaXMuaGlnaHNjb3JlVGV4dC53aWR0aCA9IDQwMDtcbiAgICAgICAgdGhpcy5oaWdoc2NvcmVUZXh0LnNldEFsaWduKFwicmlnaHRcIik7XG4gICAgfVxuXG4gICAgb25Cb3VuY2UoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgdGhpcy5pbmNyZW1lbnREaWZmaWN1bHR5KCk7XG5cbiAgICAgICAgdmFyIGpvZUNlbnRlciA9IHRoaXMuam9lLng7XG4gICAgICAgIHZhciBiYWxsQ2VudGVyID0gdGhpcy5iYWxsLng7XG5cbiAgICAgICAgdmFyIGNvbnRhY3RBcmVhID0gKHRoaXMuam9lLndpZHRoICsgKDIgKiB0aGlzLmJhbGwud2lkdGgpIC8gMik7XG5cbiAgICAgICAgdmFyIG9mZkNlbnRlciA9IE1hdGguYWJzKGpvZUNlbnRlciAtIGJhbGxDZW50ZXIpO1xuICAgICAgICB2YXIgcGVyY2VudE9mZkNlbnRlciA9IG9mZkNlbnRlciAvIGNvbnRhY3RBcmVhO1xuXG4gICAgICAgIHZhciB4VmVsb2NpdHkgPSB0aGlzLnNwZWVkICogcGVyY2VudE9mZkNlbnRlcjtcbiAgICAgICAgdmFyIHlWZWxvY2l0eSA9IC0odGhpcy5zcGVlZCAtIHhWZWxvY2l0eSk7XG5cbiAgICAgICAgeFZlbG9jaXR5ICs9IE1hdGguYWJzKHRoaXMuYmFsbC5ib2R5LnZlbG9jaXR5LnggKiB0aGlzLmJhbGxWZWxvY2l0eUFkZGl0aW9uKTtcbiAgICAgICAgeFZlbG9jaXR5ICs9IE1hdGguYWJzKHRoaXMuam9lLmJvZHkudmVsb2NpdHkueCAqIHRoaXMuam9lVmVsb2NpdHlBZGRpdGlvbik7XG5cbiAgICAgICAgeFZlbG9jaXR5ICo9IChiYWxsQ2VudGVyIDwgam9lQ2VudGVyID8gLTEgOiAxKTtcblxuICAgICAgICB0aGlzLmJhbGwuc2V0VmVsb2NpdHkoeFZlbG9jaXR5LCB5VmVsb2NpdHkpO1xuXG4gICAgICAgIHZhciByYW5kb21Bbmd1bGFyVmVsb2NpdHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJhbGxNYXhpbXVtUm90YXRpb24pICsgdGhpcy5iYWxsTWluaW11bVJvdGF0aW9uO1xuICAgICAgICB2YXIgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IC41ID8gLTEgOiAxO1xuICAgICAgICB0aGlzLmJhbGwuc2V0QW5ndWxhclZlbG9jaXR5KHJhbmRvbUFuZ3VsYXJWZWxvY2l0eSAqIHJhbmRvbURpcmVjdGlvbik7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hzY29yZSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlSGlnaHNjb3JlKHRoaXMuc2NvcmUpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmVhdEhpZ2hzY29yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWF0SGlnaHNjb3JlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm91bmNlU291bmQucGxheSgpO1xuICAgICAgICB0aGlzLmhpdHRpbmdUaW1lciA9IDEwO1xuICAgIH1cblxuICAgIHNhdmVIaWdoc2NvcmUoc2NvcmUpIHtcbiAgICAgICAgdGhpcy5oaWdoc2NvcmUgPSBzY29yZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIHNjb3JlKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcuLi5cIik7XG5cbiAgICAgICAgdGhpcy5oaWdoc2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XG4gICAgICAgIGlmICh0aGlzLmhpZ2hzY29yZSA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hzY29yZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3Vyc29ycyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgICAgICB0aGlzLnBvaW50ZXIgPSB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXI7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAocG9pbnRlcikgPT4geyBcbiAgICAgICAgICAgIHRoaXMucG9pbnRlciA9IHBvaW50ZXI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NlbmVyeSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJhbGwoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTb3VuZHMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY29yZVRleHQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5iYWxsLCB0aGlzLmpvZSwgKCkgPT4gdGhpcy5vbkJvdW5jZSgpKTtcblxuICAgICAgICB2YXIgbXV0ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXV0ZWQnKTtcbiAgICAgICAgaWYgKG11dGVkID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TXV0ZShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11dGVkID0gbXV0ZWQ7XG4gICAgICAgICAgICB0aGlzLnNldE11dGUodGhpcy5tdXRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKFwia2V5ZG93bl9NXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0TXV0ZSghdGhpcy5zb3VuZC5tdXRlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRNdXRlKG11dGVkKSB7XG4gICAgICAgIHRoaXMuc291bmQuc2V0TXV0ZShtdXRlZCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXRlZCcsIG11dGVkKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuam9lLnNldFZlbG9jaXR5KDApO1xuXG4gICAgICAgIHRoaXMuaGl0dGluZ1RpbWVyLS07XG4gICAgICAgIHZhciBydW5BbmltYXRpb24gPSB0aGlzLmhpdHRpbmdUaW1lciA8PSAwID8gJ2pvZV9ydW4nIDogJ2pvZV9ydW5faGl0JztcbiAgICAgICAgdmFyIHN0YW5kQW5pbWF0aW9uID0gdGhpcy5oaXR0aW5nVGltZXIgPD0gMCA/ICdqb2Vfc3RhbmQnIDogJ2pvZV9oaXQnO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnNvcnMubGVmdC5pc0Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMuam9lLnNldFZlbG9jaXR5WCgtdGhpcy5qb2VTcGVlZCk7XG4gICAgICAgICAgICB0aGlzLmpvZS5hbmltcy5wbGF5KHJ1bkFuaW1hdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmpvZS5mbGlwWCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JzLnJpZ2h0LmlzRG93bikge1xuICAgICAgICAgICAgdGhpcy5qb2Uuc2V0VmVsb2NpdHlYKHRoaXMuam9lU3BlZWQpO1xuICAgICAgICAgICAgdGhpcy5qb2UuYW5pbXMucGxheShydW5BbmltYXRpb24sIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5qb2UuZmxpcFggPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuam9lLmFuaW1zLnBsYXkoc3RhbmRBbmltYXRpb24sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYmFsbC5ib2R5LmFuZ3VsYXJWZWxvY2l0eSA+IHRoaXMuYmFsbE1pbmltdW1Sb3RhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5iYWxsLmJvZHkuYW5ndWxhclZlbG9jaXR5LS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5iaXJkLnggPCAtNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmJpcmQueCA9IHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoICsgMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY29yZVRleHQudGV4dCA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWBcbiAgICAgICAgdGhpcy5oaWdoc2NvcmVUZXh0LnRleHQgPSBgSGlnaHNjb3JlOiAke3RoaXMuaGlnaHNjb3JlfWBcbiAgICB9XG59IiwiaW1wb3J0IFNjZW5lMSBmcm9tICcuL1NjZW5lMS5qcyc7XG5pbXBvcnQgUGF0aEZvbGxvd2VyUGx1Z2luIGZyb20gJ3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy9wYXRoZm9sbG93ZXItcGx1Z2luLmpzJztcblxuY29uc29sZS5sb2coXCJJbml0aWFsaXppbmcgZ2FtZS4uLlwiKVxubmV3IFBoYXNlci5HYW1lKHtcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgICBwYXJlbnQ6IFwiZ2FtZVwiLFxuICAgIHdpZHRoOiA2MDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQjQ1NzBcIixcbiAgICBwaHlzaWNzOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgICAgICBhcmNhZGU6IHtcbiAgICAgICAgIC8vICAgZGVidWc6IHRydWUsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgICAgZ2xvYmFsOiBbe1xuICAgICAgICAgICAga2V5OiAncmV4UGF0aEZvbGxvd2VyJyxcbiAgICAgICAgICAgIHBsdWdpbjogUGF0aEZvbGxvd2VyUGx1Z2luLFxuICAgICAgICAgICAgc3RhcnQ6IHRydWVcbiAgICAgICAgfV1cbiAgICB9LFxuICAgIHNjZW5lOiBbXG4gICAgICAgIFNjZW5lMVxuICAgIF1cbn0pOyIsImltcG9ydCBHZXRTY2VuZU9iamVjdCBmcm9tICcuLi8uLi91dGlscy9zeXN0ZW0vR2V0U2NlbmVPYmplY3QuanMnO1xyXG5pbXBvcnQgRGVnVG9SYWQgZnJvbSAnLi4vLi4vdXRpbHMvbWF0aC9EZWdUb1JhZC5qcyc7XHJcblxyXG5jb25zdCBHZXRWYWx1ZSA9IFBoYXNlci5VdGlscy5PYmplY3RzLkdldFZhbHVlO1xyXG5jb25zdCBBbmdsZUJldHdlZW4gPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuO1xyXG5cclxuY2xhc3MgUGF0aEZvbGxvd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVPYmplY3QsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IEdldFNjZW5lT2JqZWN0KGdhbWVPYmplY3QpO1xyXG5cclxuICAgICAgICB0aGlzLl90ID0gMDtcclxuICAgICAgICB0aGlzLnBhdGhWZWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5yZXNldEZyb21KU09OKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5ib290KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRGcm9tSlNPTihvKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQYXRoKEdldFZhbHVlKG8sICdwYXRoJywgdW5kZWZpbmVkKSk7XHJcbiAgICAgICAgdmFyIHQgPSBHZXRWYWx1ZShvLCAndCcsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgaWYgKHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFQodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcm90YXRlVG9QYXRoID0gR2V0VmFsdWUobywgJ3JvdGF0ZVRvUGF0aCcsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcm90YXRpb25PZmZzZXQgPSBHZXRWYWx1ZShvLCAncm90YXRpb25PZmZzZXQnLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIGlmIChyb3RhdGlvbk9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uT2Zmc2V0ID0gRGVnVG9SYWQoR2V0VmFsdWUobywgJ2FuZ2xlT2Zmc2V0JywgMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFJvdGF0ZVRvUGF0aChyb3RhdGVUb1BhdGgsIHJvdGF0aW9uT2Zmc2V0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxyXG4gICAgICAgICAgICB0OiB0aGlzLnQsXHJcbiAgICAgICAgICAgIHJvdGF0ZVRvUGF0aDogdGhpcy5yb3RhdGVUb1BhdGgsXHJcbiAgICAgICAgICAgIHJvdGF0aW9uT2Zmc2V0OiB0aGlzLnJvdGF0aW9uT2Zmc2V0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBib290KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVPYmplY3Qub25jZSkgeyAvLyBvb3BzLCBib2Igb2JqZWN0IGRvZXMgbm90IGhhdmUgZXZlbnQgZW1pdHRlclxyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3Qub25jZSgnZGVzdHJveScsIHRoaXMuZGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNodXRkb3duKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zaHV0ZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhdGgocGF0aCkge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VCh0KSB7XHJcbiAgICAgICAgdGhpcy50ID0gdDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3QgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJvdGF0ZVRvUGF0aChyb3RhdGVUb1BhdGgsIHJvdGF0aW9uT2Zmc2V0KSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGVUb1BhdGggPSByb3RhdGVUb1BhdGg7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbk9mZnNldCA9IHJvdGF0aW9uT2Zmc2V0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGdhbWVPYmplY3QgPSB0aGlzLmdhbWVPYmplY3Q7XHJcbiAgICAgICAgdmFyIGN1clggPSBnYW1lT2JqZWN0LngsXHJcbiAgICAgICAgICAgIGN1clkgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgICAgdGhpcy5wYXRoVmVjdG9yID0gdGhpcy5wYXRoLmdldFBvaW50KHRoaXMudCwgdGhpcy5wYXRoVmVjdG9yKTtcclxuICAgICAgICB2YXIgbmV3WCA9IHRoaXMucGF0aFZlY3Rvci54LFxyXG4gICAgICAgICAgICBuZXdZID0gdGhpcy5wYXRoVmVjdG9yLnk7XHJcblxyXG4gICAgICAgIGlmICgoY3VyWCA9PT0gbmV3WCkgJiYgKGN1clkgPT09IG5ld1kpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdhbWVPYmplY3Quc2V0UG9zaXRpb24obmV3WCwgbmV3WSk7XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRlVG9QYXRoKSB7XHJcbiAgICAgICAgICAgIGdhbWVPYmplY3Qucm90YXRpb24gPSBBbmdsZUJldHdlZW4oY3VyWCwgY3VyWSwgbmV3WCwgbmV3WSkgKyB0aGlzLnJvdGF0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aEZvbGxvd2VyOyIsImltcG9ydCBQYXRoRm9sbG93ZXIgZnJvbSAnLi9wYXRoZm9sbG93ZXIuanMnO1xyXG5cclxuY2xhc3MgUGF0aEZvbGxvd2VyUGx1Z2luIGV4dGVuZHMgUGhhc2VyLlBsdWdpbnMuQmFzZVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGx1Z2luTWFuYWdlcikge1xyXG4gICAgICAgIHN1cGVyKHBsdWdpbk1hbmFnZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHZhciBldmVudEVtaXR0ZXIgPSB0aGlzLmdhbWUuZXZlbnRzO1xyXG4gICAgICAgIGV2ZW50RW1pdHRlci5vbmNlKCdkZXN0cm95JywgdGhpcy5kZXN0cm95LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoZ2FtZU9iamVjdCwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYXRoRm9sbG93ZXIoZ2FtZU9iamVjdCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGhGb2xsb3dlclBsdWdpbjsiLCJpbXBvcnQgUGF0aEZvbGxvd2VyIGZyb20gJy4vYmVoYXZpb3JzL3BhdGhmb2xsb3dlci9QYXRoRm9sbG93ZXIuanMnO1xyXG5leHBvcnQgZGVmYXVsdCBQYXRoRm9sbG93ZXI7IiwiLyoqXHJcbiAqIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiAqIEBjb3B5cmlnaHQgICAgMjAxOCBQaG90b24gU3Rvcm0gTHRkLlxyXG4gKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4gKi9cclxuXHJcbmNvbnN0IERFR19UT19SQUQgPSBNYXRoLlBJIC8gMTgwO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFuZ2xlIGZyb20gZGVncmVlcywgdG8gdGhlIGVxdWl2YWxlbnQgYW5nbGUgaW4gcmFkaWFucy5cclxuICpcclxuICogQGZ1bmN0aW9uIFBoYXNlci5NYXRoLkRlZ1RvUmFkXHJcbiAqIEBzaW5jZSAzLjAuMFxyXG4gKlxyXG4gKiBAcGFyYW0ge2ludGVnZXJ9IGRlZ3JlZXMgLSBUaGUgYW5nbGUgKGluIGRlZ3JlZXMpIHRvIGNvbnZlcnQgdG8gcmFkaWFucy5cclxuICpcclxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZ2l2ZW4gYW5nbGUgY29udmVydGVkIHRvIHJhZGlhbnMuXHJcbiAqL1xyXG52YXIgRGVnVG9SYWQgPSBmdW5jdGlvbiAoZGVncmVlcylcclxue1xyXG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBERUdfVE9fUkFEO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEZWdUb1JhZDtcclxuIiwiaW1wb3J0IElzU2NlbmVPYmplY3QgZnJvbSAnLi9Jc1NjZW5lT2JqZWN0LmpzJztcclxuXHJcbnZhciBHZXRTY2VuZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgIGlmIChJc1NjZW5lT2JqZWN0KG9iamVjdCkpIHsgLy8gb2JqZWN0ID0gc2NlbmVcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3Quc2NlbmUgJiYgSXNTY2VuZU9iamVjdChvYmplY3Quc2NlbmUpKSB7IC8vIG9iamVjdCA9IGdhbWUgb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdC5zY2VuZTtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBhcmVudCAmJiBvYmplY3QucGFyZW50LnNjZW5lICYmIElzU2NlbmVPYmplY3Qob2JqZWN0LnBhcmVudC5zY2VuZSkpIHsgLy8gcGFyZW50ID0gYm9iIG9iamVjdFxyXG4gICAgICAgIHJldHVybiBvYmplY3QucGFyZW50LnNjZW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRTY2VuZU9iamVjdDsiLCJjb25zdCBTY2VuZUNsYXNzID0gUGhhc2VyLlNjZW5lO1xyXG52YXIgSXNTY2VuZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgIHJldHVybiAob2JqZWN0IGluc3RhbmNlb2YgU2NlbmVDbGFzcyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSXNTY2VuZU9iamVjdDsiXSwic291cmNlUm9vdCI6IiJ9