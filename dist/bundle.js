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

        this.objects = [];
        this.ball = null;
        this.joe = null;
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
        this.add.text(10, 10, "v1.0");

        this.ball = this.physics.add.sprite(this.sys.game.config.width / 2, 100, 'ball');
        this.ball.setGravityY(100);

    //    this.joe = this.physics.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height * .90, 'joe');

        let groundX = this.sys.game.config.width / 2;
        let groundY = this.sys.game.config.height * .95;

        let ground = this.physics.add.sprite(groundX, groundY, "ground");
        
        this.physics.add.collider(this.ball, this.ground);
        //  this.physics.add.collider(this.joe, this.ground);
        
        ground.setImmovable(true);
    }

    update() {
        
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
    width: 600,
    height: 600,
    backgroundColor: "#2B4570",
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU2NlbmUxLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvYmVoYXZpb3JzL3BhdGhmb2xsb3dlci9QYXRoRm9sbG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy9wYXRoZm9sbG93ZXItcGx1Z2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvcGF0aGZvbGxvd2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9waGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvdXRpbHMvbWF0aC9EZWdUb1JhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3V0aWxzL3N5c3RlbS9HZXRTY2VuZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3V0aWxzL3N5c3RlbS9Jc1NjZW5lT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxlQUFlLGlCQUFpQjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQWlDO0FBQ21EOztBQUVwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwRkFBa0I7QUFDdEM7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsUUFBUSxrREFBTTtBQUNkO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBa0U7QUFDZDs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0VBQWM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4REFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMkVBQVksRTs7Ozs7Ozs7Ozs7O0FDekczQjtBQUFBO0FBQTZDOztBQUU3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsd0RBQVk7QUFDL0I7O0FBRUE7O0FBRWUsaUZBQWtCLEU7Ozs7Ozs7Ozs7OztBQ25CakM7QUFBQTtBQUFvRTtBQUNyRCw4SUFBWSxFOzs7Ozs7Ozs7OztBQ0QzQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUErQzs7QUFFL0M7QUFDQSxRQUFRLGlFQUFhLFdBQVc7QUFDaEM7QUFDQSxLQUFLLDBCQUEwQixpRUFBYSxpQkFBaUI7QUFDN0Q7QUFDQSxLQUFLLGtEQUFrRCxpRUFBYSx3QkFBd0I7QUFDNUY7QUFDQTtBQUNBOztBQUVlLDZFQUFjLEU7Ozs7Ozs7Ozs7OztBQ1o3QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsNEVBQWEsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUxIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoeyBrZXk6IFwic2NlbmUgMVwiIH0pO1xuXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmJhbGwgPSBudWxsO1xuICAgICAgICB0aGlzLmpvZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbml0aWFsaXppbmcgc2NlbmUgMS4uLlwiKVxuICAgIH1cblxuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJlbG9hZGluZy4uLlwiKTtcblxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JhbGwnLCAnYXNzZXRzL2JhbGwucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnam9lJywgJ2Fzc2V0cy9qb2UucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZ3JvdW5kJywgJ2Fzc2V0cy9qb2UucG5nJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nLi4uXCIpO1xuXG4gICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBub25lIG9mIHRoZSBvYmplY3RzIGFwcGVhciBpZiB0aGlzIGlzbid0IGhlcmVcbiAgICAgICAgdGhpcy5hZGQudGV4dCgxMCwgMTAsIFwidjEuMFwiKTtcblxuICAgICAgICB0aGlzLmJhbGwgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSh0aGlzLnN5cy5nYW1lLmNvbmZpZy53aWR0aCAvIDIsIDEwMCwgJ2JhbGwnKTtcbiAgICAgICAgdGhpcy5iYWxsLnNldEdyYXZpdHlZKDEwMCk7XG5cbiAgICAvLyAgICB0aGlzLmpvZSA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMuc3lzLmdhbWUuY29uZmlnLndpZHRoIC8gMiwgdGhpcy5zeXMuZ2FtZS5jb25maWcuaGVpZ2h0ICogLjkwLCAnam9lJyk7XG5cbiAgICAgICAgbGV0IGdyb3VuZFggPSB0aGlzLnN5cy5nYW1lLmNvbmZpZy53aWR0aCAvIDI7XG4gICAgICAgIGxldCBncm91bmRZID0gdGhpcy5zeXMuZ2FtZS5jb25maWcuaGVpZ2h0ICogLjk1O1xuXG4gICAgICAgIGxldCBncm91bmQgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZShncm91bmRYLCBncm91bmRZLCBcImdyb3VuZFwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5iYWxsLCB0aGlzLmdyb3VuZCk7XG4gICAgICAgIC8vICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuam9lLCB0aGlzLmdyb3VuZCk7XG4gICAgICAgIFxuICAgICAgICBncm91bmQuc2V0SW1tb3ZhYmxlKHRydWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBTY2VuZTEgZnJvbSAnLi9TY2VuZTEuanMnO1xuaW1wb3J0IFBhdGhGb2xsb3dlclBsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvcGF0aGZvbGxvd2VyLXBsdWdpbi5qcyc7XG5cbmNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIGdhbWUuLi5cIilcbm5ldyBQaGFzZXIuR2FtZSh7XG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXG4gICAgd2lkdGg6IDYwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJCNDU3MFwiLFxuICAgIHBoeXNpY3M6IHtcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgICAgIGFyY2FkZToge1xuICAgICAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgICAgZ2xvYmFsOiBbe1xuICAgICAgICAgICAga2V5OiAncmV4UGF0aEZvbGxvd2VyJyxcbiAgICAgICAgICAgIHBsdWdpbjogUGF0aEZvbGxvd2VyUGx1Z2luLFxuICAgICAgICAgICAgc3RhcnQ6IHRydWVcbiAgICAgICAgfV1cbiAgICB9LFxuICAgIHNjZW5lOiBbXG4gICAgICAgIFNjZW5lMVxuICAgIF1cbn0pOyIsImltcG9ydCBHZXRTY2VuZU9iamVjdCBmcm9tICcuLi8uLi91dGlscy9zeXN0ZW0vR2V0U2NlbmVPYmplY3QuanMnO1xyXG5pbXBvcnQgRGVnVG9SYWQgZnJvbSAnLi4vLi4vdXRpbHMvbWF0aC9EZWdUb1JhZC5qcyc7XHJcblxyXG5jb25zdCBHZXRWYWx1ZSA9IFBoYXNlci5VdGlscy5PYmplY3RzLkdldFZhbHVlO1xyXG5jb25zdCBBbmdsZUJldHdlZW4gPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuO1xyXG5cclxuY2xhc3MgUGF0aEZvbGxvd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVPYmplY3QsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IEdldFNjZW5lT2JqZWN0KGdhbWVPYmplY3QpO1xyXG5cclxuICAgICAgICB0aGlzLl90ID0gMDtcclxuICAgICAgICB0aGlzLnBhdGhWZWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5yZXNldEZyb21KU09OKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5ib290KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRGcm9tSlNPTihvKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQYXRoKEdldFZhbHVlKG8sICdwYXRoJywgdW5kZWZpbmVkKSk7XHJcbiAgICAgICAgdmFyIHQgPSBHZXRWYWx1ZShvLCAndCcsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgaWYgKHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFQodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcm90YXRlVG9QYXRoID0gR2V0VmFsdWUobywgJ3JvdGF0ZVRvUGF0aCcsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcm90YXRpb25PZmZzZXQgPSBHZXRWYWx1ZShvLCAncm90YXRpb25PZmZzZXQnLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIGlmIChyb3RhdGlvbk9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uT2Zmc2V0ID0gRGVnVG9SYWQoR2V0VmFsdWUobywgJ2FuZ2xlT2Zmc2V0JywgMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFJvdGF0ZVRvUGF0aChyb3RhdGVUb1BhdGgsIHJvdGF0aW9uT2Zmc2V0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGF0aDogdGhpcy5wYXRoLFxyXG4gICAgICAgICAgICB0OiB0aGlzLnQsXHJcbiAgICAgICAgICAgIHJvdGF0ZVRvUGF0aDogdGhpcy5yb3RhdGVUb1BhdGgsXHJcbiAgICAgICAgICAgIHJvdGF0aW9uT2Zmc2V0OiB0aGlzLnJvdGF0aW9uT2Zmc2V0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBib290KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVPYmplY3Qub25jZSkgeyAvLyBvb3BzLCBib2Igb2JqZWN0IGRvZXMgbm90IGhhdmUgZXZlbnQgZW1pdHRlclxyXG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3Qub25jZSgnZGVzdHJveScsIHRoaXMuZGVzdHJveSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNodXRkb3duKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zaHV0ZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhdGgocGF0aCkge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VCh0KSB7XHJcbiAgICAgICAgdGhpcy50ID0gdDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3QgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJvdGF0ZVRvUGF0aChyb3RhdGVUb1BhdGgsIHJvdGF0aW9uT2Zmc2V0KSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGVUb1BhdGggPSByb3RhdGVUb1BhdGg7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbk9mZnNldCA9IHJvdGF0aW9uT2Zmc2V0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGdhbWVPYmplY3QgPSB0aGlzLmdhbWVPYmplY3Q7XHJcbiAgICAgICAgdmFyIGN1clggPSBnYW1lT2JqZWN0LngsXHJcbiAgICAgICAgICAgIGN1clkgPSBnYW1lT2JqZWN0Lnk7XHJcbiAgICAgICAgdGhpcy5wYXRoVmVjdG9yID0gdGhpcy5wYXRoLmdldFBvaW50KHRoaXMudCwgdGhpcy5wYXRoVmVjdG9yKTtcclxuICAgICAgICB2YXIgbmV3WCA9IHRoaXMucGF0aFZlY3Rvci54LFxyXG4gICAgICAgICAgICBuZXdZID0gdGhpcy5wYXRoVmVjdG9yLnk7XHJcblxyXG4gICAgICAgIGlmICgoY3VyWCA9PT0gbmV3WCkgJiYgKGN1clkgPT09IG5ld1kpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdhbWVPYmplY3Quc2V0UG9zaXRpb24obmV3WCwgbmV3WSk7XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRlVG9QYXRoKSB7XHJcbiAgICAgICAgICAgIGdhbWVPYmplY3Qucm90YXRpb24gPSBBbmdsZUJldHdlZW4oY3VyWCwgY3VyWSwgbmV3WCwgbmV3WSkgKyB0aGlzLnJvdGF0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aEZvbGxvd2VyOyIsImltcG9ydCBQYXRoRm9sbG93ZXIgZnJvbSAnLi9wYXRoZm9sbG93ZXIuanMnO1xyXG5cclxuY2xhc3MgUGF0aEZvbGxvd2VyUGx1Z2luIGV4dGVuZHMgUGhhc2VyLlBsdWdpbnMuQmFzZVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGx1Z2luTWFuYWdlcikge1xyXG4gICAgICAgIHN1cGVyKHBsdWdpbk1hbmFnZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHZhciBldmVudEVtaXR0ZXIgPSB0aGlzLmdhbWUuZXZlbnRzO1xyXG4gICAgICAgIGV2ZW50RW1pdHRlci5vbmNlKCdkZXN0cm95JywgdGhpcy5kZXN0cm95LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoZ2FtZU9iamVjdCwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYXRoRm9sbG93ZXIoZ2FtZU9iamVjdCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGhGb2xsb3dlclBsdWdpbjsiLCJpbXBvcnQgUGF0aEZvbGxvd2VyIGZyb20gJy4vYmVoYXZpb3JzL3BhdGhmb2xsb3dlci9QYXRoRm9sbG93ZXIuanMnO1xyXG5leHBvcnQgZGVmYXVsdCBQYXRoRm9sbG93ZXI7IiwiLyoqXHJcbiAqIEBhdXRob3IgICAgICAgUmljaGFyZCBEYXZleSA8cmljaEBwaG90b25zdG9ybS5jb20+XHJcbiAqIEBjb3B5cmlnaHQgICAgMjAxOCBQaG90b24gU3Rvcm0gTHRkLlxyXG4gKiBAbGljZW5zZSAgICAgIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL2Jsb2IvbWFzdGVyL2xpY2Vuc2UudHh0fE1JVCBMaWNlbnNlfVxyXG4gKi9cclxuXHJcbmNvbnN0IERFR19UT19SQUQgPSBNYXRoLlBJIC8gMTgwO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFuZ2xlIGZyb20gZGVncmVlcywgdG8gdGhlIGVxdWl2YWxlbnQgYW5nbGUgaW4gcmFkaWFucy5cclxuICpcclxuICogQGZ1bmN0aW9uIFBoYXNlci5NYXRoLkRlZ1RvUmFkXHJcbiAqIEBzaW5jZSAzLjAuMFxyXG4gKlxyXG4gKiBAcGFyYW0ge2ludGVnZXJ9IGRlZ3JlZXMgLSBUaGUgYW5nbGUgKGluIGRlZ3JlZXMpIHRvIGNvbnZlcnQgdG8gcmFkaWFucy5cclxuICpcclxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZ2l2ZW4gYW5nbGUgY29udmVydGVkIHRvIHJhZGlhbnMuXHJcbiAqL1xyXG52YXIgRGVnVG9SYWQgPSBmdW5jdGlvbiAoZGVncmVlcylcclxue1xyXG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBERUdfVE9fUkFEO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEZWdUb1JhZDtcclxuIiwiaW1wb3J0IElzU2NlbmVPYmplY3QgZnJvbSAnLi9Jc1NjZW5lT2JqZWN0LmpzJztcclxuXHJcbnZhciBHZXRTY2VuZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgIGlmIChJc1NjZW5lT2JqZWN0KG9iamVjdCkpIHsgLy8gb2JqZWN0ID0gc2NlbmVcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3Quc2NlbmUgJiYgSXNTY2VuZU9iamVjdChvYmplY3Quc2NlbmUpKSB7IC8vIG9iamVjdCA9IGdhbWUgb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdC5zY2VuZTtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBhcmVudCAmJiBvYmplY3QucGFyZW50LnNjZW5lICYmIElzU2NlbmVPYmplY3Qob2JqZWN0LnBhcmVudC5zY2VuZSkpIHsgLy8gcGFyZW50ID0gYm9iIG9iamVjdFxyXG4gICAgICAgIHJldHVybiBvYmplY3QucGFyZW50LnNjZW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZXRTY2VuZU9iamVjdDsiLCJjb25zdCBTY2VuZUNsYXNzID0gUGhhc2VyLlNjZW5lO1xyXG52YXIgSXNTY2VuZU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgIHJldHVybiAob2JqZWN0IGluc3RhbmNlb2YgU2NlbmVDbGFzcyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSXNTY2VuZU9iamVjdDsiXSwic291cmNlUm9vdCI6IiJ9