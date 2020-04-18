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
        let textStyle = { color: '#000' }
        this.scoreText = this.add.text(10, 10, "Score: 0", textStyle);
        this.scoreText.color = "black";
        this.highscoreText = this.add.text(this.sys.game.config.width - 140, 10, "Highscore: " + localStorage.getItem('highscore'), textStyle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU2NlbmUxLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvYmVoYXZpb3JzL3BhdGhmb2xsb3dlci9QYXRoRm9sbG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy9wYXRoZm9sbG93ZXItcGx1Z2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvcGF0aGZvbGxvd2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvdXRpbHMvbWF0aC9EZWdUb1JhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3V0aWxzL3N5c3RlbS9HZXRTY2VuZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3V0aWxzL3N5c3RlbS9Jc1NjZW5lT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0EsS0FBSyxrREFBa0QsaUVBQWEsd0JBQXdCO0FBQzVGO0FBQ0E7QUFDQTs7QUFFZSw2RUFBYyxFOzs7Ozs7Ozs7Ozs7QUNaN0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDRFQUFhLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lMSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHsga2V5OiBcInNjZW5lIDFcIiB9KTtcblxuICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCBjaGFuZ2VcbiAgICAgICAgdGhpcy5iYWxsSW1hZ2VTaXplICA9IDEwMDtcbiAgICAgICAgdGhpcy5qb2VJbWFnZVdpZHRoID0gNTA7XG4gICAgICAgIHRoaXMuam9lSW1hZ2VIZWlnaHQgPSAxMDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJhbGwgPSBudWxsO1xuICAgICAgICB0aGlzLmJhbGxJbml0aWFsUm90YXRpb24gPSAxO1xuICAgICAgICB0aGlzLmJhbGxNaW5pbXVtUm90YXRpb24gPSAzMDtcbiAgICAgICAgdGhpcy5iYWxsTWF4aW11bVJvdGF0aW9uID0gMzAwO1xuICAgICAgICB0aGlzLmJhbGxTY2FsZSA9IC43NTtcbiAgICAgICAgdGhpcy5iYWxsU3RhcnRPZmZzZXQgPSAzMDtcbiAgICAgICAgdGhpcy5iYWxsU3RhcnRZID0gMTAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5qb2UgPSBudWxsO1xuICAgICAgICB0aGlzLmpvZVNjYWxlID0gLjc1O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJzb3JzID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncm91bmRIZWlnaHQgPSAxMDA7XG5cbiAgICAgICAgdGhpcy5zY29yZVRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpZ2hzY29yZVRleHQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgfVxuXG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gNDAwO1xuICAgICAgICB0aGlzLmpvZVNwZWVkID0gMjAwO1xuICAgICAgICB0aGlzLmJhbGxWZWxvY2l0eUFkZGl0aW9uID0gLjc1O1xuICAgICAgICB0aGlzLmpvZVZlbG9jaXR5QWRkaXRpb24gPSAxO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5iYWxsQm91bmNpbmVzcyA9IC43NTtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gNDAwO1xuICAgICAgICB0aGlzLmJlYXRIaWdoc2NvcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaXR0aW5nVGltZXIgPSAwO1xuICAgIH1cblxuICAgIGluY3JlbWVudERpZmZpY3VsdHkoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgKz0gMTA7XG4gICAgICAgIHRoaXMuYmFsbFZlbG9jaXR5QWRkaXRpb24gKz0gLjE7XG4gICAgfVxuXG4gICAgbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5taXNzU291bmQucGxheSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIHNjZW5lIDEuLi5cIilcbiAgICB9XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByZWxvYWRpbmcuLi5cIik7XG5cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdiYWNrZ3JvdW5kJywgJ2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JhbGwnLCAnYXNzZXRzL2JhbGwucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnam9lX3J1bicsICdhc3NldHMvam9lX3J1bi5wbmcnLCB7IGZyYW1lV2lkdGg6IHRoaXMuam9lSW1hZ2VXaWR0aCwgZnJhbWVIZWlnaHQ6IDEwMCB9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdqb2Vfc3RhbmQnLCAnYXNzZXRzL2pvZV9zdGFuZC5wbmcnLCB7IGZyYW1lV2lkdGg6IHRoaXMuam9lSW1hZ2VXaWR0aCwgZnJhbWVIZWlnaHQ6IDEwMCB9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdqb2VfaGl0JywgJ2Fzc2V0cy9qb2VfaGl0LnBuZycsIHsgZnJhbWVXaWR0aDogdGhpcy5qb2VJbWFnZVdpZHRoLCBmcmFtZUhlaWdodDogMTAwIH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2pvZV9ydW5faGl0JywgJ2Fzc2V0cy9qb2VfcnVuX2hpdC5wbmcnLCB7IGZyYW1lV2lkdGg6IHRoaXMuam9lSW1hZ2VXaWR0aCwgZnJhbWVIZWlnaHQ6IDEwMCB9KTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdncm91bmQnLCAnYXNzZXRzL2pvZS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdmbG9vcicsICdhc3NldHMvZmxvb3IucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYmlyZCcsICdhc3NldHMvYmlyZC5wbmcnLCB7IGZyYW1lV2lkdGg6IDEwMCwgZnJhbWVIZWlnaHQ6IDUwIH0pO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWlzcycsICdhc3NldHMvbWlzcy5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdib3VuY2UnLCAnYXNzZXRzL2JvdW5jZS5tcDMnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdzY29yZScsICdhc3NldHMvc2NvcmUubXAzJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQmFsbCgpIHtcbiAgICAgICAgdGhpcy5iYWxsID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5zeXMuZ2FtZS5jb25maWcud2lkdGggLyAyICsgdGhpcy5iYWxsU3RhcnRPZmZzZXQsIHRoaXMuYmFsbFN0YXJ0WSwgJ2JhbGwnLCAwKTtcbiAgICAgICAgdGhpcy5iYWxsLnNldEdyYXZpdHlZKHRoaXMuZ3Jhdml0eSk7XG4gICAgICAgIHRoaXMuYmFsbC5zZXRDaXJjbGUodGhpcy5iYWxsSW1hZ2VTaXplIC8gMik7XG4gICAgICAgIHRoaXMuYmFsbC5zZXRCb3VuY2UodGhpcy5iYWxsQm91bmNpbmVzcyk7XG4gICAgICAgIHRoaXMuYmFsbC5zZXRBbmd1bGFyVmVsb2NpdHkodGhpcy5iYWxsTWluaW11bVJvdGF0aW9uKTtcbiAgICAgICAgdGhpcy5iYWxsLnNldFNjYWxlKHRoaXMuYmFsbFNjYWxlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuam9lID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5zeXMuZ2FtZS5jb25maWcud2lkdGggLyAyLCB0aGlzLnN5cy5nYW1lLmNvbmZpZy5oZWlnaHQgLSAoKHRoaXMuZ3JvdW5kSGVpZ2h0KSArICh0aGlzLmpvZUltYWdlSGVpZ2h0ICogdGhpcy5qb2VTY2FsZSAvIDIpKSwgJ2pvZV9zdGFuZCcpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnam9lX3N0YW5kJyxcbiAgICAgICAgICAgIHJlcGVhdDogMCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMixcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ2pvZV9zdGFuZCcpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdqb2VfaGl0JyxcbiAgICAgICAgICAgIHJlcGVhdDogMCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMixcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ2pvZV9oaXQnKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnam9lX3J1bicsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCdqb2VfcnVuJyksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdqb2VfcnVuX2hpdCcsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCdqb2VfcnVuX2hpdCcpLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5qb2Uuc2V0SW1tb3ZhYmxlKCk7XG4gICAgICAgIHRoaXMuam9lLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcbiAgICAgICAgdGhpcy5qb2Uuc2V0U2NhbGUodGhpcy5qb2VTY2FsZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmVyeSgpIHtcbiAgICAgICAgdGhpcy5hZGQuc3ByaXRlKHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoIC8gMiwgdGhpcy5zeXMuZ2FtZS5jb25maWcuaGVpZ2h0IC8gMiwgJ2JhY2tncm91bmQnKTtcbiAgICAgICAgdGhpcy5iaXJkID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5zeXMuZ2FtZS5jb25maWcud2lkdGggLSAxMDAsIDEwMCwgJ2JpcmQnKTtcbiAgICAgICAgdmFyIGZseUFuaW1hdGlvbiA9IHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2ZseScsXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDIsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygnYmlyZCcpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5iaXJkLmFuaW1zLmxvYWQoZmx5QW5pbWF0aW9uKTtcbiAgICAgICAgdGhpcy5iaXJkLnNldFZlbG9jaXR5WCgtNjApO1xuICAgICAgICB0aGlzLmJpcmQuYW5pbXMucGxheSgnZmx5Jyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQm91bmRzKCkge1xuICAgICAgICBsZXQgZ3JvdW5kID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5zeXMuZ2FtZS5jb25maWcud2lkdGggLyAyLCB0aGlzLnN5cy5nYW1lLmNvbmZpZy5oZWlnaHQgLSAodGhpcy5ncm91bmRIZWlnaHQgLyAyKSwgXCJmbG9vclwiKTtcbiAgICAgICAgZ3JvdW5kLnNldEltbW92YWJsZSgpO1xuXG4gICAgICAgIGxldCBsZWZ0V2FsbCA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKDAsIHRoaXMuc3lzLmdhbWUuY29uZmlnLmhlaWdodCAvIDIsIFwiZmxvb3JcIik7XG4gICAgICAgIGxlZnRXYWxsLmRpc3BsYXlXaWR0aCA9IDA7XG4gICAgICAgIGxlZnRXYWxsLmRpc3BsYXlIZWlnaHQgPSAxMDAwMDtcbiAgICAgICAgbGVmdFdhbGwuc2V0SW1tb3ZhYmxlKCk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5iYWxsLCBsZWZ0V2FsbCk7XG5cbiAgICAgICAgbGV0IHJpZ2h0d2FsbCA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoLCB0aGlzLnN5cy5nYW1lLmNvbmZpZy5oZWlnaHQgLyAyLCBcImZsb29yXCIpO1xuICAgICAgICByaWdodHdhbGwuZGlzcGxheVdpZHRoID0gMDtcbiAgICAgICAgcmlnaHR3YWxsLmRpc3BsYXlIZWlnaHQgPSAxMDAwMDtcbiAgICAgICAgcmlnaHR3YWxsLnNldEltbW92YWJsZSgpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYmFsbCwgcmlnaHR3YWxsKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJhbGwsIGdyb3VuZCwgKCkgPT4gdGhpcy5sb3NlKCkpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNvdW5kcygpIHtcbiAgICAgICAgdmFyIHNvdW5kQ29uZmlnID0geyB2b2x1bWU6IC4xIH07XG4gICAgICAgIHRoaXMuYm91bmNlU291bmQgPSB0aGlzLnNvdW5kLmFkZCgnYm91bmNlJywgc291bmRDb25maWcpO1xuICAgICAgICB0aGlzLnNjb3JlU291bmQgPSB0aGlzLnNvdW5kLmFkZCgnc2NvcmUnLCBzb3VuZENvbmZpZyk7XG4gICAgICAgIHRoaXMubWlzc1NvdW5kID0gdGhpcy5zb3VuZC5hZGQoJ21pc3MnLCBzb3VuZENvbmZpZyk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2NvcmVUZXh0KCkge1xuICAgICAgICBsZXQgdGV4dFN0eWxlID0geyBjb2xvcjogJyMwMDAnIH1cbiAgICAgICAgdGhpcy5zY29yZVRleHQgPSB0aGlzLmFkZC50ZXh0KDEwLCAxMCwgXCJTY29yZTogMFwiLCB0ZXh0U3R5bGUpO1xuICAgICAgICB0aGlzLnNjb3JlVGV4dC5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5oaWdoc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLnN5cy5nYW1lLmNvbmZpZy53aWR0aCAtIDE0MCwgMTAsIFwiSGlnaHNjb3JlOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSwgdGV4dFN0eWxlKTtcbiAgICAgICAgdGhpcy5oaWdoc2NvcmVUZXh0LndpZHRoID0gNDAwO1xuICAgICAgICB0aGlzLmhpZ2hzY29yZVRleHQuc2V0QWxpZ24oXCJyaWdodFwiKTtcbiAgICB9XG5cbiAgICBvbkJvdW5jZSgpIHtcbiAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgICAgICB0aGlzLmluY3JlbWVudERpZmZpY3VsdHkoKTtcblxuICAgICAgICB2YXIgam9lQ2VudGVyID0gdGhpcy5qb2UueDtcbiAgICAgICAgdmFyIGJhbGxDZW50ZXIgPSB0aGlzLmJhbGwueDtcblxuICAgICAgICB2YXIgY29udGFjdEFyZWEgPSAodGhpcy5qb2Uud2lkdGggKyAoMiAqIHRoaXMuYmFsbC53aWR0aCkgLyAyKTtcblxuICAgICAgICB2YXIgb2ZmQ2VudGVyID0gTWF0aC5hYnMoam9lQ2VudGVyIC0gYmFsbENlbnRlcik7XG4gICAgICAgIHZhciBwZXJjZW50T2ZmQ2VudGVyID0gb2ZmQ2VudGVyIC8gY29udGFjdEFyZWE7XG5cbiAgICAgICAgdmFyIHhWZWxvY2l0eSA9IHRoaXMuc3BlZWQgKiBwZXJjZW50T2ZmQ2VudGVyO1xuICAgICAgICB2YXIgeVZlbG9jaXR5ID0gLSh0aGlzLnNwZWVkIC0geFZlbG9jaXR5KTtcblxuICAgICAgICB4VmVsb2NpdHkgKz0gTWF0aC5hYnModGhpcy5iYWxsLmJvZHkudmVsb2NpdHkueCAqIHRoaXMuYmFsbFZlbG9jaXR5QWRkaXRpb24pO1xuICAgICAgICB4VmVsb2NpdHkgKz0gTWF0aC5hYnModGhpcy5qb2UuYm9keS52ZWxvY2l0eS54ICogdGhpcy5qb2VWZWxvY2l0eUFkZGl0aW9uKTtcblxuICAgICAgICB4VmVsb2NpdHkgKj0gKGJhbGxDZW50ZXIgPCBqb2VDZW50ZXIgPyAtMSA6IDEpO1xuXG4gICAgICAgIHRoaXMuYmFsbC5zZXRWZWxvY2l0eSh4VmVsb2NpdHksIHlWZWxvY2l0eSk7XG5cbiAgICAgICAgdmFyIHJhbmRvbUFuZ3VsYXJWZWxvY2l0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYmFsbE1heGltdW1Sb3RhdGlvbikgKyB0aGlzLmJhbGxNaW5pbXVtUm90YXRpb247XG4gICAgICAgIHZhciByYW5kb21EaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpID4gLjUgPyAtMSA6IDE7XG4gICAgICAgIHRoaXMuYmFsbC5zZXRBbmd1bGFyVmVsb2NpdHkocmFuZG9tQW5ndWxhclZlbG9jaXR5ICogcmFuZG9tRGlyZWN0aW9uKTtcblxuICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMuaGlnaHNjb3JlKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVIaWdoc2NvcmUodGhpcy5zY29yZSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5iZWF0SGlnaHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlYXRIaWdoc2NvcmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib3VuY2VTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuaGl0dGluZ1RpbWVyID0gMTA7XG4gICAgfVxuXG4gICAgc2F2ZUhpZ2hzY29yZShzY29yZSkge1xuICAgICAgICB0aGlzLmhpZ2hzY29yZSA9IHNjb3JlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgc2NvcmUpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZy4uLlwiKTtcblxuICAgICAgICB0aGlzLmhpZ2hzY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKTtcbiAgICAgICAgaWYgKHRoaXMuaGlnaHNjb3JlID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaHNjb3JlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJzb3JzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG4gICAgICAgIHRoaXMucG9pbnRlciA9IHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlcjtcblxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIChwb2ludGVyKSA9PiB7IFxuICAgICAgICAgICAgdGhpcy5wb2ludGVyID0gcG9pbnRlcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2VuZXJ5KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFsbCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJvdW5kcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNvdW5kcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNjb3JlVGV4dCgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJhbGwsIHRoaXMuam9lLCAoKSA9PiB0aGlzLm9uQm91bmNlKCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5qb2Uuc2V0VmVsb2NpdHkoMCk7XG5cbiAgICAgICAgdGhpcy5oaXR0aW5nVGltZXItLTtcbiAgICAgICAgdmFyIHJ1bkFuaW1hdGlvbiA9IHRoaXMuaGl0dGluZ1RpbWVyIDw9IDAgPyAnam9lX3J1bicgOiAnam9lX3J1bl9oaXQnO1xuICAgICAgICB2YXIgc3RhbmRBbmltYXRpb24gPSB0aGlzLmhpdHRpbmdUaW1lciA8PSAwID8gJ2pvZV9zdGFuZCcgOiAnam9lX2hpdCc7XG5cbiAgICAgICAgaWYgKHRoaXMuY3Vyc29ycy5sZWZ0LmlzRG93bikge1xuICAgICAgICAgICAgdGhpcy5qb2Uuc2V0VmVsb2NpdHlYKC10aGlzLmpvZVNwZWVkKTtcbiAgICAgICAgICAgIHRoaXMuam9lLmFuaW1zLnBsYXkocnVuQW5pbWF0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuam9lLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvcnMucmlnaHQuaXNEb3duKSB7XG4gICAgICAgICAgICB0aGlzLmpvZS5zZXRWZWxvY2l0eVgodGhpcy5qb2VTcGVlZCk7XG4gICAgICAgICAgICB0aGlzLmpvZS5hbmltcy5wbGF5KHJ1bkFuaW1hdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmpvZS5mbGlwWCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qb2UuYW5pbXMucGxheShzdGFuZEFuaW1hdGlvbiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5iYWxsLmJvZHkuYW5ndWxhclZlbG9jaXR5ID4gdGhpcy5iYWxsTWluaW11bVJvdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwuYm9keS5hbmd1bGFyVmVsb2NpdHktLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJpcmQueCA8IC01MDApIHtcbiAgICAgICAgICAgIHRoaXMuYmlyZC54ID0gdGhpcy5zeXMuZ2FtZS5jb25maWcud2lkdGggKyAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjb3JlVGV4dC50ZXh0ID0gYFNjb3JlOiAke3RoaXMuc2NvcmV9YFxuICAgICAgICB0aGlzLmhpZ2hzY29yZVRleHQudGV4dCA9IGBIaWdoc2NvcmU6ICR7dGhpcy5oaWdoc2NvcmV9YFxuICAgIH1cbn0iLCJpbXBvcnQgU2NlbmUxIGZyb20gJy4vU2NlbmUxLmpzJztcbmltcG9ydCBQYXRoRm9sbG93ZXJQbHVnaW4gZnJvbSAncGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3BhdGhmb2xsb3dlci1wbHVnaW4uanMnO1xuXG5jb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBnYW1lLi4uXCIpXG5uZXcgUGhhc2VyLkdhbWUoe1xuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxuICAgIHBhcmVudDogXCJnYW1lXCIsXG4gICAgd2lkdGg6IDYwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJCNDU3MFwiLFxuICAgIHBoeXNpY3M6IHtcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgICAgIGFyY2FkZToge1xuICAgICAgICAgLy8gICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGx1Z2luczoge1xuICAgICAgICBnbG9iYWw6IFt7XG4gICAgICAgICAgICBrZXk6ICdyZXhQYXRoRm9sbG93ZXInLFxuICAgICAgICAgICAgcGx1Z2luOiBQYXRoRm9sbG93ZXJQbHVnaW4sXG4gICAgICAgICAgICBzdGFydDogdHJ1ZVxuICAgICAgICB9XVxuICAgIH0sXG4gICAgc2NlbmU6IFtcbiAgICAgICAgU2NlbmUxXG4gICAgXVxufSk7IiwiaW1wb3J0IEdldFNjZW5lT2JqZWN0IGZyb20gJy4uLy4uL3V0aWxzL3N5c3RlbS9HZXRTY2VuZU9iamVjdC5qcyc7XHJcbmltcG9ydCBEZWdUb1JhZCBmcm9tICcuLi8uLi91dGlscy9tYXRoL0RlZ1RvUmFkLmpzJztcclxuXHJcbmNvbnN0IEdldFZhbHVlID0gUGhhc2VyLlV0aWxzLk9iamVjdHMuR2V0VmFsdWU7XHJcbmNvbnN0IEFuZ2xlQmV0d2VlbiA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW47XHJcblxyXG5jbGFzcyBQYXRoRm9sbG93ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZU9iamVjdCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gR2V0U2NlbmVPYmplY3QoZ2FtZU9iamVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3QgPSAwO1xyXG4gICAgICAgIHRoaXMucGF0aFZlY3RvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnJlc2V0RnJvbUpTT04oY29uZmlnKTtcclxuICAgICAgICB0aGlzLmJvb3QoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEZyb21KU09OKG8pIHtcclxuICAgICAgICB0aGlzLnNldFBhdGgoR2V0VmFsdWUobywgJ3BhdGgnLCB1bmRlZmluZWQpKTtcclxuICAgICAgICB2YXIgdCA9IEdldFZhbHVlKG8sICd0JywgdW5kZWZpbmVkKTtcclxuICAgICAgICBpZiAodCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VCh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByb3RhdGVUb1BhdGggPSBHZXRWYWx1ZShvLCAncm90YXRlVG9QYXRoJywgZmFsc2UpO1xyXG4gICAgICAgIHZhciByb3RhdGlvbk9mZnNldCA9IEdldFZhbHVlKG8sICdyb3RhdGlvbk9mZnNldCcsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgaWYgKHJvdGF0aW9uT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcm90YXRpb25PZmZzZXQgPSBEZWdUb1JhZChHZXRWYWx1ZShvLCAnYW5nbGVPZmZzZXQnLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0Um90YXRlVG9QYXRoKHJvdGF0ZVRvUGF0aCwgcm90YXRpb25PZmZzZXQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXHJcbiAgICAgICAgICAgIHQ6IHRoaXMudCxcclxuICAgICAgICAgICAgcm90YXRlVG9QYXRoOiB0aGlzLnJvdGF0ZVRvUGF0aCxcclxuICAgICAgICAgICAgcm90YXRpb25PZmZzZXQ6IHRoaXMucm90YXRpb25PZmZzZXRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGJvb3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU9iamVjdC5vbmNlKSB7IC8vIG9vcHMsIGJvYiBvYmplY3QgZG9lcyBub3QgaGF2ZSBldmVudCBlbWl0dGVyXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC5vbmNlKCdkZXN0cm95JywgdGhpcy5kZXN0cm95LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2h1dGRvd24oKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnNodXRkb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGF0aChwYXRoKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRUKHQpIHtcclxuICAgICAgICB0aGlzLnQgPSB0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um90YXRlVG9QYXRoKHJvdGF0ZVRvUGF0aCwgcm90YXRpb25PZmZzZXQpIHtcclxuICAgICAgICB0aGlzLnJvdGF0ZVRvUGF0aCA9IHJvdGF0ZVRvUGF0aDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uT2Zmc2V0ID0gcm90YXRpb25PZmZzZXQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhdGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZ2FtZU9iamVjdCA9IHRoaXMuZ2FtZU9iamVjdDtcclxuICAgICAgICB2YXIgY3VyWCA9IGdhbWVPYmplY3QueCxcclxuICAgICAgICAgICAgY3VyWSA9IGdhbWVPYmplY3QueTtcclxuICAgICAgICB0aGlzLnBhdGhWZWN0b3IgPSB0aGlzLnBhdGguZ2V0UG9pbnQodGhpcy50LCB0aGlzLnBhdGhWZWN0b3IpO1xyXG4gICAgICAgIHZhciBuZXdYID0gdGhpcy5wYXRoVmVjdG9yLngsXHJcbiAgICAgICAgICAgIG5ld1kgPSB0aGlzLnBhdGhWZWN0b3IueTtcclxuXHJcbiAgICAgICAgaWYgKChjdXJYID09PSBuZXdYKSAmJiAoY3VyWSA9PT0gbmV3WSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2FtZU9iamVjdC5zZXRQb3NpdGlvbihuZXdYLCBuZXdZKTtcclxuICAgICAgICBpZiAodGhpcy5yb3RhdGVUb1BhdGgpIHtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC5yb3RhdGlvbiA9IEFuZ2xlQmV0d2VlbihjdXJYLCBjdXJZLCBuZXdYLCBuZXdZKSArIHRoaXMucm90YXRpb25PZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXRoRm9sbG93ZXI7IiwiaW1wb3J0IFBhdGhGb2xsb3dlciBmcm9tICcuL3BhdGhmb2xsb3dlci5qcyc7XHJcblxyXG5jbGFzcyBQYXRoRm9sbG93ZXJQbHVnaW4gZXh0ZW5kcyBQaGFzZXIuUGx1Z2lucy5CYXNlUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbHVnaW5NYW5hZ2VyKSB7XHJcbiAgICAgICAgc3VwZXIocGx1Z2luTWFuYWdlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50RW1pdHRlciA9IHRoaXMuZ2FtZS5ldmVudHM7XHJcbiAgICAgICAgZXZlbnRFbWl0dGVyLm9uY2UoJ2Rlc3Ryb3knLCB0aGlzLmRlc3Ryb3ksIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChnYW1lT2JqZWN0LCBjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhdGhGb2xsb3dlcihnYW1lT2JqZWN0LCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aEZvbGxvd2VyUGx1Z2luOyIsImltcG9ydCBQYXRoRm9sbG93ZXIgZnJvbSAnLi9iZWhhdmlvcnMvcGF0aGZvbGxvd2VyL1BhdGhGb2xsb3dlci5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IFBhdGhGb2xsb3dlcjsiLCIvKipcclxuICogQGF1dGhvciAgICAgICBSaWNoYXJkIERhdmV5IDxyaWNoQHBob3RvbnN0b3JtLmNvbT5cclxuICogQGNvcHlyaWdodCAgICAyMDE4IFBob3RvbiBTdG9ybSBMdGQuXHJcbiAqIEBsaWNlbnNlICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvYmxvYi9tYXN0ZXIvbGljZW5zZS50eHR8TUlUIExpY2Vuc2V9XHJcbiAqL1xyXG5cclxuY29uc3QgREVHX1RPX1JBRCA9IE1hdGguUEkgLyAxODA7XHJcblxyXG4vKipcclxuICogQ29udmVydCB0aGUgZ2l2ZW4gYW5nbGUgZnJvbSBkZWdyZWVzLCB0byB0aGUgZXF1aXZhbGVudCBhbmdsZSBpbiByYWRpYW5zLlxyXG4gKlxyXG4gKiBAZnVuY3Rpb24gUGhhc2VyLk1hdGguRGVnVG9SYWRcclxuICogQHNpbmNlIDMuMC4wXHJcbiAqXHJcbiAqIEBwYXJhbSB7aW50ZWdlcn0gZGVncmVlcyAtIFRoZSBhbmdsZSAoaW4gZGVncmVlcykgdG8gY29udmVydCB0byByYWRpYW5zLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBnaXZlbiBhbmdsZSBjb252ZXJ0ZWQgdG8gcmFkaWFucy5cclxuICovXHJcbnZhciBEZWdUb1JhZCA9IGZ1bmN0aW9uIChkZWdyZWVzKVxyXG57XHJcbiAgICByZXR1cm4gZGVncmVlcyAqIERFR19UT19SQUQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERlZ1RvUmFkO1xyXG4iLCJpbXBvcnQgSXNTY2VuZU9iamVjdCBmcm9tICcuL0lzU2NlbmVPYmplY3QuanMnO1xyXG5cclxudmFyIEdldFNjZW5lT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgaWYgKElzU2NlbmVPYmplY3Qob2JqZWN0KSkgeyAvLyBvYmplY3QgPSBzY2VuZVxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5zY2VuZSAmJiBJc1NjZW5lT2JqZWN0KG9iamVjdC5zY2VuZSkpIHsgLy8gb2JqZWN0ID0gZ2FtZSBvYmplY3RcclxuICAgICAgICByZXR1cm4gb2JqZWN0LnNjZW5lO1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucGFyZW50ICYmIG9iamVjdC5wYXJlbnQuc2NlbmUgJiYgSXNTY2VuZU9iamVjdChvYmplY3QucGFyZW50LnNjZW5lKSkgeyAvLyBwYXJlbnQgPSBib2Igb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdC5wYXJlbnQuc2NlbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldFNjZW5lT2JqZWN0OyIsImNvbnN0IFNjZW5lQ2xhc3MgPSBQaGFzZXIuU2NlbmU7XHJcbnZhciBJc1NjZW5lT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgcmV0dXJuIChvYmplY3QgaW5zdGFuY2VvZiBTY2VuZUNsYXNzKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJc1NjZW5lT2JqZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=