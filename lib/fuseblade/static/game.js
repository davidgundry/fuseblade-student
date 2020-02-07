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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/engine/launcher/launchScript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fontfaceobserver/fontfaceobserver.standalone.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})}; true?module.exports=B:(undefined);}());


/***/ }),

/***/ "./src/editor/Editor.ts":
/*!******************************!*\
  !*** ./src/editor/Editor.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editor; });
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_gameobject_ui_DebugPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/gameobject/ui/DebugPane */ "./src/engine/gameobject/ui/DebugPane.ts");
/* harmony import */ var _EditorTimings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditorTimings */ "./src/editor/EditorTimings.ts");
/* harmony import */ var engine_gameobject_context2d_shape_Rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/gameobject/context2d/shape/Rect */ "./src/engine/gameobject/context2d/shape/Rect.ts");
/* harmony import */ var engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/gameobject/input/KeyTrigger */ "./src/engine/gameobject/input/KeyTrigger.ts");
/* harmony import */ var engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/gameobject/context2d/DrawBuffer */ "./src/engine/gameobject/context2d/DrawBuffer.ts");








class Editor extends engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_7__["default"] {
    constructor() {
        super(...arguments);
        this.typeName = "Editor";
        this._timings = new _EditorTimings__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
    create(timing, environment, inputDevices) {
        super.create(timing, environment, inputDevices);
        this.addChild(new engine_gameobject_context2d_shape_Rect__WEBPACK_IMPORTED_MODULE_5__["FillRect"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](), engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"].fill, "#1e1e1e"));
        if (environment.launcherOptions.args.editor) {
            this._game = this.addChild(this._createBufferedGame(environment));
            this._usesMouse = environment.launcherOptions.args.editor.usesMouse;
            this._usesKeyboard = environment.launcherOptions.args.editor.usesKeyboard;
        }
        this._debugPane = this.addChild(new engine_gameobject_ui_DebugPane__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"](), engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"].fill));
        let kt = this.addChild(new engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_6__["default"]());
        kt.getKeyEvent("Pause", engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_6__["KeyTriggerEvents"].onKeyNewDown).push(() => {
            this._game.active = !this._game.active;
            this._debugPane.active = this._game.active;
        });
    }
    doBegin(timing, loader, environment, inputDevices) {
        this._timings.onBeginStart();
        super.doBegin(timing, loader, environment, inputDevices);
        this._timings.onBeginEnd();
    }
    begin(timing, environment, inputDevices) {
        super.begin(timing, environment, inputDevices);
        if (this.interactable)
            for (let i = 0, len = inputDevices.keyboard.keysDown.length; i < len; i++) {
                let key = inputDevices.keyboard.keysDown[i];
                if (key === "-")
                    this._timings.slowDown += 1 * timing.rawDeltaSeconds;
                else if (key === "+")
                    this._timings.slowDown = Math.max(0, this._timings.slowDown - 1 * timing.rawDeltaSeconds);
                if (key === "[")
                    timing.speedFactor = Math.max(0, timing.speedFactor - 0.15 * timing.rawDeltaSeconds);
                else if (key === "]")
                    timing.speedFactor = Math.min(2, timing.speedFactor + 0.15 * timing.rawDeltaSeconds);
            }
        this._debugPane.updateValues(this._timings, timing.fps, timing.updateSteps);
    }
    doUpdate(timing) {
        this._timings.onUpdateStart();
        super.doUpdate(timing);
        this._timings.onUpdateEnd();
    }
    doDraw(camera) {
        this._timings.onDrawStart();
        super.doDraw(camera);
        this._timings.onDrawEnd();
    }
    doEnd(timing) {
        this._timings.onEndStart();
        super.doEnd(timing);
        this._timings.onEndEnd();
    }
    _createBufferedGame(environment) {
        let go = new environment.launcherOptions.args.editor.rootGameObjectType(engine_transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"].centre, new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1)));
        if (go instanceof engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_7__["default"]) {
            go.mainCamera.backgroundColor = environment.launcherOptions.args.editor.backgroundColor;
            go.mainCamera.hasAlphaChannel = environment.launcherOptions.args.editor.hasAlphaChannel;
        }
        go.transform.bounds.minDimension = environment.launcherOptions.args.editor.minDimension;
        go.transform.bounds.maxDimension = environment.launcherOptions.args.editor.maxDimension;
        return go;
    }
}


/***/ }),

/***/ "./src/editor/EditorTimings.ts":
/*!*************************************!*\
  !*** ./src/editor/EditorTimings.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditorTimings; });
class EditorTimings {
    constructor() {
        this.loopStart = 0;
        this.loopTime = 0;
        this.beginStart = 0;
        this.beginTime = 0;
        this.updateStart = 0;
        this.updateTime = 0;
        this.drawStart = 0;
        this.drawTime = 0;
        this.endStart = 0;
        this.endTime = 0;
        this.slowDown = 0;
    }
    onBeginStart() {
        this.loopStart = Date.now();
        this.beginStart = this.loopStart;
    }
    onBeginEnd() {
        let now = Date.now();
        this._delay((now - this.beginStart) * this.slowDown);
        this.beginTime = now - this.beginStart;
    }
    onUpdateStart() {
        this.updateStart = Date.now();
    }
    onUpdateEnd() {
        let now = Date.now();
        this._delay((now - this.updateStart) * this.slowDown);
        this.updateTime = now - this.updateStart;
    }
    onDrawStart() {
        this.drawStart = Date.now();
    }
    onDrawEnd() {
        let now = Date.now();
        this._delay((now - this.drawStart) * this.slowDown);
        this.drawTime = now - this.drawStart;
    }
    onEndStart() {
        this.endStart = Date.now();
    }
    onEndEnd() {
        let now = Date.now();
        this._delay((now - this.endStart) * this.slowDown);
        this.endTime = now - this.endStart;
        this.loopTime = now - this.loopStart;
    }
    _delay(time) {
        if (time <= 0)
            return;
        let start = Date.now();
        let now = start;
        while (true) {
            now = Date.now();
            if (now - start > time)
                break;
        }
    }
}


/***/ }),

/***/ "./src/editor/launcherOptions.ts":
/*!***************************************!*\
  !*** ./src/editor/launcherOptions.ts ***!
  \***************************************/
/*! exports provided: launcherOptions, wrapLauncherOptionsForEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launcherOptions", function() { return launcherOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapLauncherOptionsForEditor", function() { return wrapLauncherOptionsForEditor; });
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./src/editor/Editor.ts");

let launcherOptions = {
    rootGameObjectType: _Editor__WEBPACK_IMPORTED_MODULE_0__["default"],
    minDimension: undefined,
    maxDimension: undefined,
    backgroundColor: "white",
    hasAlphaChannel: false,
    usesMouse: true,
    usesKeyboard: true,
    addExtraInputDevices: (inputDeviceGroup) => { },
    gameTarget: "gameTarget",
    windowVariableName: undefined,
    args: {}
};

function wrapLauncherOptionsForEditor(gameOptions) {
    let a = launcherOptions;
    a.addExtraInputDevices = gameOptions.addExtraInputDevices,
        a.gameTarget = gameOptions.gameTarget,
        a.windowVariableName = gameOptions.windowVariableName,
        a.args = gameOptions.args;
    a.args["editor"] = gameOptions;
    return a;
}


/***/ }),

/***/ "./src/engine/Asset.ts":
/*!*****************************!*\
  !*** ./src/engine/Asset.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Asset; });
class Asset {
    constructor(filename, asset, loaded) {
        this._filename = filename;
        this._asset = asset;
        this._loaded = loaded;
    }
    get filename() { return this._filename; }
    get asset() { return this._asset; }
    get loaded() { return this._loaded; }
    set loaded(val) { this._loaded = val; }
    set(asset) { this._asset = asset; }
}


/***/ }),

/***/ "./src/engine/AssetLoader.ts":
/*!***********************************!*\
  !*** ./src/engine/AssetLoader.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AssetLoader; });
/* harmony import */ var _Asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asset */ "./src/engine/Asset.ts");

var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");
class AssetLoader {
    constructor(assetsFolder) {
        this._assetsFolder = "./";
        this._sharedAssets = [];
        if (assetsFolder !== undefined)
            this._assetsFolder = assetsFolder;
    }
    get assetsFolder() { return this._assetsFolder; }
    getSharedAsset(filename) {
        let existing;
        for (let i = 0, len = this._sharedAssets.length; i < len; i++)
            if (this._sharedAssets[i].filename === filename) {
                existing = this._sharedAssets[i];
                break;
            }
        if (existing)
            return existing;
        let a = new _Asset__WEBPACK_IMPORTED_MODULE_0__["default"](filename, null, false);
        this._sharedAssets.push(a);
        return a;
    }
    loadImage(filename, onerror) {
        let image = new Image();
        let asset = new _Asset__WEBPACK_IMPORTED_MODULE_0__["default"](filename, image, false);
        image.src = this.assetsFolder + filename;
        image.onload = function () {
            asset.loaded = true;
            image.onload = null;
            image.onerror = null;
        };
        image.onerror = () => {
            image.onload = null;
            image.onerror = null;
            onerror(asset);
        };
        return asset;
    }
    loadFont(assetName, fallback, filename, ...filenames) {
        return new _Asset__WEBPACK_IMPORTED_MODULE_0__["default"](assetName, fallback, true);
        ;
        let t = "";
        filenames = filenames || [];
        filenames.unshift(filename);
        filenames.forEach((f) => {
            let filepath = f.split("/");
            let stringComponents = filepath[filepath.length - 1].split(".");
            if (stringComponents.length !== 2)
                throw new Error("Font names must be supplied in the format \"<path-to-file>/<name>.<format>\"");
            let format = stringComponents[1];
            t += "\n    src: url('" + this.assetsFolder + f + "') format('" + format + "');";
        });
        t = "@font-face {\n\
                font-family: " + assetName + ";" + t;
        t += "\n}";
        let newStyle = document.createElement('style');
        newStyle.appendChild(document.createTextNode(t));
        document.head.appendChild(newStyle);
        let font = new FontFaceObserver(assetName);
        let asset = new _Asset__WEBPACK_IMPORTED_MODULE_0__["default"](assetName, assetName, false);
        font.load().then(() => {
            asset.loaded = true;
        }).catch((err) => {
            console.log("Error loading font: " + (err.name || "") + (err.message || ""));
            asset.set(fallback);
            asset.loaded = true;
        });
        return asset;
    }
}


/***/ }),

/***/ "./src/engine/Environment.ts":
/*!***********************************!*\
  !*** ./src/engine/Environment.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Environment; });
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");

class Environment {
    constructor(devicePixelRatio, urlArgs, container, launcherOptions, document) {
        this.onFullscreenChange = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["Event1"]();
        this.onResize = new engine_util_Event__WEBPACK_IMPORTED_MODULE_0__["Event2"]();
        this._isFullscreen = false;
        this._devicePixelRatio = devicePixelRatio;
        this._urlArgs = urlArgs;
        this._launcherOptions = launcherOptions;
        this._document = document;
    }
    get gameWidth() { return this._gameWidth; }
    get gameHeight() { return this._gameHeight; }
    get isFullscreen() { return this._isFullscreen; }
    get devicePixelRatio() { return this._devicePixelRatio; }
    get launcherOptions() { return this._launcherOptions; }
    get urlArgs() { return this._urlArgs; }
    get activeContainer() { return this._activeContainer; }
    set activeContainer(val) { this._activeContainer = val; }
    setWidthAndHeight(width, height) {
        this._gameWidth = width;
        this._gameHeight = height;
        this.onResize.call(width, height);
    }
    requestFullscreen() {
        if (!this._activeContainer)
            return false;
        this._activeContainer.requestFullscreen();
        return true;
    }
    exitFullscreen() {
        this._document.exitFullscreen();
    }
    createCanvas() {
        return this._document.createElement('canvas');
    }
    addCanvasToPage(canvas, container) {
        container.appendChild(canvas);
    }
    checkFullscreenState() {
        let changed = false;
        let val = (this._document.fullscreenElement != null);
        if (val !== this._isFullscreen)
            changed = true;
        this._isFullscreen = val;
        if (changed)
            this.onFullscreenChange.call(this._isFullscreen);
    }
}


/***/ }),

/***/ "./src/engine/Game.ts":
/*!****************************!*\
  !*** ./src/engine/Game.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _MainLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainLoop */ "./src/engine/MainLoop.ts");

class Game {
    constructor(rootGameObject, inputDevices, timing, loader, environment) {
        this._created = false;
        this._rootGameObject = rootGameObject;
        this._inputDevices = inputDevices;
        this._timing = timing;
        this._loader = loader;
        this._environment = environment;
    }
    create() {
        if (this._created)
            throw new Error("Cannot create Game: already created");
        this._mainLoop = new _MainLoop__WEBPACK_IMPORTED_MODULE_0__["default"](this._begin.bind(this), this._update.bind(this), this._draw.bind(this), this._end.bind(this));
        this._rootGameObject.doCreate(this._timing, this._loader, this._environment, this._inputDevices.inputDevices);
        this._created = true;
    }
    start() {
        if (!this._created)
            throw new Error("Cannot start Game: not yet created");
        this._mainLoop.start();
    }
    stop() { this._mainLoop.stop(); }
    draw() { this._rootGameObject.doDraw(null); }
    _begin(timestamp, delta) {
        this._timing.mainLoopTimestamp = timestamp;
        this._timing.setDeltas(delta);
        this._timing.updateSteps = this._mainLoop.numUpdateSteps;
        this._environment.checkFullscreenState();
        this._rootGameObject.doBegin(this._timing, this._loader, this._environment, this._inputDevices.inputDevices);
        this._inputDevices.onBeginEnd();
    }
    _update(delta) {
        this._timing.setDeltas(delta);
        this._rootGameObject.doUpdate(this._timing);
    }
    _draw(interpolationPercentage) {
        this._rootGameObject.doDraw(null);
    }
    _end(fps, panic) {
        this._timing.fps = fps;
        this._rootGameObject.doEnd(this._timing);
        if (panic)
            this._mainLoop.resetFrameDelta();
    }
}


/***/ }),

/***/ "./src/engine/MainLoop.ts":
/*!********************************!*\
  !*** ./src/engine/MainLoop.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainLoop; });
class MainLoop {
    constructor(begin, update, draw, end) {
        this._simulationTimestep = 1000 / 60;
        this._frameDelta = 0;
        this._lastFrameTimeMs = 0;
        this._fps = 60;
        this._fpsAlpha = 0.9;
        this._fpsUpdateInterval = 1000;
        this._lastFpsUpdate = 0;
        this._framesSinceLastFpsUpdate = 0;
        this._numUpdateSteps = 0;
        this._minFrameDelay = 0;
        this._running = false;
        this._started = false;
        this._panic = false;
        this._hasWindow = typeof window === 'object';
        this._lastTimestampForTimeoutMethod = Date.now();
        this._begin = begin;
        this._update = update;
        this._draw = draw;
        this._end = end;
        this._animateBoundCall = this._animate.bind(this);
    }
    get numUpdateSteps() { return this._numUpdateSteps; }
    get simulationTimestep() { return this._simulationTimestep; }
    set simulationTimestep(timestep) { this._simulationTimestep = timestep; }
    get fps() { return this._fps; }
    get maxAllowedFPS() { return 1000 / this._minFrameDelay; }
    set maxAllowedFPS(fps) {
        if (typeof fps === 'undefined')
            fps = Infinity;
        if (fps === 0)
            this.stop();
        else
            this._minFrameDelay = 1000 / fps;
    }
    get running() { return this._running; }
    resetFrameDelta() {
        var oldFrameDelta = this._frameDelta;
        this._frameDelta = 0;
        return oldFrameDelta;
    }
    start() {
        if (!this._started) {
            this._started = true;
            this._rafHandle = this._requestAnimationFrame((timestamp) => {
                this._draw(1);
                this._running = true;
                this._lastFrameTimeMs = timestamp;
                this._lastFpsUpdate = timestamp;
                this._framesSinceLastFpsUpdate = 0;
                this._rafHandle = this._requestAnimationFrame(this._animateBoundCall);
            });
        }
        return this;
    }
    stop() {
        this._running = false;
        this._started = false;
        this._cancelAnimationFrame(this._rafHandle);
        return this;
    }
    _requestAnimationFrame(callback) {
        if (this._hasWindow)
            return window.requestAnimationFrame(callback);
        return this._timeoutAnimationFrame(callback);
    }
    _timeoutAnimationFrame(callback) {
        let now = Date.now();
        let timeout = Math.max(0, this._simulationTimestep - (now - this._lastTimestampForTimeoutMethod));
        this._lastTimestampForTimeoutMethod = now + timeout;
        return setTimeout(function () {
            callback(now + timeout);
        }, timeout);
    }
    _cancelAnimationFrame(rafHandle) {
        if (this._hasWindow)
            cancelAnimationFrame(rafHandle);
        else
            clearTimeout(rafHandle);
    }
    _animate(timestamp) {
        this._rafHandle = this._requestAnimationFrame(this._animateBoundCall);
        if (timestamp < this._lastFrameTimeMs + this._minFrameDelay)
            return;
        this._frameDelta += timestamp - this._lastFrameTimeMs;
        this._lastFrameTimeMs = timestamp;
        this._begin(timestamp, this._frameDelta);
        if (timestamp > this._lastFpsUpdate + this._fpsUpdateInterval) {
            this._fps =
                this._fpsAlpha * this._framesSinceLastFpsUpdate * 1000 / (timestamp - this._lastFpsUpdate) +
                    (1 - this._fpsAlpha) * this._fps;
            this._lastFpsUpdate = timestamp;
            this._framesSinceLastFpsUpdate = 0;
        }
        this._framesSinceLastFpsUpdate++;
        this._numUpdateSteps = 0;
        while (this._frameDelta >= this._simulationTimestep) {
            this._update(this._simulationTimestep);
            this._frameDelta -= this._simulationTimestep;
            if (++this._numUpdateSteps >= 240) {
                this._panic = true;
                break;
            }
        }
        this._draw(this._frameDelta / this._simulationTimestep);
        this._end(this._fps, this._panic);
        this._panic = false;
    }
}


/***/ }),

/***/ "./src/engine/Timing.ts":
/*!******************************!*\
  !*** ./src/engine/Timing.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timing; });
class Timing {
    constructor() {
        this.fps = 0;
        this.updateSteps = 0;
        this.mainLoopTimestamp = 0;
        this.rawDelta = 0;
        this.rawDeltaSeconds = 0;
        this.delta = 0;
        this.deltaSeconds = 0;
        this.speedFactor = 1;
    }
    setDeltas(delta) {
        this.rawDelta = delta;
        this.rawDeltaSeconds = delta / 1000;
        if (this.speedFactor === 1) {
            this.delta = delta;
            this.deltaSeconds = this.rawDeltaSeconds;
        }
        else {
            this.delta = delta * this.speedFactor;
            this.deltaSeconds = this.delta / 1000;
        }
    }
}


/***/ }),

/***/ "./src/engine/Transform.ts":
/*!*********************************!*\
  !*** ./src/engine/Transform.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transform; });
class Transform {
    constructor(position, bounds) {
        this._alwaysCheckForUpdates = false;
        this._position = position;
        this._bounds = bounds;
        if (this.position)
            this._position.transform = this;
        if (this.bounds)
            this._bounds.transform = this;
        if ((!this.bounds) && (this.position))
            throw new Error("A Transform with a non-null Position must have a non-null Bounds");
    }
    get gameObject() { return this._gameObject; }
    set gameObject(val) { this._gameObject = val; }
    get position() { return this._position; }
    get bounds() { return this._bounds; }
    get alwaysCheckForUpdates() { return this._alwaysCheckForUpdates; }
    set alwaysCheckForUpdates(val) { this._alwaysCheckForUpdates = val; }
    get positioningDirty() { return this._positioningDirty; }
    positioningIsDirty() { this._positioningDirty = true; }
    get parent() {
        if ((this.gameObject) && (this.gameObject.parent))
            return this.gameObject.parent.transform;
        return null;
    }
    hasPosition() { return this.position !== null; }
    update() {
        if ((this._positioningDirty) || (this._alwaysCheckForUpdates))
            this._checkForUpdatedTranslationsOrDimensions();
    }
    _checkForUpdatedTranslationsOrDimensions() {
        if (this.position)
            this.position.checkForUpdatedTranslations();
        if (this.bounds)
            this.bounds.checkForUpdatedDimensions();
        this._positioningDirty = false;
    }
    recalculate(excludeDrawCache) {
        if (this._position)
            this._position.setCacheDirty();
        if (this._bounds)
            this._bounds.dirty = true;
        if (this.gameObject.children.length === 0) {
            if (!(excludeDrawCache))
                this.gameObject.requestDraw();
        }
        else
            for (let i = 0, len = this.gameObject.children.length; i < len; i++)
                if (this.gameObject.children[i].transform)
                    this.gameObject.children[i].transform.recalculate(excludeDrawCache);
    }
    containsPoint(x, y) {
        let offsetX = this.position.x();
        let offsetY = this.position.y();
        if ((x >= offsetX) && (y >= offsetY))
            if ((x <= offsetX + this.bounds.width()) && (y <= offsetY + this.bounds.height()))
                return true;
        return false;
    }
    destroy() {
        if (this.bounds)
            this.bounds.destroy();
        if (this.position)
            this.position.destroy();
    }
    static overlaps(a, b) {
        let ax = 0, ay = 0, bx = 0, by = 0;
        if (a.position) {
            ax = a.position.x();
            ay = a.position.y();
        }
        if (b.position) {
            bx = b.position.x();
            by = b.position.y();
        }
        let x = false;
        let y = false;
        if ((ax >= bx) && (ax <= bx + b.bounds.width()))
            x = true;
        if ((ax <= bx) && (ax + a.bounds.width() >= bx))
            x = true;
        if ((ay >= by) && (ay <= by + b.bounds.height()))
            y = true;
        if ((ay <= by) && (ay + a.bounds.height() >= by))
            y = true;
        return x && y;
    }
    static contains(a, b) {
        let ax = a.position.x(), ay = a.position.y(), bx = b.position.x(), by = b.position.y();
        let x = false;
        let y = false;
        if ((bx >= ax) && (bx + b.bounds.width() <= ax + a.bounds.width()))
            x = true;
        if ((by >= ay) && (by + b.bounds.width() <= ay + a.bounds.height()))
            y = true;
        return x && y;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/Factory.ts":
/*!******************************************!*\
  !*** ./src/engine/gameobject/Factory.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Factory; });
/* harmony import */ var _context2d_TextBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context2d/TextBuilder */ "./src/engine/gameobject/context2d/TextBuilder.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _context2d_shape_RoundedRect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context2d/shape/RoundedRect */ "./src/engine/gameobject/context2d/shape/RoundedRect.ts");
/* harmony import */ var _context2d_shape_Rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context2d/shape/Rect */ "./src/engine/gameobject/context2d/shape/Rect.ts");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Button */ "./src/engine/gameobject/ui/Button.ts");
/* harmony import */ var _style_TextStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/TextStyle */ "./src/engine/style/TextStyle.ts");
/* harmony import */ var _ui_AsyncButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/AsyncButton */ "./src/engine/gameobject/ui/AsyncButton.ts");








class Factory {
    static createText(position, context2D, text, style, targetWidth) {
        let textStyle;
        if (style instanceof _style_TextStyle__WEBPACK_IMPORTED_MODULE_6__["default"])
            textStyle = style;
        else
            textStyle = new _style_TextStyle__WEBPACK_IMPORTED_MODULE_6__["default"](style);
        let textstring;
        textstring = text;
        if (targetWidth !== undefined)
            textStyle.targetWidth = targetWidth;
        let tb = new _context2d_TextBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](textstring, context2D, textStyle);
        return tb.buildText(position instanceof _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"] ? position : new _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"]());
    }
    static createRect(position, bounds, style) {
        let r = style.rounding;
        if (r > 0)
            return new _context2d_shape_RoundedRect__WEBPACK_IMPORTED_MODULE_3__["default"](position, bounds, style.strokeColour, style.backgroundColour, style.strokeWidth, r);
        else
            return new _context2d_shape_Rect__WEBPACK_IMPORTED_MODULE_4__["Rect"](position, bounds, style.strokeColour, style.backgroundColour, style.strokeWidth);
    }
    static createButton(position, bounds, content, style) {
        let b = new _ui_Button__WEBPACK_IMPORTED_MODULE_5__["default"](position, bounds, content);
        b.setBackgroundRect(b.addChild(Factory.createRect(new _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), _transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill, style)));
        b.setHoverRect(b.addChild(Factory.createRect(new _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), _transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill, style.hover)));
        b.setPressedRect(b.addChild(Factory.createRect(new _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), _transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill, style.pressed)));
        b.setDepressDistance(style.depressDistance);
        return b;
    }
    static createFullscreenButton(position, bounds, content, style, environment) {
        let b = new _ui_AsyncButton__WEBPACK_IMPORTED_MODULE_7__["default"](position, bounds, content);
        b.setBackgroundRect(b.addChild(Factory.createRect(new _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), _transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill, style)));
        b.setHoverRect(b.addChild(Factory.createRect(new _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), _transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill, style.hover)));
        b.setPressedRect(b.addChild(Factory.createRect(new _transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), _transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill, style.pressed)));
        b.setDepressDistance(style.depressDistance);
        b.onClick.push(() => {
            if (environment.isFullscreen)
                document.exitFullscreen();
            else
                environment.requestFullscreen();
        }, null);
        return b;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/GameObject.ts":
/*!*********************************************!*\
  !*** ./src/engine/gameobject/GameObject.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Transform */ "./src/engine/Transform.ts");
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Util */ "./src/engine/util/Util.ts");



class GameObject {
    constructor(position, bounds) {
        this.typeName = "GameObject";
        this._children = [];
        this._assets = [];
        this._parent = null;
        this._created = false;
        this._runLoad = false;
        this._active = true;
        this._interactable = true;
        this._ranBegin = false;
        this._visible = true;
        this._opacity = 1;
        this._cullIfOutOfBounds = false;
        this._precreate = false;
        if (position instanceof _transform_Position__WEBPACK_IMPORTED_MODULE_0__["default"])
            this._transform = new _Transform__WEBPACK_IMPORTED_MODULE_1__["default"](position, bounds);
        else
            this._transform = position;
        if (this._transform)
            this._transform.gameObject = this;
    }
    get parent() { return this._parent; }
    set parent(val) { this._parent = val; }
    get transform() { return this._transform; }
    get loaded() {
        if (!this.runLoad)
            return false;
        let loaded = true;
        for (let i = 0, len = this._assets.length; i < len; i++)
            if (!this._assets[i].loaded) {
                loaded = false;
                break;
            }
        return loaded;
    }
    get subtreeLoaded() {
        if (!this.loaded)
            return false;
        let loaded = true;
        for (let i = 0, len = this._children.length; i < len; i++)
            if (!this._children[i].subtreeLoaded) {
                loaded = false;
                break;
            }
        return loaded;
    }
    get runLoad() { return this._runLoad; }
    get created() { return this._created; }
    get assets() { return this._assets; }
    get children() { return this._children; }
    set active(val) { this._active = val; }
    get active() { return this._active; }
    set interactable(val) { this._interactable = val; }
    get interactable() {
        if (!this._interactable)
            return false;
        else if (this.parent)
            return this.parent.interactable;
        return true;
    }
    set visible(val) {
        if (this._visible !== val) {
            if (!val)
                this.requestDraw();
            this._visible = val;
            if (val)
                this.requestDraw();
        }
    }
    get visible() { return this._visible; }
    get opacity() { return this._opacity; }
    set opacity(val) { this._opacity = val; }
    get precreate() { return this._precreate; }
    set precreate(val) { this._precreate = val; }
    get cullIfOutOfBounds() { return this._cullIfOutOfBounds; }
    set cullIfOutOfBounds(val) { this._cullIfOutOfBounds = val; }
    addChild(child) {
        if (child.parent)
            throw new Error("Adding child to GameObject, but child already has parent! GameObjects must not appear more than once in the GameObject tree. If you want to move a GameObject, first de-parent it.");
        child.parent = this;
        this._children.push(child);
        return child;
    }
    getAsset(filename) {
        for (let i = 0, len = this._assets.length; i < len; i++)
            if (this._assets[i].filename === filename)
                return this.assets[i].asset;
        throw new Error("No asset found with that name on GameObject");
    }
    doLoad(loader) {
        if (!(this._runLoad))
            this._runLoad = this.load(loader);
        for (let i = 0, len = this._children.length; i < len; i++)
            this._children[i].doLoad(loader);
    }
    load(loader) { return true; }
    addAsset(asset) {
        if (asset === null)
            return null;
        let found = false;
        for (let i = 0, len = this.assets.length; i < len; i++)
            if (this._assets[i].filename === asset.filename)
                found = true;
        if (!found) {
            this.assets.push(asset);
            return asset;
        }
        return null;
    }
    doCreate(timing, loader, environment, inputDevices) {
        if (!this._runLoad)
            this.doLoad(loader);
        if (this.loaded) {
            let createdThisRun = false;
            if (!this.created) {
                createdThisRun = true;
                this.create(timing, environment, inputDevices);
            }
            for (let i = 0, len = this._children.length; i < len; i++)
                this._children[i].doCreate(timing, loader, environment, inputDevices);
            this._created = true;
            if (createdThisRun)
                this.afterCreate();
            this.requestDraw();
        }
    }
    create(timing, environment, inputDevices) { }
    afterCreate() { }
    doBegin(timing, loader, environment, inputDevices) {
        if (this._active) {
            if (this._created)
                this._runBegin(timing, loader, environment, inputDevices);
            else {
                this.doCreate(timing, loader, environment, inputDevices);
                if (this._created)
                    this._runBegin(timing, loader, environment, inputDevices);
            }
        }
        else if ((this._precreate) && (!this._created))
            this.doCreate(timing, loader, environment, inputDevices);
    }
    _runBegin(timing, loader, environment, inputDevices) {
        this._ranBegin = true;
        for (let i = this._children.length - 1; i >= 0; i--)
            if (this._children[i])
                this._children[i].doBegin(timing, loader, environment, inputDevices);
        this.begin(timing, environment, inputDevices);
    }
    begin(timing, environment, inputDevices) { }
    doUpdate(timing) {
        if (this._transform)
            this._transform.update();
        if (this._ranBegin) {
            for (let i = this._children.length - 1; i >= 0; i--)
                if (this._children[i])
                    this._children[i].doUpdate(timing);
            this.update(timing);
        }
    }
    update(timing) { }
    doDraw(camera) {
        if ((this._created) && (this._visible) && (this._transform) && (this._opacity > 0) && (this._transform.hasPosition())) {
            let rotated = false;
            if (this._transform.position.rotation % 2 * Math.PI !== 0) {
                rotated = true;
                let ax = this._transform.position.anchorX(0.5) - camera.x();
                let ay = this._transform.position.anchorY(0.5) - camera.y();
                camera.context2D.save();
                camera.context2D.translate(ax, ay);
                camera.context2D.rotate(this._transform.position.rotation);
                camera.context2D.translate(-ax, -ay);
            }
            let startingOpacity = 0;
            if (camera.context2D)
                startingOpacity = this._setDrawingOpacity(camera.context2D);
            this.draw(camera);
            for (let i = 0, len = this._children.length; i < len; i++)
                this._children[i].doDraw(camera);
            if (camera.context2D)
                if (startingOpacity !== undefined)
                    camera.context2D.globalAlpha = startingOpacity;
            if (rotated)
                camera.context2D.restore();
        }
    }
    _setDrawingOpacity(context2D) {
        if (this._opacity !== 1) {
            let original = context2D.globalAlpha;
            context2D.globalAlpha = context2D.globalAlpha * this._opacity;
            return original;
        }
        return undefined;
    }
    draw(camera) { }
    doEnd(timing) {
        if (this._ranBegin) {
            for (let i = this._children.length - 1; i >= 0; i--)
                if (this._children[i])
                    this._children[i].doEnd(timing);
            this._ranBegin = false;
            this.end(timing);
        }
    }
    requestDraw(notFirst) {
        if ((this._visible) && (this._parent) && (!(this._cullIfOutOfBounds && this.isDrawCulled()))) {
            this._parent.requestDraw(true);
        }
    }
    isDrawCulled() {
        if ((this._transform) && (this._parent) && (this._parent.created) && (this._parent.transform))
            return !(_Transform__WEBPACK_IMPORTED_MODULE_1__["default"].overlaps(this._transform, this._parent.transform));
        return false;
    }
    requestRemoval() { this._parent.removeChild(this); }
    removeChild(child) {
        this.deparent(child);
        child.doDestroy();
    }
    deparent(child) {
        let index = this._children.indexOf(child);
        if (index !== -1)
            Object(_util_Util__WEBPACK_IMPORTED_MODULE_2__["GCRemoveElement"])(this._children, index);
    }
    doDestroy() {
        for (let i = 0, len = this._children.length; i < len; i++)
            this._children[i].doDestroy();
        if (this._transform)
            this._transform.destroy();
        if (this.created)
            this.destroy();
    }
    end(timing) { }
    destroy() { }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Context2DCamera.ts":
/*!************************************************************!*\
  !*** ./src/engine/gameobject/context2d/Context2DCamera.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Factory */ "./src/engine/gameobject/Factory.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameObject */ "./src/engine/gameobject/GameObject.ts");


class Camera extends _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this._canvas = null;
        this._context2D = null;
        this._hasAlphaChannel = true;
        this.debugDisableCache = false;
        if (this.transform.hasPosition()) {
            this.x = this.transform.position.x.bind(this.transform.position);
            this.y = this.transform.position.y.bind(this.transform.position);
        }
    }
    x() { return 0; }
    y() { return 0; }
    get context2D() { return this._context2D; }
    get container() { return this._container; }
    set container(val) { this._container = val; }
    get canvas() { return this._canvas; }
    get canvasUsedWidth() { return Math.ceil(this.transform.bounds.width() * this.pixelRatio); }
    get canvasUsedHeight() { return Math.ceil(this.transform.bounds.height() * this.pixelRatio); }
    get backgroundColor() { return this._backgroundColor; }
    set backgroundColor(val) { this._backgroundColor = val; }
    get pixelRatio() { return this._pixelRatio; }
    get hasAlphaChannel() { return this._hasAlphaChannel; }
    set hasAlphaChannel(val) {
        if ((this._hasAlphaChannel !== val) && (this._canvas))
            this._context2D = this._canvas.getContext('2d', { alpha: val });
        this._hasAlphaChannel = val;
    }
    clear() {
        if (this.backgroundColor) {
            this._context2D.fillStyle = this.backgroundColor;
            this._context2D.fillRect(0, 0, this._canvas.width / this.pixelRatio, this._canvas.height / this.pixelRatio);
        }
        else
            this._context2D.clearRect(0, 0, this.canvas.width / this.pixelRatio, this.canvas.height / this.pixelRatio);
    }
    create(timing, environment, inputDevices) {
        this._createDrawBuffer(environment);
        if (this._container)
            environment.addCanvasToPage(this.canvas, this._container);
        if (!_Factory__WEBPACK_IMPORTED_MODULE_0__["default"].context2D)
            _Factory__WEBPACK_IMPORTED_MODULE_0__["default"].context2D = this.context2D;
    }
    begin(timing, environment, inputDevices) {
        if (this._container) {
            if (inputDevices.mouse)
                inputDevices.mouse.htmlElementForOffset = this._canvas;
            environment.activeContainer = this._container;
        }
        if (this._hasResized() || (this._pixelRatio !== environment.devicePixelRatio)) {
            this._resizeCanvas(this.transform.bounds.width(), this.transform.bounds.height(), environment.devicePixelRatio);
            this.requestDraw();
        }
        else if (this.debugDisableCache)
            this.requestDraw();
    }
    _createDrawBuffer(environment) {
        this._canvas = environment.createCanvas();
        this._context2D = this._canvas.getContext('2d', { alpha: this.hasAlphaChannel });
        this._resizeCanvas(this.transform.bounds.width(), this.transform.bounds.height(), environment.devicePixelRatio);
        this.clear();
    }
    _resizeCanvas(width, height, devicePixelRatio) {
        this._pixelRatio = devicePixelRatio;
        this.canvas.width = Math.max(width * this.pixelRatio, Camera.minCanvasSize);
        this.canvas.height = Math.max(height * this.pixelRatio, Camera.minCanvasSize);
        this.canvas.style.width = Math.max(this.transform.bounds.width(), Camera.minCanvasSize / this.pixelRatio) + 'px';
        this.canvas.style.height = Math.max(this.transform.bounds.height(), Camera.minCanvasSize / this.pixelRatio) + 'px';
        this._oldDimensionX = width;
        this._oldDimensionY = height;
        this._context2D.setTransform(1, 0, 0, 1, 0, 0);
        this._context2D.scale(this.pixelRatio, this.pixelRatio);
    }
    _hasResized() {
        return ((this._oldDimensionX !== this.transform.bounds.width()) ||
            (this._oldDimensionY !== this.transform.bounds.height()));
    }
}
Camera.minCanvasSize = 256;


/***/ }),

/***/ "./src/engine/gameobject/context2d/DrawBuffer.ts":
/*!*******************************************************!*\
  !*** ./src/engine/gameobject/context2d/DrawBuffer.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawBuffer; });
/* harmony import */ var engine_Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/Transform */ "./src/engine/Transform.ts");
/* harmony import */ var engine_gameobject_GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/GameObject */ "./src/engine/gameobject/GameObject.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_gameobject_context2d_Context2DCamera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/gameobject/context2d/Context2DCamera */ "./src/engine/gameobject/context2d/Context2DCamera.ts");





class DrawBuffer extends engine_gameobject_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(position, bounds, addDefaultCamera) {
        super(new DrawTransform(position, bounds));
        this.typeName = "DrawBuffer";
        this._drawRequested = false;
        this._forgetInternalsOnDraw = false;
        this._canvasDrawFixed = false;
        this._cameras = [];
        if (this.transform.position)
            this.transform.position.resetDrawPos = true;
        if (addDefaultCamera !== false)
            this.addCamera(this.addChild(new engine_gameobject_context2d_Context2DCamera__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill)));
    }
    get forgetInternalsOnDraw() { return this._forgetInternalsOnDraw; }
    set forgetInternalsOnDraw(val) { this._forgetInternalsOnDraw = val; }
    get drawRequested() { return this._drawRequested; }
    get cameras() { return this._cameras; }
    get mainCamera() { return this._mainCamera; }
    set mainCamera(val) { this._mainCamera = val; }
    doDraw(camera) {
        if (this.created) {
            if ((this._drawRequested) && (!(this._canvasDrawFixed))) {
                this._drawRequested = false;
                for (let c = 0, len = this._cameras.length; c < len; c++)
                    if ((this._cameras[c].visible) && (this._cameras[c].created))
                        this._drawCamera(this._cameras[c]);
                if (this._forgetInternalsOnDraw) {
                    for (let i = 0, len = this.children.length; i < len; i++)
                        this.removeChild(this.children[i]);
                    this._canvasDrawFixed = true;
                }
            }
            this.draw(camera);
        }
    }
    requestDraw(notFirst) {
        this._drawRequested = true;
        super.requestDraw(notFirst);
    }
    addCamera(camera) {
        this._cameras.push(camera);
        if (this._cameras.length === 1)
            this._mainCamera = camera;
        return camera;
    }
    draw(camera) {
        if (camera && (this.transform.position) && (this.visible) && this.mainCamera) {
            let startingOpacity = undefined;
            if (this.opacity !== 1) {
                let startingOpacity = camera.context2D.globalAlpha;
                camera.context2D.globalAlpha = startingOpacity * this.opacity;
            }
            this.transform.position.resetDrawPos = false;
            let posX = this.transform.position.x() - camera.x();
            let posY = this.transform.position.y() - camera.y();
            let width = this.transform.bounds.width();
            let height = this.transform.bounds.height();
            this.transform.position.resetDrawPos = true;
            camera.context2D.drawImage(this.mainCamera.canvas, 0, 0, Math.round(width) * this.mainCamera.pixelRatio, Math.round(height) * this.mainCamera.pixelRatio, Math.round(posX), Math.round(posY), Math.round(width), Math.round(height));
            if (startingOpacity)
                camera.context2D.globalAlpha = startingOpacity;
        }
    }
    _drawCamera(camera) {
        camera.context2D.globalAlpha = 1;
        camera.clear();
        for (let i = 0, len = this.children.length; i < len; i++)
            this.children[i].doDraw(camera);
    }
}
class DrawTransform extends engine_Transform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    recalculate(excludeDrawCache) {
        if (!(excludeDrawCache) && (!(this.bounds.hasResizedAutoUpdate()))) {
            excludeDrawCache = true;
            super.gameObject.requestDraw();
        }
        super.recalculate(excludeDrawCache);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/Text.ts":
/*!*************************************************!*\
  !*** ./src/engine/gameobject/context2d/Text.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/engine/gameobject/GameObject.ts");
/* harmony import */ var _TextBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBuilder */ "./src/engine/gameobject/context2d/TextBuilder.ts");
/* harmony import */ var engine_style_TextStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/style/TextStyle */ "./src/engine/style/TextStyle.ts");



class Text extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, lines, color, size, fontFace, lineSpacing, targetWidth, centred) {
        super(position, bounds);
        this._widths = [];
        this._lines = [];
        this._countLines = 0;
        this._canvasFunction = null;
        this.typeName = "Text";
        if (color instanceof engine_style_TextStyle__WEBPACK_IMPORTED_MODULE_2__["default"])
            this._textStyle = color;
        else
            this._textStyle = new engine_style_TextStyle__WEBPACK_IMPORTED_MODULE_2__["default"](color, size, fontFace, lineSpacing, targetWidth, centred || false);
        if (typeof (lines) === "string")
            this._lines = [lines];
        else
            this._lines = lines;
        this._fontLine = this.size + "pt " + this.fontFace;
    }
    get color() { return this._textStyle.colour; }
    get fontFace() { return this._textStyle.fontFace; }
    get size() { return this._textStyle.size; }
    get lineSpacing() { return this._textStyle.lineSpacing; }
    get centred() { return this._textStyle.centred; }
    set text(val) {
        if (val)
            this._lines = val.split("\n");
        else
            this._lines = [];
        this.requestDraw();
        this._recalculateTextBounds = true;
    }
    get lines() { return this._lines; }
    set lines(val) {
        this._lines = val;
        this.requestDraw();
        this._recalculateTextBounds = true;
    }
    get canvasFunction() { return this._canvasFunction; }
    set canvasFunction(val) { this._canvasFunction = val; }
    measureTextForBounds(context2D) {
        this.transform.bounds.clearDimensions();
        let tb = new _TextBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](this.lines, context2D, this.color, this.size, this.fontFace, this.lineSpacing);
        this.transform.bounds.addDimension(tb.textDimension());
        this._recalculateTextBounds = false;
    }
    draw(camera) {
        if (this.canvasFunction) {
            camera.context2D.save();
            this.canvasFunction(camera.context2D);
        }
        camera.context2D.fillStyle = this.color;
        camera.context2D.font = this._fontLine;
        if (this._recalculateTextBounds)
            this.measureTextForBounds(camera.context2D);
        let posX = this.transform.position.x() - camera.x();
        let posY = this.transform.position.y() - camera.y();
        let yPos = 0;
        let offset = 0;
        for (let i = 0; i < this._lines.length; i++) {
            if (this.centred)
                offset = (this._widest - this._widths[i]) / 2;
            else
                offset = 0;
            camera.context2D.fillText(this._lines[i], posX + offset, posY + yPos + this.size);
            yPos += this._textStyle.size * this.lineSpacing;
        }
        ;
        if (this.canvasFunction)
            camera.context2D.restore();
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/TextBuilder.ts":
/*!********************************************************!*\
  !*** ./src/engine/gameobject/context2d/TextBuilder.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextBuilder; });
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./src/engine/gameobject/context2d/Text.ts");
/* harmony import */ var _transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var _style_TextStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/TextStyle */ "./src/engine/style/TextStyle.ts");




class TextBuilder {
    constructor(lines, context2D, color, size, font, lineSpacing, targetWidth, centred) {
        this._lines = [];
        this._widths = [];
        this._countLines = 0;
        if (typeof (lines) === "string")
            this._lines = lines.split("\n");
        else
            this._lines = lines;
        this._context2D = context2D;
        if (color instanceof _style_TextStyle__WEBPACK_IMPORTED_MODULE_3__["default"])
            this._textStyle = color;
        else
            this._textStyle = new _style_TextStyle__WEBPACK_IMPORTED_MODULE_3__["default"](color, size, font, lineSpacing || 1, targetWidth || undefined, centred || false);
    }
    get color() { return this._textStyle.colour; }
    get fontFace() { return this._textStyle.fontFace; }
    get size() { return this._textStyle.size; }
    get lineSpacing() { return this._textStyle.lineSpacing; }
    get textStyle() { return this._textStyle; }
    set text(val) { this._lines = val.split("\n"); }
    get lines() { return this._lines; }
    set lines(val) { this._lines = val; }
    buildText(position) {
        let textDim = this.textDimension();
        return new _Text__WEBPACK_IMPORTED_MODULE_1__["default"](position, new _transform_Bounds__WEBPACK_IMPORTED_MODULE_0__["default"](textDim), this.lines, this.textStyle);
    }
    textDimension() {
        let ls = [];
        if (this._textStyle.targetWidth) {
            this._context2D.font = this.size + 'pt ' + this.fontFace;
            this.lines.forEach(l => ls = ls.concat(this._getWrappedLines(this._context2D, l, this._textStyle.targetWidth)));
        }
        else
            ls = this.lines;
        this._context2D.font = this.size + "pt " + this.fontFace;
        let widest = 0;
        let height = 0;
        let widths = [];
        for (let i = 0; i < ls.length; i++) {
            widths[i] = this._context2D.measureText(ls[i]).width;
            widest = Math.max(widest, widths[i]);
            if (i === ls.length - 1)
                height += this.size;
            else
                height += this.size * this.lineSpacing;
        }
        this.lines = ls;
        return new _transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_2__["default"](widest, height);
    }
    _getWrappedLines(context, text, maxWidth) {
        var words = text.split(' ');
        var line = '';
        let lines = [];
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n];
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                lines.push(line.trimRight());
                line = words[n] + ' ';
            }
            else
                line = testLine + ' ';
        }
        lines.push(line.trimRight());
        return lines;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/shape/Rect.ts":
/*!*******************************************************!*\
  !*** ./src/engine/gameobject/context2d/shape/Rect.ts ***!
  \*******************************************************/
/*! exports provided: Rect, FillRect, OutlineRect, DebugRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillRect", function() { return FillRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineRect", function() { return OutlineRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugRect", function() { return DebugRect; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/engine/gameobject/context2d/shape/Shape.ts");
/* harmony import */ var _transform_Bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../transform/Position */ "./src/engine/transform/Position.ts");




class Rect extends _Shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.typeName = "Rect";
        this._canvasFunction = null;
    }
    get canvasFunction() { return this._canvasFunction; }
    set canvasFunction(val) { this._canvasFunction = val; }
    draw(camera) {
        if (this.canvasFunction) {
            camera.context2D.save();
            this.canvasFunction(camera.context2D);
        }
        let posX = this.transform.position.x() - camera.x();
        let posY = this.transform.position.y() - camera.y();
        if (this.fillStyle)
            this._filled(camera.context2D, posX, posY, this.transform.bounds.width(), this.transform.bounds.height());
        if ((this.lineWidth > 0) && (this.strokeStyle))
            this._outline(camera.context2D, posX, posY, this.transform.bounds.width(), this.transform.bounds.height());
        if (this.canvasFunction)
            camera.context2D.restore();
    }
    _outline(context2D, posX, posY, width, height) {
        context2D.strokeStyle = this.strokeStyle;
        context2D.lineWidth = this.lineWidth;
        context2D.beginPath();
        context2D.rect(posX + this.lineWidth / 2, posY + this.lineWidth / 2, width - this.lineWidth, height - this.lineWidth);
        context2D.stroke();
    }
    _filled(context2D, posX, posY, width, height) {
        context2D.fillStyle = this.fillStyle;
        context2D.beginPath();
        context2D.fillRect(posX, posY, width, height);
    }
}
class FillRect extends Rect {
    constructor(position, bounds, fillStyle) {
        super(position, bounds, undefined, fillStyle, 0);
    }
}
class OutlineRect extends Rect {
    constructor(position, bounds, strokeStyle, lineWidth) {
        super(position, bounds, strokeStyle, undefined, lineWidth);
    }
}
class DebugRect extends OutlineRect {
    constructor(colour, lineWidth) {
        super(new _transform_Position__WEBPACK_IMPORTED_MODULE_3__["default"](), new _transform_Bounds__WEBPACK_IMPORTED_MODULE_1__["default"](new _transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1)), colour, lineWidth);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/shape/RoundedRect.ts":
/*!**************************************************************!*\
  !*** ./src/engine/gameobject/context2d/shape/RoundedRect.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundedRect; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/engine/gameobject/context2d/shape/Shape.ts");

class RoundedRect extends _Shape__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, strokeStyle, fillStyle, lineWidth, radius) {
        super(position, bounds, strokeStyle, fillStyle, lineWidth);
        this.typeName = "RoundedRect";
        this._canvasFunction = null;
        if (radius instanceof Array)
            this._radii = radius;
        else
            this._radii = [radius, radius, radius, radius];
    }
    get canvasFunction() { return this._canvasFunction; }
    set canvasFunction(val) { this._canvasFunction = val; }
    draw(camera) {
        if (this.canvasFunction) {
            camera.context2D.save();
            this.canvasFunction(camera.context2D);
        }
        camera.context2D.strokeStyle = this.strokeStyle;
        camera.context2D.lineWidth = this.lineWidth;
        camera.context2D.fillStyle = this.fillStyle;
        let posX = this.transform.position.x() - camera.x();
        let posY = this.transform.position.y() - camera.y();
        let filled = (this.fillStyle !== undefined);
        let stroke = (this.strokeStyle !== undefined);
        this._roundRect(camera.context2D, posX, posY, this.transform.bounds.width(), this.transform.bounds.height(), this._radii, filled, stroke);
        if (this.canvasFunction)
            camera.context2D.restore();
    }
    _roundRect(context2D, x, y, width, height, radii, fill, stroke) {
        context2D.beginPath();
        context2D.moveTo(x + radii[0], y);
        context2D.lineTo(x + width - radii[1], y);
        context2D.quadraticCurveTo(x + width, y, x + width, y + radii[1]);
        context2D.lineTo(x + width, y + height - radii[2]);
        context2D.quadraticCurveTo(x + width, y + height, x + width - radii[2], y + height);
        context2D.lineTo(x + radii[3], y + height);
        context2D.quadraticCurveTo(x, y + height, x, y + height - radii[3]);
        context2D.lineTo(x, y + radii[0]);
        context2D.quadraticCurveTo(x, y, x + radii[0], y);
        context2D.closePath();
        if (fill)
            context2D.fill();
        if (stroke)
            context2D.stroke();
    }
}


/***/ }),

/***/ "./src/engine/gameobject/context2d/shape/Shape.ts":
/*!********************************************************!*\
  !*** ./src/engine/gameobject/context2d/shape/Shape.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GameObject */ "./src/engine/gameobject/GameObject.ts");

class Shape extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, strokeStyle, fillStyle, lineWidth) {
        super(position, bounds);
        this.typeName = "Shape";
        this._strokeStyle = undefined;
        this._fillStyle = undefined;
        this._lineWidth = undefined;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
        this.lineWidth = lineWidth;
    }
    get strokeStyle() { return this._strokeStyle; }
    get fillStyle() { return this._fillStyle; }
    get lineWidth() { return this._lineWidth; }
    set strokeStyle(val) { this._strokeStyle = val; }
    set lineWidth(val) { this._lineWidth = val; }
    set fillStyle(val) { this._fillStyle = val; }
}


/***/ }),

/***/ "./src/engine/gameobject/input/AsyncClickTrigger.ts":
/*!**********************************************************!*\
  !*** ./src/engine/gameobject/input/AsyncClickTrigger.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AsyncClickTrigger; });
/* harmony import */ var _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MouseTrigger */ "./src/engine/gameobject/input/MouseTrigger.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");


class AsyncClickTrigger extends _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.typeName = "AsyncClickTrigger";
        this.onClick = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["Event0"]();
    }
    create(timing, environment, inputDevices) {
        super.create(timing, environment, inputDevices);
        this._clickAsyncEvent = inputDevices.mouse.onClickAsync;
        inputDevices.mouse.onClickAsync.push(this._asyncClick.bind(this), this);
    }
    _asyncClick(mouse, pointer) {
        if ((this._pointerData[pointer.id].clickStarted) && this.transform.containsPoint(pointer.x, pointer.y) && this.active)
            this.onClick.call();
    }
    destroy() {
        this._clickAsyncEvent.unregister(this);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/input/ClickTrigger.ts":
/*!*****************************************************!*\
  !*** ./src/engine/gameobject/input/ClickTrigger.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClickTrigger; });
/* harmony import */ var _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MouseTrigger */ "./src/engine/gameobject/input/MouseTrigger.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");


class ClickTrigger extends _MouseTrigger__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this.typeName = "ClickTrigger";
        this.handleClicks = false;
        this._firedThisUpdate = false;
        this._onClick = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["MouseEvent"]();
    }
    get onClick() { return this._onClick; }
    suppressThisUpdate() { this._firedThisUpdate = true; }
    onMouseClick(mouse, pointer) {
        if ((!this._firedThisUpdate)) {
            this.onClick.call(mouse, pointer);
            this._firedThisUpdate = true;
            if (this.handleClicks)
                pointer.handled = true;
        }
    }
    begin(timing, environment, inputDevices) {
        this._firedThisUpdate = false;
        super.begin(timing, environment, inputDevices);
    }
}


/***/ }),

/***/ "./src/engine/gameobject/input/KeyTrigger.ts":
/*!***************************************************!*\
  !*** ./src/engine/gameobject/input/KeyTrigger.ts ***!
  \***************************************************/
/*! exports provided: KeyTriggerEvents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyTriggerEvents", function() { return KeyTriggerEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyTrigger; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/engine/gameobject/GameObject.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");
/* harmony import */ var engine_util_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/Util */ "./src/engine/util/Util.ts");



var KeyTriggerEvents;
(function (KeyTriggerEvents) {
    KeyTriggerEvents[KeyTriggerEvents["onKeyPress"] = 0] = "onKeyPress";
    KeyTriggerEvents[KeyTriggerEvents["onKeyNewDown"] = 1] = "onKeyNewDown";
    KeyTriggerEvents[KeyTriggerEvents["onKeyIsDown"] = 2] = "onKeyIsDown";
    KeyTriggerEvents[KeyTriggerEvents["onKeyUp"] = 3] = "onKeyUp";
})(KeyTriggerEvents || (KeyTriggerEvents = {}));
class KeyTrigger extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(null, null);
        this.typeName = "KeyTrigger";
        this._keys = [];
        this._newKeysDown = [];
    }
    getKeyEvent(keycode, trigger) {
        if (trigger === undefined)
            trigger = KeyTriggerEvents.onKeyIsDown;
        for (let i = 0, len = this._keys.length; i < len; i++) {
            if ((this._keys[i].keycode === keycode) && (this._keys[i].trigger === trigger))
                return this._keys[i].event;
        }
        let event = new engine_util_Event__WEBPACK_IMPORTED_MODULE_1__["Event0"]();
        this._keys.push({ keycode: keycode, trigger: trigger, event: event });
        return event;
    }
    removeKeyEvent(keycode, trigger) {
        let toRemove = this._keys.filter(x => (x.keycode === keycode) && (x.trigger === trigger));
        if (toRemove.length > 0) {
            for (let i = 0; i < toRemove.length; i++)
                Object(engine_util_Util__WEBPACK_IMPORTED_MODULE_2__["GCRemoveElement"])(this._keys, this._keys.indexOf(toRemove[i]));
            return true;
        }
        return false;
    }
    begin(timing, environment, inputDevices) {
        if (this.interactable)
            for (let i = 0, len = this._keys.length; i < len; i++) {
                if (this._keys[i].trigger === KeyTriggerEvents.onKeyUp) {
                    if (inputDevices.keyboard.isKeyUp(this._keys[i].keycode))
                        this._keys[i].event.call();
                }
                else if (this._keys[i].trigger === KeyTriggerEvents.onKeyIsDown) {
                    if (inputDevices.keyboard.isKeyDown(this._keys[i].keycode))
                        this._keys[i].event.call();
                }
                else if (this._keys[i].trigger === KeyTriggerEvents.onKeyPress) {
                    if (inputDevices.keyboard.isKeyPressed(this._keys[i].keycode))
                        this._keys[i].event.call();
                }
                else if (this._keys[i].trigger === KeyTriggerEvents.onKeyNewDown) {
                    if (inputDevices.keyboard.isKeyDown(this._keys[i].keycode)) {
                        if (this._newKeysDown.indexOf(this._keys[i].keycode) === -1) {
                            this._newKeysDown.push(this._keys[i].keycode);
                            this._keys[i].event.call();
                        }
                    }
                    else if (this._newKeysDown.indexOf(this._keys[i].keycode) !== -1)
                        Object(engine_util_Util__WEBPACK_IMPORTED_MODULE_2__["GCRemoveElement"])(this._newKeysDown, this._keys[i].keycode);
                }
            }
    }
}


/***/ }),

/***/ "./src/engine/gameobject/input/MouseTrigger.ts":
/*!*****************************************************!*\
  !*** ./src/engine/gameobject/input/MouseTrigger.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseTrigger; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GameObject */ "./src/engine/gameobject/GameObject.ts");

class PointerData {
    constructor() {
        this.inBounds = false;
        this.clickStarted = false;
        this.toDestroy = false;
    }
}
class MouseTrigger extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this.typeName = "MouseTrigger";
        this._pointerData = [];
        this._onlyIfUnhandled = false;
    }
    get onlyIfUnhandled() { return this._onlyIfUnhandled; }
    set onlyIfUnhandled(val) { this._onlyIfUnhandled = val; }
    create(timing, environment, inputDevices) {
        while (this._pointerData.length < inputDevices.mouse.maxPointers)
            this._pointerData.push(new PointerData());
    }
    begin(timing, environment, inputDevices) {
        if (this.interactable)
            this.checkMouseActions(inputDevices.mouse);
    }
    checkMouseActions(mouse) {
        for (let i = 0, len = this._pointerData.length; i < len; i++)
            this._pointerData[i].toDestroy = true;
        for (let i = 0, len = mouse.pointers.length; i < len; i++) {
            if ((i < mouse.maxPointers) && !(this.onlyIfUnhandled && mouse.pointers[i].handled)) {
                let data = this._pointerData[i];
                let t = mouse.pointers[i];
                data.toDestroy = false;
                if (this.transform.containsPoint(t.x, t.y)) {
                    if (!data.inBounds)
                        this.onMouseEnter(mouse, t);
                    data.inBounds = true;
                    this.onMouseHover(mouse, t);
                    if (t.isStartEvent) {
                        data.clickStarted = true;
                        this.onMouseDown(mouse, t);
                    }
                    if (t.isMoveEvent) {
                        this.onMouseMove(mouse, t);
                        if (t.isDown)
                            this.onMouseDrag(mouse, t);
                    }
                    if (t.isEndEvent) {
                        this.onMouseUp(mouse, t);
                        data.inBounds = false;
                        if (data.clickStarted) {
                            this.onMouseClick(mouse, t);
                            data.clickStarted = false;
                        }
                    }
                }
                else {
                    if (data.inBounds) {
                        this.onMouseLeave(mouse, t);
                        data.inBounds = false;
                    }
                    if ((data.clickStarted) && (t.isEndEvent))
                        data.clickStarted = false;
                }
            }
        }
        for (let i = 0, len = this._pointerData.length; i < len; i++)
            if ((this._pointerData[i].toDestroy) && (this._pointerData[i].inBounds)) {
                this.onMouseLeave(mouse, null);
                this._pointerData[i].inBounds = false;
            }
    }
    onMouseHover(mouse, pointer) { }
    onMouseMove(mouse, pointer) { }
    onMouseDown(mouse, pointer) { }
    onMouseUp(mouse, pointer) { }
    onMouseDrag(mouse, pointer) { }
    onMouseLeave(mouse, pointer) { }
    onMouseEnter(mouse, pointer) { }
    onMouseClick(mouse, pointer) { }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/AsyncButton.ts":
/*!*************************************************!*\
  !*** ./src/engine/gameobject/ui/AsyncButton.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AsyncButton; });
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _input_AsyncClickTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/AsyncClickTrigger */ "./src/engine/gameobject/input/AsyncClickTrigger.ts");



class AsyncButton extends _input_AsyncClickTrigger__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(position, bounds, content) {
        super(position, bounds);
        this.typeName = "AsyncButton";
        this._buttonReset = false;
        this._pressed = false;
        this._content = content;
        this.onlyIfUnhandled = true;
    }
    get content() { return this._content; }
    get hoverRect() { return this._hoverRect; }
    get pressedRect() { return this._pressedRect; }
    get backgroundRect() { return this._backgroundRect; }
    get depressDistance() { return this._depressDistance; }
    setDepressDistance(val) {
        this._depressDistance = val;
        if ((!this._depressTranslation) && (this._depressDistance)) {
            this._depressTranslation = new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_0__["default"](this._pressed ? this._depressDistance : new engine_util_Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0));
            if (this._content)
                this._content.transform.position.addTranslation(this._depressTranslation);
            if (this._backgroundRect)
                this._backgroundRect.transform.position.addTranslation(this._depressTranslation);
            if (this._hoverRect)
                this._hoverRect.transform.position.addTranslation(this._depressTranslation);
            if (this._pressedRect)
                this._pressedRect.transform.position.addTranslation(this._depressTranslation);
        }
        else if ((this._depressTranslation) && (this._depressDistance)) {
            if (this._pressed) {
                this._depressTranslation.innerX = this._depressDistance.x;
                this._depressTranslation.innerY = this._depressDistance.y;
                if (this._content)
                    this._content.transform.recalculate();
                if (this._backgroundRect)
                    this._backgroundRect.transform.recalculate();
                if (this._hoverRect)
                    this._hoverRect.transform.recalculate();
                if (this._pressedRect)
                    this._pressedRect.transform.recalculate();
            }
        }
    }
    setHoverRect(val) {
        this._hoverRect = val;
        this._hoverRect.visible = false;
        if (this._depressTranslation)
            this._hoverRect.transform.position.addTranslation(this._depressTranslation);
        return val;
    }
    setPressedRect(val) {
        this._pressedRect = val;
        this._pressedRect.visible = false;
        if (this._depressTranslation)
            this._pressedRect.transform.position.addTranslation(this._depressTranslation);
        return val;
    }
    setBackgroundRect(val) {
        this._backgroundRect = val;
        if (this._depressTranslation)
            this._backgroundRect.transform.position.addTranslation(this._depressTranslation);
        return val;
    }
    reset() {
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this.pressedRect)
            this.pressedRect.visible = false;
        this.requestDraw();
        this._buttonReset = true;
        this._pressed = false;
        if (this._depressTranslation) {
            this._depressTranslation.innerX = 0;
            this._depressTranslation.innerY = 0;
            if (this._content)
                this._content.transform.recalculate();
            if (this._backgroundRect)
                this._backgroundRect.transform.recalculate();
            if (this._hoverRect)
                this._hoverRect.transform.recalculate();
            if (this._pressedRect)
                this._pressedRect.transform.recalculate();
        }
    }
    create(timing, environment, inputDevices) {
        super.create(timing, environment, inputDevices);
        if (this._content)
            this.addChild(this._content);
    }
    onMouseClick(m, pointer) {
        if (!this._buttonReset)
            super.onMouseClick(m, pointer);
        pointer.handled = true;
    }
    onMouseMove(m, pointer) {
        pointer.handled = true;
    }
    onMouseDown(m, pointer) {
        this._buttonReset = false;
        this._pressed = true;
        if (this.pressedRect)
            this.pressedRect.visible = true;
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this._depressTranslation) {
            this._depressTranslation.innerX = this._depressDistance.x;
            this._depressTranslation.innerY = this._depressDistance.y;
            if (this._content)
                this._content.transform.recalculate();
            if (this._backgroundRect)
                this._backgroundRect.transform.recalculate();
            if (this._hoverRect)
                this._hoverRect.transform.recalculate();
            if (this._pressedRect)
                this._pressedRect.transform.recalculate();
        }
        pointer.handled;
    }
    onMouseUp(m, pointer) {
        if (this._depressTranslation) {
            this._depressTranslation.innerX = 0;
            this._depressTranslation.innerY = 0;
            if (this._content)
                this._content.transform.recalculate();
            if (this._backgroundRect)
                this._backgroundRect.transform.recalculate();
            if (this._hoverRect)
                this._hoverRect.transform.recalculate();
            if (this._pressedRect)
                this._pressedRect.transform.recalculate();
        }
        if (this.pressedRect)
            this.pressedRect.visible = false;
        if (this.hoverRect)
            this.hoverRect.visible = true;
        pointer.handled;
    }
    onMouseEnter(m, pointer) {
        if (this.hoverRect)
            this.hoverRect.visible = true;
        pointer.handled;
    }
    onMouseLeave(m, pointer) {
        this._pressed = false;
        if (this._depressTranslation) {
            this._depressTranslation.innerX = 0;
            this._depressTranslation.innerY = 0;
            if (this._content)
                this._content.transform.recalculate();
            if (this._backgroundRect)
                this._backgroundRect.transform.recalculate();
            if (this._hoverRect)
                this._hoverRect.transform.recalculate();
            if (this._pressedRect)
                this._pressedRect.transform.recalculate();
        }
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this.pressedRect)
            this.pressedRect.visible = false;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/Button.ts":
/*!********************************************!*\
  !*** ./src/engine/gameobject/ui/Button.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _input_ClickTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input/ClickTrigger */ "./src/engine/gameobject/input/ClickTrigger.ts");
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var engine_util_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/Point */ "./src/engine/util/Point.ts");



class Button extends _input_ClickTrigger__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, content) {
        super(position, bounds);
        this.typeName = "Button";
        this._buttonReset = false;
        this._pressed = false;
        this._content = content;
        this.onlyIfUnhandled = true;
        this.handleClicks = true;
    }
    get content() { return this._content; }
    get hoverRect() { return this._hoverRect; }
    get pressedRect() { return this._pressedRect; }
    get backgroundRect() { return this._backgroundRect; }
    get depressDistance() { return this._depressDistance; }
    setDepressDistance(val) {
        this._depressDistance = val;
        if ((!this._depressTranslation) && (this._depressDistance)) {
            this._depressTranslation = new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_1__["default"](this._pressed ? this._depressDistance : new engine_util_Point__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0));
            if (this._content)
                this._content.transform.position.addTranslation(this._depressTranslation);
            if (this._backgroundRect)
                this._backgroundRect.transform.position.addTranslation(this._depressTranslation);
            if (this._hoverRect)
                this._hoverRect.transform.position.addTranslation(this._depressTranslation);
            if (this._pressedRect)
                this._pressedRect.transform.position.addTranslation(this._depressTranslation);
        }
        else if ((this._depressTranslation) && (this._depressDistance)) {
            if (this._pressed) {
                this._depressTranslation.innerX = this._depressDistance.x;
                this._depressTranslation.innerY = this._depressDistance.y;
                if (this._content)
                    this._content.transform.recalculate();
                if (this._backgroundRect)
                    this._backgroundRect.transform.recalculate();
                if (this._hoverRect)
                    this._hoverRect.transform.recalculate();
                if (this._pressedRect)
                    this._pressedRect.transform.recalculate();
            }
        }
    }
    setHoverRect(val) {
        this._hoverRect = val;
        this._hoverRect.visible = false;
        if (this._depressTranslation)
            this._hoverRect.transform.position.addTranslation(this._depressTranslation);
        return val;
    }
    setPressedRect(val) {
        this._pressedRect = val;
        this._pressedRect.visible = false;
        if (this._depressTranslation)
            this._pressedRect.transform.position.addTranslation(this._depressTranslation);
        return val;
    }
    setBackgroundRect(val) {
        this._backgroundRect = val;
        if (this._depressTranslation)
            this._backgroundRect.transform.position.addTranslation(this._depressTranslation);
        return val;
    }
    reset() {
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this.pressedRect)
            this.pressedRect.visible = false;
        this.requestDraw();
        this._buttonReset = true;
        this._pressed = false;
        if (this._depressTranslation) {
            this._depressTranslation.innerX = 0;
            this._depressTranslation.innerY = 0;
            if (this._content)
                this._content.transform.recalculate();
            if (this._backgroundRect)
                this._backgroundRect.transform.recalculate();
            if (this._hoverRect)
                this._hoverRect.transform.recalculate();
            if (this._pressedRect)
                this._pressedRect.transform.recalculate();
        }
    }
    create(timing, environment, inputDevices) {
        super.create(timing, environment, inputDevices);
        if (this._content)
            this.addChild(this._content);
    }
    onMouseClick(m, pointer) {
        if (!this._buttonReset)
            super.onMouseClick(m, pointer);
        pointer.handled = true;
    }
    onMouseMove(m, pointer) {
        pointer.handled = true;
    }
    onMouseDown(m, pointer) {
        this._buttonReset = false;
        this._pressed = true;
        if (this.pressedRect)
            this.pressedRect.visible = true;
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this._depressTranslation) {
            this._depressTranslation.innerX = this._depressDistance.x;
            this._depressTranslation.innerY = this._depressDistance.y;
            if (this._content)
                this._content.transform.recalculate();
            if (this._backgroundRect)
                this._backgroundRect.transform.recalculate();
            if (this._hoverRect)
                this._hoverRect.transform.recalculate();
            if (this._pressedRect)
                this._pressedRect.transform.recalculate();
        }
        pointer.handled = true;
    }
    onMouseUp(m, pointer) {
        if (this._depressTranslation) {
            this._depressTranslation.innerX = 0;
            this._depressTranslation.innerY = 0;
            if (this._content)
                this._content.transform.recalculate();
            if (this._backgroundRect)
                this._backgroundRect.transform.recalculate();
            if (this._hoverRect)
                this._hoverRect.transform.recalculate();
            if (this._pressedRect)
                this._pressedRect.transform.recalculate();
        }
        if (this.pressedRect)
            this.pressedRect.visible = false;
        if (this.hoverRect)
            this.hoverRect.visible = true;
        pointer.handled = true;
    }
    onMouseEnter(m, pointer) {
        if (this.hoverRect)
            this.hoverRect.visible = true;
        pointer.handled = true;
    }
    onMouseLeave(m, pointer) {
        this._pressed = false;
        if (this._depressTranslation) {
            this._depressTranslation.innerX = 0;
            this._depressTranslation.innerY = 0;
            if (this._content)
                this._content.transform.recalculate();
            if (this._backgroundRect)
                this._backgroundRect.transform.recalculate();
            if (this._hoverRect)
                this._hoverRect.transform.recalculate();
            if (this._pressedRect)
                this._pressedRect.transform.recalculate();
        }
        if (this.hoverRect)
            this.hoverRect.visible = false;
        if (this.pressedRect)
            this.pressedRect.visible = false;
    }
}


/***/ }),

/***/ "./src/engine/gameobject/ui/DebugPane.ts":
/*!***********************************************!*\
  !*** ./src/engine/gameobject/ui/DebugPane.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DebugPane; });
/* harmony import */ var _context2d_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context2d/Text */ "./src/engine/gameobject/context2d/Text.ts");
/* harmony import */ var _input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/KeyTrigger */ "./src/engine/gameobject/input/KeyTrigger.ts");
/* harmony import */ var _transform_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GameObject */ "./src/engine/gameobject/GameObject.ts");
/* harmony import */ var _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");
/* harmony import */ var engine_style_TextStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/style/TextStyle */ "./src/engine/style/TextStyle.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");







class DebugPane extends _GameObject__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super(...arguments);
        this.typeName = "DebugPane";
        this._beginTime = 0;
        this._drawTime = 0;
        this._endTime = 0;
        this._updateTime = 0;
        this._averageSteps = 0;
        this._loopTime = 0;
        this._valuesAlpha = 0.02;
    }
    create(timing, environment) {
        this._timingText = this.addChild(new _context2d_Text__WEBPACK_IMPORTED_MODULE_0__["default"](new _transform_Position__WEBPACK_IMPORTED_MODULE_2__["default"](new _transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_4__["default"](5, 5)), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_6__["default"](), "FPS:", new engine_style_TextStyle__WEBPACK_IMPORTED_MODULE_5__["default"]("white", 12, "serif", 2, undefined, false)));
        let kt = this.addChild(new _input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["default"]());
        kt.getKeyEvent("Tab", _input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["KeyTriggerEvents"].onKeyUp).push(() => this.visible = !(this.visible), this);
    }
    updateValues(t, fps, updateSteps) {
        this._beginTime = this.runningAverage(this._beginTime, t.beginTime, this._valuesAlpha);
        this._updateTime = this.runningAverage(this._updateTime, t.updateTime, this._valuesAlpha);
        this._drawTime = this.runningAverage(this._drawTime, t.drawTime, this._valuesAlpha);
        this._endTime = this.runningAverage(this._endTime, t.endTime, this._valuesAlpha);
        this._loopTime = this.runningAverage(this._loopTime, t.loopTime, this._valuesAlpha);
        this._averageSteps = this.runningAverage(this._averageSteps, updateSteps, this._valuesAlpha);
        this._slowDown = t.slowDown;
    }
    begin(t, environment, inputDevices) {
        this._timingText.text = ("FPS: " + t.fps).substring(0, 7) +
            ("\nBegin: " + this._beginTime).substring(0, 12) +
            ("\nDraw: " + this._drawTime).substring(0, 11) +
            ("\nUpdate: " + this._updateTime).substring(0, 13) +
            ("\n(Steps: " + this._averageSteps).substring(0, 13) + ") " +
            ("\nEnd: " + this._endTime).substring(0, 10) +
            ("\nLoop: " + this._loopTime).substring(0, 11) +
            ("\n(Calculated FPS: " + Math.round(1000 / this._loopTime)).substring(0, 21) + ")" +
            ("\n(Rate (-/+): " + 100 / (this._slowDown + 1)).substring(0, 17) + "%)" +
            ("\n(Game Speed ([/]): " + 100 * (t.speedFactor)).substring(0, 23) + "%)";
    }
    runningAverage(val, newVal, alpha) {
        return alpha * newVal + (1 - alpha) * val;
    }
}


/***/ }),

/***/ "./src/engine/input/InputDevice.ts":
/*!*****************************************!*\
  !*** ./src/engine/input/InputDevice.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputDevice; });
class InputDevice {
    onBeginEnd() { }
}


/***/ }),

/***/ "./src/engine/input/InputDeviceGroup.ts":
/*!**********************************************!*\
  !*** ./src/engine/input/InputDeviceGroup.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputDeviceGroup; });
class InputDeviceGroup {
    constructor() {
        this._inputDevices = {};
        this._ifs = [];
    }
    get inputDevices() { return this._inputDevices; }
    onBeginEnd() {
        for (let i = 0, len = this._ifs.length; i < len; i++)
            this._ifs[i].onBeginEnd();
    }
    addInputDevice(inf, name) {
        this._inputDevices[name] = inf;
        this._ifs.push(inf);
    }
}


/***/ }),

/***/ "./src/engine/input/Keyboard.ts":
/*!**************************************!*\
  !*** ./src/engine/input/Keyboard.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
/* harmony import */ var engine_util_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/util/Util */ "./src/engine/util/Util.ts");

class Keyboard {
    constructor() {
        this._bufferSizes = 10;
        this._keysDown = [];
        this._keysDownLength = 0;
        this._keysUp = [];
        this._keysUpLength = 0;
        this._keyPressesThisUpdate = [];
        this._keyPressesThisUpdateLength = 0;
        for (let i = 0, len = this._bufferSizes; i < len; i++) {
            this._keysDown.push(null);
            this._keysUp.push(null);
            this._keyPressesThisUpdate.push(null);
        }
    }
    get keyPressesThisUpdate() { return this._keyPressesThisUpdate; }
    get keysDown() { return this._keysDown; }
    get keysUp() { return this._keysUp; }
    isKeyUp(keyValue) {
        for (let i = 0, len = this._keysUpLength; i < len; i++) {
            if (this._keysUp[i] === keyValue)
                return true;
        }
        return false;
    }
    isKeyDown(keyValue) {
        for (let i = 0, len = this._keysDownLength; i < len; i++) {
            if (this._keysDown[i] === keyValue)
                return true;
        }
        return false;
    }
    isKeyPressed(keyValue) {
        for (let i = 0, len = this._keyPressesThisUpdateLength; i < len; i++) {
            if (this._keyPressesThisUpdate[i] === keyValue)
                return true;
        }
        return false;
    }
    keyPriority(a, b) {
        let indexA = -1;
        let indexB = -1;
        for (let i = 0, len = this._keysDownLength; i < len; i++) {
            if (this._keysDown[i] === a) {
                indexA = i;
                if (indexB > -1)
                    break;
            }
            if (this._keysDown[i] === b) {
                indexB = i;
                if (indexA > -1)
                    break;
            }
        }
        return indexA > indexB;
    }
    onBeginEnd() {
        this._keyPressesThisUpdateLength = 0;
        for (let i = 0, len = this._keysUpLength; i < len; i++) {
            for (let j = 0, len = this._keysDownLength; j < len; j++) {
                if (this._keysUp[i] === this._keysDown[j]) {
                    Object(engine_util_Util__WEBPACK_IMPORTED_MODULE_0__["GCSwapElements"])(this._keysDown, j, this._keysDownLength - 1);
                    this._keysDownLength--;
                    break;
                }
            }
        }
        this._keysUpLength = 0;
    }
    keyDown(event) {
        if (event.defaultPrevented)
            return;
        let found = false;
        if (this._keysDownLength < this._bufferSizes)
            for (let i = 0, len = this._keysDownLength; i < len; i++) {
                if (this._keysDown[i] === event.key) {
                    found = true;
                    break;
                }
            }
        if (!found) {
            this._keysDown[this._keysDownLength] = event.key;
            this._keysDownLength++;
        }
    }
    keyUp(event) {
        if (event.defaultPrevented)
            return;
        let found = false;
        if (this._keysUpLength < this._bufferSizes)
            for (let i = 0, len = this._keysUpLength; i < len; i++) {
                if (this._keysUp[i] === event.key) {
                    found = true;
                    break;
                }
            }
        if (!found) {
            this._keysUp[this._keysUpLength] = event.key;
            this._keysUpLength++;
        }
    }
    keyPress(event) {
        if (event.defaultPrevented)
            return;
        let found = false;
        if (this._keyPressesThisUpdateLength < this._bufferSizes)
            for (let i = 0, len = this._keyPressesThisUpdateLength; i < len; i++) {
                if (this._keyPressesThisUpdate[i] === event.key) {
                    found = true;
                    break;
                }
            }
        if (!found) {
            this._keyPressesThisUpdate[this._keyPressesThisUpdateLength] = event.key;
            this._keyPressesThisUpdateLength++;
        }
    }
}


/***/ }),

/***/ "./src/engine/input/Mouse.ts":
/*!***********************************!*\
  !*** ./src/engine/input/Mouse.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mouse; });
/* harmony import */ var _InputDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputDevice */ "./src/engine/input/InputDevice.ts");
/* harmony import */ var _Pointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pointer */ "./src/engine/input/Pointer.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");



class Mouse extends _InputDevice__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(maxPointers, htmlElementForOffset) {
        super();
        this.pointers = [];
        this.onClickAsync = new engine_util_Event__WEBPACK_IMPORTED_MODULE_2__["MouseEvent"]();
        this.maxPointers = maxPointers;
        for (let i = 0; i < maxPointers; i++)
            this.pointers.push(new _Pointer__WEBPACK_IMPORTED_MODULE_1__["Pointer"](i));
        this._htmlElementForOffset = htmlElementForOffset;
    }
    get htmlElementForOffset() { return this._htmlElementForOffset; }
    set htmlElementForOffset(val) { this._htmlElementForOffset = val; }
    handleAll() {
        for (let i = 0, len = this.pointers.length; i < len; i++)
            this.pointers[i].handled = true;
    }
    onBeginEnd() {
        for (let i = 0, len = this.pointers.length; i < len; i++) {
            this.pointers[i].isStartEvent = false;
            this.pointers[i].isEndEvent = false;
            this.pointers[i].isMoveEvent = false;
            this.pointers[i].handled = false;
        }
    }
    mouseUp(event) {
        this.pointers[0].isEndEvent = true;
        this.pointers[0].isDown = false;
        this.onClickAsync.call(this, this.pointers[0]);
    }
    touchEnd(e) {
        for (let i = 1, len = e.changedTouches.length; i < len; i++)
            if (e.changedTouches[i].identifier + 1 < this.maxPointers) {
                this.pointers[e.changedTouches[i].identifier + 1].isEndEvent = true;
                this.pointers[e.changedTouches[i].identifier + 1].isDown = false;
                this.pointers[e.changedTouches[i].identifier + 1].x = e.changedTouches[i].pageX - this._htmlElementForOffset.offsetLeft;
                this.pointers[e.changedTouches[i].identifier + 1].y = e.changedTouches[i].pageY - this._htmlElementForOffset.offsetTop;
                if (this.onClickAsync.length > 0)
                    this.onClickAsync.call(this, this.pointers[e.changedTouches[i].identifier + 1]);
            }
    }
    mouseDown(event) {
        this.pointers[0].isDown = true;
        this.pointers[0].isStartEvent = true;
        this.pointers[0].x = event.pageX - this._htmlElementForOffset.offsetLeft;
        this.pointers[0].y = event.pageY - this._htmlElementForOffset.offsetTop;
    }
    touchStart(event) {
        for (let i = 0, len = event.changedTouches.length; i < len; i++)
            if (event.changedTouches[i].identifier + 1 < this.maxPointers) {
                let t = this.pointers[event.changedTouches[i].identifier + 1];
                t.isDown = true;
                t.isEndEvent = false;
                t.isMoveEvent = false;
                t.handled = false;
                t.isStartEvent = true;
                t.x = event.changedTouches[i].pageX - this._htmlElementForOffset.offsetLeft;
                t.y = event.changedTouches[i].pageY - this._htmlElementForOffset.offsetTop;
            }
    }
    mouseXY(event) {
        this.pointers[0].isMoveEvent = true;
        this.pointers[0].x = event.pageX - this._htmlElementForOffset.offsetLeft;
        this.pointers[0].y = event.pageY - this._htmlElementForOffset.offsetTop;
    }
    touchXY(event) {
        event.preventDefault();
        for (let i = 0, len = event.changedTouches.length; i < len; i++) {
            if (event.changedTouches[i].identifier + 1 < this.maxPointers) {
                let t = this.pointers[event.changedTouches[i].identifier + 1];
                t.isMoveEvent = true;
                t.x = event.changedTouches[i].pageX - this._htmlElementForOffset.offsetLeft;
                t.y = event.changedTouches[i].pageY - this._htmlElementForOffset.offsetTop;
            }
        }
    }
}


/***/ }),

/***/ "./src/engine/input/Pointer.ts":
/*!*************************************!*\
  !*** ./src/engine/input/Pointer.ts ***!
  \*************************************/
/*! exports provided: Pointer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pointer", function() { return Pointer; });
class Pointer {
    constructor(id) {
        this.x = 0;
        this.y = 0;
        this.isStartEvent = false;
        this.isEndEvent = false;
        this.isMoveEvent = false;
        this.handled = false;
        this.isDown = false;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/engine/launcher/LauncherFactories.ts":
/*!**************************************************!*\
  !*** ./src/engine/launcher/LauncherFactories.ts ***!
  \**************************************************/
/*! exports provided: defaultLauncherFactories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLauncherFactories", function() { return defaultLauncherFactories; });
/* harmony import */ var engine_Timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/Timing */ "./src/engine/Timing.ts");
/* harmony import */ var engine_AssetLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/AssetLoader */ "./src/engine/AssetLoader.ts");
/* harmony import */ var engine_input_Keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/input/Keyboard */ "./src/engine/input/Keyboard.ts");
/* harmony import */ var engine_input_Mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! engine/input/Mouse */ "./src/engine/input/Mouse.ts");
/* harmony import */ var engine_Environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! engine/Environment */ "./src/engine/Environment.ts");
/* harmony import */ var engine_util_Util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! engine/util/Util */ "./src/engine/util/Util.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! engine/gameobject/context2d/DrawBuffer */ "./src/engine/gameobject/context2d/DrawBuffer.ts");
/* harmony import */ var engine_gameobject_context2d_Context2DCamera__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine/gameobject/context2d/Context2DCamera */ "./src/engine/gameobject/context2d/Context2DCamera.ts");











let defaultLauncherFactories = {
    createTiming: function () { return new engine_Timing__WEBPACK_IMPORTED_MODULE_0__["default"](); },
    createLoader: function () { return new engine_AssetLoader__WEBPACK_IMPORTED_MODULE_1__["default"](); },
    createKeyboard(document, container) {
        let keyboard = new engine_input_Keyboard__WEBPACK_IMPORTED_MODULE_2__["default"]();
        document.addEventListener("keydown", keyboard.keyDown.bind(keyboard), true);
        document.addEventListener("keyup", keyboard.keyUp.bind(keyboard), true);
        document.addEventListener("keypress", keyboard.keyPress.bind(keyboard), true);
        return keyboard;
    },
    createMouse: function (document, container) {
        let mouse = new engine_input_Mouse__WEBPACK_IMPORTED_MODULE_3__["default"](5, container);
        document.body.addEventListener("mousedown", mouse.mouseDown.bind(mouse), false);
        document.body.addEventListener("mousemove", mouse.mouseXY.bind(mouse), false);
        document.body.addEventListener("touchstart", mouse.touchStart.bind(mouse), false);
        document.body.addEventListener("touchmove", mouse.touchXY.bind(mouse), true);
        document.body.addEventListener("touchend", mouse.touchEnd.bind(mouse), false);
        document.body.addEventListener("mouseup", mouse.mouseUp.bind(mouse), false);
        document.body.addEventListener("touchcancel", mouse.touchEnd.bind(mouse), false);
        return mouse;
    },
    createEnvironment: function (doc, container, launcherOptions) {
        let e = new engine_Environment__WEBPACK_IMPORTED_MODULE_4__["default"](window.devicePixelRatio, Object(engine_util_Util__WEBPACK_IMPORTED_MODULE_5__["getArgumentsFromString"])(location.search), container, launcherOptions, doc);
        window.addEventListener('resize', () => e.setWidthAndHeight(container.offsetWidth, container.offsetHeight));
        return e;
    },
    createRootGameObject: function (environment, launcherOptions, container) {
        let rootDimension = new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_6__["default"](container.offsetWidth, container.offsetHeight);
        let rootGameObject = new launcherOptions.rootGameObjectType(new engine_transform_Position__WEBPACK_IMPORTED_MODULE_7__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_8__["default"](rootDimension));
        rootGameObject.transform.bounds.minDimension = launcherOptions.minDimension;
        rootGameObject.transform.bounds.maxDimension = launcherOptions.maxDimension;
        environment.onResize.push((width, height) => {
            rootDimension.width = width;
            rootDimension.height = height;
            rootGameObject.transform.positioningIsDirty();
        });
        if (rootGameObject instanceof engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_9__["default"]) {
            let camera = rootGameObject.addCamera(rootGameObject.addChild(new engine_gameobject_context2d_Context2DCamera__WEBPACK_IMPORTED_MODULE_10__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_7__["default"](), engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_8__["default"].fill)));
            camera.hasAlphaChannel = environment.launcherOptions.hasAlphaChannel;
            camera.backgroundColor = environment.launcherOptions.backgroundColor;
            camera.container = container;
        }
        return rootGameObject;
    }
};



/***/ }),

/***/ "./src/engine/launcher/createGame.ts":
/*!*******************************************!*\
  !*** ./src/engine/launcher/createGame.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGame; });
/* harmony import */ var _input_InputDeviceGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input/InputDeviceGroup */ "./src/engine/input/InputDeviceGroup.ts");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game */ "./src/engine/Game.ts");
/* harmony import */ var _LauncherFactories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LauncherFactories */ "./src/engine/launcher/LauncherFactories.ts");



function createGame(launcherOptions, document, container, factories) {
    if (!factories)
        factories = _LauncherFactories__WEBPACK_IMPORTED_MODULE_2__["defaultLauncherFactories"];
    let environment = factories.createEnvironment(document, container, launcherOptions);
    container.style.userSelect = "none";
    let inputDeviceGroup = new _input_InputDeviceGroup__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (launcherOptions.usesKeyboard) {
        let keyboard = factories.createKeyboard(document, container);
        inputDeviceGroup.addInputDevice(keyboard, "keyboard");
    }
    if (launcherOptions.usesMouse) {
        let mouse = factories.createMouse(document, container);
        inputDeviceGroup.addInputDevice(mouse, "mouse");
    }
    launcherOptions.addExtraInputDevices(inputDeviceGroup);
    let timing = factories.createTiming();
    let loader = factories.createLoader();
    let rootGameObject = factories.createRootGameObject(environment, launcherOptions, container);
    let game = new _Game__WEBPACK_IMPORTED_MODULE_1__["default"](rootGameObject, inputDeviceGroup, timing, loader, environment);
    return game;
}


/***/ }),

/***/ "./src/engine/launcher/launchScript.ts":
/*!*********************************************!*\
  !*** ./src/engine/launcher/launchScript.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _launcherOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../launcherOptions */ "./src/launcherOptions.ts");
/* harmony import */ var _createGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGame */ "./src/engine/launcher/createGame.ts");


let l = [];
if (_launcherOptions__WEBPACK_IMPORTED_MODULE_0__["launcherOptions"] instanceof Array)
    l = _launcherOptions__WEBPACK_IMPORTED_MODULE_0__["launcherOptions"];
else
    l = [_launcherOptions__WEBPACK_IMPORTED_MODULE_0__["launcherOptions"]];
l.forEach((options) => {
    let container = document.querySelector("#" + options.gameTarget);
    if (!container)
        throw new Error("Cannot create game canvas in HTMLElement with ID '" + options.gameTarget + "'. No element with that name was found.");
    let game = Object(_createGame__WEBPACK_IMPORTED_MODULE_1__["default"])(options, document, container);
    game.create();
    game.start();
    if (options.windowVariableName)
        window[options.windowVariableName] = game;
});


/***/ }),

/***/ "./src/engine/style/TextStyle.ts":
/*!***************************************!*\
  !*** ./src/engine/style/TextStyle.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextStyle; });
class TextStyle {
    constructor(colour, size, fontFace, lineSpacing, targetWidth, centred) {
        if (typeof colour === "string") {
            this.colour = colour;
            this.size = size;
            this.fontFace = fontFace;
            this.lineSpacing = lineSpacing;
            this.targetWidth = targetWidth;
            this.centred = centred;
        }
        else {
            this.colour = colour.textColour;
            this.size = colour.textSize;
            this.fontFace = colour.fontFace;
            this.lineSpacing = colour.lineSpacing;
            this.targetWidth = colour.targetTextWidth;
            this.centred = colour.textCentred;
        }
    }
}


/***/ }),

/***/ "./src/engine/transform/Bounds.ts":
/*!****************************************!*\
  !*** ./src/engine/transform/Bounds.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bounds; });
/* harmony import */ var _dimension_Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimension/Dimension */ "./src/engine/transform/dimension/Dimension.ts");
/* harmony import */ var _dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_util_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/util/Event */ "./src/engine/util/Event.ts");



class Bounds {
    constructor(...dimensions) {
        this._dimensions = [];
        this._referenceWidth = undefined;
        this._targetAspectRatio = undefined;
        this._minDimension = undefined;
        this._maxDimension = undefined;
        this._transform = null;
        this._cachedWidth = 0;
        this._cachedHeight = 0;
        this._onResize = new engine_util_Event__WEBPACK_IMPORTED_MODULE_2__["Event0"]();
        this._dirty = true;
        this._calculating = false;
        this._dimensions = dimensions;
    }
    get transform() { return this._transform; }
    set transform(val) { this._transform = val; }
    get dirty() { return this._dirty; }
    set dirty(val) { this._dirty = val; }
    get cachedWidth() { return this._cachedWidth; }
    get cachedHeight() { return this._cachedHeight; }
    get calculating() { return this._calculating; }
    get onResize() { return this._onResize; }
    get devicePixelRatio() { return window.devicePixelRatio; }
    get parentBounds() {
        if ((this.transform) && (this.transform.parent))
            return this.transform.parent.bounds;
        return null;
    }
    get targetAspectRatio() { return this._targetAspectRatio; }
    set targetAspectRatio(aspectRatio) { this._targetAspectRatio = aspectRatio; }
    get maxDimension() { return this._maxDimension; }
    set maxDimension(val) { this._maxDimension = val; }
    get minDimension() { return this._minDimension; }
    set minDimension(val) { this._minDimension = val; }
    static get fill() { return new Bounds(new _dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1)); }
    get dimensions() { return this._dimensions; }
    width() {
        if (!(this.dirty))
            return this._cachedWidth;
        this._updateCache();
        return this._cachedWidth;
    }
    height() {
        if (!(this.dirty))
            return this._cachedHeight;
        this._updateCache();
        return this._cachedHeight;
    }
    asDimension() { return new _dimension_Dimension__WEBPACK_IMPORTED_MODULE_0__["default"](this.width(), this.height()); }
    aspect() { return this.height() / this.width(); }
    get referenceWidth() {
        if (this._referenceWidth !== undefined)
            return this._referenceWidth;
        if (this.parentBounds)
            return this.parentBounds.referenceWidth;
        return undefined;
    }
    set referenceWidth(referenceWidth) { this._referenceWidth = referenceWidth; }
    get referenceHeight() {
        if (this._referenceWidth !== undefined)
            return this.referenceWidth * this.aspect();
        if (this.parentBounds)
            return this.parentBounds.referenceHeight;
        return undefined;
    }
    get referenceScale() {
        if (this._referenceWidth !== undefined)
            return this.width() / this._referenceWidth;
        if (this.parentBounds)
            return this.parentBounds.referenceScale;
        return 0;
    }
    addDimension(dim) {
        this._dimensions.push(dim);
        if (this.transform.gameObject.created) {
            if (this.hasResizedAutoUpdate())
                this._onChange();
        }
        return dim;
    }
    clearDimensions() {
        this._dimensions = [];
        if (this.hasResizedAutoUpdate())
            this._onChange();
    }
    hasResizedAutoUpdate() {
        if (this.dirty)
            return true;
        let startWidth = this._cachedWidth;
        let startHeight = this._cachedHeight;
        let failed = this._calculateAndSetDimension();
        return failed || this._cachedWidth !== startWidth || this._cachedHeight !== startHeight;
    }
    checkForUpdatedDimensions() {
        let updated = false;
        let d;
        for (let i = 0, len = this._dimensions.length; i < len; i++) {
            d = this._dimensions[i];
            if (d.updated) {
                updated = true;
                break;
            }
            if (d.updateSpecial)
                if (d.hasChanged(this.parentBounds)) {
                    updated = true;
                    break;
                }
        }
        if (updated) {
            this._onChange();
            for (let i = 0, len = this._dimensions.length; i < len; i++)
                this._dimensions[i].updated = false;
        }
    }
    destroy() {
        this.onResize.removeAll();
        for (let i = 0, len = this._dimensions.length; i < len; i++)
            this._dimensions[i].destroy();
    }
    _onChange() {
        if (this.transform) {
            this.transform.recalculate();
            this.onResize.call();
        }
    }
    _updateCache() {
        let failed = this._calculateAndSetDimension();
        this.dirty = failed;
        if (failed)
            this.transform.positioningIsDirty();
    }
    _calculateAndSetDimension() {
        this._calculating = true;
        let calculationFailed = false;
        let width = 0;
        let height = 0;
        if (this.transform)
            for (let i = 0, len = this._dimensions.length; i < len; i++) {
                let x = this._dimensions[i].pixelWidth(this.parentBounds);
                let y = this._dimensions[i].pixelHeight(this.parentBounds);
                if ((x === undefined) || (y === undefined))
                    calculationFailed = true;
                else {
                    width += x;
                    height += y;
                }
            }
        this._limitAndSetDimension(width, height);
        this._calculating = false;
        return calculationFailed;
    }
    _limitAndSetDimension(width, height) {
        if (this.minDimension) {
            if (this.minDimension.pixelWidth(this.parentBounds))
                width = Math.max(width, this.minDimension.pixelWidth(this.parentBounds));
            if (this.minDimension.pixelHeight(this.parentBounds))
                height = Math.max(height, this.minDimension.pixelHeight(this.parentBounds));
        }
        if (this.maxDimension) {
            if (this.maxDimension.pixelWidth(this.parentBounds))
                width = Math.min(width, this.maxDimension.pixelWidth(this.parentBounds));
            if (this.maxDimension.pixelHeight(this.parentBounds))
                height = Math.min(height, this.maxDimension.pixelHeight(this.parentBounds));
        }
        if (this.targetAspectRatio) {
            if (height < width * this.targetAspectRatio)
                width = height * (1 / this.targetAspectRatio);
            else
                height = width * this.targetAspectRatio;
        }
        this._cachedWidth = width;
        this._cachedHeight = height;
    }
}


/***/ }),

/***/ "./src/engine/transform/Position.ts":
/*!******************************************!*\
  !*** ./src/engine/transform/Position.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Position; });
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _translation_ConditionalTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation/ConditionalTranslation */ "./src/engine/transform/translation/ConditionalTranslation.ts");
/* harmony import */ var _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation/ProportionalTranslation */ "./src/engine/transform/translation/ProportionalTranslation.ts");



class Position {
    constructor(...translations) {
        this._transform = null;
        this._resetDrawPos = false;
        this._cachedX = 0;
        this._cachedY = 0;
        this._cacheXDirty = true;
        this._cacheYDirty = true;
        this._rotation = 0;
        this._translations = translations;
    }
    get transform() { return this._transform; }
    set transform(val) { this._transform = val; }
    get resetDrawPos() { return this._resetDrawPos; }
    set resetDrawPos(val) { this._resetDrawPos = val; }
    get translations() { return this._translations; }
    point() { return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.x(), this.y()); }
    get rotation() { return this._rotation; }
    set rotation(val) { this._rotation = val; }
    static get right() { return new Position(new _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](1, 0, new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0))); }
    static get bottom() { return new Position(new _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](0, 1, new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1))); }
    static get bottomRight() { return new Position(new _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1, new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1))); }
    static get bottomCentre() { return new Position(new _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](0.5, 1, new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0.5, 1))); }
    static get centre() { return new Position(new _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](0.5, 0.5, new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0.5, 0.5))); }
    static get centreX() { return new Position(new _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](0.5, 0, new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0.5, 0))); }
    static get centreY() { return new Position(new _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0.5, new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0.5))); }
    static get centreRight() { return new Position(new _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](1, 0.5, new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0.5))); }
    addTranslation(translation) {
        let found = null;
        for (let i = 0; i < this._translations.length; i++) {
            let t = this._translations[i];
            if ((t.constructor === translation.constructor) && ((t.anchorX == translation.anchorX) && (t.anchorY == translation.anchorY))) {
                if (t instanceof _translation_ProportionalTranslation__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                    let rb1 = t.referenceBounds;
                    let rb2 = translation.referenceBounds;
                    if (rb1 === rb2) {
                        found = t;
                        t.innerX = t.innerX + translation.innerX;
                        t.innerY = t.innerY + translation.innerY;
                    }
                }
                else if ((t instanceof _translation_ConditionalTranslation__WEBPACK_IMPORTED_MODULE_1__["default"])) { }
                else {
                    found = t;
                    t.innerX = t.innerX + translation.innerX;
                    t.innerY = t.innerY + translation.innerY;
                }
            }
        }
        if (!found)
            this._translations.push(translation);
        if (this.transform.gameObject.created)
            if (this.hasMoved())
                this._onChange();
        return found || translation;
    }
    clearTranslations() {
        this._translations = [];
        if (this.hasMoved())
            this._onChange();
    }
    x() {
        if (!(this._cacheXDirty))
            return this._cachedX;
        let newX = this._calculateOffsetX();
        this._cacheXDirty = false;
        this._cachedX = newX;
        return newX;
    }
    y() {
        if (!(this._cacheYDirty))
            return this._cachedY;
        let newY = this._calculateOffsetY();
        this._cacheYDirty = false;
        this._cachedY = newY;
        return newY;
    }
    setCacheDirty() {
        this._cacheXDirty = true;
        this._cacheYDirty = true;
    }
    anchorX(anchorX) {
        return this.x() + this.transform.bounds.width() * anchorX;
    }
    anchorY(anchorY) {
        return this.y() + this.transform.bounds.height() * anchorY;
    }
    getAnchorPosition(point, y) {
        if (!point)
            return this.point();
        else {
            let tl = this.point();
            if (point instanceof _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"])
                return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](tl.x + this.transform.bounds.width() * point.x, tl.y + this.transform.bounds.height() * point.y);
            else
                return new _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"](tl.x + this.transform.bounds.width() * point, tl.y + this.transform.bounds.height() * y);
        }
    }
    checkForUpdatedTranslations() {
        let updated = false;
        let t;
        for (let i = 0, len = this._translations.length; i < len; i++) {
            t = this._translations[i];
            if (t.updated) {
                updated = true;
                break;
            }
            if (t.updateSpecial)
                if ((!(t.previousAbsolutePosition)) || (!(_util_Point__WEBPACK_IMPORTED_MODULE_0__["default"].equals(t.absolutePositionDontUpdatePrevious(this.transform.bounds), t.previousAbsolutePosition)))) {
                    updated = true;
                    break;
                }
        }
        if (updated) {
            this._onChange();
            this._translations.forEach(d => d.updated = false);
        }
    }
    hasMoved() {
        if (this._cacheXDirty || this._cacheYDirty)
            return true;
        let newX = this._calculateOffsetX();
        let newY = this._calculateOffsetY();
        return newX !== this._cachedX || newY !== this._cachedY;
    }
    hasMovedAutoUpdate() {
        if (this._cacheXDirty || this._cacheYDirty)
            return true;
        let oldX = this._cachedX;
        let oldY = this._cachedY;
        this._cachedX = this._calculateOffsetX();
        this._cachedY = this._calculateOffsetY();
        return oldX !== this._cachedX || oldY !== this._cachedY;
    }
    destroy() {
        for (let i = 0, len = this._translations.length; i < len; i++)
            this._translations[i].destroy();
    }
    _onChange() {
        if (this.transform)
            this.transform.recalculate();
    }
    _calculateOffsetX() {
        let x = 0;
        for (let i = 0; i < this._translations.length; i++)
            if (this.transform)
                x += this._translations[i].getOffsetXTopLeft(this.transform.bounds);
        if ((this.transform) && (this.transform.parent) && (this.transform.parent.hasPosition()))
            x += this.transform.parent.position.x();
        return x;
    }
    _calculateOffsetY() {
        let y = 0;
        for (let i = 0; i < this._translations.length; i++)
            if (this.transform)
                y += this._translations[i].getOffsetYTopLeft(this.transform.bounds);
        if ((this.transform) && (this.transform.parent) && (this.transform.parent.hasPosition()))
            y += this.transform.parent.position.y();
        return y;
    }
}


/***/ }),

/***/ "./src/engine/transform/dimension/Dimension.ts":
/*!*****************************************************!*\
  !*** ./src/engine/transform/dimension/Dimension.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dimension; });
class Dimension {
    constructor(width, height) {
        this._updated = false;
        this._width = width;
        this._height = height;
    }
    get updated() { return this._updated; }
    set updated(val) { this._updated = val; }
    markAsUpdated() { this._updated = true; }
    get width() { return this._width; }
    set width(val) {
        if (val !== this.width)
            this.updated = true;
        this._width = val;
    }
    get height() { return this._height; }
    set height(val) {
        if (val !== this._height)
            this.updated = true;
        this._height = val;
    }
    pixelWidth(bounds) { return this._width; }
    pixelHeight(bounds) { return this._height; }
    physicalPixelWidth(bounds) { return this.pixelWidth(bounds) * bounds.devicePixelRatio; }
    physicalPixelHeight(bounds) { return this.pixelHeight(bounds) * bounds.devicePixelRatio; }
    get aspect() { return this.height / this.width; }
    destroy() { }
    static add(a, b) {
        return new Dimension(a.width + b.width, a.height + b.height);
    }
    static equals(a, b) {
        return (a.width === b.width) && (a.height === b.height);
    }
}


/***/ }),

/***/ "./src/engine/transform/dimension/PixelDimension.ts":
/*!**********************************************************!*\
  !*** ./src/engine/transform/dimension/PixelDimension.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixelDimension; });
/* harmony import */ var _Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dimension */ "./src/engine/transform/dimension/Dimension.ts");

class PixelDimension extends _Dimension__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/engine/transform/dimension/ProportionalDimension.ts":
/*!*****************************************************************!*\
  !*** ./src/engine/transform/dimension/ProportionalDimension.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProportionalDimension; });
/* harmony import */ var _Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dimension */ "./src/engine/transform/dimension/Dimension.ts");

class ProportionalDimension extends _Dimension__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, referenceBounds) {
        super(width, height);
        if (referenceBounds) {
            this._referenceBounds = referenceBounds;
            this._referenceBounds.onResize.push(this.markAsUpdated.bind(this), this);
        }
    }
    pixelWidth(bounds) {
        if (this._referenceBounds) {
            if (this._referenceBounds.calculating)
                return this.width * this._referenceBounds.cachedWidth;
            else
                return this.width * this._referenceBounds.width();
        }
        else if (bounds)
            return this.width * bounds.width();
        return 0;
    }
    pixelHeight(bounds) {
        if (this._referenceBounds) {
            if (this._referenceBounds.calculating)
                return this.height * this._referenceBounds.cachedHeight;
            else
                return this.height * this._referenceBounds.height();
        }
        else if (bounds)
            return this.height * bounds.height();
        return 0;
    }
    destroy() {
        if (this._referenceBounds)
            this._referenceBounds.onResize.unregister(this);
    }
}


/***/ }),

/***/ "./src/engine/transform/translation/ConditionalTranslation.ts":
/*!********************************************************************!*\
  !*** ./src/engine/transform/translation/ConditionalTranslation.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionalTranslation; });
/* harmony import */ var _Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation */ "./src/engine/transform/translation/Translation.ts");
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");


class ConditionalTranslation extends _Translation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(conditionalFunction, anchor) {
        if (anchor instanceof _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            super(0, 0, anchor);
        }
        else if (typeof anchor === "boolean") {
            super(0, 0);
        }
        else
            super(0, 0);
        this._conditionalFunction = conditionalFunction;
        this.updateSpecial = true;
    }
    get previousAbsolutePosition() {
        return this._previousAbsolutePosition;
    }
    getOffsetX(bounds) {
        return this.absolutePosition(bounds).x;
    }
    getOffsetY(bounds) {
        return this.absolutePosition(bounds).y;
    }
    absolutePosition(bounds) {
        let width = undefined;
        let height = undefined;
        if (bounds.parentBounds) {
            width = bounds.parentBounds.width();
            height = bounds.parentBounds.height();
        }
        this._previousAbsolutePosition = this._conditionalFunction(bounds.transform, width, height);
        return this._previousAbsolutePosition;
    }
    absolutePositionDontUpdatePrevious(bounds) {
        return this._conditionalFunction(bounds.transform, bounds.parentBounds.width(), bounds.parentBounds.height());
    }
}


/***/ }),

/***/ "./src/engine/transform/translation/PixelTranslation.ts":
/*!**************************************************************!*\
  !*** ./src/engine/transform/translation/PixelTranslation.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixelTranslation; });
/* harmony import */ var _Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation */ "./src/engine/transform/translation/Translation.ts");

class PixelTranslation extends _Translation__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/engine/transform/translation/ProportionalTranslation.ts":
/*!*********************************************************************!*\
  !*** ./src/engine/transform/translation/ProportionalTranslation.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProportionalTranslation; });
/* harmony import */ var _Translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation */ "./src/engine/transform/translation/Translation.ts");
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");
/* harmony import */ var _Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Bounds */ "./src/engine/transform/Bounds.ts");



class ProportionalTranslation extends _Translation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, anchor, referenceBounds) {
        if (x instanceof _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            if (y instanceof _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                super(x, y);
                if (anchor instanceof _Bounds__WEBPACK_IMPORTED_MODULE_2__["default"])
                    this._referenceBounds = anchor;
            }
            else {
                super(x);
                if (y instanceof _Bounds__WEBPACK_IMPORTED_MODULE_2__["default"])
                    this._referenceBounds = y;
            }
        }
        else if ((typeof (x) === "number") && (typeof (y) === "number")) {
            if (anchor instanceof _util_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                super(x, y, anchor);
                if (referenceBounds)
                    this._referenceBounds = referenceBounds;
            }
            else {
                super(x, y);
                if (anchor instanceof _Bounds__WEBPACK_IMPORTED_MODULE_2__["default"])
                    this._referenceBounds = anchor;
            }
        }
        if (this._referenceBounds)
            this._referenceBounds.onResize.push(this.markAsUpdated.bind(this), this);
    }
    get referenceBounds() { return this._referenceBounds; }
    getOffsetX(bounds) {
        let width = 0;
        if (this._referenceBounds)
            width = this._referenceBounds.width();
        else if (bounds.parentBounds)
            width = bounds.parentBounds.width();
        return this.innerX * width;
    }
    getOffsetY(bounds) {
        let height = 0;
        if (this._referenceBounds)
            height = this._referenceBounds.height();
        else if (bounds.parentBounds)
            height = bounds.parentBounds.height();
        return this.innerY * height;
    }
    destroy() {
        if (this._referenceBounds)
            this._referenceBounds.onResize.unregister(this);
    }
}


/***/ }),

/***/ "./src/engine/transform/translation/Translation.ts":
/*!*********************************************************!*\
  !*** ./src/engine/transform/translation/Translation.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Translation; });
/* harmony import */ var _util_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/Point */ "./src/engine/util/Point.ts");

class Translation {
    constructor(x, y, anchor) {
        this._x = 0;
        this._y = 0;
        this._anchorX = 0;
        this._anchorY = 0;
        this._updated = false;
        if (x instanceof _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this._x = x.x;
            this._y = x.y;
            if (y instanceof _util_Point__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                this.anchorX = y.x;
                this.anchorY = y.y;
            }
        }
        else {
            if ((typeof (x) === "number") && (typeof (y) === "number")) {
                this._x = x;
                this._y = y;
            }
            if (anchor) {
                this.anchorX = anchor.x;
                this.anchorY = anchor.y;
            }
        }
    }
    get updated() { return this._updated; }
    set updated(val) { this._updated = val; }
    markAsUpdated() { this._updated = true; }
    get innerX() { return this._x; }
    set innerX(val) {
        if (val !== this._x) {
            this._x = val;
            this._updated = true;
        }
    }
    get innerY() { return this._y; }
    set innerY(val) {
        if (val !== this._y) {
            this._y = val;
            this._updated = true;
        }
    }
    getOffsetX(bounds) { return this._x; }
    getOffsetY(bounds) { return this._y; }
    getAnchorOffsetX(bounds) { return bounds.width() * this._anchorX; }
    getAnchorOffsetY(bounds) { return bounds.height() * this._anchorY; }
    getOffsetXTopLeft(bounds) { return this.getOffsetX(bounds) - this.getAnchorOffsetX(bounds); }
    getOffsetYTopLeft(bounds) { return this.getOffsetY(bounds) - this.getAnchorOffsetY(bounds); }
    get anchorX() { return this._anchorX; }
    get anchorY() { return this._anchorY; }
    set anchorX(val) {
        if (val !== this._anchorX)
            this._updated = true;
        this._anchorX = val;
    }
    set anchorY(val) {
        if (val !== this._anchorY)
            this._updated = true;
        this._anchorY = val;
    }
    destroy() { }
}


/***/ }),

/***/ "./src/engine/util/Event.ts":
/*!**********************************!*\
  !*** ./src/engine/util/Event.ts ***!
  \**********************************/
/*! exports provided: Pair, DuplicateMap, Event0, Event1, Event2, Event3, Event4, Event5, Event6, MouseEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pair", function() { return Pair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateMap", function() { return DuplicateMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event0", function() { return Event0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event1", function() { return Event1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event2", function() { return Event2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event3", function() { return Event3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event4", function() { return Event4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event5", function() { return Event5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event6", function() { return Event6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseEvent", function() { return MouseEvent; });
class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class DuplicateMap {
    constructor() {
        this.entries = [];
    }
    get length() { return this.entries.length; }
    push(key, value) { this.entries.push(new Pair(key, value)); }
    delete(key, value) {
        let newEntries = [];
        this.entries.forEach(x => {
            if (x.key !== key)
                newEntries.push(x);
            else if ((value) && (x.value !== value))
                newEntries.push(x);
        });
        this.entries = newEntries;
    }
    deleteValue(value) {
        let newEntries = [];
        this.entries.forEach(x => {
            if (x.value !== value)
                newEntries.push(x);
        });
        this.entries = newEntries;
    }
    clear() {
        this.entries = [];
    }
    forEach(callbackfn) {
        this.entries.forEach(callbackfn);
    }
}
class Event {
    constructor() {
        this._callbacks = new DuplicateMap();
    }
    call(...args) {
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            this._callbacks.entries[i].value(...args);
    }
    push(callback, creator) {
        this._callbacks.push(creator, callback);
        return this;
    }
    unregister(creator) {
        this._callbacks.delete(creator);
    }
    remove(callback) {
        this._callbacks.deleteValue(callback);
    }
    removeAll() {
        this._callbacks.clear();
    }
    get length() { return this._callbacks.length; }
    clone() {
        let c = Object.getPrototypeOf(this).constructor;
        let a = new c();
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            a.push(this._callbacks.entries[i].value, this._callbacks.entries[i].key);
        return a;
    }
    static link(source, dest, creator) {
        if (source && dest)
            source.push(dest.call.bind(dest), creator);
    }
}
class Event0 extends Event {
    call() {
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            this._callbacks.entries[i].value();
    }
    push(callback, creator) {
        return super.push(callback, creator);
    }
}
class Event1 extends Event {
    call(arg1) {
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            this._callbacks.entries[i].value(arg1);
    }
    push(callback, creator) {
        return super.push(callback, creator);
    }
}
class Event2 extends Event {
    call(arg1, arg2) {
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            this._callbacks.entries[i].value(arg1, arg2);
    }
    push(callback, creator) {
        return super.push(callback, creator);
    }
}
class Event3 extends Event {
    call(arg1, arg2, arg3) {
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            this._callbacks.entries[i].value(arg1, arg2, arg3);
    }
    push(callback, creator) {
        return super.push(callback, creator);
    }
}
class Event4 extends Event {
    call(arg1, arg2, arg3, arg4) {
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            this._callbacks.entries[i].value(arg1, arg2, arg3, arg4);
    }
    push(callback, creator) {
        return super.push(callback, creator);
    }
}
class Event5 extends Event {
    call(arg1, arg2, arg3, arg4, arg5) {
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            this._callbacks.entries[i].value(arg1, arg2, arg3, arg4, arg5);
    }
    push(callback, creator) {
        return super.push(callback, creator);
    }
}
class Event6 extends Event {
    call(arg1, arg2, arg3, arg4, arg5, arg6) {
        for (let i = 0, len = this._callbacks.entries.length; i < len; i++)
            this._callbacks.entries[i].value(arg1, arg2, arg3, arg4, arg5, arg6);
    }
    push(callback, creator) {
        return super.push(callback, creator);
    }
}
class MouseEvent extends Event2 {
    call(mouse, pointer) {
        super.call(mouse, pointer);
    }
    push(callback, creator) {
        return super.push(callback, creator);
    }
}


/***/ }),

/***/ "./src/engine/util/Point.ts":
/*!**********************************!*\
  !*** ./src/engine/util/Point.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
class Point {
    constructor(x, y) {
        this._x = x || 0;
        this._y = y || 0;
    }
    get x() { return this._x; }
    get y() { return this._y; }
    get magnitude() { return Math.sqrt(this._x * this._x + this._y * this._y); }
    get isZero() { return (this.x === 0) && (this.y === 0); }
    static add(a, b) {
        let x = a.x + b.x;
        let y = a.y + b.y;
        return new Point(x, y);
    }
    static minus(a, b) {
        if (!b) {
            return this.minus(new Point(0, 0), a);
        }
        let x = a.x - b.x;
        let y = a.y - b.y;
        return new Point(x, y);
    }
    static multiply(p, s) {
        if (s instanceof Point)
            return new Point(p.x * s.x, p.y * s.y);
        else
            return new Point(p.x * s, p.y * s);
    }
    static dotProduct(a, b) {
        return (a.x * b.x + a.y * b.y);
    }
    static divide(p, s) {
        let x = p.x / s;
        let y = p.y / s;
        return new Point(x, y);
    }
    static crossProduct(p, s) {
        return p.x * s.y - p.y * s.x;
    }
    static equals(a, b) {
        return ((a.x === b.x) && (a.y === b.y));
    }
    static distance(a, b) {
        let x = a.x - b.x;
        let y = a.y - b.y;
        return Math.sqrt(x * x + y * y);
    }
    rotate(angle) {
        let x = Math.cos(angle) * this._x + -Math.sin(angle) * this._y;
        let y = Math.sin(angle) * this._x + Math.cos(angle) * this._y;
        return new Point(x, y);
    }
    closestPoint(points) {
        let smallestDistance = undefined;
        let winner;
        points.forEach(p => {
            let d = Point.minus(p, this).magnitude;
            if ((smallestDistance === undefined) || (d < smallestDistance)) {
                smallestDistance = d;
                winner = p;
            }
        });
        return winner;
    }
    get normalised() {
        return Point.divide(this, this.magnitude);
    }
    static angleBetween(a, b) {
        return Math.atan2(b.y, b.x) - Math.atan2(a.y, a.x);
    }
    projectionIn(vector) {
        return Point.dotProduct(this, vector.normalised);
    }
    static angleToUnitVector(angle) {
        return new Point(Math.cos(angle), Math.sin(angle));
    }
    asAngle() {
        return Math.atan2(this.x, this.y);
    }
}


/***/ }),

/***/ "./src/engine/util/Util.ts":
/*!*********************************!*\
  !*** ./src/engine/util/Util.ts ***!
  \*********************************/
/*! exports provided: GCRemoveElement, GCSwapElements, getArgumentsFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GCRemoveElement", function() { return GCRemoveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GCSwapElements", function() { return GCSwapElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArgumentsFromString", function() { return getArgumentsFromString; });
function GCRemoveElement(array, indexA) {
    GCSwapElements(array, indexA, array.length - 1);
    array.length = array.length - 1;
}
function GCSwapElements(array, indexA, indexB) {
    var tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
}
function getArgumentsFromString(search) {
    let tmp = [];
    let pairs = new Map();
    search
        .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        pairs.set(decodeURIComponent(tmp[0]), decodeURIComponent(tmp[1]));
    });
    return pairs;
}


/***/ }),

/***/ "./src/launcherOptions.ts":
/*!********************************!*\
  !*** ./src/launcherOptions.ts ***!
  \********************************/
/*! exports provided: launcherOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launcherOptions", function() { return a; });
/* harmony import */ var _view_gameLauncherOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/gameLauncherOptions */ "./src/view/gameLauncherOptions.ts");
/* harmony import */ var editor_launcherOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! editor/launcherOptions */ "./src/editor/launcherOptions.ts");


let a = Object(editor_launcherOptions__WEBPACK_IMPORTED_MODULE_1__["wrapLauncherOptionsForEditor"])(_view_gameLauncherOptions__WEBPACK_IMPORTED_MODULE_0__["launcherOptions"]);



/***/ }),

/***/ "./src/view/AgentDraw.ts":
/*!*******************************!*\
  !*** ./src/view/AgentDraw.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgentDraw; });
/* harmony import */ var engine_gameobject_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/GameObject */ "./src/engine/gameobject/GameObject.ts");

class AgentDraw extends engine_gameobject_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, data, localData) {
        super(position, bounds);
        this._data = data;
        this._localData = localData;
    }
    draw(camera) {
        let s = this._localData.scale;
        for (let i = 0, len = this._data.agents.length; i < len; i++) {
            camera.context2D.fillStyle = ["red", "green", "blue"][i];
            for (let j = 0, len = this._data.agents[i].length; j < len; j++) {
                let agent = this._data.agents[i][j];
                camera.context2D.save();
                let x = agent.x * s;
                let y = agent.y * s;
                camera.context2D.translate(x, y);
                camera.context2D.rotate(agent.rotation);
                camera.context2D.translate(-x, -y);
                camera.context2D.fillRect(x - (agent.collideRadius / 2) * s, y - (agent.collideRadius / 2) * s, agent.collideRadius * s, agent.collideRadius * s);
                camera.context2D.restore();
            }
        }
    }
}


/***/ }),

/***/ "./src/view/GameCamera.ts":
/*!********************************!*\
  !*** ./src/view/GameCamera.ts ***!
  \********************************/
/*! exports provided: GameCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCamera", function() { return GameCamera; });
/* harmony import */ var engine_gameobject_context2d_Context2DCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/context2d/Context2DCamera */ "./src/engine/gameobject/context2d/Context2DCamera.ts");
/* harmony import */ var engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/gameobject/input/KeyTrigger */ "./src/engine/gameobject/input/KeyTrigger.ts");
/* harmony import */ var engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/translation/PixelTranslation */ "./src/engine/transform/translation/PixelTranslation.ts");



class GameCamera extends engine_gameobject_context2d_Context2DCamera__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds) {
        super(position, bounds);
        this._pos = position.addTranslation(new engine_transform_translation_PixelTranslation__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0));
    }
    create(timing) {
        let kt = this.addChild(new engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["default"]());
        kt.getKeyEvent("RightArrow", engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["KeyTriggerEvents"].onKeyIsDown).push(this._move.bind(this, 1, 0, timing));
        kt.getKeyEvent("LeftArrow", engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["KeyTriggerEvents"].onKeyIsDown).push(this._move.bind(this, -1, 0, timing));
        kt.getKeyEvent("UpArrow", engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["KeyTriggerEvents"].onKeyIsDown).push(this._move.bind(this, 0, -1, timing));
        kt.getKeyEvent("DownArrow", engine_gameobject_input_KeyTrigger__WEBPACK_IMPORTED_MODULE_1__["KeyTriggerEvents"].onKeyIsDown).push(this._move.bind(this, 0, 1, timing));
    }
    _move(x, y, timing) {
        let width = this.parent.transform.bounds.width() - this.transform.bounds.width();
        let height = this.parent.transform.bounds.height() - this.transform.bounds.height();
        this._pos.innerX = Math.max(0, Math.min(this._pos.innerX + x * timing.deltaSeconds, width));
        this._pos.innerY = Math.max(0, Math.min(this._pos.innerY + y * timing.deltaSeconds, height));
    }
}


/***/ }),

/***/ "./src/view/GameRoot.ts":
/*!******************************!*\
  !*** ./src/view/GameRoot.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameRoot; });
/* harmony import */ var engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/context2d/DrawBuffer */ "./src/engine/gameobject/context2d/DrawBuffer.ts");
/* harmony import */ var engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/Position */ "./src/engine/transform/Position.ts");
/* harmony import */ var engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/transform/Bounds */ "./src/engine/transform/Bounds.ts");
/* harmony import */ var _WorldDraw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorldDraw */ "./src/view/WorldDraw.ts");
/* harmony import */ var _AgentDraw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AgentDraw */ "./src/view/AgentDraw.ts");
/* harmony import */ var _LocalData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalData */ "./src/view/LocalData.ts");
/* harmony import */ var _GameCamera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameCamera */ "./src/view/GameCamera.ts");
/* harmony import */ var engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! engine/transform/dimension/ProportionalDimension */ "./src/engine/transform/dimension/ProportionalDimension.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");









class GameRoot extends engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.typeName = "GameRoot";
    }
    create(timing, environment, inputDevices) {
        super.create(timing, environment, inputDevices);
        this._scenario = window["FBScenario"];
        this._scenario.create();
        if (!this._scenario)
            throw new Error("No scenario detected in environment. Ensure scenario script has loaded.");
        this._localData = new _LocalData__WEBPACK_IMPORTED_MODULE_5__["LocalData"]();
        let world = this.addChild(new engine_gameobject_context2d_DrawBuffer__WEBPACK_IMPORTED_MODULE_0__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill));
        let map = world.addChild(new _WorldDraw__WEBPACK_IMPORTED_MODULE_3__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_8__["default"](this._scenario.data.map.length * this._localData.scale, this._scenario.data.map.length[0] * this._localData.scale)), this._scenario.data, this._localData));
        world.addChild(new _AgentDraw__WEBPACK_IMPORTED_MODULE_4__["default"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"].fill, this._scenario.data, this._localData));
        let camera = map.addChild(new _GameCamera__WEBPACK_IMPORTED_MODULE_6__["GameCamera"](new engine_transform_Position__WEBPACK_IMPORTED_MODULE_1__["default"](), new engine_transform_Bounds__WEBPACK_IMPORTED_MODULE_2__["default"](new engine_transform_dimension_ProportionalDimension__WEBPACK_IMPORTED_MODULE_7__["default"](1, 1, this.transform.bounds))));
        world.addCamera(camera);
        world.mainCamera = camera;
        this._world = world;
    }
    update(timing) {
        this._scenario.update(timing.deltaSeconds);
        this._world.requestDraw();
    }
}


/***/ }),

/***/ "./src/view/LocalData.ts":
/*!*******************************!*\
  !*** ./src/view/LocalData.ts ***!
  \*******************************/
/*! exports provided: LocalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalData", function() { return LocalData; });
class LocalData {
    constructor() {
        this.scale = 64;
    }
}


/***/ }),

/***/ "./src/view/WorldDraw.ts":
/*!*******************************!*\
  !*** ./src/view/WorldDraw.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorldDraw; });
/* harmony import */ var engine_gameobject_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/gameobject/GameObject */ "./src/engine/gameobject/GameObject.ts");

class WorldDraw extends engine_gameobject_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position, bounds, data, localData) {
        super(position, bounds);
        this._data = data;
        this._localData = localData;
    }
    draw(camera) {
        for (let i = 0, len = this._data.influence.length; i < len; i++) {
            for (let j = 0, len = this._data.influence[i].length; j < len; j++) {
                let val = Math.min(this._data.influence[i][j][0], 255).toString(16);
                camera.context2D.fillStyle = "#" + val + val + val;
                camera.context2D.fillRect(i * this._localData.scale, j * this._localData.scale, 1 * this._localData.scale, 1 * this._localData.scale);
            }
        }
    }
}


/***/ }),

/***/ "./src/view/gameLauncherOptions.ts":
/*!*****************************************!*\
  !*** ./src/view/gameLauncherOptions.ts ***!
  \*****************************************/
/*! exports provided: launcherOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launcherOptions", function() { return launcherOptions; });
/* harmony import */ var view_GameRoot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! view/GameRoot */ "./src/view/GameRoot.ts");
/* harmony import */ var engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine/transform/dimension/PixelDimension */ "./src/engine/transform/dimension/PixelDimension.ts");


let launcherOptions = {
    rootGameObjectType: view_GameRoot__WEBPACK_IMPORTED_MODULE_0__["default"],
    minDimension: new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_1__["default"](300, 500),
    maxDimension: new engine_transform_dimension_PixelDimension__WEBPACK_IMPORTED_MODULE_1__["default"](700, undefined),
    backgroundColor: "white",
    hasAlphaChannel: false,
    usesMouse: true,
    usesKeyboard: true,
    addExtraInputDevices: (inputDeviceGroup) => { },
    gameTarget: "gameTarget",
    windowVariableName: undefined,
    args: {}
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvRWRpdG9yVGltaW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2xhdW5jaGVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL0Fzc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvQXNzZXRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9FbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9NYWluTG9vcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL1RpbWluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVvYmplY3QvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVvYmplY3QvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVvYmplY3QvY29udGV4dDJkL0NvbnRleHQyRENhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVvYmplY3QvY29udGV4dDJkL0RyYXdCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lb2JqZWN0L2NvbnRleHQyZC9UZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZW9iamVjdC9jb250ZXh0MmQvVGV4dEJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lb2JqZWN0L2NvbnRleHQyZC9zaGFwZS9SZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZW9iamVjdC9jb250ZXh0MmQvc2hhcGUvUm91bmRlZFJlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lb2JqZWN0L2NvbnRleHQyZC9zaGFwZS9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVvYmplY3QvaW5wdXQvQXN5bmNDbGlja1RyaWdnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lb2JqZWN0L2lucHV0L0NsaWNrVHJpZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVvYmplY3QvaW5wdXQvS2V5VHJpZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVvYmplY3QvaW5wdXQvTW91c2VUcmlnZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZW9iamVjdC91aS9Bc3luY0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWVvYmplY3QvdWkvQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZW9iamVjdC91aS9EZWJ1Z1BhbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dC9JbnB1dERldmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0L0lucHV0RGV2aWNlR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dC9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0L01vdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXQvUG9pbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2xhdW5jaGVyL0xhdW5jaGVyRmFjdG9yaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbGF1bmNoZXIvY3JlYXRlR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2xhdW5jaGVyL2xhdW5jaFNjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3N0eWxlL1RleHRTdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RyYW5zZm9ybS9Cb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90cmFuc2Zvcm0vUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90cmFuc2Zvcm0vZGltZW5zaW9uL0RpbWVuc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RyYW5zZm9ybS9kaW1lbnNpb24vUGl4ZWxEaW1lbnNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90cmFuc2Zvcm0vZGltZW5zaW9uL1Byb3BvcnRpb25hbERpbWVuc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RyYW5zZm9ybS90cmFuc2xhdGlvbi9Db25kaXRpb25hbFRyYW5zbGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdHJhbnNmb3JtL3RyYW5zbGF0aW9uL1BpeGVsVHJhbnNsYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90cmFuc2Zvcm0vdHJhbnNsYXRpb24vUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90cmFuc2Zvcm0vdHJhbnNsYXRpb24vVHJhbnNsYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS91dGlsL0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdXRpbC9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3V0aWwvVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF1bmNoZXJPcHRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L0FnZW50RHJhdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9HYW1lQ2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L0dhbWVSb290LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3L0xvY2FsRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9Xb3JsZERyYXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZ2FtZUxhdW5jaGVyT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUZBQWlGLGdCQUFnQixzRkFBc0YsY0FBYyxzR0FBc0csbURBQW1ELElBQUkseURBQXlELHdIQUF3SCxHQUFHLGNBQWMscUNBQXFDLDBDQUEwQywrQ0FBK0Msc0NBQXNDLHNDQUFzQyxzQ0FBc0Msc0NBQXNDLFVBQVUscUNBQXFDLHFCQUFxQixrQkFBa0IsWUFBWSxXQUFXLGdCQUFnQixlQUFlLEVBQUUscUNBQXFDLHFCQUFxQixrQkFBa0IsWUFBWSxXQUFXLGdCQUFnQixlQUFlO0FBQzFrQyxxQ0FBcUMscUJBQXFCLGtCQUFrQixZQUFZ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LEVBQUUsQ0FBWTtRQUV0QyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUNkO1lBQ0ksRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQ2Q7WUFDSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNwQixFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNkLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUs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QUV6QixJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFDNUU7WUFDSSxJQUFJLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsRUFDdEI7Z0JBQ0ksSUFBSSxlQUFlLEdBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2pFO1lBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUM3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3BELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1B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QUUsS0FBZSxFQUFFLElBQWEsRUFBRSxNQUFlO1FBRTFKLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0QixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDcEYsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMzQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFF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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHL0YsTUFBTSxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksNEVBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLG1EQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHaEcsTUFBTSxLQUFLLFdBQVcsS0FBSyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksNEVBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLG1EQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHckcsTUFBTSxLQUFLLFlBQVksS0FBSyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksNEVBQXVCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLG1EQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHMUcsTUFBTSxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksNEVBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLG1EQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHeEcsTUFBTSxLQUFLLE9BQU8sS0FBSyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksNEVBQXVCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLG1EQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHckcsTUFBTSxLQUFLLE9BQU8sS0FBSyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksNEVBQXVCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLG1EQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFH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b0I7SUFDbkMsa0JBQWtCLEVBQUUscURBQVE7SUFDNUIsWUFBWSxFQUFFLElBQUksaUZBQWMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0lBQ3pDLFlBQVksRUFBRSxJQUFJLGlGQUFjLENBQUMsR0FBRyxFQUFDLFNBQVMsQ0FBQztJQUMvQyxlQUFlLEVBQUUsT0FBTztJQUN4QixlQUFlLEVBQUUsS0FBSztJQUN0QixTQUFTLEVBQUUsSUFBSTtJQUNmLFlBQVksRUFBRSxJQUFJO0lBQ2xCLG9CQUFvQixFQUFFLENBQUMsZ0JBQWtDLEVBQUUsRUFBRSxHQUFFLENBQUM7SUFDaEUsVUFBVSxFQUFFLFlBQVk7SUFDeEIsa0JBQWtCLEVBQUUsU0FBUztJQUM3QixJQUFJLEVBQUUsRUFBRztDQUNaO0FBRXlCIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbmdpbmUvbGF1bmNoZXIvbGF1bmNoU2NyaXB0LnRzXCIpO1xuIiwiLyogRm9udCBGYWNlIE9ic2VydmVyIHYyLjEuMCAtIMKpIEJyYW0gU3RlaW4uIExpY2Vuc2U6IEJTRC0zLUNsYXVzZSAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGwoYSxiKXtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGIsITEpOmEuYXR0YWNoRXZlbnQoXCJzY3JvbGxcIixiKX1mdW5jdGlvbiBtKGEpe2RvY3VtZW50LmJvZHk/YSgpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBjKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixjKTthKCl9KTpkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uIGsoKXtpZihcImludGVyYWN0aXZlXCI9PWRvY3VtZW50LnJlYWR5U3RhdGV8fFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlkb2N1bWVudC5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLGspLGEoKX0pfTtmdW5jdGlvbiB0KGEpe3RoaXMuYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RoaXMuYS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt0aGlzLmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO3RoaXMuYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5oPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmc9LTE7dGhpcy5iLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmMuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO1xudGhpcy5mLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OnNjcm9sbDtmb250LXNpemU6MTZweDtcIjt0aGlzLmguc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCU7Zm9udC1zaXplOjE2cHg7bWF4LXdpZHRoOm5vbmU7XCI7dGhpcy5iLmFwcGVuZENoaWxkKHRoaXMuaCk7dGhpcy5jLmFwcGVuZENoaWxkKHRoaXMuZik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYik7dGhpcy5hLmFwcGVuZENoaWxkKHRoaXMuYyl9XG5mdW5jdGlvbiB1KGEsYil7YS5hLnN0eWxlLmNzc1RleHQ9XCJtYXgtd2lkdGg6bm9uZTttaW4td2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87bWFyZ2luOjA7cGFkZGluZzowO3RvcDotOTk5cHg7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtc3ludGhlc2lzOm5vbmU7Zm9udDpcIitiK1wiO1wifWZ1bmN0aW9uIHooYSl7dmFyIGI9YS5hLm9mZnNldFdpZHRoLGM9YisxMDA7YS5mLnN0eWxlLndpZHRoPWMrXCJweFwiO2EuYy5zY3JvbGxMZWZ0PWM7YS5iLnNjcm9sbExlZnQ9YS5iLnNjcm9sbFdpZHRoKzEwMDtyZXR1cm4gYS5nIT09Yj8oYS5nPWIsITApOiExfWZ1bmN0aW9uIEEoYSxiKXtmdW5jdGlvbiBjKCl7dmFyIGE9azt6KGEpJiZhLmEucGFyZW50Tm9kZSYmYihhLmcpfXZhciBrPWE7bChhLmIsYyk7bChhLmMsYyk7eihhKX07ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWJ8fHt9O3RoaXMuZmFtaWx5PWE7dGhpcy5zdHlsZT1jLnN0eWxlfHxcIm5vcm1hbFwiO3RoaXMud2VpZ2h0PWMud2VpZ2h0fHxcIm5vcm1hbFwiO3RoaXMuc3RyZXRjaD1jLnN0cmV0Y2h8fFwibm9ybWFsXCJ9dmFyIEM9bnVsbCxEPW51bGwsRT1udWxsLEY9bnVsbDtmdW5jdGlvbiBHKCl7aWYobnVsbD09PUQpaWYoSigpJiYvQXBwbGUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpKXt2YXIgYT0vQXBwbGVXZWJLaXRcXC8oWzAtOV0rKSg/OlxcLihbMC05XSspKSg/OlxcLihbMC05XSspKS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7RD0hIWEmJjYwMz5wYXJzZUludChhWzFdLDEwKX1lbHNlIEQ9ITE7cmV0dXJuIER9ZnVuY3Rpb24gSigpe251bGw9PT1GJiYoRj0hIWRvY3VtZW50LmZvbnRzKTtyZXR1cm4gRn1cbmZ1bmN0aW9uIEsoKXtpZihudWxsPT09RSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7YS5zdHlsZS5mb250PVwiY29uZGVuc2VkIDEwMHB4IHNhbnMtc2VyaWZcIn1jYXRjaChiKXt9RT1cIlwiIT09YS5zdHlsZS5mb250fXJldHVybiBFfWZ1bmN0aW9uIEwoYSxiKXtyZXR1cm5bYS5zdHlsZSxhLndlaWdodCxLKCk/YS5zdHJldGNoOlwiXCIsXCIxMDBweFwiLGJdLmpvaW4oXCIgXCIpfVxuQi5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsaz1hfHxcIkJFU2Jzd3lcIixyPTAsbj1ifHwzRTMsSD0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtpZihKKCkmJiFHKCkpe3ZhciBNPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gZSgpeyhuZXcgRGF0ZSkuZ2V0VGltZSgpLUg+PW4/YihFcnJvcihcIlwiK24rXCJtcyB0aW1lb3V0IGV4Y2VlZGVkXCIpKTpkb2N1bWVudC5mb250cy5sb2FkKEwoYywnXCInK2MuZmFtaWx5KydcIicpLGspLnRoZW4oZnVuY3Rpb24oYyl7MTw9Yy5sZW5ndGg/YSgpOnNldFRpbWVvdXQoZSwyNSl9LGIpfWUoKX0pLE49bmV3IFByb21pc2UoZnVuY3Rpb24oYSxjKXtyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjKEVycm9yKFwiXCIrbitcIm1zIHRpbWVvdXQgZXhjZWVkZWRcIikpfSxuKX0pO1Byb21pc2UucmFjZShbTixNXSkudGhlbihmdW5jdGlvbigpe2NsZWFyVGltZW91dChyKTthKGMpfSxcbmIpfWVsc2UgbShmdW5jdGlvbigpe2Z1bmN0aW9uIHYoKXt2YXIgYjtpZihiPS0xIT1mJiYtMSE9Z3x8LTEhPWYmJi0xIT1ofHwtMSE9ZyYmLTEhPWgpKGI9ZiE9ZyYmZiE9aCYmZyE9aCl8fChudWxsPT09QyYmKGI9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLEM9ISFiJiYoNTM2PnBhcnNlSW50KGJbMV0sMTApfHw1MzY9PT1wYXJzZUludChiWzFdLDEwKSYmMTE+PXBhcnNlSW50KGJbMl0sMTApKSksYj1DJiYoZj09dyYmZz09dyYmaD09d3x8Zj09eCYmZz09eCYmaD09eHx8Zj09eSYmZz09eSYmaD09eSkpLGI9IWI7YiYmKGQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGNsZWFyVGltZW91dChyKSxhKGMpKX1mdW5jdGlvbiBJKCl7aWYoKG5ldyBEYXRlKS5nZXRUaW1lKCktSD49bilkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxiKEVycm9yKFwiXCIrXG5uK1wibXMgdGltZW91dCBleGNlZWRlZFwiKSk7ZWxzZXt2YXIgYT1kb2N1bWVudC5oaWRkZW47aWYoITA9PT1hfHx2b2lkIDA9PT1hKWY9ZS5hLm9mZnNldFdpZHRoLGc9cC5hLm9mZnNldFdpZHRoLGg9cS5hLm9mZnNldFdpZHRoLHYoKTtyPXNldFRpbWVvdXQoSSw1MCl9fXZhciBlPW5ldyB0KGspLHA9bmV3IHQoaykscT1uZXcgdChrKSxmPS0xLGc9LTEsaD0tMSx3PS0xLHg9LTEseT0tMSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZC5kaXI9XCJsdHJcIjt1KGUsTChjLFwic2Fucy1zZXJpZlwiKSk7dShwLEwoYyxcInNlcmlmXCIpKTt1KHEsTChjLFwibW9ub3NwYWNlXCIpKTtkLmFwcGVuZENoaWxkKGUuYSk7ZC5hcHBlbmRDaGlsZChwLmEpO2QuYXBwZW5kQ2hpbGQocS5hKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO3c9ZS5hLm9mZnNldFdpZHRoO3g9cC5hLm9mZnNldFdpZHRoO3k9cS5hLm9mZnNldFdpZHRoO0koKTtBKGUsZnVuY3Rpb24oYSl7Zj1hO3YoKX0pO3UoZSxcbkwoYywnXCInK2MuZmFtaWx5KydcIixzYW5zLXNlcmlmJykpO0EocCxmdW5jdGlvbihhKXtnPWE7digpfSk7dShwLEwoYywnXCInK2MuZmFtaWx5KydcIixzZXJpZicpKTtBKHEsZnVuY3Rpb24oYSl7aD1hO3YoKX0pO3UocSxMKGMsJ1wiJytjLmZhbWlseSsnXCIsbW9ub3NwYWNlJykpfSl9KX07XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9Qjood2luZG93LkZvbnRGYWNlT2JzZXJ2ZXI9Qix3aW5kb3cuRm9udEZhY2VPYnNlcnZlci5wcm90b3R5cGUubG9hZD1CLnByb3RvdHlwZS5sb2FkKTt9KCkpO1xuIiwiaW1wb3J0IFBvc2l0aW9uIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL1Bvc2l0aW9uXCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL0JvdW5kc1wiO1xuaW1wb3J0IFByb3BvcnRpb25hbERpbWVuc2lvbiBmcm9tIFwiZW5naW5lL3RyYW5zZm9ybS9kaW1lbnNpb24vUHJvcG9ydGlvbmFsRGltZW5zaW9uXCI7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSBcImVuZ2luZS9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IFRpbWluZyBmcm9tIFwiZW5naW5lL1RpbWluZ1wiO1xuaW1wb3J0IERlYnVnUGFuZSBmcm9tIFwiZW5naW5lL2dhbWVvYmplY3QvdWkvRGVidWdQYW5lXCI7XG5pbXBvcnQgQXNzZXRMb2FkZXIgZnJvbSBcImVuZ2luZS9Bc3NldExvYWRlclwiO1xuaW1wb3J0IEVkaXRvclRpbWluZ3MgZnJvbSBcIi4vRWRpdG9yVGltaW5nc1wiO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gXCJlbmdpbmUvaW5wdXQvS2V5Ym9hcmRcIjtcbmltcG9ydCB7IEZpbGxSZWN0IH0gZnJvbSBcImVuZ2luZS9nYW1lb2JqZWN0L2NvbnRleHQyZC9zaGFwZS9SZWN0XCI7XG5pbXBvcnQgS2V5VHJpZ2dlciwgeyBLZXlUcmlnZ2VyRXZlbnRzIH0gZnJvbSBcImVuZ2luZS9nYW1lb2JqZWN0L2lucHV0L0tleVRyaWdnZXJcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcImVuZ2luZS9nYW1lb2JqZWN0L2NvbnRleHQyZC9Db250ZXh0MkRDYW1lcmFcIjtcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgRHJhd0J1ZmZlciBmcm9tIFwiZW5naW5lL2dhbWVvYmplY3QvY29udGV4dDJkL0RyYXdCdWZmZXJcIjtcbmltcG9ydCBCdWZmZXJDbG9uZSBmcm9tIFwiZW5naW5lL2dhbWVvYmplY3QvY29udGV4dDJkL0J1ZmZlckNsb25lXCI7XG5pbXBvcnQgUGl4ZWxEaW1lbnNpb24gZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vZGltZW5zaW9uL1BpeGVsRGltZW5zaW9uXCI7XG5pbXBvcnQgQ2xpY2tUcmlnZ2VyIGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9pbnB1dC9DbGlja1RyaWdnZXJcIjtcbmltcG9ydCBNb3VzZSBmcm9tIFwiZW5naW5lL2lucHV0L01vdXNlXCI7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSBcImVuZ2luZS9pbnB1dC9Qb2ludGVyXCI7XG5pbXBvcnQgUGl4ZWxUcmFuc2xhdGlvbiBmcm9tIFwiZW5naW5lL3RyYW5zZm9ybS90cmFuc2xhdGlvbi9QaXhlbFRyYW5zbGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvcjxUIGV4dGVuZHMgR2FtZU9iamVjdD4gZXh0ZW5kcyBEcmF3QnVmZmVyXG57XG4gICAgcHJvdGVjdGVkIF9nYW1lOiBUO1xuXG4gICAgcmVhZG9ubHkgdHlwZU5hbWU6IHN0cmluZyA9IFwiRWRpdG9yXCI7XG5cbiAgICBwcml2YXRlIF90aW1pbmdzOiBFZGl0b3JUaW1pbmdzID0gbmV3IEVkaXRvclRpbWluZ3MoKTtcbiAgICBwcml2YXRlIF9kZWJ1Z1BhbmU6IERlYnVnUGFuZTtcbiAgICBwcml2YXRlIF91c2VzTW91c2U6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfdXNlc0tleWJvYXJkOiBib29sZWFuO1xuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZSh0aW1pbmc6IFRpbWluZywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBpbnB1dERldmljZXMpXG4gICAge1xuICAgICAgICBzdXBlci5jcmVhdGUodGltaW5nLCBlbnZpcm9ubWVudCwgaW5wdXREZXZpY2VzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChuZXcgRmlsbFJlY3QobmV3IFBvc2l0aW9uKCksIEJvdW5kcy5maWxsLCBcIiMxZTFlMWVcIikpO1xuICAgICAgICBpZiAoZW52aXJvbm1lbnQubGF1bmNoZXJPcHRpb25zLmFyZ3MuZWRpdG9yKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lID0gdGhpcy5hZGRDaGlsZCh0aGlzLl9jcmVhdGVCdWZmZXJlZEdhbWUoZW52aXJvbm1lbnQpKTtcbiAgICAgICAgICAgIHRoaXMuX3VzZXNNb3VzZSA9IGVudmlyb25tZW50LmxhdW5jaGVyT3B0aW9ucy5hcmdzLmVkaXRvci51c2VzTW91c2U7XG4gICAgICAgICAgICB0aGlzLl91c2VzS2V5Ym9hcmQgPSBlbnZpcm9ubWVudC5sYXVuY2hlck9wdGlvbnMuYXJncy5lZGl0b3IudXNlc0tleWJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RlYnVnUGFuZSA9IHRoaXMuYWRkQ2hpbGQobmV3IERlYnVnUGFuZShuZXcgUG9zaXRpb24oKSwgQm91bmRzLmZpbGwpKTtcblxuICAgICAgICBsZXQga3QgPSB0aGlzLmFkZENoaWxkKG5ldyBLZXlUcmlnZ2VyKCkpO1xuICAgICAgICBrdC5nZXRLZXlFdmVudChcIlBhdXNlXCIsIEtleVRyaWdnZXJFdmVudHMub25LZXlOZXdEb3duKS5wdXNoKCgpID0+IFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lLmFjdGl2ZSA9ICF0aGlzLl9nYW1lLmFjdGl2ZTtcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnUGFuZS5hY3RpdmUgPSB0aGlzLl9nYW1lLmFjdGl2ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkb0JlZ2luKHRpbWluZzogVGltaW5nLCBsb2FkZXI6IEFzc2V0TG9hZGVyLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcyk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX3RpbWluZ3Mub25CZWdpblN0YXJ0KCk7XG4gICAgICAgIHN1cGVyLmRvQmVnaW4odGltaW5nLCBsb2FkZXIsIGVudmlyb25tZW50LCBpbnB1dERldmljZXMpO1xuICAgICAgICB0aGlzLl90aW1pbmdzLm9uQmVnaW5FbmQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYmVnaW4odGltaW5nOiBUaW1pbmcsIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgaW5wdXREZXZpY2VzIDoge2tleWJvYXJkOiBLZXlib2FyZH0pXG4gICAge1xuICAgICAgICBzdXBlci5iZWdpbih0aW1pbmcsIGVudmlyb25tZW50LCBpbnB1dERldmljZXMpO1xuICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGFibGUpXG4gICAgICAgICAgICBmb3IgKGxldCBpPTAsbGVuPWlucHV0RGV2aWNlcy5rZXlib2FyZC5rZXlzRG93bi5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBpbnB1dERldmljZXMua2V5Ym9hcmQua2V5c0Rvd25baV07XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCItXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RpbWluZ3Muc2xvd0Rvd24gKz0gMSp0aW1pbmcucmF3RGVsdGFTZWNvbmRzO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCIrXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RpbWluZ3Muc2xvd0Rvd24gPSBNYXRoLm1heCgwLCB0aGlzLl90aW1pbmdzLnNsb3dEb3duLTEqdGltaW5nLnJhd0RlbHRhU2Vjb25kcyk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJbXCIpXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZy5zcGVlZEZhY3RvciA9IE1hdGgubWF4KDAsIHRpbWluZy5zcGVlZEZhY3Rvci0wLjE1KnRpbWluZy5yYXdEZWx0YVNlY29uZHMpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJdXCIpXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZy5zcGVlZEZhY3RvciA9IE1hdGgubWluKDIsIHRpbWluZy5zcGVlZEZhY3RvciswLjE1KnRpbWluZy5yYXdEZWx0YVNlY29uZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLl9kZWJ1Z1BhbmUudXBkYXRlVmFsdWVzKHRoaXMuX3RpbWluZ3MsIHRpbWluZy5mcHMsIHRpbWluZy51cGRhdGVTdGVwcyk7XG4gICAgfVxuXG4gICAgZG9VcGRhdGUodGltaW5nOiBUaW1pbmcpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLl90aW1pbmdzLm9uVXBkYXRlU3RhcnQoKTtcbiAgICAgICAgc3VwZXIuZG9VcGRhdGUodGltaW5nKTtcbiAgICAgICAgdGhpcy5fdGltaW5ncy5vblVwZGF0ZUVuZCgpO1xuICAgIH1cblxuICAgIGRvRHJhdyhjYW1lcmE6IENhbWVyYSk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX3RpbWluZ3Mub25EcmF3U3RhcnQoKTtcbiAgICAgICAgc3VwZXIuZG9EcmF3KGNhbWVyYSk7XG4gICAgICAgIHRoaXMuX3RpbWluZ3Mub25EcmF3RW5kKCk7XG4gICAgfVxuXG4gICAgZG9FbmQodGltaW5nOiBUaW1pbmcpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLl90aW1pbmdzLm9uRW5kU3RhcnQoKTtcbiAgICAgICAgc3VwZXIuZG9FbmQodGltaW5nKTtcbiAgICAgICAgdGhpcy5fdGltaW5ncy5vbkVuZEVuZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NyZWF0ZUJ1ZmZlcmVkR2FtZShlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpOiBUXG4gICAge1xuICAgICAgICBsZXQgZ28gPSBuZXcgZW52aXJvbm1lbnQubGF1bmNoZXJPcHRpb25zLmFyZ3MuZWRpdG9yLnJvb3RHYW1lT2JqZWN0VHlwZShQb3NpdGlvbi5jZW50cmUsIG5ldyBCb3VuZHMobmV3IFByb3BvcnRpb25hbERpbWVuc2lvbigxLDEpKSk7XG4gICAgICAgIGlmIChnbyBpbnN0YW5jZW9mIERyYXdCdWZmZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qbGV0IGNhbVRyYW5zbGF0aW9uID0gbmV3IFBpeGVsVHJhbnNsYXRpb24oMCwwKTtcbiAgICAgICAgICAgIGxldCBzZWNvbmRDYW1lcmEgPSBnby5hZGRDYW1lcmEoZ28uYWRkQ2hpbGQobmV3IENhbWVyYShuZXcgUG9zaXRpb24oY2FtVHJhbnNsYXRpb24pLCBuZXcgQm91bmRzKG5ldyBQaXhlbERpbWVuc2lvbigyMDAsMjAwKSkpKSk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKG5ldyBCdWZmZXJDbG9uZShQb3NpdGlvbi5yaWdodCwgbmV3IEJvdW5kcyhuZXcgUGl4ZWxEaW1lbnNpb24oMzAwLDMwMCkpLCBzZWNvbmRDYW1lcmEpKTtcbiAgICAgICAgICAgIGxldCBjdCA9IGdvLmFkZENoaWxkKG5ldyBDbGlja1RyaWdnZXIobmV3IFBvc2l0aW9uKCksIEJvdW5kcy5maWxsKSk7XG4gICAgICAgICAgICBjdC5vbkNsaWNrLnB1c2goKG1vdXNlOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcikgPT4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FtVHJhbnNsYXRpb24uaW5uZXJYID0gcG9pbnRlci54IC0gZ28udHJhbnNmb3JtLnBvc2l0aW9uLngoKSAtIHNlY29uZENhbWVyYS50cmFuc2Zvcm0uYm91bmRzLndpZHRoKCkvMjtcbiAgICAgICAgICAgICAgICBjYW1UcmFuc2xhdGlvbi5pbm5lclkgPSBwb2ludGVyLnkgLSBnby50cmFuc2Zvcm0ucG9zaXRpb24ueSgpIC0gc2Vjb25kQ2FtZXJhLnRyYW5zZm9ybS5ib3VuZHMuaGVpZ2h0KCkvMjtcbiAgICAgICAgICAgICAgICBzZWNvbmRDYW1lcmEudHJhbnNmb3JtLnBvc2l0aW9uaW5nSXNEaXJ0eSgpO1xuICAgICAgICAgICAgfSkqL1xuXG4gICAgICAgICAgICBnby5tYWluQ2FtZXJhLmJhY2tncm91bmRDb2xvciA9IGVudmlyb25tZW50LmxhdW5jaGVyT3B0aW9ucy5hcmdzLmVkaXRvci5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICBnby5tYWluQ2FtZXJhLmhhc0FscGhhQ2hhbm5lbCA9IGVudmlyb25tZW50LmxhdW5jaGVyT3B0aW9ucy5hcmdzLmVkaXRvci5oYXNBbHBoYUNoYW5uZWw7XG4gICAgICAgIH1cbiAgICAgICAgZ28udHJhbnNmb3JtLmJvdW5kcy5taW5EaW1lbnNpb24gPSBlbnZpcm9ubWVudC5sYXVuY2hlck9wdGlvbnMuYXJncy5lZGl0b3IubWluRGltZW5zaW9uO1xuICAgICAgICBnby50cmFuc2Zvcm0uYm91bmRzLm1heERpbWVuc2lvbiA9IGVudmlyb25tZW50LmxhdW5jaGVyT3B0aW9ucy5hcmdzLmVkaXRvci5tYXhEaW1lbnNpb247XG4gICAgICAgIHJldHVybiBnbztcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yVGltaW5nc1xue1xuICAgIGxvb3BTdGFydDogbnVtYmVyID0gMDtcbiAgICBsb29wVGltZTogbnVtYmVyID0gMDtcbiAgICBiZWdpblN0YXJ0OiBudW1iZXIgPSAwO1xuICAgIGJlZ2luVGltZTogbnVtYmVyID0gMDtcbiAgICB1cGRhdGVTdGFydDogbnVtYmVyID0gMDtcbiAgICB1cGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICAgIGRyYXdTdGFydDogbnVtYmVyID0gMDtcbiAgICBkcmF3VGltZTogbnVtYmVyID0gMDtcbiAgICBlbmRTdGFydDogbnVtYmVyID0gMDtcbiAgICBlbmRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgc2xvd0Rvd246IG51bWJlciA9IDA7XG5cbiAgICBvbkJlZ2luU3RhcnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5sb29wU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmJlZ2luU3RhcnQgPSB0aGlzLmxvb3BTdGFydDtcbiAgICB9XG5cbiAgICBvbkJlZ2luRW5kKClcbiAgICB7XG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgIHRoaXMuX2RlbGF5KChub3ctdGhpcy5iZWdpblN0YXJ0KSp0aGlzLnNsb3dEb3duKTtcbiAgICAgICAgdGhpcy5iZWdpblRpbWUgPSBub3cgLSB0aGlzLmJlZ2luU3RhcnQ7XG4gICAgfVxuXG4gICAgb25VcGRhdGVTdGFydCgpXG4gICAge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZUVuZCgpXG4gICAge1xuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICB0aGlzLl9kZWxheSgobm93LXRoaXMudXBkYXRlU3RhcnQpKnRoaXMuc2xvd0Rvd24pO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWUgPSBub3cgLSB0aGlzLnVwZGF0ZVN0YXJ0O1xuICAgIH1cblxuICAgIG9uRHJhd1N0YXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuZHJhd1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBvbkRyYXdFbmQoKVxuICAgIHtcbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgdGhpcy5fZGVsYXkoKG5vdy10aGlzLmRyYXdTdGFydCkqdGhpcy5zbG93RG93bik7XG4gICAgICAgIHRoaXMuZHJhd1RpbWUgPSBub3cgLSB0aGlzLmRyYXdTdGFydDtcbiAgICB9XG5cbiAgICBvbkVuZFN0YXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMuZW5kU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIG9uRW5kRW5kKClcbiAgICB7XG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgIHRoaXMuX2RlbGF5KChub3ctdGhpcy5lbmRTdGFydCkqdGhpcy5zbG93RG93bik7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IG5vdyAtIHRoaXMuZW5kU3RhcnQ7XG4gICAgICAgIHRoaXMubG9vcFRpbWUgPSBub3cgLSB0aGlzLmxvb3BTdGFydDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZWxheSh0aW1lOiBudW1iZXIpXG4gICAge1xuICAgICAgICBpZiAodGltZSA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgbm93ID0gc3RhcnQ7XG4gICAgICAgIHdoaWxlKHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAobm93IC0gc3RhcnQgPiB0aW1lKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBMYXVuY2hlck9wdGlvbnMgZnJvbSBcImVuZ2luZS9sYXVuY2hlci9MYXVuY2hlck9wdGlvbnNcIlxuaW1wb3J0IEVkaXRvciBmcm9tIFwiLi9FZGl0b3JcIlxuaW1wb3J0IElucHV0RGV2aWNlR3JvdXAgZnJvbSBcImVuZ2luZS9pbnB1dC9JbnB1dERldmljZUdyb3VwXCJcblxubGV0IGxhdW5jaGVyT3B0aW9uczogTGF1bmNoZXJPcHRpb25zID0ge1xuICAgIHJvb3RHYW1lT2JqZWN0VHlwZTogRWRpdG9yLFxuICAgIG1pbkRpbWVuc2lvbjogdW5kZWZpbmVkLFxuICAgIG1heERpbWVuc2lvbjogdW5kZWZpbmVkLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGhhc0FscGhhQ2hhbm5lbDogZmFsc2UsXG4gICAgdXNlc01vdXNlOiB0cnVlLFxuICAgIHVzZXNLZXlib2FyZDogdHJ1ZSxcbiAgICBhZGRFeHRyYUlucHV0RGV2aWNlczogKGlucHV0RGV2aWNlR3JvdXA6IElucHV0RGV2aWNlR3JvdXApID0+IHt9LFxuICAgIGdhbWVUYXJnZXQ6IFwiZ2FtZVRhcmdldFwiLFxuICAgIHdpbmRvd1ZhcmlhYmxlTmFtZTogdW5kZWZpbmVkLFxuICAgIGFyZ3M6IHsgfVxufVxuXG5leHBvcnQgeyBsYXVuY2hlck9wdGlvbnMgfVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcExhdW5jaGVyT3B0aW9uc0ZvckVkaXRvcihnYW1lT3B0aW9uczogTGF1bmNoZXJPcHRpb25zKTogTGF1bmNoZXJPcHRpb25zXG57XG4gICAgbGV0IGEgPSBsYXVuY2hlck9wdGlvbnM7XG4gICAgYS5hZGRFeHRyYUlucHV0RGV2aWNlcz0gZ2FtZU9wdGlvbnMuYWRkRXh0cmFJbnB1dERldmljZXMsXG4gICAgYS5nYW1lVGFyZ2V0PSBnYW1lT3B0aW9ucy5nYW1lVGFyZ2V0LFxuICAgIGEud2luZG93VmFyaWFibGVOYW1lPSBnYW1lT3B0aW9ucy53aW5kb3dWYXJpYWJsZU5hbWUsXG4gICAgYS5hcmdzID0gZ2FtZU9wdGlvbnMuYXJnc1xuICAgIGEuYXJnc1tcImVkaXRvclwiXSA9IGdhbWVPcHRpb25zO1xuICAgIHJldHVybiBhO1xufSIsIi8qKlxuICogQW4gQXNzZXQgaXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBvYmplY3Qgb2Ygc29tZSB0eXBlIHRvIGJlIGxvYWRlZC4gVGhlIGBBc3NldGAgYXMgYSBjb250YWluZXIga2VlcHMgdHJhY2sgb2ZcbiAqIGEgKGZpbGUpbmFtZSB0byByZWZlciB0byBpdCBieSBhbmQgd2hldGhlciBpdCBpcyBsb2FkZWQuIEFuIEFzc2V0IGRvZXMgbm90IGxvYWQgdGhlXG4gKiBhc3NldCBpdHNlbGYsIGl0IGlzIGp1c3QgYSB3cmFwcGVyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldDxUPlxue1xuICAgIHByaXZhdGUgX2ZpbGVuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYXNzZXQ6IFQ7XG4gICAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZmlsZW5hbWU6IHN0cmluZywgYXNzZXQ6IFQsIGxvYWRlZDogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIHRoaXMuX2ZpbGVuYW1lID0gZmlsZW5hbWU7XG4gICAgICAgIHRoaXMuX2Fzc2V0ID0gYXNzZXQ7XG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IGxvYWRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgKGZpbGUpbmFtZSBvZiB0aGUgYXNzZXRcbiAgICAgKi9cbiAgICBnZXQgZmlsZW5hbWUoKSB7IHJldHVybiB0aGlzLl9maWxlbmFtZTsgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFzc2V0IHN0b3JlZCBpbiB0aGlzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIGdldCBhc3NldCgpOiBUIHsgcmV0dXJuIHRoaXMuX2Fzc2V0OyB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBhc3NldCBoYXMgYmVlbiBsb2FkZWQuXG4gICAgICovXG4gICAgZ2V0IGxvYWRlZCgpIHsgcmV0dXJuIHRoaXMuX2xvYWRlZDsgfVxuICAgIHNldCBsb2FkZWQodmFsKSB7IHRoaXMuX2xvYWRlZCA9IHZhbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBhc3NldCBoZWxkIGluIHRoaXMgY29udGFpbmVyIHRvIGJlIHRoZSBvbmUgc3VwcGxpZWQuXG4gICAgICogQHBhcmFtIGFzc2V0IFxuICAgICAqL1xuICAgIHNldChhc3NldDogVCkgeyB0aGlzLl9hc3NldCA9IGFzc2V0OyB9XG59XG4iLCJpbXBvcnQgQXNzZXQgZnJvbSBcIi4vQXNzZXRcIjtcblxudmFyIEZvbnRGYWNlT2JzZXJ2ZXIgPSByZXF1aXJlKCdmb250ZmFjZW9ic2VydmVyJyk7XG5cbi8qKlxuICogQW4gQXNzZXRMb2FkZXIgaXMgYW4gb2JqZWN0IHRoYXQgaXMgcGFzc2VkIGRvd24gdGhlIEdhbWVPYmplY3QgdHJlZSB0byBHYW1lT2JqZWN0cycgYGxvYWQoKWBcbiAqIG1ldGhvZCBhbmQgcHJvdmlkZXMgbWV0aG9kcyBmb3IgbG9hZGluZyBhc3NldHMsIGFzIHdlbGwgYXMgbWFuYWdpbmcgYXNzZXRzIHNoYXJlZCBiZXR3ZWVuXG4gKiBtdWx0aXBsZSBHYW1lT2JqZWN0cy4gT3JkaW5hcmlseSwgb25lIEFzc2V0TG9hZGVyIGlzIHN1cHBsaWVkIHRvIHRoZSBgR2FtZWAgY29uc3RydWN0b3IgYW5kXG4gKiB0aGUgc2FtZSBBc3NldExvYWRlciBpcyB1c2VkIHRocm91Z2hvdXQgdGhlIGdhbWUgdHJlZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRMb2FkZXJcbntcbiAgICBwcm90ZWN0ZWQgX2Fzc2V0c0ZvbGRlcjogc3RyaW5nID0gXCIuL1wiO1xuICAgIHByb3RlY3RlZCBfc2hhcmVkQXNzZXRzOiBBc3NldDxPYmplY3Q+W10gPSBbXVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIEFzc2V0TG9hZGVyLiBPcHRpb25hbGx5IHByb3ZpZGUgYSByZWxhdGl2ZSBwYXRoIHRvIGFuIGFzc2V0cyBmb2xkZXIuIElmIG5vbmVcbiAgICAgKiBpcyBzdXBwbGllZCwgdGhlIHJvb3QgZGlyZWN0b3J5IC4vIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXNzZXRzRm9sZGVyIC0gQSByZWxhdGl2ZSBmaWxlcGF0aCB0byBhIGRpcmVjdG9yeSwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoICgvKVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFzc2V0c0ZvbGRlcj86IHN0cmluZylcbiAgICB7XG4gICAgICAgIGlmIChhc3NldHNGb2xkZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0c0ZvbGRlciA9IGFzc2V0c0ZvbGRlcjtcbiAgICB9XG5cbiAgICAvKiogVGhlIHJlbGF0aXZlIHBhdGggdG8gdGhlIGFzc2V0cyBmb2xkZXIgdG8gbG9hZCBhc3NldHMgZnJvbSAqL1xuICAgIGdldCBhc3NldHNGb2xkZXIoKSB7IHJldHVybiB0aGlzLl9hc3NldHNGb2xkZXJ9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEFzc2V0IHdpdGggYSBnaXZlbiBuYW1lLCBvciwgaWYgYSBzaGFyZWQgYXNzZXQgaGFzIGFscmVhZHkgYmVlbiByZXRyaWV2ZWRcbiAgICAgKiB3aXRoIHRoaXMgbmFtZSwgcmV0dXJucyBpdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWUgLSBhIHVuaXF1ZSBuYW1lIHRvIHVzZSB0byBpZGVudGlmeSB0aGUgc2hhcmVkIGFzc2V0XG4gICAgICovXG4gICAgZ2V0U2hhcmVkQXNzZXQoZmlsZW5hbWU6IHN0cmluZyk6IEFzc2V0PGFueT5cbiAgICB7XG4gICAgICAgIGxldCBleGlzdGluZzogQXNzZXQ8YW55PjtcbiAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLl9zaGFyZWRBc3NldHMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaGFyZWRBc3NldHNbaV0uZmlsZW5hbWUgPT09IGZpbGVuYW1lKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nID0gdGhpcy5fc2hhcmVkQXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoZXhpc3RpbmcpXG4gICAgICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgICAgIGxldCBhID0gbmV3IEFzc2V0KGZpbGVuYW1lLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX3NoYXJlZEFzc2V0cy5wdXNoKGEpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFzc2V0IHRoYXQgd2lsbCBsb2FkIGFuIGltYWdlIGZpbGUgYXMgYSBIVE1MSW1hZ2VFbGVtZW50XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGltYWdlIGFzc2V0IGZpbGVcbiAgICAgKiBAcGFyYW0geyhhc3NldDogQXNzZXQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHZvaWR9IG9uZXJyb3IgLSBhIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBpbWFnZSBmYWlscyB0byBsb2FkXG4gICAgICovXG4gICAgbG9hZEltYWdlKGZpbGVuYW1lOiBzdHJpbmcsIG9uZXJyb3I6IChhc3NldDogQXNzZXQ8SFRNTEltYWdlRWxlbWVudD4pID0+IHZvaWQpOiBBc3NldDxIVE1MSW1hZ2VFbGVtZW50PlxuICAgIHtcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBhc3NldCA9IG5ldyBBc3NldDxIVE1MSW1hZ2VFbGVtZW50PihmaWxlbmFtZSwgaW1hZ2UsIGZhbHNlKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5hc3NldHNGb2xkZXIgKyBmaWxlbmFtZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhc3NldC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgb25lcnJvcihhc3NldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzc2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyBhbiBhc3NldCB0aGF0IHdpbGwgbG9hZHMgYSBmb250IGZyb20gZmlsZVxuICAgICogXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYXNzZXROYW1lIC0gVGhlIG5hbWUgdG8gdXNlIGZvciB0aGUgZm9udFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZhbGxiYWNrIC0gQSBiYWNrdXAgZm9udCBuYW1lIHRoYXQgc2hvdWxkIGFsd2F5cyBiZSBhY2Nlc3NpYmxlIHRvIHVzZSBpZiB0aGUgZm9udCBmYWlscyB0byBsb2FkXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWUgLSBUaGUgZmlsZW5hbWUgb2YgdGhlIGZvbnQgZmlsZSB0byBsb2FkXG4gICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBmaWxlbmFtZXMgLSBBbnkgYWRkaXRpb25hbCBmb250IGZpbGVzIHRvIGJlIHVzZWQgaW4gb3JkZXIgaWYgYSBwcmVjZWVkaW5nIGZpbGUgY2Fubm90IGJlIHVzZWQuXG4gICAgKi9cbiAgICBsb2FkRm9udChhc3NldE5hbWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZywgZmlsZW5hbWU6IHN0cmluZywgLi4uZmlsZW5hbWVzOiBzdHJpbmdbXSk6IEFzc2V0PHN0cmluZz5cbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXQ8c3RyaW5nPihhc3NldE5hbWUsIGZhbGxiYWNrLCB0cnVlKTs7XG5cbiAgICAgICAgbGV0IHQgPSBcIlwiO1xuICAgICAgICBmaWxlbmFtZXMgPSBmaWxlbmFtZXMgfHwgW107XG4gICAgICAgIGZpbGVuYW1lcy51bnNoaWZ0KGZpbGVuYW1lKTtcbiAgICAgICAgZmlsZW5hbWVzLmZvckVhY2goKGY6IHN0cmluZykgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmaWxlcGF0aCA9IGYuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgbGV0IHN0cmluZ0NvbXBvbmVudHMgPSBmaWxlcGF0aFtmaWxlcGF0aC5sZW5ndGgtMV0uc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgaWYgKHN0cmluZ0NvbXBvbmVudHMubGVuZ3RoICE9PSAyKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZvbnQgbmFtZXMgbXVzdCBiZSBzdXBwbGllZCBpbiB0aGUgZm9ybWF0IFxcXCI8cGF0aC10by1maWxlPi88bmFtZT4uPGZvcm1hdD5cXFwiXCIpO1xuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IHN0cmluZ0NvbXBvbmVudHNbMV07XG4gICAgICAgICAgICB0ICs9IFwiXFxuICAgIHNyYzogdXJsKCdcIiArIHRoaXMuYXNzZXRzRm9sZGVyICsgZiArIFwiJykgZm9ybWF0KCdcIitmb3JtYXQrXCInKTtcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdCA9ICBcIkBmb250LWZhY2Uge1xcblxcXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiICsgYXNzZXROYW1lICsgXCI7XCIgKyB0O1xuICAgICAgICB0ICs9IFwiXFxufVwiO1xuXG4gICAgICAgIGxldCBuZXdTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIG5ld1N0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuZXdTdHlsZSk7XG5cbiAgICAgICAgbGV0IGZvbnQgPSBuZXcgRm9udEZhY2VPYnNlcnZlcihhc3NldE5hbWUpO1xuICAgICAgICBsZXQgYXNzZXQgPSBuZXcgQXNzZXQ8c3RyaW5nPihhc3NldE5hbWUsIGFzc2V0TmFtZSwgZmFsc2UpO1xuICAgICAgICBmb250LmxvYWQoKS50aGVuKCgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGFzc2V0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pLmNhdGNoKChlcnI6IEVycm9yKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGxvYWRpbmcgZm9udDogXCIgKyAoZXJyLm5hbWUgfHwgXCJcIikgKyAoZXJyLm1lc3NhZ2UgfHwgXCJcIikpO1xuICAgICAgICAgICAgYXNzZXQuc2V0KGZhbGxiYWNrKTtcbiAgICAgICAgICAgIGFzc2V0LmxvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXNzZXQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IExhdW5jaGVyT3B0aW9ucyBmcm9tIFwiZW5naW5lL2xhdW5jaGVyL0xhdW5jaGVyT3B0aW9uc1wiO1xuaW1wb3J0IHsgRXZlbnQxLCBFdmVudDIgfSBmcm9tIFwiZW5naW5lL3V0aWwvRXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52aXJvbm1lbnRcbntcbiAgICBvbkZ1bGxzY3JlZW5DaGFuZ2U6IEV2ZW50MSA9IG5ldyBFdmVudDEoKTsgLy8gaXNGdWxsc2NyZWVuOiBib29sZWFuXG4gICAgb25SZXNpemU6IEV2ZW50MiA9IG5ldyBFdmVudDIoKTtcblxuICAgIHByaXZhdGUgX2RldmljZVBpeGVsUmF0aW86IG51bWJlcjtcbiAgICBwcml2YXRlIF91cmxBcmdzOiBNYXA8c3RyaW5nLHN0cmluZz47XG4gICAgcHJpdmF0ZSBfaXNGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfbGF1bmNoZXJPcHRpb25zOiBMYXVuY2hlck9wdGlvbnM7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ6IEhUTUxEb2N1bWVudDtcblxuICAgIHByaXZhdGUgX2dhbWVXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2dhbWVIZWlnaHQ6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX2FjdGl2ZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkZXZpY2VQaXhlbFJhdGlvOiBudW1iZXIsIHVybEFyZ3M6IE1hcDxzdHJpbmcsc3RyaW5nPiwgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbGF1bmNoZXJPcHRpb25zOiBMYXVuY2hlck9wdGlvbnMsIGRvY3VtZW50OiBIVE1MRG9jdW1lbnQpXG4gICAge1xuICAgICAgICB0aGlzLl9kZXZpY2VQaXhlbFJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5fdXJsQXJncyA9IHVybEFyZ3M7XG4gICAgICAgIHRoaXMuX2xhdW5jaGVyT3B0aW9ucyA9IGxhdW5jaGVyT3B0aW9ucztcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBnZXQgZ2FtZVdpZHRoKCkgeyByZXR1cm4gdGhpcy5fZ2FtZVdpZHRoOyB9XG4gICAgZ2V0IGdhbWVIZWlnaHQoKSB7IHJldHVybiB0aGlzLl9nYW1lSGVpZ2h0OyB9XG4gICAgZ2V0IGlzRnVsbHNjcmVlbigpIHsgcmV0dXJuIHRoaXMuX2lzRnVsbHNjcmVlbjsgfVxuICAgIGdldCBkZXZpY2VQaXhlbFJhdGlvKCkgeyByZXR1cm4gdGhpcy5fZGV2aWNlUGl4ZWxSYXRpbzsgfVxuXG4gICAgZ2V0IGxhdW5jaGVyT3B0aW9ucygpIHsgcmV0dXJuIHRoaXMuX2xhdW5jaGVyT3B0aW9uczsgfVxuICAgIGdldCB1cmxBcmdzKCkgeyByZXR1cm4gdGhpcy5fdXJsQXJnczsgfVxuXG4gICAgZ2V0IGFjdGl2ZUNvbnRhaW5lcigpIHsgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbnRhaW5lcjsgfVxuICAgIHNldCBhY3RpdmVDb250YWluZXIodmFsKSB7IHRoaXMuX2FjdGl2ZUNvbnRhaW5lciA9IHZhbDsgfVxuXG4gICAgc2V0V2lkdGhBbmRIZWlnaHQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLl9nYW1lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fZ2FtZUhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5vblJlc2l6ZS5jYWxsKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHJlcXVlc3RGdWxsc2NyZWVuKCk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5fYWN0aXZlQ29udGFpbmVyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9hY3RpdmVDb250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZXhpdEZ1bGxzY3JlZW4oKVxuICAgIHtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYW52YXMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIH1cblxuICAgIGFkZENhbnZhc1RvUGFnZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250YWluZXI6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgY2hlY2tGdWxsc2NyZWVuU3RhdGUoKVxuICAgIHtcbiAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9ICh0aGlzLl9kb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAhPSBudWxsKTtcbiAgICAgICAgaWYgKHZhbCAhPT0gdGhpcy5faXNGdWxsc2NyZWVuKVxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzRnVsbHNjcmVlbiA9IHZhbDtcbiAgICAgICAgaWYgKGNoYW5nZWQpXG4gICAgICAgICAgICB0aGlzLm9uRnVsbHNjcmVlbkNoYW5nZS5jYWxsKHRoaXMuX2lzRnVsbHNjcmVlbik7XG4gICAgfVxuXG59IiwiaW1wb3J0IElucHV0RGV2aWNlR3JvdXAgZnJvbSBcIi4vaW5wdXQvSW5wdXREZXZpY2VHcm91cFwiO1xuaW1wb3J0IEFzc2V0TG9hZGVyIGZyb20gXCIuL0Fzc2V0TG9hZGVyXCI7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSBcIi4vRW52aXJvbm1lbnRcIjtcbmltcG9ydCBUaW1pbmcgIGZyb20gXCIuL1RpbWluZ1wiO1xuaW1wb3J0IE1haW5Mb29wIGZyb20gXCIuL01haW5Mb29wXCI7XG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9nYW1lb2JqZWN0L0dhbWVPYmplY3RcIjtcblxuLyoqXG4qIEEgR2FtZSByZXByZXNlbnRzIGFuZCBydW5zIGEgZ2FtZSBpbiB0aGUgZW5naW5lLiBJdCBydW5zIHRoZSBtYWluIGxvb3AgYW5kXG4qIHBhc3NlcyBkb3duIHZhcmlvdXMgc3VwcGxpZWQgYXJndW1lbnRzIHRvIHRoZSBnYW1lIG9iamVjdHMgaW4gdGhlIGdhbWUgb2JqZWN0XG4qIHRyZWUgd2hlcmUgdGhleSBuZWVkIHRoZW0uIFRvIGNvbnRhaW5zIHZhcmlvdXMgY29udHJvbHMgZm9yIHN0YXJ0aW5nIGFuZFxuKiBzdG9wcGluZyB0aGUgcnVubmluZyBvZiB0aGUgZ2FtZS4gVG8gc3RhcnQgdGhlIGdhbWUgYHN0YXJ0KClgIG11c3QgYmUgY2FsbGVkLlxuKiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lXG57XG4gICAgcHJpdmF0ZSBfcm9vdEdhbWVPYmplY3Q6IEdhbWVPYmplY3Q7XG4gICAgcHJpdmF0ZSBfaW5wdXREZXZpY2VzOiBJbnB1dERldmljZUdyb3VwO1xuICAgIHByaXZhdGUgX21haW5Mb29wOiBNYWluTG9vcDtcbiAgICBwcml2YXRlIF90aW1pbmc6IFRpbWluZztcbiAgICBwcml2YXRlIF9sb2FkZXI6IEFzc2V0TG9hZGVyO1xuICAgIHByaXZhdGUgX2Vudmlyb25tZW50OiBFbnZpcm9ubWVudDtcblxuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgR2FtZSwgdXNpbmcgdGhlIHN1cHBsaWVkIGdhbWUgb2JqZWN0IGFzIHRoZSByb290IG9mIHRoZSBnYW1lIG9iamVjdCB0cmVlXG4gICAgKiBcbiAgICAqIEBwYXJhbSB7R2FtZU9iamVjdH0gcm9vdEdhbWVPYmplY3QgLSB0aGUgcm9vdCBvZiB0aGUgR2FtZU9iamVjdCB0cmVlLiBUaGUgbWFpbiBsb29wIGZ1bmN0aW9ucyBhcmUgY2FsbGVkIG9uIHRoaXMgb2JqZWN0LlxuICAgICogQHBhcmFtIHtJbnB1dERldmljZUdyb3VwfSBpbnB1dERldmljZXMgLSBhbiBvYmplY3QgaG9sZGluZyBpbnB1dCBkZXZpY2VzLCBzdWNoIGFzIGBNb3VzZWAgYW5kIGBLZXlib2FyZGBcbiAgICAqIEBwYXJhbSB7VGltaW5nfSB0aW1pbmcgLSBhIFRpbWluZyBvYmplY3QgdG8gbWFrZSBhdmFpbGFibGUgdG8gZ2FtZSBvYmplY3RzIFxuICAgICogQHBhcmFtIHtBc3NldExvYWRlcn0gbG9hZGVyIC0gYSBsb2FkZXIgdG8gbWFrZSBhdmFpbGFibGUgdG8gdGhlIGBsb2FkKClgIG1ldGhvZCBvbiBnYW1lIG9iamVjdHNcbiAgICAqIEBwYXJhbSB7RW52aXJvbm1lbnR9IGVudmlyb25tZW50IC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIGdhbWUgaXMgcnVuIHRvIG1ha2UgYXZhaWxhYmxlIHZpYSBgY3JlYXRlKClgXG4gICAgKiovXG4gICAgY29uc3RydWN0b3Iocm9vdEdhbWVPYmplY3Q6IEdhbWVPYmplY3QsIGlucHV0RGV2aWNlczogSW5wdXREZXZpY2VHcm91cCwgdGltaW5nOiBUaW1pbmcsIGxvYWRlcjogQXNzZXRMb2FkZXIsIGVudmlyb25tZW50OiBFbnZpcm9ubWVudClcbiAgICB7XG4gICAgICAgIHRoaXMuX3Jvb3RHYW1lT2JqZWN0ID0gcm9vdEdhbWVPYmplY3Q7XG4gICAgICAgIHRoaXMuX2lucHV0RGV2aWNlcyA9IGlucHV0RGV2aWNlcztcbiAgICAgICAgdGhpcy5fdGltaW5nID0gdGltaW5nO1xuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XG4gICAgICAgIHRoaXMuX2Vudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIHRoZSBnYW1lIE1haW5Mb29wLiBBbHNvIGNhbGxzIHRoZSBgY3JlYXRlYCBtZXRob2Qgb25jZSBvblxuICAgICogdGhlIEdhbWVPYmVjdCB0cmVlIGFuZCBzdXBwbGllZCBJTyBvYmplY3QuIFRoZSBgY3JlYXRlYCBtZXRob2Qgd2lsbCB0cmlnZ2VyXG4gICAgKiB0aGUgbG9hZGluZyBvZiBmaWxlcyBuZWVkZWQgYnkgdGhlIGN1cnJlbnQgR2FtZU9iamVjdCB0cmVlICh0aG9zZSB0aGF0XG4gICAgKiBhcmUgY3JlYXRlZCBpbiB0aGUgZmlyc3QgY2FsbCB0byBgY3JlYXRlYCksIGFuZCBzbyBpdCBtYWtlcyBzZW5zZSB0byBjYWxsXG4gICAgKiB0aGlzIGFzIGVhcmx5IGFzIHBvc3NpYmxlLCBwb3NzaWJseSBpbiBhZHZhbmNlIG9mIG5lZWRpbmcgdG8gc3RhcnQgdGhlIGdhbWUuXG4gICAgKi9cbiAgICBjcmVhdGUoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX2NyZWF0ZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgY3JlYXRlIEdhbWU6IGFscmVhZHkgY3JlYXRlZFwiKTtcbiAgICAgICAgdGhpcy5fbWFpbkxvb3AgPSBuZXcgTWFpbkxvb3AodGhpcy5fYmVnaW4uYmluZCh0aGlzKSx0aGlzLl91cGRhdGUuYmluZCh0aGlzKSx0aGlzLl9kcmF3LmJpbmQodGhpcyksdGhpcy5fZW5kLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9yb290R2FtZU9iamVjdC5kb0NyZWF0ZSh0aGlzLl90aW1pbmcsIHRoaXMuX2xvYWRlciwgdGhpcy5fZW52aXJvbm1lbnQsIHRoaXMuX2lucHV0RGV2aWNlcy5pbnB1dERldmljZXMpO1xuICAgICAgICB0aGlzLl9jcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFN0YXJ0IHRoZSBnYW1lLlxuICAgICovXG4gICAgc3RhcnQoKVxuICAgIHsgXG4gICAgICAgIGlmICghdGhpcy5fY3JlYXRlZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdGFydCBHYW1lOiBub3QgeWV0IGNyZWF0ZWRcIik7XG4gICAgICAgIHRoaXMuX21haW5Mb29wLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdG9wIHRoZSBnYW1lLlxuICAgICovXG4gICAgc3RvcCgpIHsgdGhpcy5fbWFpbkxvb3Auc3RvcCgpOyB9XG5cbiAgICAvKiogXG4gICAgICogRHJhdyBhIHNpbmdsZSBmcmFtZS4gVGhpcyBjYW4gYmUgY2FsbGVkIGluZGVwZW5kYW50bHkgdG8gdGhlIG1haW4gbG9vcC4gVGhpcyB3aWxsXG4gICAgICogb25seSB3b3JrIGlmIHRoZSBjb250YWluZWQgZ2FtZW9iamVjdHMnIGBkcmF3KClgIG1ldGhvZHMgY2FuIGJlIHJ1biBpbmRlcGVuZGFudGx5XG4gICAgICogb2Ygb3RoZXIgbWFpbiBsb29wIG1ldGhvZHMsIHdoaWNoIG1heSBub3QgYWx3YXlzIGJlIHRoZSBjYXNlLCBlc3BlY2FpYWxseSBpZlxuICAgICAqIHRoZSBnYW1lIHVzZXMgcmVuZGVyZXJzIG90aGVyIHRoYW4gQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELlxuICAgICAqL1xuICAgIGRyYXcoKSB7IHRoaXMuX3Jvb3RHYW1lT2JqZWN0LmRvRHJhdyhudWxsKTsgfVxuXG4gICAgcHJvdGVjdGVkIF9iZWdpbih0aW1lc3RhbXA6IG51bWJlciwgZGVsdGE6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuX3RpbWluZy5tYWluTG9vcFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5fdGltaW5nLnNldERlbHRhcyhkZWx0YSk7XG4gICAgICAgIHRoaXMuX3RpbWluZy51cGRhdGVTdGVwcyA9IHRoaXMuX21haW5Mb29wLm51bVVwZGF0ZVN0ZXBzO1xuICAgICAgICB0aGlzLl9lbnZpcm9ubWVudC5jaGVja0Z1bGxzY3JlZW5TdGF0ZSgpO1xuICAgICAgICB0aGlzLl9yb290R2FtZU9iamVjdC5kb0JlZ2luKHRoaXMuX3RpbWluZywgdGhpcy5fbG9hZGVyLCB0aGlzLl9lbnZpcm9ubWVudCwgdGhpcy5faW5wdXREZXZpY2VzLmlucHV0RGV2aWNlcyk7XG4gICAgICAgIHRoaXMuX2lucHV0RGV2aWNlcy5vbkJlZ2luRW5kKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF91cGRhdGUoZGVsdGE6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuX3RpbWluZy5zZXREZWx0YXMoZGVsdGEpO1xuICAgICAgICB0aGlzLl9yb290R2FtZU9iamVjdC5kb1VwZGF0ZSh0aGlzLl90aW1pbmcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZHJhdyhpbnRlcnBvbGF0aW9uUGVyY2VudGFnZTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5fcm9vdEdhbWVPYmplY3QuZG9EcmF3KG51bGwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZW5kKGZwczogbnVtYmVyLCBwYW5pYzogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIHRoaXMuX3RpbWluZy5mcHMgPSBmcHM7XG4gICAgICAgIHRoaXMuX3Jvb3RHYW1lT2JqZWN0LmRvRW5kKHRoaXMuX3RpbWluZyk7XG4gICAgICAgIGlmIChwYW5pYylcbiAgICAgICAgICAgIHRoaXMuX21haW5Mb29wLnJlc2V0RnJhbWVEZWx0YSgpO1xuICAgIH1cbn1cbiIsIi8vIEFkYXB0ZWQgZnJvbSBNSVQgbGljZW5zZWQgaHR0cHM6Ly9naXRodWIuY29tL0ljZUNyZWFtWW91L01haW5Mb29wLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Mb29wXG57XG4gICAgcHJpdmF0ZSBfc2ltdWxhdGlvblRpbWVzdGVwID0gMTAwMCAvIDYwO1xuICAgIHByaXZhdGUgX2ZyYW1lRGVsdGEgPSAwO1xuICAgIHByaXZhdGUgX2xhc3RGcmFtZVRpbWVNcyA9IDA7XG4gICAgcHJpdmF0ZSBfZnBzID0gNjA7XG4gICAgcHJpdmF0ZSBfZnBzQWxwaGEgPSAwLjk7XG4gICAgcHJpdmF0ZSBfZnBzVXBkYXRlSW50ZXJ2YWwgPSAxMDAwO1xuICAgIHByaXZhdGUgX2xhc3RGcHNVcGRhdGUgPSAwO1xuICAgIHByaXZhdGUgX2ZyYW1lc1NpbmNlTGFzdEZwc1VwZGF0ZSA9IDA7XG4gICAgcHJpdmF0ZSBfbnVtVXBkYXRlU3RlcHMgPSAwO1xuICAgIHByaXZhdGUgX21pbkZyYW1lRGVsYXkgPSAwO1xuICAgIHByaXZhdGUgX3J1bm5pbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9zdGFydGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfcGFuaWMgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2hhc1dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnO1xuXG4gICAgcHJpdmF0ZSBfbGFzdFRpbWVzdGFtcEZvclRpbWVvdXRNZXRob2QgPSBEYXRlLm5vdygpO1xuXG4gICAgcHJpdmF0ZSBfYmVnaW46ICh0aW1lc3RhbXA6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4gdm9pZDtcbiAgICBwcml2YXRlIF91cGRhdGU6IChkZWx0YTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgX2RyYXc6IChpbnRlcnBvbGF0aW9uUGVyY2VudGFnZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgX2VuZDogKGZwczogbnVtYmVyLCBwYW5pYzogYm9vbGVhbikgPT4gdm9pZDtcblxuICAgIHByaXZhdGUgX3JhZkhhbmRsZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2FuaW1hdGVCb3VuZENhbGw6ICh0aW1lc3RhbXA6IG51bWJlcikgPT4gdm9pZDtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihiZWdpbjogKHRpbWVzdGFtcDogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB2b2lkLCB1cGRhdGU6IChkZWx0YTogbnVtYmVyKSA9PiB2b2lkLCBkcmF3OiAoaW50ZXJwb2xhdGlvblBlcmNlbnRhZ2U6IG51bWJlcikgPT4gdm9pZCwgZW5kOiAoZnBzOiBudW1iZXIsIHBhbmljOiBib29sZWFuKSA9PiB2b2lkKVxuICAgIHtcbiAgICAgICAgdGhpcy5fYmVnaW4gPSBiZWdpbjtcbiAgICAgICAgdGhpcy5fdXBkYXRlID0gdXBkYXRlO1xuICAgICAgICB0aGlzLl9kcmF3ID0gZHJhd1xuICAgICAgICB0aGlzLl9lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuX2FuaW1hdGVCb3VuZENhbGwgPSB0aGlzLl9hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IG51bVVwZGF0ZVN0ZXBzKCkgeyByZXR1cm4gdGhpcy5fbnVtVXBkYXRlU3RlcHM7IH1cblxuICAgIGdldCBzaW11bGF0aW9uVGltZXN0ZXAoKSB7IHJldHVybiB0aGlzLl9zaW11bGF0aW9uVGltZXN0ZXA7IH1cbiAgICBzZXQgc2ltdWxhdGlvblRpbWVzdGVwKHRpbWVzdGVwKSB7IHRoaXMuX3NpbXVsYXRpb25UaW1lc3RlcCA9IHRpbWVzdGVwO31cblxuICAgIGdldCBmcHMgKCkgeyByZXR1cm4gdGhpcy5fZnBzOyB9XG5cbiAgICBnZXQgbWF4QWxsb3dlZEZQUygpIHsgcmV0dXJuIDEwMDAgLyB0aGlzLl9taW5GcmFtZURlbGF5OyB9XG4gICAgc2V0IG1heEFsbG93ZWRGUFMoZnBzKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmcHMgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZnBzID0gSW5maW5pdHk7XG4gICAgICAgIGlmIChmcHMgPT09IDApXG4gICAgICAgICAgICB0aGlzLnN0b3AoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9taW5GcmFtZURlbGF5ID0gMTAwMCAvIGZwcztcbiAgICB9XG5cbiAgICBnZXQgcnVubmluZygpIHsgcmV0dXJuIHRoaXMuX3J1bm5pbmc7IH1cblxuICAgIHJlc2V0RnJhbWVEZWx0YSgpXG4gICAge1xuICAgICAgICB2YXIgb2xkRnJhbWVEZWx0YSA9IHRoaXMuX2ZyYW1lRGVsdGE7XG4gICAgICAgIHRoaXMuX2ZyYW1lRGVsdGEgPSAwO1xuICAgICAgICByZXR1cm4gb2xkRnJhbWVEZWx0YTtcbiAgICB9XG5cbiAgICBzdGFydCgpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuX3N0YXJ0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLl9yYWZIYW5kbGUgPSB0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWVzdGFtcCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXcoMSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RGcmFtZVRpbWVNcyA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RnBzVXBkYXRlID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lc1NpbmNlTGFzdEZwc1VwZGF0ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9yYWZIYW5kbGUgPSB0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0ZUJvdW5kQ2FsbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKClcbiAgICB7XG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9yYWZIYW5kbGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKTogbnVtYmVyIHwgYW55XG4gICAge1xuICAgICAgICBpZiAodGhpcy5faGFzV2luZG93KVxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spXG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lb3V0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8vVE9ETzogQ3JlYXRlcyBnYXJiYWdlIG9uIHNldCB0aW1lb3V0XG4gICAgcHJpdmF0ZSBfdGltZW91dEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IGFueVxuICAgIHtcbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gTWF0aC5tYXgoMCwgdGhpcy5fc2ltdWxhdGlvblRpbWVzdGVwIC0gKG5vdyAtIHRoaXMuX2xhc3RUaW1lc3RhbXBGb3JUaW1lb3V0TWV0aG9kKSk7XG4gICAgICAgIHRoaXMuX2xhc3RUaW1lc3RhbXBGb3JUaW1lb3V0TWV0aG9kID0gbm93ICsgdGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobm93ICsgdGltZW91dCk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc1dpbmRvdylcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZkhhbmRsZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJhZkhhbmRsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYW5pbWF0ZSh0aW1lc3RhbXA6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuX3JhZkhhbmRsZSA9IHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRlQm91bmRDYWxsKTtcblxuICAgICAgICBpZiAodGltZXN0YW1wIDwgdGhpcy5fbGFzdEZyYW1lVGltZU1zICsgdGhpcy5fbWluRnJhbWVEZWxheSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLl9mcmFtZURlbHRhICs9IHRpbWVzdGFtcCAtIHRoaXMuX2xhc3RGcmFtZVRpbWVNcztcbiAgICAgICAgdGhpcy5fbGFzdEZyYW1lVGltZU1zID0gdGltZXN0YW1wO1xuXG4gICAgICAgIHRoaXMuX2JlZ2luKHRpbWVzdGFtcCwgdGhpcy5fZnJhbWVEZWx0YSk7XG5cbiAgICAgICAgaWYgKHRpbWVzdGFtcCA+IHRoaXMuX2xhc3RGcHNVcGRhdGUgKyB0aGlzLl9mcHNVcGRhdGVJbnRlcnZhbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZnBzID1cbiAgICAgICAgICAgICAgICB0aGlzLl9mcHNBbHBoYSAqIHRoaXMuX2ZyYW1lc1NpbmNlTGFzdEZwc1VwZGF0ZSAqIDEwMDAgLyAodGltZXN0YW1wIC0gdGhpcy5fbGFzdEZwc1VwZGF0ZSkgK1xuICAgICAgICAgICAgICAgICgxIC0gdGhpcy5fZnBzQWxwaGEpICogdGhpcy5fZnBzO1xuXG4gICAgICAgICAgICB0aGlzLl9sYXN0RnBzVXBkYXRlID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVzU2luY2VMYXN0RnBzVXBkYXRlID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9mcmFtZXNTaW5jZUxhc3RGcHNVcGRhdGUrKztcblxuICAgICAgICB0aGlzLl9udW1VcGRhdGVTdGVwcyA9IDA7XG4gICAgICAgIHdoaWxlICh0aGlzLl9mcmFtZURlbHRhID49IHRoaXMuX3NpbXVsYXRpb25UaW1lc3RlcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHRoaXMuX3NpbXVsYXRpb25UaW1lc3RlcCk7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZURlbHRhIC09IHRoaXMuX3NpbXVsYXRpb25UaW1lc3RlcDtcblxuICAgICAgICAgICAgaWYgKCsrdGhpcy5fbnVtVXBkYXRlU3RlcHMgPj0gMjQwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhbmljID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RyYXcodGhpcy5fZnJhbWVEZWx0YSAvIHRoaXMuX3NpbXVsYXRpb25UaW1lc3RlcCk7XG5cbiAgICAgICAgdGhpcy5fZW5kKHRoaXMuX2ZwcywgdGhpcy5fcGFuaWMpO1xuXG4gICAgICAgIHRoaXMuX3BhbmljID0gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWluZ1xue1xuICAgIGZwczogbnVtYmVyID0gMDtcbiAgICB1cGRhdGVTdGVwczogbnVtYmVyID0gMDtcblxuICAgIG1haW5Mb29wVGltZXN0YW1wOiBudW1iZXIgPSAwO1xuICAgIHJhd0RlbHRhOiBudW1iZXIgPSAwO1xuICAgIHJhd0RlbHRhU2Vjb25kczogbnVtYmVyID0gMFxuICAgIGRlbHRhOiBudW1iZXIgPSAwO1xuICAgIC8qIERlbHRhIHRpbWUgaW4gc2Vjb25kcyAqL1xuICAgIGRlbHRhU2Vjb25kczogbnVtYmVyID0gMDtcblxuICAgIHNwZWVkRmFjdG9yOiBudW1iZXIgPSAxO1xuXG4gICAgc2V0RGVsdGFzKGRlbHRhOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLnJhd0RlbHRhID0gZGVsdGFcbiAgICAgICAgdGhpcy5yYXdEZWx0YVNlY29uZHMgPSBkZWx0YS8xMDAwO1xuICAgICAgICBpZiAodGhpcy5zcGVlZEZhY3RvciA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgICAgICAgICAgdGhpcy5kZWx0YVNlY29uZHMgPSB0aGlzLnJhd0RlbHRhU2Vjb25kcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSBkZWx0YSAqIHRoaXMuc3BlZWRGYWN0b3I7XG4gICAgICAgICAgICB0aGlzLmRlbHRhU2Vjb25kcyA9IHRoaXMuZGVsdGEvMTAwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBCb3VuZHMgZnJvbSBcIi4vdHJhbnNmb3JtL0JvdW5kc1wiO1xuaW1wb3J0IFBvc2l0aW9uICBmcm9tIFwiLi90cmFuc2Zvcm0vUG9zaXRpb25cIjtcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL2dhbWVvYmplY3QvR2FtZU9iamVjdFwiO1xuXG4vKipcbiAqIEEgVHJhbnNmb3JtIHJlcHJlc2VudHMgdGhlIGdhbWUtd29ybGQgZXh0ZW5zaW9uIG9mIGEgR2FtZU9iamVjdCwgaW5jbHVkaW5nIGV2ZXJ5dGhpbmdcbiAqIHJlcXVpcmVkIHRvIGtub3cgd2hlcmUgaXQgaXMgYW5kIHdoYXQgYXJlYSBpdCBvY2N1cGllcy4gVHJhbnNmb3JtcyBhcmUgdXN1YWxseVxuICogYXNzb2NpYXRlZCB3aXRoIGEgR2FtZU9iamVjdC4gQSBUcmFuc2Zvcm0gaXMgcHJpbWFyaWx5IGRlZmluZWQgYnkgaXRzIGBQb3NpdGlvbmAgYW5kXG4gKiBgQm91bmRzYCwgYnV0IG1heSBhbHNvIHN0b3JlcyBvdGhlciB2YWx1ZXMgZm9yIGRldGVybWluaW5nIHRoZSBleHRlbnNpb24sIHN1Y2ggYXMgYVxuICogcm90YXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybVxue1xuICAgIHByaXZhdGUgX2dhbWVPYmplY3Q6IEdhbWVPYmplY3Q7XG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IFBvc2l0aW9uO1xuICAgIHByaXZhdGUgX2JvdW5kczogQm91bmRzO1xuICAgIHByaXZhdGUgX2Fsd2F5c0NoZWNrRm9yVXBkYXRlczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3Bvc2l0aW9uaW5nRGlydHk6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgVHJhbnNmb3JtIHdpdGggYSBzcGVjaWZpZWQgUG9zaXRpb24gYW5kIEJvdW5kc1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBhIFBvc2l0aW9uIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGxvY2F0aW9uIG9mIHRoaXMgVHJhbnNmb3JtXG4gICAgICogaW4gdGhlIGdhbWUgd29ybGQuXG4gICAgICogQHBhcmFtIGJvdW5kcyBhIEJvdW5kcyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBib3VuZGluZyBzaXplIG9mIHRoaXMgVHJhbnNmb3JtXG4gICAgICogaW4gdGhlIGdhbWUgd29ybGQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBib3VuZHM6IEJvdW5kcylcbiAgICB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuX2JvdW5kcyA9IGJvdW5kcztcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi50cmFuc2Zvcm0gPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5ib3VuZHMpXG4gICAgICAgICAgICB0aGlzLl9ib3VuZHMudHJhbnNmb3JtID0gdGhpcztcblxuICAgICAgICBpZiAoKCF0aGlzLmJvdW5kcykgJiYgKHRoaXMucG9zaXRpb24pKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBUcmFuc2Zvcm0gd2l0aCBhIG5vbi1udWxsIFBvc2l0aW9uIG11c3QgaGF2ZSBhIG5vbi1udWxsIEJvdW5kc1wiKTtcbiAgICB9XG5cbiAgICAvKiogVGhlIEdhbWVPYmplY3QgdGhpcyBUcmFuc2Zvcm0gaXMgYXNzb2NpYXRlZCB3aXRoICovXG4gICAgZ2V0IGdhbWVPYmplY3QoKSB7IHJldHVybiB0aGlzLl9nYW1lT2JqZWN0OyB9XG4gICAgc2V0IGdhbWVPYmplY3QodmFsKSB7IHRoaXMuX2dhbWVPYmplY3QgPSB2YWw7IH1cblxuICAgIC8qKiBUaGUgUG9zaXRpb24gcmVwcmVzZW50aW5nIHRoZSBsb2NhdGlvbiBvZiB0aGUgR2FtZU9iamVjdCBpbiB0aGUgZ2FtZSBzcGFjZS4gKi9cbiAgICBnZXQgcG9zaXRpb24oKTogUG9zaXRpb24geyByZXR1cm4gdGhpcy5fcG9zaXRpb247IH1cbiAgICBcbiAgICAvKiogVGhlIEJvdW5kcyByZXByZXNlbnRpbmcgdGhlIGJvdW5kaW5nIHNpemUgb2YgdGhlIEdhbWVPYmplY3QuICovXG4gICAgZ2V0IGJvdW5kcygpOiBCb3VuZHMgeyByZXR1cm4gdGhpcy5fYm91bmRzOyB9XG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCBUcmFuc2xhdGlvbnMgYW5kIERpbWVuc2lvbnMgb24gdGhlIFBvc2l0aW9uIGFuZCBCb3VuZHNcbiAgICAgKiBvZiB0aGlzIFRyYW5zZm9ybSBzaG91bGQgbm90IGJlIGF1dG9tYXRpY2FsbHkgY2hlY2tlZCBkdXJpbmcgdGhlIHVwZGF0ZSBsb29wLlxuICAgICAqL1xuICAgIGdldCBhbHdheXNDaGVja0ZvclVwZGF0ZXMoKSB7IHJldHVybiB0aGlzLl9hbHdheXNDaGVja0ZvclVwZGF0ZXM7IH1cbiAgICBzZXQgYWx3YXlzQ2hlY2tGb3JVcGRhdGVzKHZhbCkgeyB0aGlzLl9hbHdheXNDaGVja0ZvclVwZGF0ZXMgPSB2YWw7IH1cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyBpbmRpZ2F0aW5nIHRoYXQgYSBUcmFuc2xhdGlvbiBvciBEaW1lbnNpb24gb24gdGhlIFBvc2l0aW9uIG9yIEJvdW5kc1xuICAgICAqIG9mIHRoaXMgVHJhbnNmb3JtIGhhcyBjaGFuZ2VkIGFuZCBzbyBzaG91bGQgYmUgY2hlY2tlZCBkdXJpbmcgdGhlIG5leHQgdXBkYXRlXG4gICAgICogbG9vcCwgaXJyZXNwZWN0aXZlIG9mIHdoZXRoZXIgdGhlIGZpeGVkIGZsYWcgaXMgc2V0LlxuICAgICAqIFxuICAgICAqIFRoaXMgZmxhZyBjYW4gYmUgc2V0IHRvIHRydWUgYnkgY2FsbGluZyBgcG9zaXRpb25pbmdJc0RpcnR5KClgXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uaW5nRGlydHkoKSB7IHJldHVybiB0aGlzLl9wb3NpdGlvbmluZ0RpcnR5OyB9XG5cbiAgICAvKiogU2V0IHRoZSBwb3NpdGlvbmluZ0RpcnR5IGZsYWcgdG8gdHJ1ZSAqL1xuICAgIHBvc2l0aW9uaW5nSXNEaXJ0eSgpIHsgdGhpcy5fcG9zaXRpb25pbmdEaXJ0eSA9IHRydWU7IH1cblxuICAgIC8qKiBSZXR1cm5zIHRoZSBUcmFuc2Zvcm0gb2YgcGFyZW50IG9mIHRoaXMgVHJhbnNmb3JtJ3MgYXNzb2NpYXRlZCBHYW1lT2JqZWN0ICovXG4gICAgZ2V0IHBhcmVudCgpOiBUcmFuc2Zvcm1cbiAgICB7XG4gICAgICAgIGlmICgodGhpcy5nYW1lT2JqZWN0KSAmJiAodGhpcy5nYW1lT2JqZWN0LnBhcmVudCkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nYW1lT2JqZWN0LnBhcmVudC50cmFuc2Zvcm07XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKiBSZXR1cm4gYSBQb2x5UmVjdCBob2xkaW5nIHRoZSBjb3JuZXJzIG9mIHRoaXMgVHJhbnNmb3JtIChpZ25vcmluZyByb3RhdGlvbikgKi9cbiAgIC8vIGdldENhbm9uaWNhbFJlY3QoKTogUG9seVJlY3RcbiAgIC8vIHtcbiAgIC8vICAgICByZXR1cm4gbmV3IFBvbHlSZWN0KFtuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54KCksIHRoaXMucG9zaXRpb24ueSgpKSwgbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCgpK3RoaXMuYm91bmRzLndpZHRoKCksIHRoaXMucG9zaXRpb24ueSgpKSwgbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCgpK3RoaXMuYm91bmRzLndpZHRoKCksIHRoaXMucG9zaXRpb24ueSgpK3RoaXMuYm91bmRzLmhlaWdodCgpKSwgbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCgpLCB0aGlzLnBvc2l0aW9uLnkoKSt0aGlzLmJvdW5kcy5oZWlnaHQoKSldKVxuICAgLy8gfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBQb3NpdGlvbiBvZiB0aGlzIFRyYW5zZm9ybSBpcyBub3QgbnVsbC4gUG9zaXRpb25zXG4gICAgICogYXJlIG51bGwgd2hlbiBhIFRyYW5zZm9ybSBoYXMgYSBzaXplIGJ1dCBzaG91bGQgbm90IGJlIHBvc2l0aW9uZWQgaW5cbiAgICAgKiB3b3JsZCBzcGFjZS5cbiAgICAgKi9cbiAgICBoYXNQb3NpdGlvbigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMucG9zaXRpb24gIT09IG51bGw7IH1cblxuICAgIHVwZGF0ZSgpXG4gICAge1xuICAgICAgICBpZiAoKHRoaXMuX3Bvc2l0aW9uaW5nRGlydHkpIHx8ICh0aGlzLl9hbHdheXNDaGVja0ZvclVwZGF0ZXMpKVxuICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JVcGRhdGVkVHJhbnNsYXRpb25zT3JEaW1lbnNpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgVHJhbnNsYXRpb25zIG9yIERpbWVuc2lvbnMgaGVsZCBieSB0aGUgUG9zaXRpb24gYW5kIEJvdW5kc1xuICAgICAqIG9mIHRoaXMgVHJhbnNmb3JtIGhhdmUgYmVlbiB1cGRhdGVkIG9yIGhhdmUgY2hhbmdlZCwgdGhlbiByZXNldCB0aGUgXG4gICAgICogcG9zaXRpdGlvbmluZyBkaXJ0eSBmbGFnLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2NoZWNrRm9yVXBkYXRlZFRyYW5zbGF0aW9uc09yRGltZW5zaW9ucygpOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbilcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uY2hlY2tGb3JVcGRhdGVkVHJhbnNsYXRpb25zKCk7XG4gICAgICAgIGlmICh0aGlzLmJvdW5kcylcbiAgICAgICAgICAgIHRoaXMuYm91bmRzLmNoZWNrRm9yVXBkYXRlZERpbWVuc2lvbnMoKTtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25pbmdEaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IGNhbGxlZCB0aHJvdWdoIGRlc2NlbmRhbnRzIHRvIHNheSB0aGF0IHRoZSB0cmFuc2Zvcm0gb2YgdGhpc1xuICAgICAqIG9yIGEgcGFyZW50IEdhbWVPYmplY3QgaGFzIGNoYW5nZWQuIFdoZW4gdGhlIGRpbWVuc2lvbiBvZiBhIHBhcmVudCdzIGJvdW5kc1xuICAgICAqIGhhcyBjaGFuZ2VkIGl0IG1lYW5zIHRoYXQgdGhlIGRpbWVuc2lvbiBvZiB0aGUgY2hpbGQgbWF5IGhhdmUgY2hhbmdlZCBhbmQgdGh1c1xuICAgICAqIG5lZWRzIHRvIGJlIHJlY2FsY3VsYXRlZC5cbiAgICAgKi9cbiAgICByZWNhbGN1bGF0ZShleGNsdWRlRHJhd0NhY2hlPzogYm9vbGVhbik6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLl9wb3NpdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uLnNldENhY2hlRGlydHkoKTtcbiAgICAgICAgaWYgKHRoaXMuX2JvdW5kcylcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPYmplY3QuY2hpbGRyZW4ubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoIShleGNsdWRlRHJhd0NhY2hlKSlcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QucmVxdWVzdERyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBmb3IgKGxldCBpPTAsbGVuID0gdGhpcy5nYW1lT2JqZWN0LmNoaWxkcmVuLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU9iamVjdC5jaGlsZHJlbltpXS50cmFuc2Zvcm0pIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QuY2hpbGRyZW5baV0udHJhbnNmb3JtLnJlY2FsY3VsYXRlKGV4Y2x1ZGVEcmF3Q2FjaGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzdXBwbGllZCBwb2ludCBpcyBjb250YWluZWQgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhpc1xuICAgICogZ2FtZSBvYmplY3QgaW4gdGhlIGdhbWUgc3BhY2UgKGlnbm9yaW5nIHJvdGF0aW9uKS5cbiAgICAqL1xuICAgIGNvbnRhaW5zUG9pbnQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgb2Zmc2V0WCA9IHRoaXMucG9zaXRpb24ueCgpO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IHRoaXMucG9zaXRpb24ueSgpO1xuICAgICAgICBpZiAoKHggPj0gb2Zmc2V0WCkgJiYgKHkgPj0gb2Zmc2V0WSkpXG4gICAgICAgICAgICBpZiAoKHggPD0gb2Zmc2V0WCArIHRoaXMuYm91bmRzLndpZHRoKCkpICYmICh5IDw9IG9mZnNldFkgKyB0aGlzLmJvdW5kcy5oZWlnaHQoKSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIHBvbHlzaGFwZSBhbmQgcmV0dXJucyBhIHBvbHlzaGFwZSB0aGF0IGhhcyBiZWVuIHRyYW5zbGF0ZWQgYnkgdGhlIHBvc2l0aW9uIG9mIHRoaXMgdHJhbnNmb3JtIGFuZFxuICAgICAqIHNjYWxlZCBieSB0aGUgZGltZW5zaW9ucyBvZiB0aGlzIHRyYW5zZm9ybS4gU28gYSBjb29yZCBvZiAoMCwwKSBpbiB0aGUgcG9seXNoYXBlIGJlY29tZXMgdGhlIGNhbm9uaWNhbFxuICAgICAqIHBvc2l0aW9uIG9mIHRoZSB0b3AgbGVmdCBvZiB0aGUgdHJhbnNmb3JtLCBhbmQgYSBjb29yZCBvZiAoMSwxKSBiZWNvbWVzIHRoZSBjYW5vbmljYWwgcG9zaXRpb24gb2YgdGhlXG4gICAgICogYm90dG9tIHJpZ2h0IG9mIHRoZSB0cmFuc2Zvcm0uXG4gICAgICogQHBhcmFtIHBvbHlzaGFwZVxuICAgICAqIEByZXR1cm5zIGEgcG9seXNoYXBlIG9mIHRoZSBzYW1lIHR5cGVcbiAgICAgKi9cbiAgIC8qIGNvbnRleHR1YWxpc2VQb2x5c2hhcGU8VCBleHRlbmRzIFBvbHlTaGFwZT4ocG9seXNoYXBlOiBUKTogVFxuICAgIHtcbiAgICAgICAgbGV0IGRpbSA9IHRoaXMuYm91bmRzLmFzRGltZW5zaW9uKCk7XG4gICAgICAgIGxldCBwb2ludHMgPSBbXTtcbiAgICAgICAgbGV0IHggPSB0cnVlO1xuICAgICAgICBwb2x5c2hhcGUucG9pbnRzLmZvckVhY2gocCA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBQb2ludChwLnggKiBkaW0ud2lkdGggKyB0aGlzLnBvc2l0aW9uLngoKSwgcC55ICogZGltLmhlaWdodCArIHRoaXMucG9zaXRpb24ueSgpKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBsZXQgcCA9IHBvbHlzaGFwZS5jbG9uZShwb2ludHMpXG4gICAgICAgIHJldHVybiBwO1xuICAgIH0qL1xuXG4gICAgLyoqIERlc3Ryb3kgdGhlIFBvc2l0aW9uIGFuZCBCb3VuZHMgaGVsZCBieSB0aGlzIFRyYW5zZm9ybSAqL1xuICAgIGRlc3Ryb3koKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKVxuICAgICAgICAgICAgdGhpcy5ib3VuZHMuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbilcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKiBSZXR1cm5zIHRydWUgaWYgdHdvIHRyYW5zZm9ybXMgb3ZlcmxhcCAoaWdub3Jpbmcgcm90YXRpb24pICovXG4gICAgc3RhdGljIG92ZXJsYXBzKGE6IFRyYW5zZm9ybSwgYjogVHJhbnNmb3JtKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgbGV0IGF4ID0gMCwgYXkgPSAwLCBieCA9IDAsIGJ5ID0gMDtcbiAgICAgICAgaWYgKGEucG9zaXRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGF4ID0gYS5wb3NpdGlvbi54KCk7XG4gICAgICAgICAgICBheSA9IGEucG9zaXRpb24ueSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLnBvc2l0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICBieCA9IGIucG9zaXRpb24ueCgpO1xuICAgICAgICAgICAgYnkgPSBiLnBvc2l0aW9uLnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB4ID0gZmFsc2U7XG4gICAgICAgIGxldCB5ID0gZmFsc2U7XG4gICAgICAgIGlmICgoYXggPj0gYngpICYmIChheCA8PSBieCArIGIuYm91bmRzLndpZHRoKCkpKVxuICAgICAgICAgICAgeCA9IHRydWU7XG4gICAgICAgIGlmICgoYXggPD0gYngpICYmIChheCArIGEuYm91bmRzLndpZHRoKCkgPj0gYngpKVxuICAgICAgICAgICAgeCA9IHRydWU7XG4gICAgICAgIGlmICgoYXkgPj0gYnkpICYmIChheSA8PSBieSArIGIuYm91bmRzLmhlaWdodCgpKSlcbiAgICAgICAgICAgIHkgPSB0cnVlO1xuICAgICAgICBpZiAoKGF5IDw9IGJ5KSAmJiAoYXkgKyBhLmJvdW5kcy5oZWlnaHQoKSA+PSBieSkpXG4gICAgICAgICAgICB5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHggJiYgeTtcbiAgICB9XG5cbiAgICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBmaXJzdCB0cmFuc2Zvcm0gY29udGFpbnMgdGhlIHNlY29uZCAoaWdub3Jpbmcgcm90YXRpb24pICovXG4gICAgc3RhdGljIGNvbnRhaW5zKGE6IFRyYW5zZm9ybSwgYjogVHJhbnNmb3JtKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgbGV0IGF4ID0gYS5wb3NpdGlvbi54KCksXG4gICAgICAgICAgICBheSA9IGEucG9zaXRpb24ueSgpLFxuICAgICAgICAgICAgYnggPSBiLnBvc2l0aW9uLngoKSxcbiAgICAgICAgICAgIGJ5ID0gYi5wb3NpdGlvbi55KCk7XG4gICAgICAgIGxldCB4ID0gZmFsc2U7XG4gICAgICAgIGxldCB5ID0gZmFsc2U7XG4gICAgICAgIGlmICgoYnggPj0gYXgpICYmIChieCArIGIuYm91bmRzLndpZHRoKCkgPD0gYXggKyBhLmJvdW5kcy53aWR0aCgpKSlcbiAgICAgICAgICAgIHggPSB0cnVlO1xuICAgICAgICBpZiAoKGJ5ID49IGF5KSAmJiAoYnkgKyBiLmJvdW5kcy53aWR0aCgpIDw9IGF5ICsgYS5ib3VuZHMuaGVpZ2h0KCkpKVxuICAgICAgICAgICAgeSA9IHRydWU7XG4gICAgICAgIHJldHVybiB4ICYmIHk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENhc2NhZGluZ1N0eWxlIGZyb20gXCIuLi9zdHlsZS9DYXNjYWRpbmdTdHlsZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vY29udGV4dDJkL1RleHRcIjtcbmltcG9ydCBUZXh0QnVpbGRlciBmcm9tIFwiLi9jb250ZXh0MmQvVGV4dEJ1aWxkZXJcIjtcbmltcG9ydCBQb3NpdGlvbiBmcm9tIFwiLi4vdHJhbnNmb3JtL1Bvc2l0aW9uXCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuLi90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgUm91bmRlZFJlY3QgZnJvbSBcIi4vY29udGV4dDJkL3NoYXBlL1JvdW5kZWRSZWN0XCI7XG5pbXBvcnQgeyBSZWN0IH0gZnJvbSBcIi4vY29udGV4dDJkL3NoYXBlL1JlY3RcIjtcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdWkvQnV0dG9uXCI7XG5pbXBvcnQgVGV4dFN0eWxlIGZyb20gXCIuLi9zdHlsZS9UZXh0U3R5bGVcIjtcbmltcG9ydCBBc3luY0J1dHRvbiBmcm9tIFwiLi91aS9Bc3luY0J1dHRvblwiO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xuXG4vKipcbiAqIEEgbm9uLWluc3RhbnRpYXRhYmxlIGNsYXNzIHByb3ZpZGluZyBmYWN0b3JpZXMgZm9yIGNyZWF0aW5nIHZhcmlvdXMgYEdhbWVPYmplY3RgXG4gKiBjb21wb25lbnRzLlxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEZhY3RvcnlcbntcbiAgICBwdWJsaWMgc3RhdGljIGNvbnRleHQyRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgc3RhdGljIGNyZWF0ZVRleHQocG9zaXRpb246IFBvc2l0aW9uLCBjb250ZXh0MkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdGV4dDogc3RyaW5nLCBzdHlsZTogQ2FzY2FkaW5nU3R5bGUgfCBUZXh0U3R5bGUsIHRhcmdldFdpZHRoPzogbnVtYmVyICk6IFRleHRcbiAgICB7XG4gICAgICAgIGxldCB0ZXh0U3R5bGU6IFRleHRTdHlsZTtcbiAgICAgICAgaWYgKHN0eWxlIGluc3RhbmNlb2YgVGV4dFN0eWxlKVxuICAgICAgICAgICAgdGV4dFN0eWxlID0gc3R5bGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRleHRTdHlsZSA9IG5ldyBUZXh0U3R5bGUoc3R5bGUpO1xuICAgICAgICBsZXQgdGV4dHN0cmluZzogc3RyaW5nO1xuICAgICAgICB0ZXh0c3RyaW5nID0gdGV4dDtcbiAgICAgICAgaWYgKHRhcmdldFdpZHRoICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0ZXh0U3R5bGUudGFyZ2V0V2lkdGggPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgbGV0IHRiID0gbmV3IFRleHRCdWlsZGVyKHRleHRzdHJpbmcsIGNvbnRleHQyRCwgdGV4dFN0eWxlKVxuICAgICAgICByZXR1cm4gdGIuYnVpbGRUZXh0KHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24gPyBwb3NpdGlvbiA6IG5ldyBQb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUmVjdChwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzLCBzdHlsZTogQ2FzY2FkaW5nU3R5bGUpOiBSb3VuZGVkUmVjdCB8IFJlY3RcbiAgICB7XG4gICAgICAgIGxldCByID0gc3R5bGUucm91bmRpbmc7XG4gICAgICAgIGlmIChyID4gMClcbiAgICAgICAgICAgIHJldHVybiBuZXcgUm91bmRlZFJlY3QocG9zaXRpb24sIGJvdW5kcywgc3R5bGUuc3Ryb2tlQ29sb3VyLCBzdHlsZS5iYWNrZ3JvdW5kQ29sb3VyLCBzdHlsZS5zdHJva2VXaWR0aCwgcik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVjdChwb3NpdGlvbiwgYm91bmRzLCBzdHlsZS5zdHJva2VDb2xvdXIsIHN0eWxlLmJhY2tncm91bmRDb2xvdXIsIHN0eWxlLnN0cm9rZVdpZHRoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQnV0dG9uKHBvc2l0aW9uOiBQb3NpdGlvbiwgYm91bmRzOiBCb3VuZHMsIGNvbnRlbnQ6IEdhbWVPYmplY3QsIHN0eWxlOiBDYXNjYWRpbmdTdHlsZSk6IEJ1dHRvblxuICAgIHtcbiAgICAgICAgbGV0IGIgPSBuZXcgQnV0dG9uKHBvc2l0aW9uLCBib3VuZHMsIGNvbnRlbnQpO1xuICAgICAgICBiLnNldEJhY2tncm91bmRSZWN0KGIuYWRkQ2hpbGQoRmFjdG9yeS5jcmVhdGVSZWN0KG5ldyBQb3NpdGlvbigpLCBCb3VuZHMuZmlsbCwgc3R5bGUpKSk7XG4gICAgICAgIGIuc2V0SG92ZXJSZWN0KGIuYWRkQ2hpbGQoRmFjdG9yeS5jcmVhdGVSZWN0KG5ldyBQb3NpdGlvbigpLCBCb3VuZHMuZmlsbCwgc3R5bGUuaG92ZXIpKSk7XG4gICAgICAgIGIuc2V0UHJlc3NlZFJlY3QoYi5hZGRDaGlsZChGYWN0b3J5LmNyZWF0ZVJlY3QobmV3IFBvc2l0aW9uKCksIEJvdW5kcy5maWxsLCBzdHlsZS5wcmVzc2VkKSkpO1xuICAgICAgICBiLnNldERlcHJlc3NEaXN0YW5jZShzdHlsZS5kZXByZXNzRGlzdGFuY2UpO1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRnVsbHNjcmVlbkJ1dHRvbihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzLCBjb250ZW50OiBHYW1lT2JqZWN0LCBzdHlsZTogQ2FzY2FkaW5nU3R5bGUsIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCk6IEFzeW5jQnV0dG9uXG4gICAge1xuICAgICAgICBsZXQgYiA9IG5ldyBBc3luY0J1dHRvbihwb3NpdGlvbiwgYm91bmRzLCBjb250ZW50KTtcbiAgICAgICAgYi5zZXRCYWNrZ3JvdW5kUmVjdChiLmFkZENoaWxkKEZhY3RvcnkuY3JlYXRlUmVjdChuZXcgUG9zaXRpb24oKSwgQm91bmRzLmZpbGwsIHN0eWxlKSkpO1xuICAgICAgICBiLnNldEhvdmVyUmVjdChiLmFkZENoaWxkKEZhY3RvcnkuY3JlYXRlUmVjdChuZXcgUG9zaXRpb24oKSwgQm91bmRzLmZpbGwsIHN0eWxlLmhvdmVyKSkpO1xuICAgICAgICBiLnNldFByZXNzZWRSZWN0KGIuYWRkQ2hpbGQoRmFjdG9yeS5jcmVhdGVSZWN0KG5ldyBQb3NpdGlvbigpLCBCb3VuZHMuZmlsbCwgc3R5bGUucHJlc3NlZCkpKTtcbiAgICAgICAgYi5zZXREZXByZXNzRGlzdGFuY2Uoc3R5bGUuZGVwcmVzc0Rpc3RhbmNlKTtcbiAgICAgICAgYi5vbkNsaWNrLnB1c2goKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChlbnZpcm9ubWVudC5pc0Z1bGxzY3JlZW4pXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbnZpcm9ubWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9LCBudWxsKTtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxufSIsImltcG9ydCBQb3NpdGlvbiBmcm9tIFwiLi4vdHJhbnNmb3JtL1Bvc2l0aW9uXCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuLi90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgQXNzZXQgZnJvbSBcIi4uL0Fzc2V0XCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuLi9UcmFuc2Zvcm1cIjtcbmltcG9ydCBBc3NldExvYWRlciBmcm9tIFwiLi4vQXNzZXRMb2FkZXJcIjtcbmltcG9ydCBUaW1pbmcgZnJvbSBcIi4uL1RpbWluZ1wiO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9jb250ZXh0MmQvQ29udGV4dDJEQ2FtZXJhXCI7XG5pbXBvcnQgeyBHQ1JlbW92ZUVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbC9VdGlsXCI7XG5cbi8qKlxuKiBUaGUgR2FtZU9iamVjdCBpcyB0aGUgY29yZSBvZiB0aGUgZ2FtZSBlbmdpbmUgYW5kIHJlcHJlc2VudHMgYW55dGhpbmcgaW4gdGhlXG4qIGdhbWUgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBvciBkcmF3biBvciB1c2VkIGFzIGEgbm9kZSBmb3IgdGhlIGxheW91dCBzeXN0ZW0uXG4qIEdhbWVPYmplY3RzIGZvcm0gYSB0cmVlLiBFYWNoIEdhbWVPYmplY3QgY2FuIGhhdmUgY2hpbGRyZW4uIFRoZSBtYWluIGxvb3BcbiogbWV0aG9kcyBhcmUgY2FsbGVkIHJlY3VzaXZlbHkgZG93biB0aHJvdWdoIHRoaXMgdHJlZS4gVGhlIGxheW91dCBvZiBHYW1lT2JqZWN0c1xuKiB3b3JrcyByZWN1cnNpdmVseSB1cCB0aHJvdWdoIHRoaXMgdHJlZS5cbioqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdFxue1xuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIkdhbWVPYmplY3RcIjtcblxuICAgIHByaXZhdGUgX3RyYW5zZm9ybTogVHJhbnNmb3JtO1xuICAgIHByaXZhdGUgX2NoaWxkcmVuOiBHYW1lT2JqZWN0W10gPSBbXTtcbiAgICBwcml2YXRlIF9hc3NldHM6IEFzc2V0PE9iamVjdD5bXSA9IFtdO1xuICAgIHByaXZhdGUgX3BhcmVudDogR2FtZU9iamVjdCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9jcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfcnVuTG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfaW50ZXJhY3RhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9yYW5CZWdpbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX29wYWNpdHk6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfY3VsbElmT3V0T2ZCb3VuZHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvL3ByaXZhdGUgX29uRGVzdHJveTogRXZlbnQwID0gbmV3IEV2ZW50MCgpO1xuICAgIHByaXZhdGUgX3ByZWNyZWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBDb25zdHJ1Y3QgYSBHYW1lT2JqZWN0IHdpdGggdGhlIHN1cHBsaWVkIHBvc2l0aW9uIGFuZCBib3VuZHMuIFRoaXNcbiAgICAqIGlzIGFuIGVtcHR5IEdhbWVPYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIG5vZGUgZm9yIHRoZSBsYXlvdXQgc3lzdGVtIG9yXG4gICAgKiBjYW4gYmUgZXh0ZW5kZWQgYnkgb3RoZXIgY2xhc3NlcyB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgb3IgZHJhd2luZy4gSWZcbiAgICAqIHRoZSBzdXBwbGllZCBwb3NpdGlvbiBpcyBudWxsLCB0aGUgR2FtZU9iamVjdCBzaXRzIG91dHNpZGUgdGhlIG1haW5cbiAgICAqIGRyYXdpbmcgaGVpcmFyY2h5LlxuICAgICogQHBhcmFtIHBvc2l0aW9uIGEgUG9zaXRpb24gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbG9jYXRpb24gb2YgdGhpcyBHYW1lT2JqZWN0c1xuICAgICogaW4gdGhlIGdhbWUgd29ybGQuXG4gICAgKiBAcGFyYW0gYm91bmRzIGEgQm91bmRzIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGJvdW5kaW5nIHNpemUgb2YgdGhpcyBHYW1lT2JqZWN0XG4gICAgKiBpbiB0aGUgZ2FtZSB3b3JsZC5cbiAgICAqKi9cbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm06IFRyYW5zZm9ybSlcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzKVxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiB8IFRyYW5zZm9ybSwgYm91bmRzPzogQm91bmRzKVxuICAgIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pXG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKHBvc2l0aW9uLCBib3VuZHMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fdHJhbnNmb3JtKVxuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtLmdhbWVPYmplY3QgPSB0aGlzOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFRoZSBwYXJlbnQgR2FtZU9iamVjdCBpbiB0aGUgR2FtZU9iamVjdCB0cmVlLiBBIEdhbWVPYmplY3Qgb25seSBoYXMgYVxuICAgICogcGFyZW50IGlmIGl0IGhhcyBiZWVuIGFkZGVkIGFzIGEgY2hpbGQgdG8gYW5vdGhlciBHYW1lT2JqZWN0LiBHYW1lT2JqZWN0c1xuICAgICogdGhhdCBzdGFuZCBvdXRzaWRlIHRoZSBHYW1lT2JqZWN0IHRyZWUgZG8gbm90IGhhdmUgcGFyZW50cy4gQSBHYW1lT2JqZWN0XG4gICAgKiBjYW4gb25seSBoYXZlIGEgc2luZ2xlIHBhcmVudCwgYW5kIHNob3VsZCBub3QgZG9taW5hdGUgaXRzIHBhcmVudCBhcyBhXG4gICAgKiBjaGlsZC5cbiAgICAqL1xuICAgIGdldCBwYXJlbnQoKTogR2FtZU9iamVjdCB7IHJldHVybiB0aGlzLl9wYXJlbnQ7IH1cbiAgICBzZXQgcGFyZW50KHZhbDogR2FtZU9iamVjdCkgeyB0aGlzLl9wYXJlbnQgPSB2YWw7IH1cblxuICAgIC8qKiBHZXQgdGhlIFRyYW5zZm9ybSBhc3NvY2lhdGVkIHdpdGggdGhpcyBHYW1lT2JqZWN0ICovXG4gICAgZ2V0IHRyYW5zZm9ybSgpOiBUcmFuc2Zvcm0geyByZXR1cm4gdGhpcy5fdHJhbnNmb3JtOyB9XG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIEdhbWVPYmplY3RzIGhhcyBubyBtb3JlIGFzc2V0cyB0byBsb2FkLlxuICAgICovXG4gICAgZ2V0IGxvYWRlZCgpOiBib29sZWFuXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMucnVuTG9hZClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IGxvYWRlZCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fYXNzZXRzLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Fzc2V0c1tpXS5sb2FkZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2FkZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgR2FtZU9iamVjdCBhbmQgYWxsIG9mIHRoZSBHYW1lT2JqZWN0cyBpdCBjb250YWluc1xuICAgICAqIGhhdmUgbm8gbW9yZSBhc3NldHMgdG8gbG9hZC5cbiAgICAgKi9cbiAgICBnZXQgc3VidHJlZUxvYWRlZCgpOiBib29sZWFuXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLl9jaGlsZHJlbi5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGlsZHJlbltpXS5zdWJ0cmVlTG9hZGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9hZGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBgbG9hZGAgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCBvbmNlLiBUaGlzIHNob3VsZCBtZWFuXG4gICAgKiB0aGF0IGFueSByZXNvdXJjZXMgaGF2ZSBiZWd1biBsb2FkaW5nLCBldmVuIGlmIGxvYWRpbmcgaXMgbm90IGNvbXBsZXRlLlxuICAgICovXG4gICAgZ2V0IHJ1bkxvYWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9ydW5Mb2FkOyB9XG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYGNyZWF0ZWAgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCBvbmNlLiBUaGlzIHNob3VsZCBtZWFuc1xuICAgICogdGhhdCB0aGUgR2FtZU9iamVjdCBpcyByZWFkeSB0byB1c2UgYW5kIGhhdmUgbWFpbiBsb29wIG1ldGhvZHMsIGVnLiB1cGRhdGUsXG4gICAgKiBkcmF3IGNhbGxlZC5cbiAgICAqL1xuICAgIGdldCBjcmVhdGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY3JlYXRlZDsgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFycmF5IG9mIEFzc2V0cyBzdG9yZWQgb24gdGhpcyBHYW1lT2JqZWN0LlxuICAgICAqL1xuICAgIGdldCBhc3NldHMoKTogQXNzZXQ8T2JqZWN0PltdIHsgcmV0dXJuIHRoaXMuX2Fzc2V0czsgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBHYW1lT2JqZWN0cyBpbW1lZGlhdGVseSBkb21pbmF0ZWQgYnkgdGhpcyBvbmUgaW4gdGhlIEdhbWVPYmplY3RcbiAgICAqIHRyZWUuIENoaWxkcmVuIGNhbiBiZSBhZGRlZCB1c2luZyB0aGUgYGFkZENoaWxkYCBtZXRob2QsIG9yIHJlbW92ZWQgd2l0aFxuICAgICogdGhlIGByZW1vdmVDaGlsZGAgbWV0aG9kLiBPdGhlcndpc2UsIHRoaXMgYXJyYXkgc2hvdWxkIG5vdCBiZSBkaXJlY3RseVxuICAgICogbW9kaWZpZWQuXG4gICAgKi9cbiAgICBnZXQgY2hpbGRyZW4oKTogR2FtZU9iamVjdFtdIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuOyB9XG5cbiAgICAvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIGJlZ2luKCksIHVwZGF0ZSgpLCBvciBlbmQoKSBpcyBjYWxsZWQgb24gdGhpcyBnYW1lIG9iamVjdCBvciBpdHMgY2hpbGRyZW4gICovXG4gICAgc2V0IGFjdGl2ZSh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fYWN0aXZlID0gdmFsO31cbiAgICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICAvKipcbiAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgR2FtZU9iamVjdCBzdWJ0cmVlIHNob3VsZCBhY2NlcHQgYW55IGludGVyYWN0aW9uXG4gICAgKiB3aXRoIHRoZSBwbGF5ZXIuIEdhbWVPYmplY3RzIHRoYXQgcHJvdmlkZSB1c2VyIGludGVyZmFjZXMgc2hvdWxkIHJlc2VwY3RcbiAgICAqIHRoaXMgdmFsdWUuXG4gICAgKi9cbiAgICBzZXQgaW50ZXJhY3RhYmxlKHZhbDogYm9vbGVhbikgeyB0aGlzLl9pbnRlcmFjdGFibGUgPSB2YWw7fVxuICAgIGdldCBpbnRlcmFjdGFibGUoKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGFibGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGFyZW50KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmludGVyYWN0YWJsZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBHYW1lT2JqZWN0IHN1YnRyZWUgc2hvdWxkIGJlIHZpc2libGUsIGllLiBkcmF3bi4gVGhpc1xuICAgICogZGV0ZXJtaW5lcyB3aGV0aGVyIGBkcmF3KClgIGlzIGNhbGxlZCBvbiB0aGlzIGdhbWUgb2JqZWN0IG9yIGl0cyBjaGlsZHJlbi4gQXNcbiAgICAqIGByZXF1ZXN0RHJhdygpYCBvbmx5IHdvcmtzIGlmIHRoZSBvYmplY3QgaXMgdmlzaWJsZSwgaGVyZSB3ZSBlbnN1cmUgdG8gY2FsbCBpdFxuICAgICogd2hpbGUgdmlzaWJsZSBpcyB0cnVlLlxuICAgICovXG4gICAgc2V0IHZpc2libGUodmFsOiBib29sZWFuKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IHZhbClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF2YWwpICBcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3REcmF3KCk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsO1xuICAgICAgICAgICAgaWYgKHZhbClcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3REcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl92aXNpYmxlOyB9XG5cbiAgICAvKipcbiAgICAqIFRoZSBvcGFjaXR5LCBvciBhbHBoYSB2YWx1ZSwgb2YgdGhpcyBHYW1lT2JqZWN0IGFuZCBpdHMgY2hpbGRyZW4uIEEgdmFsdWVcbiAgICAqIGJldHdlZW4gMC0xLiBUaGUgb3BhY2l0eSB3aXRoIHdoaWNoIGFuIG9iamVjdCBpcyBkcmF3biBpcyBjYWxjdWxhdGVkIGJ5XG4gICAgKiBtdWx0aXBseWluZyB0aGlzIHZhbHVlIHJlY3Vyc2l2ZXkgdXAgdGhlIHRyZWUuIFRodXMgYSBvYmplY3Qgd2l0aCBvcGFjaXR5XG4gICAgKiAwLjUgaW4gYSBwYXJlbnQgb2Ygb3BhY2l0eSAwLjUgaXMgZHJhd24gd2l0aCBhbiBvcGFjaXR5IG9mIDAuMjUuXG4gICAgKi9cbiAgICBnZXQgb3BhY2l0eSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fb3BhY2l0eTsgfVxuICAgIHNldCBvcGFjaXR5KHZhbDogbnVtYmVyKSB7IHRoaXMuX29wYWNpdHkgPSB2YWw7IH1cblxuICAgIC8qKlxuICAgICAqIEFuIEV2ZW50IHRoYXQgaXMgZmlyZWQgb25jZSB0aGlzIEdhbWVPYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLlxuICAgICAqL1xuICAgIC8vVE9ETzogVGhpcyB3YXMgdXNlZCBpbiBQaHlzaWNzL2NvbGxpc2lvbnMgR3JvdXBzLCBidXQgd2UncmUgbm93IGRvaW5nIHRoaW5ncyBkaWZmZXJlbnRseVxuICAgIC8vIGFuZCBjYW4gaG9wZWZ1bGx5IGF2b2lkIGNsdXR0ZXJpbmcgdGhlIG1haW4gR2FtZU9iamVjdFxuICAgIC8vZ2V0IG9uRGVzdHJveSgpIHsgcmV0dXJuIHRoaXMuX29uRGVzdHJveTsgfVxuXG4gICAgLyoqIFxuICAgICAqIElmIHRoaXMgaXMgc2V0IHRvIHRydWUsIGRvQ3JlYXRlIHdpbGwgYmUgcnVuIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzXG4gICAgICogR2FtZU9iamVjdCBpcyBhY3RpdmUuIFNldCB0byB0cnVlIHRvIGdldCBpbmFjdGl2ZSBvYmplY3RzIChlZy4gY2xvc2VkIGZyYW1lcylcbiAgICAgKiB0byBjcmVhdGUgdGhlbXNlbHZlcyByZWFkeSBmb3IgdXNlLlxuICAgICAqL1xuICAgIGdldCBwcmVjcmVhdGUoKSB7IHJldHVybiB0aGlzLl9wcmVjcmVhdGU7IH1cbiAgICBzZXQgcHJlY3JlYXRlKHZhbCkgeyB0aGlzLl9wcmVjcmVhdGUgPSB2YWw7IH1cblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQgb2JqZWN0cyBhcmUgbm90IERyYXdDdWxsZWQ6IHRoZXkgYXJlIGRyYXduIHdoZXRoZXIgb3Igbm90IHRoZXkgb3ZlcmxhcFxuICAgICAqIHRoZWlyIHBhcmVudCBHYW1lT2JqZWN0J3MgVHJhbnNmb3JtLiBAc2VlIGRyYXdDdWxsZWQuIFNldCBjdWxsSWZPdXRPZkJvdW5kcyB0byB0cnVlIHRvIFxuICAgICAqIGVuYWJsZSBkcmF3IGN1bGxpbmcuXG4gICAgICovXG4gICAgZ2V0IGN1bGxJZk91dE9mQm91bmRzKCkgeyByZXR1cm4gdGhpcy5fY3VsbElmT3V0T2ZCb3VuZHM7IH1cbiAgICBzZXQgY3VsbElmT3V0T2ZCb3VuZHModmFsKSB7IHRoaXMuX2N1bGxJZk91dE9mQm91bmRzID0gdmFsOyB9XG5cbiAgICAvKipcbiAgICAqIEFkZCBhIEdhbWVPYmplY3QgaW50byB0aGUgR2FtZU9iamVjdCB0cmVlIGFzIGEgY2hpbGQgb2YgdGhpcyBHYW1lT2JqZWN0LlxuICAgICogVGhpcyBzZXRzIHRoZSBgcGFyZW50YCB2YWx1ZSBmb3IgdGhlIG5ldyBjaGlsZC4gQSBHYW1lT2JqZWN0IHNob3VsZCBvbmx5XG4gICAgKiBldmVyIGJlIHRoZSBjaGlsZCBvZiBhIHNpbmdsZSBHYW1lT2JqZWN0IGF0IGEgdGltZS5cbiAgICAqIEBwYXJhbSBjaGlsZCB0aGUgR2FtZU9iamVjdCB0byBjaGlsZCB0byB0aGlzIG9uZVxuICAgICovXG4gICAgYWRkQ2hpbGQ8VCBleHRlbmRzIEdhbWVPYmplY3Q+KGNoaWxkOiBUKTogVFxuICAgIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFkZGluZyBjaGlsZCB0byBHYW1lT2JqZWN0LCBidXQgY2hpbGQgYWxyZWFkeSBoYXMgcGFyZW50ISBHYW1lT2JqZWN0cyBtdXN0IG5vdCBhcHBlYXIgbW9yZSB0aGFuIG9uY2UgaW4gdGhlIEdhbWVPYmplY3QgdHJlZS4gSWYgeW91IHdhbnQgdG8gbW92ZSBhIEdhbWVPYmplY3QsIGZpcnN0IGRlLXBhcmVudCBpdC5cIik7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXNzZXQgd2l0aCB0aGUgcHJvdmlkZWQgZmlsZW5hbWUsIHdoaWNoIGlzIG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgICAqIGlmIGl0IGhhcyBiZWVuIGFkZGVkIHRvIHRoaXMgR2FtZU9iamVjdC4gVGhpcyBzaG91bGQgaG9sZCB0aGUgbG9hZGVkIGFzc2V0XG4gICAgICogKHNvIGxvbmcgYXMgaXQgaXMgbm90IGNhbGxlZCBiZWZvcmUgb3IgaW5zaWRlIGxvYWQoKSkuIFRoZSBcbiAgICAgKiBAcGFyYW0gZmlsZW5hbWUgdGhlIGZpbGVuYW1lIG9mIHRoZSBhc3NldCB0aGF0IGhhcyBiZWVuIGFkZGVkXG4gICAgICovXG4gICAgZ2V0QXNzZXQ8VD4oZmlsZW5hbWU6IHN0cmluZyk6IFRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fYXNzZXRzLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5fYXNzZXRzW2ldLmZpbGVuYW1lID09PSBmaWxlbmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hc3NldHNbaV0uYXNzZXQgYXMgVDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXNzZXQgZm91bmQgd2l0aCB0aGF0IG5hbWUgb24gR2FtZU9iamVjdFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlY3Vyc2l2ZWx5IGNhbGwgYGxvYWQoKWAgb24gdGhpcyBHYW1lT2JqZWN0IGFuZCBpdHMgc3VidHJlZS4gVGhpcyBzaG91bGRcbiAgICAqIG9ubHkgdXN1YWxseSBiZSBjYWxsZWQgYXMgcGFydCBvZiB0aGUgbWFpbiBsb29wLlxuICAgICoqL1xuICAgIGRvTG9hZChsb2FkZXI6IEFzc2V0TG9hZGVyKVxuICAgIHtcbiAgICAgICAgaWYgKCEodGhpcy5fcnVuTG9hZCkpXG4gICAgICAgICAgICB0aGlzLl9ydW5Mb2FkID0gdGhpcy5sb2FkKGxvYWRlcik7XG4gICAgICAgIGZvciAobGV0IGk9MCwgbGVuID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuW2ldLmRvTG9hZChsb2FkZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJsb2FkIHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSBhbnkgbG9hZGluZ1xuICAgICAqIG9mIGFzc2V0cyB0aGF0IGhhcyB0byBvY2NvdXIsIGdlbmVyYWxseSB1c2luZyB0aGUgTG9hZGVyIGFuZCBhZGRpbmdcbiAgICAgKiB0aGVtIHRvIHRoZSBHYW1lT2JqZWN0IGFzIGFzc2V0cy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbG9hZGVyIFxuICAgICAqIEByZXR1cm4gdHJ1ZSBpZiBsb2FkaW5nIGhhcyBjb21tZW5jZWQsIGZhbHNlIGlmIHRoaXMgZnVuY3Rpb24gc2hvdWxkXG4gICAgICogYmUgY2FsbGVkIGFnYWluXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGxvYWQobG9hZGVyOiBBc3NldExvYWRlcik6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgLyoqXG4gICAgKiBBZGRzIHRoZSBwcm92aWRlZCBhc3NldCB0byB0aGlzIEdhbWVPYmplY3QgaWYgbm90IGEgZHVwbGljYXRlIGZpbGVuYW1lXG4gICAgKiBAcGFyYW0gYXNzZXQgdGhlIGFzc2V0IHByb3ZpZGVkIGJ5IHRoZSBMb2FkZXJcbiAgICAqKi9cbiAgICBhZGRBc3NldDxUPihhc3NldDogQXNzZXQ8VD4pOiBBc3NldDxUPlxuICAgIHtcbiAgICAgICAgaWYgKGFzc2V0ID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMuYXNzZXRzLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5fYXNzZXRzW2ldLmZpbGVuYW1lID09PSBhc3NldC5maWxlbmFtZSlcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFmb3VuZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hc3NldHMucHVzaChhc3NldCk7XG4gICAgICAgICAgICByZXR1cm4gYXNzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZWN1cnNpdmVseSBjYWxscyBgY3JlYXRlYCB0aHJvdWdoIHRoZSB0cmVlIG9mIEdhbWVPYmplY3RzLiBJZiBhIEdhbWVPYmplY3RzXG4gICAgKiBoYXMgbm90IGJlZW4gbG9hZGVkIChpZS4gbG9hZCgpIGhhcyBub3QgYmVlbiBydW4pLCB0aGVuIGNhbGwgbG9hZCBpbnN0ZWFkLiBUaGlzXG4gICAgKiBzaG91bGQgb25seSB1c3VhbGx5IGJlIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBtYWluIGxvb3AuXG4gICAgKiBcbiAgICAqIEBwYXJhbSB0aW1pbmcgYSBUaW1pbmcgb2JqZWN0XG4gICAgKiBAcGFyYW0gbG9hZGVyIGFuIEFzc2V0TG9hZGVyXG4gICAgKiBAcGFyYW0gZW52aXJvbm1lbnQgYW4gRW52aXJvbm1lbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0gaW5wdXREZXZpY2VzIElPIGludGVyZmFjZXNcbiAgICAqL1xuICAgIGRvQ3JlYXRlKHRpbWluZzogVGltaW5nLCBsb2FkZXI6IEFzc2V0TG9hZGVyLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5fcnVuTG9hZClcbiAgICAgICAgICAgIHRoaXMuZG9Mb2FkKGxvYWRlcik7XG4gICAgICAgIGlmICh0aGlzLmxvYWRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNyZWF0ZWRUaGlzUnVuID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3JlYXRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVkVGhpc1J1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGUodGltaW5nLCBlbnZpcm9ubWVudCwgaW5wdXREZXZpY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGk9MCwgbGVuID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbltpXS5kb0NyZWF0ZSh0aW1pbmcsIGxvYWRlciwgZW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcyk7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChjcmVhdGVkVGhpc1J1bilcbiAgICAgICAgICAgICAgICB0aGlzLmFmdGVyQ3JlYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3REcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJjbGFzc2VzIG9mIEdhbWVPYmplY3Qgc2hvdWxkIHBlcmZvcm0gYW55IGluaXRpYWwgc2V0dXAgb2YgdGhlIEdhbWVPYmplY3RcbiAgICAgKiB0aGF0IHNob3VsZCBub3QgaGFwcGVuIGluIHRoZSBjb25zdHJ1Y3RvciBoZXJlLCBzdWNoIGFzIGFkZGluZyBjaGlsZHJlbi4gVGhpc1xuICAgICAqIGlzIGNhbGxlZCBieSB0aGUgbWFpbiBsb29wIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgR2FtZU9iamVjdCBpcyBuZWVkZWQuIFRvXG4gICAgICogcnVuIHRoaXMgaW4gYWR2YW5jZSwgQHNlZSBwcmVjcmVhdGUuXG4gICAgICogXG4gICAgICogQ3JlYXRlIGlzIG5vdCBjYWxsZWQgb24gYSBHYW1lT2JqZWN0IG9yIGl0cyBjaGlsZHJlbiB1bnRpbCBhbnkgYXNzZXRzIGFkZGVkXG4gICAgICogdG8gaXQgaW4gYGxvYWQoKWAgYXJlIGxvYWRlZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY3JlYXRlKHRpbWluZzogVGltaW5nLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcyk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgZG9DcmVhdGUoKSBoYXMgYmVlbiBjYWxsZWQgb24gdGhpcyBvYmplY3QgYW5kIGFsbCBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICogTm90ZSB0aGF0IGNoaWxkcmVuIG1heSBub3QgYmUgY3JlYXRlZCBpZiB0aGV5IGFyZSB3YWl0aW5nIGZvciBhbiBhc3NldHNcbiAgICAgKiB0byBsb2FkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZnRlckNyZWF0ZSgpOiB2b2lkIHt9XG5cbiAgICAvKipcbiAgICAqIFJlY3Vyc2l2ZWx5IGNhbGxzIGJlZ2luKCkgdGhyb3VnaCB0aGUgdHJlZSBvZiBHYW1lT2JqZWN0cy4gR2FtZU9iamVjdHMgbXVzdFxuICAgICogZmlyc3QgaGF2ZSBiZWVuIGNyZWF0ZWQuIElmIGEgR2FtZU9iamVjdCBoYXMgbm90IGJlZW4gY3JlYXRlZCwgdGhpcyBjYWxsc1xuICAgICogZG9DcmVhdGUoKSB3aGljaCBjYW4gaW4gdHVybiBjYWxsIGRvTG9hZCgpLiBJZiBhIEdhbWVPYmplY3QgaXMgY3JlYXRlZFxuICAgICogaW1tZWRpYXRlbHkgKGllLiB0aGVyZSBpcyBubyBsb2FkIHdhaXQpLCBiZWdpbigpIHdpbGwgYmUgY2FsbGVkIGltbWVkaWF0ZWx5LlxuICAgICogVGhpcyBzaG91bGQgb25seSB1c3VhbGx5IGJlIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBtYWluIGxvb3AuXG4gICAgKlxuICAgICogQHBhcmFtIHRpbWluZyBhIFRpbWluZyBvYmplY3RcbiAgICAqIEBwYXJhbSBsb2FkZXIgYSBMb2FkZXJcbiAgICAqIEBwYXJhbSBlbnZpcm9ubWVudCBhbiBFbnZpcm9ubWVudCBvYmplY3RcbiAgICAqIEBwYXJhbSBpbnB1dERldmljZXMgaW5wdXQgZGV2aWNlc1xuICAgICovXG4gICAgZG9CZWdpbih0aW1pbmc6IFRpbWluZywgbG9hZGVyOiBBc3NldExvYWRlciwgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBpbnB1dERldmljZXMpOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY3JlYXRlZClcbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5CZWdpbih0aW1pbmcsIGxvYWRlciwgZW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcyk7XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9DcmVhdGUodGltaW5nLCBsb2FkZXIsIGVudmlyb25tZW50LCBpbnB1dERldmljZXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jcmVhdGVkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW5CZWdpbih0aW1pbmcsIGxvYWRlciwgZW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuX3ByZWNyZWF0ZSkgJiYgKCF0aGlzLl9jcmVhdGVkKSlcbiAgICAgICAgICAgIHRoaXMuZG9DcmVhdGUodGltaW5nLCBsb2FkZXIsIGVudmlyb25tZW50LCBpbnB1dERldmljZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3J1bkJlZ2luKHRpbWluZzogVGltaW5nLCBsb2FkZXI6IEFzc2V0TG9hZGVyLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcylcbiAgICB7XG4gICAgICAgIHRoaXMuX3JhbkJlZ2luID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaT10aGlzLl9jaGlsZHJlbi5sZW5ndGgtMTtpPj0wO2ktLSlcbiAgICAgICAgICAgIGlmICh0aGlzLl9jaGlsZHJlbltpXSlcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbltpXS5kb0JlZ2luKHRpbWluZywgbG9hZGVyLCBlbnZpcm9ubWVudCwgaW5wdXREZXZpY2VzKTtcbiAgICAgICAgdGhpcy5iZWdpbih0aW1pbmcsIGVudmlyb25tZW50LCBpbnB1dERldmljZXMpO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBBbHdheXMgY2FsbGVkIG9uY2UgcGVyIGZyYW1lIGJlZm9yZSBgdXBkYXRlKClgLCBgZHJhdygpYCBhbmQgYGVuZCgpYC5cbiAgICAgKiBcbiAgICAgKiBUaGlzIGlzIGNhbGxlZCBpbiByZXZlcnNlIG9yZGVyIHRocm91Z2ggdGhlIEdhbWVPYmplY3QgdHJlZTogbGFzdCB0byBmaXJzdCBhbmQgYm90dG9tIHRvIHRvcC5cbiAgICAgKiBHYW1lT2JqZWN0cyBkcmF3biBhdCB0aGUgZnJvbnQgKGllLiBsYXN0KSBhcmUgdXBkYXRlZCBmaXJzdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdGltaW5nIGEgVGltaW5nIG9iamVjdFxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudCBhbiBFbnZpcm9ubWVudCBvYmplY3RcbiAgICAgKiBAcGFyYW0gaW5wdXREZXZpY2VzIGlucHV0IGRldmljZXNcbiAgICAqL1xuICAgIHByb3RlY3RlZCBiZWdpbih0aW1pbmc6IFRpbWluZywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBpbnB1dERldmljZXMpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiBSZWN1cnNpdmVseSBjYWxscyB1cGRhdGUgdGhyb3VnaCB0aGUgdHJlZSBvZiBHYW1lT2JqZWN0cy4gSW4gb3JkZXIgZm9yXG4gICAgKiBHYW1lT2JqZWN0cyB0byBiZSB1cGRhdGVkLCB0aGV5IG11c3QgaGF2ZSBiZWVuIGNyZWF0ZWQuIElmIGEgR2FtZU9iamVjdHNcbiAgICAqIGhhcyBub3QgYmVlbiBjcmVhdGVkLCB0aGlzIGNhbGxzIGRvQ3JlYXRlKCkuIFRoaXMgc2hvdWxkIG9ubHkgdXN1YWxseVxuICAgICogYmUgY2FsbGVkIGFzIHBhcnQgb2YgdGhlIG1haW4gbG9vcC5cbiAgICAqIFxuICAgICogQHBhcmFtIHRpbWluZyBhIFRpbWluZyBvYmplY3RcbiAgICAqL1xuICAgIGRvVXBkYXRlKHRpbWluZzogVGltaW5nKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zZm9ybSlcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS51cGRhdGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fcmFuQmVnaW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9dGhpcy5fY2hpbGRyZW4ubGVuZ3RoLTE7aT49MDtpLS0pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NoaWxkcmVuW2ldKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbltpXS5kb1VwZGF0ZSh0aW1pbmcpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodGltaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJsb2FkIHRoaXMgdG8gZG8gdGhpbmdzIHRoYXQgaGFwcGVuIGF0IGEgZml4ZWQgdGltZVxuICAgICAqIGludGVydmFsIGluIHRoZSBtYWluIGxvb3AuIENhbGxlZCB6ZXJvIG9yIG1vcmUgdGltZXMgcGVyIGZyYW1lIGFmdGVyXG4gICAgICogYGJlZ2luKClgIGFuZCBiZWZvcmUgYGRyYXcoKWAgYW5kIGBlbmQoKWAuXG4gICAgICogXG4gICAgICogVGhpcyBpcyBjYWxsZWQgaW4gcmV2ZXJzZSBvcmRlciB0aHJvdWdoIHRoZSAgdHJlZTogbGFzdCB0byBmaXJzdCBhbmQgYm90dG9tIHRvIHRvcC5cbiAgICAgKiBHYW1lT2JqZWN0cyBkcmF3biBhdCB0aGUgZnJvbnQgKGllLiBsYXN0KSBhcmUgdXBkYXRlZCBmaXJzdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdGltaW5nIGEgVGltaW5nIG9iamVjdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGUodGltaW5nOiBUaW1pbmcpOiB2b2lkIHt9XG5cbiAgICAvKipcbiAgICAqIFJlY3Vyc2l2ZWx5IGNhbGxzIGRyYXcgdGhyb3VnaCB0aGUgdHJlZSBvZiBHYW1lT2JqZWN0cy4gSW4gb3JkZXIgZm9yXG4gICAgKiBHYW1lT2JqZWN0cyB0byBiZSBkcmF3biwgdGhleSBtdXN0IGhhdmUgYmVlbiBjcmVhdGVkIGFuZCBiZSB2aXNpYmxlLlxuICAgICogQHBhcmFtIGNvbnRleHQyRCB0aGUgaW50ZXJmYWNlIHRvIGNhbGwgZHJhd2luZyBjb21tYW5kcyB0aHJvdWdoXG4gICAgKi9cbiAgICBkb0RyYXcoY2FtZXJhOiBDYW1lcmEpOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAoKHRoaXMuX2NyZWF0ZWQpICYmICh0aGlzLl92aXNpYmxlKSAmJiAodGhpcy5fdHJhbnNmb3JtKSAmJiAodGhpcy5fb3BhY2l0eSA+IDApICYmICh0aGlzLl90cmFuc2Zvcm0uaGFzUG9zaXRpb24oKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByb3RhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnJvdGF0aW9uICUgMipNYXRoLlBJICE9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBheCA9IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi5hbmNob3JYKDAuNSkgLSBjYW1lcmEueCgpO1xuICAgICAgICAgICAgICAgIGxldCBheSA9IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi5hbmNob3JZKDAuNSkgLSBjYW1lcmEueSgpO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQudHJhbnNsYXRlKGF4LCBheSlcbiAgICAgICAgICAgICAgICBjYW1lcmEuY29udGV4dDJELnJvdGF0ZSh0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ucm90YXRpb24pO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQudHJhbnNsYXRlKC1heCwgLWF5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nT3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBpZiAoY2FtZXJhLmNvbnRleHQyRClcbiAgICAgICAgICAgICAgICBzdGFydGluZ09wYWNpdHkgPSB0aGlzLl9zZXREcmF3aW5nT3BhY2l0eShjYW1lcmEuY29udGV4dDJEKTtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhjYW1lcmEpO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wLCBsZW4gPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuW2ldLmRvRHJhdyhjYW1lcmEpO1xuICAgICAgICAgICAgaWYgKGNhbWVyYS5jb250ZXh0MkQpXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0aW5nT3BhY2l0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuY29udGV4dDJELmdsb2JhbEFscGhhID0gc3RhcnRpbmdPcGFjaXR5O1xuICAgICAgICAgICAgaWYgKHJvdGF0ZWQpXG4gICAgICAgICAgICAgICAgY2FtZXJhLmNvbnRleHQyRC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGBnbG9iYWxBbHBoYWAgcHJvcGVydHkgb2YgdGhlIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAqIHRvIGNvcnJlc3BvbmQgdG8gdGhlIG9wYWNpdHkgb2YgdGhpcyBHYW1lT2JqZWN0LlxuICAgICAqIEBwYXJhbSBjb250ZXh0MkQgXG4gICAgICogQHJldHVybnMgdGhlIG9yaWdpbmFsIGBnbG9iYWxBbHBoYWAgYmVmb3JlIG1vZGlmaWNhdGlvbiwgb3IgdW5kZWZpbmVkXG4gICAgICogaWYgdGhlIG9wYWNpdHkgb2YgdGhpcyBHYW1lT2JqZWN0IGlzIDEuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9zZXREcmF3aW5nT3BhY2l0eShjb250ZXh0MkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX29wYWNpdHkgIT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbCA9IGNvbnRleHQyRC5nbG9iYWxBbHBoYTtcbiAgICAgICAgICAgIGNvbnRleHQyRC5nbG9iYWxBbHBoYSA9IGNvbnRleHQyRC5nbG9iYWxBbHBoYSAqIHRoaXMuX29wYWNpdHk7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdhbWVPYmplY3RzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBkcmF3IHRoZW1zZWx2ZXMgdG8gdGhlXG4gICAgKiBwcm92aWRlZCBkcmF3aW5nIGNvbnRleHQuIFRoaXMgaXMgY2FsbGVkIG9uY2UgcGVyIGZyYW1lIG9uIGFsbCBjcmVhdGVkXG4gICAgKiBHYW1lT2JqZWN0cyB0aGF0IGFyZSBub3QgdmlzaWJsZSAob3IgdGhlIGRlc2VuZGFudCBvZiBhIHZpc2libGUgR2FtZU9iamVjdCkuXG4gICAgKiBcbiAgICAqIFRoaXMgaXMgY2FsbGVkIGluIGRlZmF1bHQgb3JkZXIgdGhyb3VnaCB0aGUgR2FtZU9iamVjdCB0cmVlOiBmaXJzdCB0byBsYXN0IGFuZCB0b3AgdG8gYm90dG9tLlxuICAgICogVGhlIGxhc3QsIGlubmVybW9zdCBub2RlIHdpbGwgYmUgdGhlIGxhc3QgdG8gYmUgZHJhd24gKGFuZCB0aHVzIGFwcGVhciBhdCB0aGUgZnJvbnQpLlxuICAgICoqL1xuICAgcHJvdGVjdGVkIGRyYXcoY2FtZXJhOiBDYW1lcmEpOiB2b2lkIHt9XG5cbiAgICAvKipcbiAgICAqIFJlY3Vyc2l2ZWx5IGNhbGxzIGVuZCB0aHJvdWdoIHRoZSB0cmVlIG9mIEdhbWVPYmplY3RzLiBPbmx5IEdhbWVPYmplY3RzXG4gICAgKiB0aGF0IGhhdmUgYmVlbiBjcmVhdGVkIGhhdmUgZW5kIGNhbGxlZC4gVGhpcyBzaG91bGQgdXN1YWxseSBvbmx5IGJlIGNhbGxlZFxuICAgICogYXMgcGFydCBvZiB0aGUgbWFpbiBsb29wLlxuICAgICogXG4gICAgKiBAcGFyYW0gdGltaW5nIGEgVGltaW5nIG9iamVjdFxuICAgICovXG4gICAgZG9FbmQodGltaW5nOiBUaW1pbmcpOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAodGhpcy5fcmFuQmVnaW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9dGhpcy5fY2hpbGRyZW4ubGVuZ3RoLTE7aT49MDtpLS0pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NoaWxkcmVuW2ldKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbltpXS5kb0VuZCh0aW1pbmcpO1xuICAgICAgICAgICAgdGhpcy5fcmFuQmVnaW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW5kKHRpbWluZyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlIHRoYXQgYW55IGJ1ZmZlcmVkIHJlbmRlcnMgdGhhdCBpbmNsdWRlIHRoaXMgR2FtZU9iamVjdCBhcmUgb3V0ZGF0ZWQgYW5kXG4gICAgICogZHJhdygpIHNob3VsZCBiZSBjYWxsZWQuIFRoaXMgaXMgcGFzc2VkIHVwIHRoZSBoZWlyYXJjaHkgYW5kIG9ubHkgYWN0ZWQgdXBvbiBieVxuICAgICAqIEdhbWVPYmplY3RzIHRoYXQgbWFuYWdlIHJlbmRlcmluZyBjb250ZXh0cy5cbiAgICAgKi9cbiAgICByZXF1ZXN0RHJhdyhub3RGaXJzdD86IGJvb2xlYW4pOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAoKHRoaXMuX3Zpc2libGUpICYmICh0aGlzLl9wYXJlbnQpICYmICghKHRoaXMuX2N1bGxJZk91dE9mQm91bmRzICYmIHRoaXMuaXNEcmF3Q3VsbGVkKCkpKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50LnJlcXVlc3REcmF3KHRydWUpO1xuICAgICAgICAgICAgLy9pZiAobm90Rmlyc3QpXG4gICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnR5cGVOYW1lKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgb2JqZWN0IHNob3VsZCBiZSBkcmF3Q3VsbGVkLCBpZS4gbm90IGRyYXduL25vdCBmaXJlIHJlcXVlc3REcmF3c1xuICAgICAqIGJlY2F1c2UgaXQgZG9lcyBub3Qgb3ZlcmxhcCBpdCdzIHBhcmVudC4gVG8gY2hhbmdlIHRoaXMgYmVoYXZpb3VyIEBzZWUgaWdub3JlRHJhd0N1bGxcbiAgICAgKi9cbiAgICBpc0RyYXdDdWxsZWQoKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYgKCh0aGlzLl90cmFuc2Zvcm0pICYmICh0aGlzLl9wYXJlbnQpICYmICh0aGlzLl9wYXJlbnQuY3JlYXRlZCkgJiYgKHRoaXMuX3BhcmVudC50cmFuc2Zvcm0pKVxuICAgICAgICAgICAgcmV0dXJuICEoVHJhbnNmb3JtLm92ZXJsYXBzKHRoaXMuX3RyYW5zZm9ybSwgdGhpcy5fcGFyZW50LnRyYW5zZm9ybSkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIHRoaXMgR2FtZU9iamVjdCBmcm9tIGl0cyBwYXJlbnQgaW4gdGhlIEdhbWVPYmplY3QgdHJlZS5cbiAgICAqL1xuICAgIHJlcXVlc3RSZW1vdmFsKCk6IHZvaWQgeyB0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7IH1cblxuICAgIC8qKlxuICAgICogUmVtb3ZlcyBhIGNoaWxkIEdhbWVPYmplY3QgZnJvbSB0aGlzIEdhbWVPYmplY3Qgc28gdGhhdCB0aGUgY2hpbGQgaXMgbm9cbiAgICAqIGxvbmdlciBpbiB0aGUgR2FtZU9iamVjdCB0cmVlIGFuZCBjYWxscyBgZGVzdHJveWAgb24gaXQuXG4gICAgKiBAcGFyYW0gY2hpbGQgdGhlIEdhbWVPYmplY3QgdG8gcmVtb3ZlLCB3aGljaCBtdXN0IGJlIGEgY2hpbGQgb2YgVGhpc1xuICAgICogR2FtZU9iamVjdC5cbiAgICAqL1xuICAgIHJlbW92ZUNoaWxkKGNoaWxkOiBHYW1lT2JqZWN0KTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5kZXBhcmVudChjaGlsZCk7XG4gICAgICAgIGNoaWxkLmRvRGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHByb3ZpZGVkIEdhbWVPYmplY3QgaXMgYSBjaGlsZCBvZiB0aGlzIEdhbWVPYmplY3QsIHJlbW92ZSBpdCB3aXRob3V0XG4gICAgICogZGVzdHJveWluZyBpdFxuICAgICAqICovXG4gICAgZGVwYXJlbnQoY2hpbGQ6IEdhbWVPYmplY3QpOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgIEdDUmVtb3ZlRWxlbWVudCh0aGlzLl9jaGlsZHJlbixpbmRleCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXRlcmF0aXZlbHkgZGVzdHJveSBhbGwgY2hpbGRyZW4sIHRoaXMgR2FtZU9iamVjdCdzIFRyYW5zZm9ybSxcbiAgICAgKiBhbmQgdGhlbiBjYWxsIGBkZXN0cm95KClgIG9uIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGRvRGVzdHJveSgpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpPTAsIGxlbiA9IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLl9jaGlsZHJlbltpXS5kb0Rlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zZm9ybSlcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZWQpXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgLy90aGlzLl9vbkRlc3Ryb3kuY2FsbCgpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBbHdheXMgcnVucyBvbmNlIHBlciBmcmFtZSBhZnRlciBgZHJhdygpYC4gVGhpcyBpcyBjYWxsZWQgaW4gcmV2ZXJzZSBvcmRlciB0aHJvdWdoIHRoZSBcbiAgICAgKiBHYW1lT2JqZWN0IHRyZWU6IGxhc3QgdG8gZmlyc3QgYW5kIGJvdHRvbSB0byB0b3AuIEdhbWVPYmplY3RzIGRyYXduIGF0IHRoZSBmcm9udCAoaWUuIGxhc3QpIGFyZVxuICAgICAqIHVwZGF0ZWQgZmlyc3QuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGVuZCh0aW1pbmc6IFRpbWluZyk6IHZvaWQge31cbiAgICBcbiAgICAvKipcbiAgICAgKiBTdWJjbGFzc2VzIHNob3VsZCBvdmVybG9hZCB0aGlzIHRvIHBlcmZvcm0gYW55IGNsZWFuLXVwIHRoYXQgbmVlZHNcbiAgICAgKiB0byBoYXBwZW4gd2hlbiB0aGlzIEdhbWVPYmplY3QgaXMgZGVzdHJveWVkLiBGb3IgZXhhbXBsZSwgZW5zdXJpbmdcbiAgICAgKiB0aGVyZSBhcmUgbm8gcmVmZXJlbmNlcyB0byB0aGlzIEdhbWVPYmplY3QgaW4gRXZlbnRzIGJ5IHVucmVnaXN0ZXJpbmdcbiAgICAgKiBpdHNlbGYgZnJvbSB0aGVtLiBEZXN0cm95IGlzIG9ubHkgY2FsbGVkIGlmIGEgR2FtZU9iamVjdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkZXN0cm95KCkgeyB9XG59XG4iLCJpbXBvcnQgRW52aXJvbm1lbnQgZnJvbSBcIi4uLy4uL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgRmFjdG9yeSBmcm9tIFwiLi4vRmFjdG9yeVwiO1xuaW1wb3J0IFRpbWluZyBmcm9tIFwiLi4vLi4vVGltaW5nXCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9Qb3NpdGlvblwiO1xuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcbmltcG9ydCBNb3VzZSBmcm9tIFwiZW5naW5lL2lucHV0L01vdXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEdhbWVPYmplY3RcbntcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBtaW5DYW52YXNTaXplID0gMjU2OyAvLyBiaWcgZW5vdWdoIHRvIHRyaWdnZXIgaGFyZHdhcmUgYWNjZWxsZXJhdGlvbiBvbiBzb21lIGJyb3dzZXJzIChDaHJvbWUpXG4gICAgXG4gICAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9jb250ZXh0MkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfb2xkRGltZW5zaW9uWDogbnVtYmVyO1xuICAgIHByaXZhdGUgX29sZERpbWVuc2lvblk6IG51bWJlcjtcbiAgICBwcml2YXRlIF9waXhlbFJhdGlvOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGFzQWxwaGFDaGFubmVsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGRlYnVnRGlzYWJsZUNhY2hlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczpCb3VuZHMpXG4gICAge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgYm91bmRzKTtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLmhhc1Bvc2l0aW9uKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnguYmluZCh0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LmJpbmQodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFRoZSB4IHBvc2l0aXRpb24gb2YgdGhlIHRvcC1sZWZ0IG9mIHRoZSBjYW1lcmEncyAndmlldycgaW4gdGhlIGdhbWUgc3BhY2UgKi9cbiAgICB4KCk6IG51bWJlciB7IHJldHVybiAwOyB9XG5cbiAgICAvKiogVGhlIHkgcG9zaXRpdGlvbiBvZiB0aGUgdG9wLWxlZnQgb2YgdGhlIGNhbWVyYSdzICd2aWV3JyBpbiB0aGUgZ2FtZSBzcGFjZSAqL1xuICAgIHkoKTogbnVtYmVyIHsgcmV0dXJuIDA7IH1cblxuICAgIC8qKiBSZXR1cm5zIHRoZSByZW5kZXJlciBmb3IgdGhpcyBDYW1lcmEgYXMgYSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgKi9cbiAgICBnZXQgY29udGV4dDJEKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7IHJldHVybiB0aGlzLl9jb250ZXh0MkQ7IH1cblxuICAgIGdldCBjb250YWluZXIoKSB7IHJldHVybiB0aGlzLl9jb250YWluZXI7IH1cbiAgICBzZXQgY29udGFpbmVyKHZhbCkgeyB0aGlzLl9jb250YWluZXIgPSB2YWw7IH1cbiAgICBcbiAgICBnZXQgY2FudmFzKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzOyB9XG5cbiAgICAvKiogUmV0dXJucyB0aGUgZGltZW5zaW9uIG9mIHRoZSB1c2VkIGFyZWEgb2YgdGhlIGNhbnZhcyAobWF5IGRpZmZlciBmcm9tIGFjdHVhbCBjYW52YXMgc2l6ZSBkdWUgdG8gaGFyZHdhcmUgb3B0aW1pc2F0aW9uKSAgKi9cbiAgICBnZXQgY2FudmFzVXNlZFdpZHRoKCkgeyByZXR1cm4gTWF0aC5jZWlsKHRoaXMudHJhbnNmb3JtLmJvdW5kcy53aWR0aCgpICogdGhpcy5waXhlbFJhdGlvKTsgfVxuICAgIGdldCBjYW52YXNVc2VkSGVpZ2h0KCkgeyByZXR1cm4gTWF0aC5jZWlsKHRoaXMudHJhbnNmb3JtLmJvdW5kcy5oZWlnaHQoKSAqIHRoaXMucGl4ZWxSYXRpbyk7IH1cbiAgICBnZXQgYmFja2dyb3VuZENvbG9yKCkgeyByZXR1cm4gdGhpcy5fYmFja2dyb3VuZENvbG9yOyB9XG4gICAgc2V0IGJhY2tncm91bmRDb2xvcih2YWwpIHsgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gdmFsOyB9XG4gICAgZ2V0IHBpeGVsUmF0aW8oKSB7IHJldHVybiB0aGlzLl9waXhlbFJhdGlvOyB9XG4gICAgZ2V0IGhhc0FscGhhQ2hhbm5lbCgpIHsgcmV0dXJuIHRoaXMuX2hhc0FscGhhQ2hhbm5lbDsgfVxuICAgIHNldCBoYXNBbHBoYUNoYW5uZWwodmFsKVxuICAgIHtcbiAgICAgICAgaWYgKCh0aGlzLl9oYXNBbHBoYUNoYW5uZWwgIT09IHZhbCkgJiYgKHRoaXMuX2NhbnZhcykpXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0MkQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7YWxwaGE6IHZhbH0pO1xuICAgICAgICB0aGlzLl9oYXNBbHBoYUNoYW5uZWwgPSB2YWw7IFxuICAgIH1cblxuICAgIGNsZWFyKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmRDb2xvcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dDJELmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgdGhpcy5fY29udGV4dDJELmZpbGxSZWN0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCAvIHRoaXMucGl4ZWxSYXRpbywgdGhpcy5fY2FudmFzLmhlaWdodCAvIHRoaXMucGl4ZWxSYXRpbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fY29udGV4dDJELmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMucGl4ZWxSYXRpbywgdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5waXhlbFJhdGlvKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlKHRpbWluZzogVGltaW5nLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcylcbiAgICB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZURyYXdCdWZmZXIoZW52aXJvbm1lbnQpXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIpXG4gICAgICAgICAgICBlbnZpcm9ubWVudC5hZGRDYW52YXNUb1BhZ2UodGhpcy5jYW52YXMsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICAgIGlmICghRmFjdG9yeS5jb250ZXh0MkQpXG4gICAgICAgICAgICBGYWN0b3J5LmNvbnRleHQyRCA9IHRoaXMuY29udGV4dDJEO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBiZWdpbih0aW1pbmc6IFRpbWluZywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBpbnB1dERldmljZXMgOiB7bW91c2U6IE1vdXNlfSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpbnB1dERldmljZXMubW91c2UpXG4gICAgICAgICAgICAgICAgaW5wdXREZXZpY2VzLm1vdXNlLmh0bWxFbGVtZW50Rm9yT2Zmc2V0ID0gdGhpcy5fY2FudmFzO1xuICAgICAgICAgICAgZW52aXJvbm1lbnQuYWN0aXZlQ29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9oYXNSZXNpemVkKCkgfHwgKHRoaXMuX3BpeGVsUmF0aW8gIT09IGVudmlyb25tZW50LmRldmljZVBpeGVsUmF0aW8pKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemVDYW52YXModGhpcy50cmFuc2Zvcm0uYm91bmRzLndpZHRoKCksIHRoaXMudHJhbnNmb3JtLmJvdW5kcy5oZWlnaHQoKSwgZW52aXJvbm1lbnQuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3REcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kZWJ1Z0Rpc2FibGVDYWNoZSlcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdERyYXcoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jcmVhdGVEcmF3QnVmZmVyKGVudmlyb25tZW50OiBFbnZpcm9ubWVudClcbiAgICB7XG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGVudmlyb25tZW50LmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLl9jb250ZXh0MkQgPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7YWxwaGE6IHRoaXMuaGFzQWxwaGFDaGFubmVsfSk7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZUNhbnZhcyh0aGlzLnRyYW5zZm9ybS5ib3VuZHMud2lkdGgoKSx0aGlzLnRyYW5zZm9ybS5ib3VuZHMuaGVpZ2h0KCksIGVudmlyb25tZW50LmRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVzaXplQ2FudmFzKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBkZXZpY2VQaXhlbFJhdGlvOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLl9waXhlbFJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBNYXRoLm1heCh3aWR0aCAqIHRoaXMucGl4ZWxSYXRpbywgQ2FtZXJhLm1pbkNhbnZhc1NpemUpO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAgTWF0aC5tYXgoaGVpZ2h0ICogdGhpcy5waXhlbFJhdGlvLCBDYW1lcmEubWluQ2FudmFzU2l6ZSk7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gTWF0aC5tYXgodGhpcy50cmFuc2Zvcm0uYm91bmRzLndpZHRoKCksIENhbWVyYS5taW5DYW52YXNTaXplL3RoaXMucGl4ZWxSYXRpbykgKyAncHgnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSAgTWF0aC5tYXgodGhpcy50cmFuc2Zvcm0uYm91bmRzLmhlaWdodCgpLCBDYW1lcmEubWluQ2FudmFzU2l6ZS90aGlzLnBpeGVsUmF0aW8pICsgJ3B4JztcblxuICAgICAgICB0aGlzLl9vbGREaW1lbnNpb25YID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX29sZERpbWVuc2lvblkgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NvbnRleHQyRC5zZXRUcmFuc2Zvcm0oMSwwLDAsMSwwLDApO1xuICAgICAgICB0aGlzLl9jb250ZXh0MkQuc2NhbGUodGhpcy5waXhlbFJhdGlvLCB0aGlzLnBpeGVsUmF0aW8pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhc1Jlc2l6ZWQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICgodGhpcy5fb2xkRGltZW5zaW9uWCAhPT0gdGhpcy50cmFuc2Zvcm0uYm91bmRzLndpZHRoKCkpIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuX29sZERpbWVuc2lvblkgIT09IHRoaXMudHJhbnNmb3JtLmJvdW5kcy5oZWlnaHQoKSkpXG4gICAgfVxuXG59IiwiaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiZW5naW5lL1RyYW5zZm9ybVwiO1xuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcImVuZ2luZS9nYW1lb2JqZWN0L0dhbWVPYmplY3RcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vUG9zaXRpb25cIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcImVuZ2luZS9nYW1lb2JqZWN0L2NvbnRleHQyZC9Db250ZXh0MkRDYW1lcmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd0J1ZmZlciBleHRlbmRzIEdhbWVPYmplY3RcbntcbiAgICByZWFkb25seSB0eXBlTmFtZTogc3RyaW5nID0gXCJEcmF3QnVmZmVyXCI7XG5cbiAgICBwcml2YXRlIF9kcmF3UmVxdWVzdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZm9yZ2V0SW50ZXJuYWxzT25EcmF3OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfY2FudmFzRHJhd0ZpeGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jYW1lcmFzOiBDYW1lcmFbXSA9IFtdO1xuICAgIHByaXZhdGUgX21haW5DYW1lcmE6IENhbWVyYTtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgYm91bmRzOiBCb3VuZHMsIGFkZERlZmF1bHRDYW1lcmE/OiBib29sZWFuKVxuICAgIHtcbiAgICAgICAgc3VwZXIobmV3IERyYXdUcmFuc2Zvcm0ocG9zaXRpb24sIGJvdW5kcykpO1xuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24pXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5yZXNldERyYXdQb3MgPSB0cnVlO1xuICAgICAgICBpZiAoYWRkRGVmYXVsdENhbWVyYSAhPT0gZmFsc2UpXG4gICAgICAgICAgICB0aGlzLmFkZENhbWVyYSh0aGlzLmFkZENoaWxkKG5ldyBDYW1lcmEobmV3IFBvc2l0aW9uKCksIEJvdW5kcy5maWxsKSkpO1xuICAgIH1cblxuICAgIGdldCBmb3JnZXRJbnRlcm5hbHNPbkRyYXcoKSB7IHJldHVybiB0aGlzLl9mb3JnZXRJbnRlcm5hbHNPbkRyYXc7IH1cbiAgICBzZXQgZm9yZ2V0SW50ZXJuYWxzT25EcmF3KHZhbCkgeyB0aGlzLl9mb3JnZXRJbnRlcm5hbHNPbkRyYXcgPSB2YWw7IH1cblxuICAgIGdldCBkcmF3UmVxdWVzdGVkKCkgeyByZXR1cm4gdGhpcy5fZHJhd1JlcXVlc3RlZDsgfVxuXG4gICAgZ2V0IGNhbWVyYXMoKSB7IHJldHVybiB0aGlzLl9jYW1lcmFzOyB9XG5cbiAgICBnZXQgbWFpbkNhbWVyYSgpIHsgcmV0dXJuIHRoaXMuX21haW5DYW1lcmE7IH1cbiAgICBzZXQgbWFpbkNhbWVyYSh2YWwpIHsgdGhpcy5fbWFpbkNhbWVyYSA9IHZhbDsgfVxuXG4gICAgZG9EcmF3KGNhbWVyYTogQ2FtZXJhKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCh0aGlzLl9kcmF3UmVxdWVzdGVkKSAmJiAoISh0aGlzLl9jYW52YXNEcmF3Rml4ZWQpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3UmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYz0wLGxlbj10aGlzLl9jYW1lcmFzLmxlbmd0aDtjPGxlbjtjKyspXG4gICAgICAgICAgICAgICAgICAgIGlmICgodGhpcy5fY2FtZXJhc1tjXS52aXNpYmxlKSAmJiAodGhpcy5fY2FtZXJhc1tjXS5jcmVhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdDYW1lcmEodGhpcy5fY2FtZXJhc1tjXSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZm9yZ2V0SW50ZXJuYWxzT25EcmF3KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLmNoaWxkcmVuLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXNEcmF3Rml4ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhdyhjYW1lcmEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdERyYXcobm90Rmlyc3Q/OiBib29sZWFuKVxuICAgIHtcbiAgICAgICAgdGhpcy5fZHJhd1JlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgIHN1cGVyLnJlcXVlc3REcmF3KG5vdEZpcnN0KTtcbiAgICB9XG5cbiAgICBhZGRDYW1lcmEoY2FtZXJhOiBDYW1lcmEpOiBDYW1lcmFcbiAgICB7XG4gICAgICAgIHRoaXMuX2NhbWVyYXMucHVzaChjYW1lcmEpO1xuICAgICAgICBpZiAodGhpcy5fY2FtZXJhcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICB0aGlzLl9tYWluQ2FtZXJhID0gY2FtZXJhO1xuICAgICAgICByZXR1cm4gY2FtZXJhO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkcmF3KGNhbWVyYTogQ2FtZXJhKVxuICAgIHtcbiAgICAgICAgaWYgKGNhbWVyYSAmJiAodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24pICYmICh0aGlzLnZpc2libGUpICYmIHRoaXMubWFpbkNhbWVyYSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nT3BhY2l0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wYWNpdHkgIT09IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0aW5nT3BhY2l0eSA9ICBjYW1lcmEuY29udGV4dDJELmdsb2JhbEFscGhhO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuZ2xvYmFsQWxwaGEgPSBzdGFydGluZ09wYWNpdHkgKiB0aGlzLm9wYWNpdHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnJlc2V0RHJhd1BvcyA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHBvc1ggPSB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54KCkgLSBjYW1lcmEueCgpO1xuICAgICAgICAgICAgbGV0IHBvc1kgPSB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55KCkgLSBjYW1lcmEueSgpO1xuICAgICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy50cmFuc2Zvcm0uYm91bmRzLndpZHRoKCk7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy50cmFuc2Zvcm0uYm91bmRzLmhlaWdodCgpXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5yZXNldERyYXdQb3MgPSB0cnVlO1xuICAgICAgICAgICAgY2FtZXJhLmNvbnRleHQyRC5kcmF3SW1hZ2UodGhpcy5tYWluQ2FtZXJhLmNhbnZhcywgMCwwLCBNYXRoLnJvdW5kKHdpZHRoKSAqIHRoaXMubWFpbkNhbWVyYS5waXhlbFJhdGlvLCBNYXRoLnJvdW5kKGhlaWdodCkgKiB0aGlzLm1haW5DYW1lcmEucGl4ZWxSYXRpbywgTWF0aC5yb3VuZChwb3NYKSwgTWF0aC5yb3VuZChwb3NZKSwgTWF0aC5yb3VuZCh3aWR0aCksIE1hdGgucm91bmQoaGVpZ2h0KSk7XG5cbiAgICAgICAgICAgIGlmIChzdGFydGluZ09wYWNpdHkpXG4gICAgICAgICAgICAgICAgY2FtZXJhLmNvbnRleHQyRC5nbG9iYWxBbHBoYSA9IHN0YXJ0aW5nT3BhY2l0eTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RyYXdDYW1lcmEoY2FtZXJhOiBDYW1lcmEpXG4gICAge1xuICAgICAgICBjYW1lcmEuY29udGV4dDJELmdsb2JhbEFscGhhID0gMVxuICAgICAgICBjYW1lcmEuY2xlYXIoKTtcbiAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLmNoaWxkcmVuLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmRvRHJhdyhjYW1lcmEpO1xuICAgIH1cbn1cblxuY2xhc3MgRHJhd1RyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybVxue1xuICAgIHJlY2FsY3VsYXRlKGV4Y2x1ZGVEcmF3Q2FjaGU/OiBib29sZWFuKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYgKCEoZXhjbHVkZURyYXdDYWNoZSkgJiYgKCEodGhpcy5ib3VuZHMuaGFzUmVzaXplZEF1dG9VcGRhdGUoKSkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBleGNsdWRlRHJhd0NhY2hlID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1cGVyLmdhbWVPYmplY3QucmVxdWVzdERyYXcoKTsgLy8gVGhlIGNoaWxkcmVuIG9mIHRoaXMgRHJhd0J1ZmZlciB3aWxsIG5vdCBjYWxsIHJlcXVlc3REcmF3LCBidXQgd2Uga25vdyB0aGlzIGRyYXdCdWZmZXIgbmVlZHMgdG8gYmUgcmVkcmF3blxuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIucmVjYWxjdWxhdGUoZXhjbHVkZURyYXdDYWNoZSk7XG4gICAgfVxufSIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9Qb3NpdGlvblwiO1xuaW1wb3J0IFRleHRCdWlsZGVyIGZyb20gXCIuL1RleHRCdWlsZGVyXCI7XG5pbXBvcnQgVGV4dFN0eWxlIGZyb20gXCJlbmdpbmUvc3R5bGUvVGV4dFN0eWxlXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9jb250ZXh0MmQvQ29udGV4dDJEQ2FtZXJhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBHYW1lT2JqZWN0XG57XG4gICAgcHJvdGVjdGVkIF90ZXh0U3R5bGU6IFRleHRTdHlsZTtcbiAgICBwcm90ZWN0ZWQgX3JlY2FsY3VsYXRlVGV4dEJvdW5kczogYm9vbGVhbjtcbiAgICBwcm90ZWN0ZWQgX3dpZHRocyA9IFtdO1xuICAgIHByb3RlY3RlZCBfd2lkZXN0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9saW5lcyA9IFtdO1xuICAgIHByaXZhdGUgX2ZvbnRMaW5lOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgX2NvdW50TGluZXMgPSAwO1xuXG4gICAgcHJvdGVjdGVkIF9jYW52YXNGdW5jdGlvbjogKGNvbnRleHQyRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkID0gbnVsbDtcblxuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIlRleHRcIjtcbiAgICBcbiAgICBnZXQgY29sb3IoKSB7IHJldHVybiB0aGlzLl90ZXh0U3R5bGUuY29sb3VyOyB9XG4gICAgZ2V0IGZvbnRGYWNlKCkgeyByZXR1cm4gdGhpcy5fdGV4dFN0eWxlLmZvbnRGYWNlOyB9XG4gICAgZ2V0IHNpemUoKSB7IHJldHVybiB0aGlzLl90ZXh0U3R5bGUuc2l6ZTsgfVxuICAgIGdldCBsaW5lU3BhY2luZygpICB7cmV0dXJuIHRoaXMuX3RleHRTdHlsZS5saW5lU3BhY2luZzsgfVxuICAgIGdldCBjZW50cmVkKCkgeyByZXR1cm4gdGhpcy5fdGV4dFN0eWxlLmNlbnRyZWQ7IH1cblxuICAgIHNldCB0ZXh0KHZhbDogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYgKHZhbClcbiAgICAgICAgICAgIHRoaXMuX2xpbmVzID0gdmFsLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9saW5lcyA9IFtdO1xuICAgICAgICB0aGlzLnJlcXVlc3REcmF3KCk7XG4gICAgICAgIHRoaXMuX3JlY2FsY3VsYXRlVGV4dEJvdW5kcyA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IGxpbmVzKCkgeyByZXR1cm4gdGhpcy5fbGluZXM7IH1cbiAgICBzZXQgbGluZXModmFsKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbGluZXMgPSB2YWw7XG4gICAgICAgIHRoaXMucmVxdWVzdERyYXcoKTtcbiAgICAgICAgdGhpcy5fcmVjYWxjdWxhdGVUZXh0Qm91bmRzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXQgY2FudmFzRnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9jYW52YXNGdW5jdGlvbjsgfVxuICAgIHNldCBjYW52YXNGdW5jdGlvbih2YWwpIHsgdGhpcy5fY2FudmFzRnVuY3Rpb24gPSB2YWw7IH1cblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgYm91bmRzOiBCb3VuZHMsIGxpbmVzOiBzdHJpbmdbXSB8IHN0cmluZywgdGV4dFN0eWxlOiBUZXh0U3R5bGUpXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBib3VuZHM6IEJvdW5kcywgbGluZXM6IHN0cmluZ1tdIHwgc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBzaXplOiBudW1iZXIsIGZvbnRGYWNlOiBzdHJpbmcsIGxpbmVTcGFjaW5nPzogbnVtYmVyLCB0YXJnZXRXaWR0aD86IG51bWJlciwgY2VudHJlZD86IGJvb2xlYW4pXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBib3VuZHM6IEJvdW5kcywgbGluZXM6IHN0cmluZ1tdIHwgc3RyaW5nLCBjb2xvcjogc3RyaW5nIHwgVGV4dFN0eWxlLCBzaXplPzogbnVtYmVyLCBmb250RmFjZT86IHN0cmluZywgbGluZVNwYWNpbmc/OiBudW1iZXIsIHRhcmdldFdpZHRoPzogbnVtYmVyLCBjZW50cmVkPzogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBib3VuZHMpO1xuICAgICAgICBpZiAoY29sb3IgaW5zdGFuY2VvZiBUZXh0U3R5bGUpXG4gICAgICAgICAgICB0aGlzLl90ZXh0U3R5bGUgPSBjb2xvcjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fdGV4dFN0eWxlID0gbmV3IFRleHRTdHlsZShjb2xvciwgc2l6ZSwgZm9udEZhY2UsIGxpbmVTcGFjaW5nLCB0YXJnZXRXaWR0aCwgY2VudHJlZCB8fCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihsaW5lcykgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICB0aGlzLl9saW5lcyA9IFtsaW5lc107XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX2xpbmVzID0gbGluZXM7XG4gICAgICAgIHRoaXMuX2ZvbnRMaW5lID0gdGhpcy5zaXplICsgXCJwdCBcIiArIHRoaXMuZm9udEZhY2U7XG4gICAgfVxuXG4gICAgbWVhc3VyZVRleHRGb3JCb3VuZHMoY29udGV4dDJEOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpXG4gICAge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybS5ib3VuZHMuY2xlYXJEaW1lbnNpb25zKCk7XG4gICAgICAgIGxldCB0YiA9IG5ldyBUZXh0QnVpbGRlcih0aGlzLmxpbmVzLCBjb250ZXh0MkQsIHRoaXMuY29sb3IsIHRoaXMuc2l6ZSwgdGhpcy5mb250RmFjZSwgdGhpcy5saW5lU3BhY2luZylcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uYm91bmRzLmFkZERpbWVuc2lvbih0Yi50ZXh0RGltZW5zaW9uKCkpO1xuICAgICAgICB0aGlzLl9yZWNhbGN1bGF0ZVRleHRCb3VuZHMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KGNhbWVyYTogQ2FtZXJhKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzRnVuY3Rpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNGdW5jdGlvbihjYW1lcmEuY29udGV4dDJEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbWVyYS5jb250ZXh0MkQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY2FtZXJhLmNvbnRleHQyRC5mb250ID0gdGhpcy5fZm9udExpbmU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlY2FsY3VsYXRlVGV4dEJvdW5kcylcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZVRleHRGb3JCb3VuZHMoY2FtZXJhLmNvbnRleHQyRCk7XG4gICAgICAgICBcbiAgICAgICAgbGV0IHBvc1ggPSB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54KCkgLSBjYW1lcmEueCgpO1xuICAgICAgICBsZXQgcG9zWSA9IHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkoKSAtIGNhbWVyYS55KCk7XG4gICAgICAgIGxldCB5UG9zID0gMDtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGZvciAobGV0IGk9MDtpPHRoaXMuX2xpbmVzLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNlbnRyZWQpXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gKHRoaXMuX3dpZGVzdC10aGlzLl93aWR0aHNbaV0pLzI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuZmlsbFRleHQodGhpcy5fbGluZXNbaV0sIHBvc1ggKyBvZmZzZXQsIHBvc1kgKyB5UG9zICsgdGhpcy5zaXplKTtcbiAgICAgICAgICAgIHlQb3MgKz0gdGhpcy5fdGV4dFN0eWxlLnNpemUgKiB0aGlzLmxpbmVTcGFjaW5nO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmNhbnZhc0Z1bmN0aW9uKVxuICAgICAgICAgICAgY2FtZXJhLmNvbnRleHQyRC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICBcbn1cbiIsImltcG9ydCBCb3VuZHMgZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9Cb3VuZHNcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIjtcbmltcG9ydCBQaXhlbERpbWVuc2lvbiBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2RpbWVuc2lvbi9QaXhlbERpbWVuc2lvblwiO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vUG9zaXRpb25cIjtcbmltcG9ydCBUZXh0U3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlL1RleHRTdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QnVpbGRlclxue1xuICAgIHByb3RlY3RlZCBfbGluZXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJvdGVjdGVkIF90ZXh0U3R5bGU6IFRleHRTdHlsZTtcbiAgICBwcm90ZWN0ZWQgX3dpZHRocyA9IFtdO1xuICAgIHByb3RlY3RlZCBfd2lkZXN0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jb250ZXh0MkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcm90ZWN0ZWQgX2NvdW50TGluZXMgPSAwO1xuXG4gICAgY29uc3RydWN0b3IobGluZXM6IHN0cmluZ1tdIHwgc3RyaW5nLCBjb250ZXh0MkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IFRleHRTdHlsZSlcbiAgICBjb25zdHJ1Y3RvcihsaW5lczogc3RyaW5nW10gfCBzdHJpbmcsIGNvbnRleHQyRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nIHwgVGV4dFN0eWxlLCBzaXplOiBudW1iZXIsIGZvbnQ6IHN0cmluZywgbGluZVNwYWNpbmc/OiBudW1iZXIsIHRhcmdldFdpZHRoPzogbnVtYmVyLCBjZW50cmVkPzogYm9vbGVhbilcbiAgICBjb25zdHJ1Y3RvcihsaW5lczogc3RyaW5nW10gfCBzdHJpbmcsIGNvbnRleHQyRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nIHwgVGV4dFN0eWxlLCBzaXplPzogbnVtYmVyLCBmb250Pzogc3RyaW5nLCBsaW5lU3BhY2luZz86IG51bWJlciwgdGFyZ2V0V2lkdGg/OiBudW1iZXIsIGNlbnRyZWQ/OiBib29sZWFuKVxuICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZihsaW5lcykgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICB0aGlzLl9saW5lcyA9IGxpbmVzLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9saW5lcyA9IGxpbmVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0MkQgPSBjb250ZXh0MkQ7XG4gICAgICAgIGlmIChjb2xvciBpbnN0YW5jZW9mIFRleHRTdHlsZSlcbiAgICAgICAgICAgIHRoaXMuX3RleHRTdHlsZSA9IGNvbG9yO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl90ZXh0U3R5bGUgPSBuZXcgVGV4dFN0eWxlKGNvbG9yLCBzaXplLCBmb250LCBsaW5lU3BhY2luZyB8fCAxLCB0YXJnZXRXaWR0aCB8fCB1bmRlZmluZWQsIGNlbnRyZWQgfHwgZmFsc2UpO1xuICAgIH1cblxuICAgIGdldCBjb2xvcigpIHsgcmV0dXJuIHRoaXMuX3RleHRTdHlsZS5jb2xvdXI7IH1cbiAgICBnZXQgZm9udEZhY2UoKSB7IHJldHVybiB0aGlzLl90ZXh0U3R5bGUuZm9udEZhY2U7IH1cbiAgICBnZXQgc2l6ZSgpIHsgcmV0dXJuIHRoaXMuX3RleHRTdHlsZS5zaXplOyB9XG4gICAgZ2V0IGxpbmVTcGFjaW5nKCkgIHtyZXR1cm4gdGhpcy5fdGV4dFN0eWxlLmxpbmVTcGFjaW5nOyB9XG4gICAgZ2V0IHRleHRTdHlsZSgpIHsgcmV0dXJuIHRoaXMuX3RleHRTdHlsZTsgfVxuXG4gICAgc2V0IHRleHQodmFsOiBzdHJpbmcpIHsgdGhpcy5fbGluZXMgPSB2YWwuc3BsaXQoXCJcXG5cIik7IH1cblxuICAgIGdldCBsaW5lcygpIHsgcmV0dXJuIHRoaXMuX2xpbmVzOyB9XG4gICAgc2V0IGxpbmVzKHZhbCkgeyB0aGlzLl9saW5lcyA9IHZhbDsgfVxuXG4gICAgYnVpbGRUZXh0KHBvc2l0aW9uOiBQb3NpdGlvbik6IFRleHRcbiAgICB7XG4gICAgICAgIGxldCB0ZXh0RGltID0gdGhpcy50ZXh0RGltZW5zaW9uKCk7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dChwb3NpdGlvbiwgbmV3IEJvdW5kcyh0ZXh0RGltKSwgdGhpcy5saW5lcywgdGhpcy50ZXh0U3R5bGUpO1xuICAgIH1cblxuICAgIHRleHREaW1lbnNpb24oKTogUGl4ZWxEaW1lbnNpb25cbiAgICB7XG4gICAgICAgIGxldCBscyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5fdGV4dFN0eWxlLnRhcmdldFdpZHRoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0MkQuZm9udCA9IHRoaXMuc2l6ZSArICdwdCAnICsgdGhpcy5mb250RmFjZTtcbiAgICAgICAgICAgIHRoaXMubGluZXMuZm9yRWFjaChsID0+IGxzID0gbHMuY29uY2F0KHRoaXMuX2dldFdyYXBwZWRMaW5lcyh0aGlzLl9jb250ZXh0MkQsIGwsIHRoaXMuX3RleHRTdHlsZS50YXJnZXRXaWR0aCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBscyA9IHRoaXMubGluZXM7XG5cbiAgICAgICAgdGhpcy5fY29udGV4dDJELmZvbnQgPSB0aGlzLnNpemUgKyBcInB0IFwiICsgdGhpcy5mb250RmFjZTtcbiAgICAgICAgbGV0IHdpZGVzdCA9IDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xuICAgICAgICBsZXQgd2lkdGhzID0gW107XG4gICAgICAgIGZvciAobGV0IGk9MDtpPGxzLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoc1tpXSA9IHRoaXMuX2NvbnRleHQyRC5tZWFzdXJlVGV4dChsc1tpXSkud2lkdGg7XG4gICAgICAgICAgICB3aWRlc3QgPSBNYXRoLm1heCh3aWRlc3Qsd2lkdGhzW2ldKTtcbiAgICAgICAgICAgIGlmIChpID09PSBscy5sZW5ndGgtMSlcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gdGhpcy5zaXplO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGhlaWdodCArPSB0aGlzLnNpemUgKiB0aGlzLmxpbmVTcGFjaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saW5lcyA9IGxzO1xuICAgICAgICByZXR1cm4gbmV3IFBpeGVsRGltZW5zaW9uKHdpZGVzdCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBiYXNlZCBvbiBodHRwczovL3d3dy5odG1sNWNhbnZhc3R1dG9yaWFscy5jb20vdHV0b3JpYWxzL2h0bWw1LWNhbnZhcy13cmFwLXRleHQtdHV0b3JpYWwvXG4gICAgcHJvdGVjdGVkIF9nZXRXcmFwcGVkTGluZXMoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0ZXh0OiBzdHJpbmcsIG1heFdpZHRoOiBudW1iZXIpOiBzdHJpbmdbXVxuICAgIHtcbiAgICAgICAgdmFyIHdvcmRzID0gdGV4dC5zcGxpdCgnICcpO1xuICAgICAgICB2YXIgbGluZSA9ICcnO1xuICAgICAgICBsZXQgbGluZXMgPSBbXTtcblxuICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd29yZHMubGVuZ3RoOyBuKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXTtcbiAgICAgICAgICAgIHZhciBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0TGluZSk7XG4gICAgICAgICAgICB2YXIgdGVzdFdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgICAgICAgIGlmICh0ZXN0V2lkdGggPiBtYXhXaWR0aCAmJiBuID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUudHJpbVJpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIGxpbmUgPSB3b3Jkc1tuXSArICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBsaW5lID0gdGVzdExpbmUgKyAnICc7XG4gICAgICAgIH1cbiAgICAgICAgbGluZXMucHVzaChsaW5lLnRyaW1SaWdodCgpKTtcblxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxufSIsImltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL0JvdW5kc1wiO1xuaW1wb3J0IFByb3BvcnRpb25hbERpbWVuc2lvbiBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2RpbWVuc2lvbi9Qcm9wb3J0aW9uYWxEaW1lbnNpb25cIjtcbmltcG9ydCBQb3NpdGlvbiBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL1Bvc2l0aW9uXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9jb250ZXh0MmQvQ29udGV4dDJEQ2FtZXJhXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWN0IGV4dGVuZHMgU2hhcGVcbntcbiAgICByZWFkb25seSB0eXBlTmFtZTogc3RyaW5nID0gXCJSZWN0XCI7XG5cbiAgICBwcm90ZWN0ZWQgX2NhbnZhc0Z1bmN0aW9uOiAoY29udGV4dDJEOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQgPSBudWxsO1xuXG4gICAgZ2V0IGNhbnZhc0Z1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzRnVuY3Rpb247IH1cbiAgICBzZXQgY2FudmFzRnVuY3Rpb24odmFsKSB7IHRoaXMuX2NhbnZhc0Z1bmN0aW9uID0gdmFsOyB9XG5cbiAgICBwcm90ZWN0ZWQgZHJhdyhjYW1lcmE6IENhbWVyYSlcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmNhbnZhc0Z1bmN0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYW1lcmEuY29udGV4dDJELnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRnVuY3Rpb24oY2FtZXJhLmNvbnRleHQyRCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zWCA9IHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngoKSAtIGNhbWVyYS54KCk7XG4gICAgICAgIGxldCBwb3NZID0gdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSgpIC0gY2FtZXJhLnkoKTtcblxuICAgICAgICBpZiAodGhpcy5maWxsU3R5bGUpXG4gICAgICAgICAgICB0aGlzLl9maWxsZWQoY2FtZXJhLmNvbnRleHQyRCwgcG9zWCwgcG9zWSwgdGhpcy50cmFuc2Zvcm0uYm91bmRzLndpZHRoKCksdGhpcy50cmFuc2Zvcm0uYm91bmRzLmhlaWdodCgpKTtcbiAgICAgICAgaWYgKCh0aGlzLmxpbmVXaWR0aCA+IDApICYmICh0aGlzLnN0cm9rZVN0eWxlKSlcbiAgICAgICAgICAgIHRoaXMuX291dGxpbmUoY2FtZXJhLmNvbnRleHQyRCwgcG9zWCwgcG9zWSwgdGhpcy50cmFuc2Zvcm0uYm91bmRzLndpZHRoKCksdGhpcy50cmFuc2Zvcm0uYm91bmRzLmhlaWdodCgpKTtcblxuICAgICAgICBpZiAodGhpcy5jYW52YXNGdW5jdGlvbilcbiAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX291dGxpbmUoY29udGV4dDJEOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsICBwb3NYOiBudW1iZXIsIHBvc1k6IG51bWJlciwgIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgY29udGV4dDJELnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VTdHlsZTtcbiAgICAgICAgY29udGV4dDJELmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICBjb250ZXh0MkQuYmVnaW5QYXRoKClcbiAgICAgICAgY29udGV4dDJELnJlY3QocG9zWCArIHRoaXMubGluZVdpZHRoLzIsIHBvc1kgKyB0aGlzLmxpbmVXaWR0aC8yLCB3aWR0aC10aGlzLmxpbmVXaWR0aCwgaGVpZ2h0LXRoaXMubGluZVdpZHRoKTtcbiAgICAgICAgY29udGV4dDJELnN0cm9rZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZpbGxlZChjb250ZXh0MkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgIHBvc1g6IG51bWJlciwgcG9zWTogbnVtYmVyLCAgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpXG4gICAge1xuICAgICAgICBjb250ZXh0MkQuZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGU7XG4gICAgICAgIGNvbnRleHQyRC5iZWdpblBhdGgoKVxuICAgICAgICBjb250ZXh0MkQuZmlsbFJlY3QocG9zWCwgcG9zWSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsbFJlY3QgZXh0ZW5kcyBSZWN0XG57XG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBib3VuZHM6IEJvdW5kcywgZmlsbFN0eWxlOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgYm91bmRzLCB1bmRlZmluZWQsIGZpbGxTdHlsZSwgMCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3V0bGluZVJlY3QgZXh0ZW5kcyBSZWN0XG57XG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvc2l0aW9uLCBib3VuZHM6IEJvdW5kcywgc3Ryb2tlU3R5bGU6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIpXG4gICAge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgYm91bmRzLCBzdHJva2VTdHlsZSwgdW5kZWZpbmVkLCBsaW5lV2lkdGgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlYnVnUmVjdCBleHRlbmRzIE91dGxpbmVSZWN0XG57XG4gICAgY29uc3RydWN0b3IoY29sb3VyOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIobmV3IFBvc2l0aW9uKCksIG5ldyBCb3VuZHMobmV3IFByb3BvcnRpb25hbERpbWVuc2lvbigxLDEpKSwgY29sb3VyLCBsaW5lV2lkdGgpXG4gICAgfVxufSIsImltcG9ydCBCb3VuZHMgZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9Cb3VuZHNcIjtcbmltcG9ydCBQb3NpdGlvbiBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL1Bvc2l0aW9uXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcImVuZ2luZS9nYW1lb2JqZWN0L2NvbnRleHQyZC9Db250ZXh0MkRDYW1lcmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91bmRlZFJlY3QgZXh0ZW5kcyBTaGFwZVxue1xuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIlJvdW5kZWRSZWN0XCI7XG4gICAgXG4gICAgcHJvdGVjdGVkIF9yYWRpaTogbnVtYmVyW107XG4gICAgcHJvdGVjdGVkIF9jYW52YXNGdW5jdGlvbjogKGNvbnRleHQyRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkID0gbnVsbDtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzLCBzdHJva2VTdHlsZTogc3RyaW5nLCBmaWxsU3R5bGU6IHN0cmluZywgbGluZVdpZHRoOiBudW1iZXIsIHJhZGl1czogbnVtYmVyIHwgbnVtYmVyW10pXG4gICAge1xuICAgICAgICBzdXBlcihwb3NpdGlvbiwgYm91bmRzLCBzdHJva2VTdHlsZSwgZmlsbFN0eWxlLCBsaW5lV2lkdGgpO1xuICAgICAgICBpZiAocmFkaXVzIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICB0aGlzLl9yYWRpaSA9IHJhZGl1cztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fcmFkaWkgPSBbcmFkaXVzLCByYWRpdXMsIHJhZGl1cywgcmFkaXVzXTtcbiAgICB9XG5cbiAgICBnZXQgY2FudmFzRnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9jYW52YXNGdW5jdGlvbjsgfVxuICAgIHNldCBjYW52YXNGdW5jdGlvbih2YWwpIHsgdGhpcy5fY2FudmFzRnVuY3Rpb24gPSB2YWw7IH1cblxuICAgIHByb3RlY3RlZCBkcmF3KGNhbWVyYTogQ2FtZXJhKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzRnVuY3Rpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNGdW5jdGlvbihjYW1lcmEuY29udGV4dDJEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbWVyYS5jb250ZXh0MkQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZVN0eWxlO1xuICAgICAgICBjYW1lcmEuY29udGV4dDJELmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICBjYW1lcmEuY29udGV4dDJELmZpbGxTdHlsZSA9IHRoaXMuZmlsbFN0eWxlO1xuXG4gICAgICAgIGxldCBwb3NYID0gdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCgpIC0gY2FtZXJhLngoKTtcbiAgICAgICAgbGV0IHBvc1kgPSB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55KCkgLSBjYW1lcmEueSgpO1xuXG4gICAgICAgIGxldCBmaWxsZWQgPSAodGhpcy5maWxsU3R5bGUgIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIGxldCBzdHJva2UgPSAodGhpcy5zdHJva2VTdHlsZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5fcm91bmRSZWN0KGNhbWVyYS5jb250ZXh0MkQsIHBvc1gsIHBvc1ksIHRoaXMudHJhbnNmb3JtLmJvdW5kcy53aWR0aCgpLCB0aGlzLnRyYW5zZm9ybS5ib3VuZHMuaGVpZ2h0KCksIHRoaXMuX3JhZGlpLCBmaWxsZWQsIHN0cm9rZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FudmFzRnVuY3Rpb24pXG4gICAgICAgICAgICBjYW1lcmEuY29udGV4dDJELnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBbY29kZSBhZGFwdGVkIGZyb20gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzM2ODExOF1cbiAgICAgKiBEcmF3cyBhIHJvdW5kZWQgcmVjdGFuZ2xlIHVzaW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSB0b3AgbGVmdCB4IGNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSBUaGUgdG9wIGxlZnQgeSBjb29yZGluYXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaWkgVGhlIGNvcm5lciByYWRpdXM7IGFuIGFycmF5IFxuICAgICAqICAgICAgICAgICAgICAgICB0byBzcGVjaWZ5IGRpZmZlcmVudCByYWRpaSBmb3IgY29ybmVyc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmlsbCBXaGV0aGVyIHRvIGZpbGwgdGhlIHJlY3RhbmdsZS5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHN0cm9rZSBXaGV0aGVyIHRvIHN0cm9rZSB0aGUgcmVjdGFuZ2xlLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfcm91bmRSZWN0KGNvbnRleHQyRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGlpOiBudW1iZXJbXSwgZmlsbDogYm9vbGVhbiwgc3Ryb2tlOiBib29sZWFuKVxuICAgIHtcbiAgICAgICAgY29udGV4dDJELmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0MkQubW92ZVRvKHggKyByYWRpaVswXSwgeSk7XG4gICAgICAgIGNvbnRleHQyRC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaWlbMV0sIHkpO1xuICAgICAgICBjb250ZXh0MkQucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGlpWzFdKTtcbiAgICAgICAgY29udGV4dDJELmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpaVsyXSk7XG4gICAgICAgIGNvbnRleHQyRC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaWlbMl0sIHkgKyBoZWlnaHQpO1xuICAgICAgICBjb250ZXh0MkQubGluZVRvKHggKyByYWRpaVszXSwgeSArIGhlaWdodCk7XG4gICAgICAgIGNvbnRleHQyRC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpaVszXSk7XG4gICAgICAgIGNvbnRleHQyRC5saW5lVG8oeCwgeSArIHJhZGlpWzBdKTtcbiAgICAgICAgY29udGV4dDJELnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGlpWzBdLCB5KTtcbiAgICAgICAgY29udGV4dDJELmNsb3NlUGF0aCgpO1xuICAgICAgICBpZiAoZmlsbClcbiAgICAgICAgICAgIGNvbnRleHQyRC5maWxsKCk7XG5cbiAgICAgICAgaWYgKHN0cm9rZSlcbiAgICAgICAgICAgIGNvbnRleHQyRC5zdHJva2UoKTtcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vUG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBHYW1lT2JqZWN0XG57XG4gICAgcmVhZG9ubHkgdHlwZU5hbWU6IHN0cmluZyA9IFwiU2hhcGVcIjtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgYm91bmRzOiBCb3VuZHMsIHN0cm9rZVN0eWxlOiBzdHJpbmcsIGZpbGxTdHlsZTogc3RyaW5nLCBsaW5lV2lkdGg6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBib3VuZHMpO1xuICAgICAgICB0aGlzLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gICAgICAgIHRoaXMuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdHJva2VTdHlsZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2ZpbGxTdHlsZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpbmVXaWR0aDogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG4gICAgZ2V0IHN0cm9rZVN0eWxlKCkgeyByZXR1cm4gdGhpcy5fc3Ryb2tlU3R5bGU7IH1cbiAgICBnZXQgZmlsbFN0eWxlKCkgeyByZXR1cm4gdGhpcy5fZmlsbFN0eWxlOyB9XG4gICAgZ2V0IGxpbmVXaWR0aCgpIHsgcmV0dXJuIHRoaXMuX2xpbmVXaWR0aDsgfVxuXG4gICAgc2V0IHN0cm9rZVN0eWxlKHZhbCkgeyB0aGlzLl9zdHJva2VTdHlsZSA9IHZhbDsgfVxuICAgIHNldCBsaW5lV2lkdGgodmFsKSB7IHRoaXMuX2xpbmVXaWR0aCA9IHZhbDsgfVxuICAgIHNldCBmaWxsU3R5bGUodmFsKSB7IHRoaXMuX2ZpbGxTdHlsZSA9IHZhbDsgfVxufVxuIiwiaW1wb3J0IFRpbWluZyBmcm9tIFwiZW5naW5lL1RpbWluZ1wiO1xuaW1wb3J0IE1vdXNlIGZyb20gXCJlbmdpbmUvaW5wdXQvTW91c2VcIjtcbmltcG9ydCBNb3VzZVRyaWdnZXIgZnJvbSBcIi4vTW91c2VUcmlnZ2VyXCI7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSBcImVuZ2luZS9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gXCJlbmdpbmUvaW5wdXQvUG9pbnRlclwiO1xuaW1wb3J0IHsgRXZlbnQwLCBNb3VzZUV2ZW50IH0gZnJvbSBcImVuZ2luZS91dGlsL0V2ZW50XCI7XG5cbi8qKlxuICogQ2FsbGVkIGFzeW5jaHJvbm91c2x5IChpbW1lZGlhdGVseSkgd2hlbiBhIGNsaWNrIGlzIHJlZ2lzdGVyZWQgb24gdGhpcyBidXR0b24uXG4gKiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHRob3NlIGZ1bmN0aW9ucyB0aGF0IG11c3QgYmUgY2FsbGVkIGluIHRoZSBzYW1lXG4gKiBibG9jayBhcyB0aGUgZXZlbnQgY2FsbCAoZS5nLiByZXF1ZXN0aW5nIGZ1bGxzY3JlZW4pLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3luY0NsaWNrVHJpZ2dlciBleHRlbmRzIE1vdXNlVHJpZ2dlclxue1xuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIkFzeW5jQ2xpY2tUcmlnZ2VyXCI7XG5cbiAgICBvbkNsaWNrOiBFdmVudDAgPSBuZXcgRXZlbnQwKCk7XG5cbiAgICBwcml2YXRlIF9jbGlja0FzeW5jRXZlbnQ6IE1vdXNlRXZlbnQ7XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlKHRpbWluZzogVGltaW5nLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlczogYW55KVxuICAgIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlKHRpbWluZywgZW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcyk7XG4gICAgICAgIHRoaXMuX2NsaWNrQXN5bmNFdmVudCA9IGlucHV0RGV2aWNlcy5tb3VzZS5vbkNsaWNrQXN5bmM7XG4gICAgICAgIGlucHV0RGV2aWNlcy5tb3VzZS5vbkNsaWNrQXN5bmMucHVzaCh0aGlzLl9hc3luY0NsaWNrLmJpbmQodGhpcyksIHRoaXMpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYXN5bmNDbGljayhtb3VzZTogTW91c2UsIHBvaW50ZXI6IFBvaW50ZXIpXG4gICAge1xuICAgICAgICBpZiAoKHRoaXMuX3BvaW50ZXJEYXRhW3BvaW50ZXIuaWRdLmNsaWNrU3RhcnRlZCkgJiYgdGhpcy50cmFuc2Zvcm0uY29udGFpbnNQb2ludChwb2ludGVyLngsIHBvaW50ZXIueSkgJiYgdGhpcy5hY3RpdmUpXG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2suY2FsbCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZXN0cm95KClcbiAgICB7XG4gICAgICAgIHRoaXMuX2NsaWNrQXN5bmNFdmVudC51bnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbn0iLCJpbXBvcnQgTW91c2VUcmlnZ2VyIGZyb20gXCIuL01vdXNlVHJpZ2dlclwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiZW5naW5lL3RyYW5zZm9ybS9Cb3VuZHNcIjtcbmltcG9ydCBQb3NpdGlvbiBmcm9tIFwiZW5naW5lL3RyYW5zZm9ybS9Qb3NpdGlvblwiO1xuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gXCJlbmdpbmUvdXRpbC9FdmVudFwiO1xuaW1wb3J0IE1vdXNlIGZyb20gXCJlbmdpbmUvaW5wdXQvTW91c2VcIjtcbmltcG9ydCBUaW1pbmcgZnJvbSBcImVuZ2luZS9UaW1pbmdcIjtcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tIFwiZW5naW5lL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSBcImVuZ2luZS9pbnB1dC9Qb2ludGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWNrVHJpZ2dlciBleHRlbmRzIE1vdXNlVHJpZ2dlclxue1xuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIkNsaWNrVHJpZ2dlclwiO1xuXG4gICAgcHJvdGVjdGVkIF9vbkNsaWNrOiBNb3VzZUV2ZW50O1xuICAgIGhhbmRsZUNsaWNrczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfZmlyZWRUaGlzVXBkYXRlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzKVxuICAgIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIGJvdW5kcyk7XG4gICAgICAgIHRoaXMuX29uQ2xpY2sgPSBuZXcgTW91c2VFdmVudCgpO1xuICAgIH1cblxuICAgIGdldCBvbkNsaWNrKCk6IE1vdXNlRXZlbnQgeyByZXR1cm4gdGhpcy5fb25DbGljazsgfVxuXG4gICAgc3VwcHJlc3NUaGlzVXBkYXRlKCkgeyB0aGlzLl9maXJlZFRoaXNVcGRhdGUgPSB0cnVlO31cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlQ2xpY2sobW91c2U6IE1vdXNlLCBwb2ludGVyOiBQb2ludGVyKVxuICAgIHtcbiAgICAgICAgaWYgKCghdGhpcy5fZmlyZWRUaGlzVXBkYXRlKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrLmNhbGwobW91c2UsIHBvaW50ZXIpO1xuICAgICAgICAgICAgdGhpcy5fZmlyZWRUaGlzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZUNsaWNrcylcbiAgICAgICAgICAgICAgICBwb2ludGVyLmhhbmRsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJlZ2luKHRpbWluZzogVGltaW5nLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlczogeyBtb3VzZTogTW91c2UgfSlcbiAgICB7XG4gICAgICAgIHRoaXMuX2ZpcmVkVGhpc1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBzdXBlci5iZWdpbih0aW1pbmcsIGVudmlyb25tZW50LCBpbnB1dERldmljZXMpO1xuICAgIH1cbn0iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IEtleWJvYXJkIGZyb20gXCIuLi8uLi9pbnB1dC9LZXlib2FyZFwiO1xuaW1wb3J0IFRpbWluZyBmcm9tIFwiZW5naW5lL1RpbWluZ1wiO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gXCJlbmdpbmUvRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IEV2ZW50MCB9IGZyb20gXCJlbmdpbmUvdXRpbC9FdmVudFwiO1xuaW1wb3J0IHsgR0NSZW1vdmVFbGVtZW50IH0gZnJvbSBcImVuZ2luZS91dGlsL1V0aWxcIjtcblxuZXhwb3J0IGVudW0gS2V5VHJpZ2dlckV2ZW50cyB7IG9uS2V5UHJlc3MsIG9uS2V5TmV3RG93biwgb25LZXlJc0Rvd24sIG9uS2V5VXAgfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlUcmlnZ2VyIGV4dGVuZHMgR2FtZU9iamVjdFxue1xuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIktleVRyaWdnZXJcIjtcblxuICAgIHByb3RlY3RlZCBfa2V5cyA9IFtdXG4gICAgcHJvdGVjdGVkIF9uZXdLZXlzRG93bjogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHN1cGVyKG51bGwsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBrZXljb2RlIFxuICAgICAqIEBwYXJhbSB0cmlnZ2VyIG9wdGlvbmFsLCBkZWZhdWx0cyB0byBLZXlUcmlnZ2VyRXZlbnRzLm9uS2V5SXNEb3duXG4gICAgICogQHJldHVybiBhbiBldmVudCB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUga2V5IHRyaWdnZXIgZXZlbnQgaGFwcGVuc1xuICAgICAqL1xuICAgIGdldEtleUV2ZW50KGtleWNvZGU6IHN0cmluZywgdHJpZ2dlcj86IEtleVRyaWdnZXJFdmVudHMpOiBFdmVudDBcbiAgICB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0cmlnZ2VyID0gS2V5VHJpZ2dlckV2ZW50cy5vbktleUlzRG93bjtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fa2V5cy5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKCh0aGlzLl9rZXlzW2ldLmtleWNvZGUgPT09IGtleWNvZGUpICYmICh0aGlzLl9rZXlzW2ldLnRyaWdnZXIgPT09IHRyaWdnZXIpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1tpXS5ldmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQwKCk7XG4gICAgICAgIHRoaXMuX2tleXMucHVzaCh7a2V5Y29kZToga2V5Y29kZSwgdHJpZ2dlcjogdHJpZ2dlciwgZXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ga2V5Y29kZSBcbiAgICAgKiBAcGFyYW0gdHJpZ2dlclxuICAgICAqIEByZXR1cm4gdHJ1ZSBpZiBhbiBldmVudCB3YXMgcmVtb3ZlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgcmVtb3ZlS2V5RXZlbnQoa2V5Y29kZTogc3RyaW5nLCB0cmlnZ2VyOiBLZXlUcmlnZ2VyRXZlbnRzKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgbGV0IHRvUmVtb3ZlID0gdGhpcy5fa2V5cy5maWx0ZXIoeCA9PiAoeC5rZXljb2RlID09PSBrZXljb2RlKSAmJiAoeC50cmlnZ2VyID09PSB0cmlnZ2VyKSk7XG4gICAgICAgIGlmICh0b1JlbW92ZS5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aTx0b1JlbW92ZS5sZW5ndGg7aSsrKVxuICAgICAgICAgICAgICAgIEdDUmVtb3ZlRWxlbWVudCh0aGlzLl9rZXlzLCB0aGlzLl9rZXlzLmluZGV4T2YodG9SZW1vdmVbaV0pKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBiZWdpbih0aW1pbmc6IFRpbWluZywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBpbnB1dERldmljZXM6IHtrZXlib2FyZDogS2V5Ym9hcmR9KVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3RhYmxlKVxuICAgICAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLl9rZXlzLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tleXNbaV0udHJpZ2dlciA9PT0gS2V5VHJpZ2dlckV2ZW50cy5vbktleVVwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0RGV2aWNlcy5rZXlib2FyZC5pc0tleVVwKHRoaXMuX2tleXNbaV0ua2V5Y29kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzW2ldLmV2ZW50LmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fa2V5c1tpXS50cmlnZ2VyID09PSBLZXlUcmlnZ2VyRXZlbnRzLm9uS2V5SXNEb3duKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0RGV2aWNlcy5rZXlib2FyZC5pc0tleURvd24odGhpcy5fa2V5c1tpXS5rZXljb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXNbaV0uZXZlbnQuY2FsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9rZXlzW2ldLnRyaWdnZXIgPT09IEtleVRyaWdnZXJFdmVudHMub25LZXlQcmVzcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dERldmljZXMua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKHRoaXMuX2tleXNbaV0ua2V5Y29kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzW2ldLmV2ZW50LmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fa2V5c1tpXS50cmlnZ2VyID09PSBLZXlUcmlnZ2VyRXZlbnRzLm9uS2V5TmV3RG93bilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dERldmljZXMua2V5Ym9hcmQuaXNLZXlEb3duKHRoaXMuX2tleXNbaV0ua2V5Y29kZSkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uZXdLZXlzRG93bi5pbmRleE9mKHRoaXMuX2tleXNbaV0ua2V5Y29kZSkgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld0tleXNEb3duLnB1c2godGhpcy5fa2V5c1tpXS5rZXljb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzW2ldLmV2ZW50LmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9uZXdLZXlzRG93bi5pbmRleE9mKHRoaXMuX2tleXNbaV0ua2V5Y29kZSkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgR0NSZW1vdmVFbGVtZW50KHRoaXMuX25ld0tleXNEb3duLCB0aGlzLl9rZXlzW2ldLmtleWNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQm91bmRzIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9Qb3NpdGlvblwiO1xuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcbmltcG9ydCBNb3VzZSBmcm9tIFwiLi4vLi4vaW5wdXQvTW91c2VcIjtcbmltcG9ydCBUaW1pbmcgZnJvbSBcImVuZ2luZS9UaW1pbmdcIjtcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tIFwiZW5naW5lL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSBcImVuZ2luZS9pbnB1dC9Qb2ludGVyXCI7XG5cbmNsYXNzIFBvaW50ZXJEYXRhXG57XG4gICAgaW5Cb3VuZHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjbGlja1N0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0b0Rlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VUcmlnZ2VyIGV4dGVuZHMgR2FtZU9iamVjdFxue1xuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIk1vdXNlVHJpZ2dlclwiO1xuXG4gICAgcHJvdGVjdGVkIF9wb2ludGVyRGF0YTogUG9pbnRlckRhdGFbXSA9IFtdO1xuICAgIHByaXZhdGUgX29ubHlJZlVuaGFuZGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZ2V0IG9ubHlJZlVuaGFuZGxlZCgpIHsgcmV0dXJuIHRoaXMuX29ubHlJZlVuaGFuZGxlZDsgfVxuICAgIHNldCBvbmx5SWZVbmhhbmRsZWQodmFsKSB7IHRoaXMuX29ubHlJZlVuaGFuZGxlZCA9IHZhbDsgfVxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzKVxuICAgIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIGJvdW5kcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZSh0aW1pbmc6IFRpbWluZywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBpbnB1dERldmljZXM6IHttb3VzZTogTW91c2V9KVxuICAgIHtcbiAgICAgICAgd2hpbGUodGhpcy5fcG9pbnRlckRhdGEubGVuZ3RoIDwgaW5wdXREZXZpY2VzLm1vdXNlLm1heFBvaW50ZXJzKVxuICAgICAgICAgICAgdGhpcy5fcG9pbnRlckRhdGEucHVzaChuZXcgUG9pbnRlckRhdGEoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJlZ2luKHRpbWluZyA6IFRpbWluZywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBpbnB1dERldmljZXM6IHttb3VzZTogTW91c2V9KVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3RhYmxlKVxuICAgICAgICAgICAgdGhpcy5jaGVja01vdXNlQWN0aW9ucyhpbnB1dERldmljZXMubW91c2UpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAqIENoZWNrIGZvciBhIHNldCBvZiBtb3VzZSBldmVudHMgZ2l2ZW4gdGhlIHByb3ZpZGVkIG1vdXNlIGludGVyZmFjZSBhbmRcbiAgICAqIGNhbGwgdGhlIGBvbk1vdXNlLi4uYCBtb3VzZSBldmVudCBtZXRob2RzIG9uIHRoaXMgR2FtZU9iamVjdC5cbiAgICAqIEBwYXJhbSBtb3VzZSB0aGUgTW91c2Ugb2JqZWN0IHRvIGNoZWNrXG4gICAgKi9cbiAgICBjaGVja01vdXNlQWN0aW9ucyhtb3VzZTogTW91c2UpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMuX3BvaW50ZXJEYXRhLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyRGF0YVtpXS50b0Rlc3Ryb3kgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49bW91c2UucG9pbnRlcnMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChpIDwgbW91c2UubWF4UG9pbnRlcnMpICYmICEodGhpcy5vbmx5SWZVbmhhbmRsZWQgJiYgbW91c2UucG9pbnRlcnNbaV0uaGFuZGxlZCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9wb2ludGVyRGF0YVtpXTtcbiAgICAgICAgICAgICAgICBsZXQgdCA9IG1vdXNlLnBvaW50ZXJzW2ldO1xuICAgICAgICAgICAgICAgIGRhdGEudG9EZXN0cm95ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0uY29udGFpbnNQb2ludCh0LngsIHQueSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaW5Cb3VuZHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VFbnRlcihtb3VzZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaW5Cb3VuZHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VIb3Zlcihtb3VzZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0LmlzU3RhcnRFdmVudClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jbGlja1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1vdXNlRG93bihtb3VzZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuaXNNb3ZlRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Nb3VzZU1vdmUobW91c2UsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaXNEb3duKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Nb3VzZURyYWcobW91c2UsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0LmlzRW5kRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Nb3VzZVVwKG1vdXNlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaW5Cb3VuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNsaWNrU3RhcnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VDbGljayhtb3VzZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jbGlja1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbkJvdW5kcylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1vdXNlTGVhdmUobW91c2UsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pbkJvdW5kcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZGF0YS5jbGlja1N0YXJ0ZWQpICYmICh0LmlzRW5kRXZlbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jbGlja1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMuX3BvaW50ZXJEYXRhLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICBpZiAoKHRoaXMuX3BvaW50ZXJEYXRhW2ldLnRvRGVzdHJveSkgJiYgKHRoaXMuX3BvaW50ZXJEYXRhW2ldLmluQm91bmRzKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VMZWF2ZShtb3VzZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9pbnRlckRhdGFbaV0uaW5Cb3VuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUhvdmVyKG1vdXNlOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcikge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU1vdmUobW91c2U6IE1vdXNlLCBwb2ludGVyOiBQb2ludGVyKSB7fVxuICAgIHByb3RlY3RlZCBvbk1vdXNlRG93bihtb3VzZTogTW91c2UsIHBvaW50ZXI6IFBvaW50ZXIpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VVcChtb3VzZTogTW91c2UsIHBvaW50ZXI6IFBvaW50ZXIpIHt9XG4gICAgcHJvdGVjdGVkIG9uTW91c2VEcmFnKG1vdXNlOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcikge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUxlYXZlKG1vdXNlOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcikge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUVudGVyKG1vdXNlOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcikge31cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUNsaWNrKG1vdXNlOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcikge31cbn0iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiZW5naW5lL2dhbWVvYmplY3QvR2FtZU9iamVjdFwiO1xuaW1wb3J0IE1vdXNlIGZyb20gXCJlbmdpbmUvaW5wdXQvTW91c2VcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vUG9zaXRpb25cIjtcbmltcG9ydCBQaXhlbFRyYW5zbGF0aW9uIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL3RyYW5zbGF0aW9uL1BpeGVsVHJhbnNsYXRpb25cIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiZW5naW5lL3V0aWwvUG9pbnRcIjtcbmltcG9ydCBBc3luY0NsaWNrVHJpZ2dlciBmcm9tIFwiLi4vaW5wdXQvQXN5bmNDbGlja1RyaWdnZXJcIjtcbmltcG9ydCBUaW1pbmcgZnJvbSBcImVuZ2luZS9UaW1pbmdcIjtcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tIFwiZW5naW5lL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBQb2ludGVyIH0gZnJvbSBcImVuZ2luZS9pbnB1dC9Qb2ludGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzeW5jQnV0dG9uIGV4dGVuZHMgQXN5bmNDbGlja1RyaWdnZXJcbntcbiAgICByZWFkb25seSB0eXBlTmFtZTogc3RyaW5nID0gXCJBc3luY0J1dHRvblwiO1xuXG4gICAgcHJvdGVjdGVkIF9jb250ZW50OiBHYW1lT2JqZWN0O1xuICAgIHByb3RlY3RlZCBfaG92ZXJSZWN0OiBHYW1lT2JqZWN0O1xuICAgIHByb3RlY3RlZCBfcHJlc3NlZFJlY3Q6IEdhbWVPYmplY3Q7XG4gICAgcHJvdGVjdGVkIF9iYWNrZ3JvdW5kUmVjdDogR2FtZU9iamVjdDtcbiAgICBwcm90ZWN0ZWQgX2J1dHRvblJlc2V0OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9kZXByZXNzRGlzdGFuY2U6IFBvaW50O1xuICAgIHByb3RlY3RlZCBfZGVwcmVzc1RyYW5zbGF0aW9uOiBQaXhlbFRyYW5zbGF0aW9uO1xuXG4gICAgcHJvdGVjdGVkIF9wcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzLCBjb250ZW50PzogR2FtZU9iamVjdClcbiAgICB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBib3VuZHMpO1xuICAgICAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5vbmx5SWZVbmhhbmRsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldCBjb250ZW50KCkgeyByZXR1cm4gdGhpcy5fY29udGVudDsgfVxuICAgIGdldCBob3ZlclJlY3QoKSB7IHJldHVybiB0aGlzLl9ob3ZlclJlY3Q7IH1cbiAgICBnZXQgcHJlc3NlZFJlY3QoKSB7IHJldHVybiB0aGlzLl9wcmVzc2VkUmVjdDsgfVxuICAgIGdldCBiYWNrZ3JvdW5kUmVjdCgpIHsgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRSZWN0OyB9XG4gICAgZ2V0IGRlcHJlc3NEaXN0YW5jZSgpIHsgcmV0dXJuIHRoaXMuX2RlcHJlc3NEaXN0YW5jZTsgfVxuXG4gICAgc2V0RGVwcmVzc0Rpc3RhbmNlKHZhbDogUG9pbnQpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLl9kZXByZXNzRGlzdGFuY2UgPSB2YWw7XG4gICAgICAgIGlmICgoIXRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbikgJiYgKHRoaXMuX2RlcHJlc3NEaXN0YW5jZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbiA9IG5ldyBQaXhlbFRyYW5zbGF0aW9uKHRoaXMuX3ByZXNzZWQgPyB0aGlzLl9kZXByZXNzRGlzdGFuY2UgOiBuZXcgUG9pbnQoMCwwKSk7XG4gICAgICAgICAgICAvL3RoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5wcmVzZXJ2ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGVudClcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZW50LnRyYW5zZm9ybS5wb3NpdGlvbi5hZGRUcmFuc2xhdGlvbih0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2tncm91bmRSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWN0LnRyYW5zZm9ybS5wb3NpdGlvbi5hZGRUcmFuc2xhdGlvbih0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hvdmVyUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9ob3ZlclJlY3QudHJhbnNmb3JtLnBvc2l0aW9uLmFkZFRyYW5zbGF0aW9uKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbik7XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJlc3NlZFJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc3NlZFJlY3QudHJhbnNmb3JtLnBvc2l0aW9uLmFkZFRyYW5zbGF0aW9uKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbikgJiYgKHRoaXMuX2RlcHJlc3NEaXN0YW5jZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmVzc2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5pbm5lclggPSB0aGlzLl9kZXByZXNzRGlzdGFuY2UueDtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24uaW5uZXJZID0gdGhpcy5fZGVwcmVzc0Rpc3RhbmNlLnk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2tncm91bmRSZWN0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faG92ZXJSZWN0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob3ZlclJlY3QudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWRSZWN0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcmVzc2VkUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEhvdmVyUmVjdDxUIGV4dGVuZHMgR2FtZU9iamVjdD4odmFsOiBUKTogVFxuICAgIHtcbiAgICAgICAgdGhpcy5faG92ZXJSZWN0ID0gdmFsO1xuICAgICAgICB0aGlzLl9ob3ZlclJlY3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKVxuICAgICAgICAgICAgdGhpcy5faG92ZXJSZWN0LnRyYW5zZm9ybS5wb3NpdGlvbi5hZGRUcmFuc2xhdGlvbih0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24pO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHNldFByZXNzZWRSZWN0PFQgZXh0ZW5kcyBHYW1lT2JqZWN0Pih2YWw6IFQpOiBUXG4gICAge1xuICAgICAgICB0aGlzLl9wcmVzc2VkUmVjdCA9IHZhbDtcbiAgICAgICAgdGhpcy5fcHJlc3NlZFJlY3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcHJlc3NlZFJlY3QudHJhbnNmb3JtLnBvc2l0aW9uLmFkZFRyYW5zbGF0aW9uKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbik7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgc2V0QmFja2dyb3VuZFJlY3Q8VCBleHRlbmRzIEdhbWVPYmplY3Q+KHZhbDogVCk6IFRcbiAgICB7XG4gICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWN0ID0gdmFsO1xuICAgICAgICBpZiAodGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlY3QudHJhbnNmb3JtLnBvc2l0aW9uLmFkZFRyYW5zbGF0aW9uKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbik7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmVzZXQoKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJSZWN0KVxuICAgICAgICAgICAgdGhpcy5ob3ZlclJlY3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5wcmVzc2VkUmVjdClcbiAgICAgICAgICAgIHRoaXMucHJlc3NlZFJlY3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3REcmF3KCk7XG4gICAgICAgIHRoaXMuX2J1dHRvblJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24uaW5uZXJYID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5pbm5lclkgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGVudC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrZ3JvdW5kUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9ob3ZlclJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5faG92ZXJSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWRSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNzZWRSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZSh0aW1pbmc6IFRpbWluZywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBpbnB1dERldmljZXM6IGFueSlcbiAgICB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZSh0aW1pbmcsIGVudmlyb25tZW50LCBpbnB1dERldmljZXMpO1xuICAgICAgICBpZiAodGhpcy5fY29udGVudClcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fY29udGVudCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VDbGljayhtOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcilcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5fYnV0dG9uUmVzZXQpXG4gICAgICAgICAgICBzdXBlci5vbk1vdXNlQ2xpY2sobSwgcG9pbnRlcik7XG4gICAgICAgIHBvaW50ZXIuaGFuZGxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VNb3ZlKG06IE1vdXNlLCBwb2ludGVyOiBQb2ludGVyKVxuICAgIHtcbiAgICAgICAgcG9pbnRlci5oYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZURvd24obTogTW91c2UsIHBvaW50ZXI6IFBvaW50ZXIpXG4gICAge1xuICAgICAgICB0aGlzLl9idXR0b25SZXNldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZFJlY3QpXG4gICAgICAgICAgICB0aGlzLnByZXNzZWRSZWN0LnZpc2libGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5ob3ZlclJlY3QpXG4gICAgICAgICAgICB0aGlzLmhvdmVyUmVjdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5pbm5lclggPSB0aGlzLl9kZXByZXNzRGlzdGFuY2UueDtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5pbm5lclkgPSB0aGlzLl9kZXByZXNzRGlzdGFuY2UueTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb250ZW50KVxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmFja2dyb3VuZFJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlY3QudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faG92ZXJSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmVzc2VkUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzc2VkUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvaW50ZXIuaGFuZGxlZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZVVwKG06IE1vdXNlLCBwb2ludGVyOiBQb2ludGVyKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uLmlubmVyWCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24uaW5uZXJZID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb250ZW50KVxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmFja2dyb3VuZFJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlY3QudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faG92ZXJSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmVzc2VkUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzc2VkUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVzc2VkUmVjdClcbiAgICAgICAgICAgIHRoaXMucHJlc3NlZFJlY3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5ob3ZlclJlY3QpXG4gICAgICAgICAgICB0aGlzLmhvdmVyUmVjdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBvaW50ZXIuaGFuZGxlZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUVudGVyKG06IE1vdXNlLCBwb2ludGVyOiBQb2ludGVyKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJSZWN0KVxuICAgICAgICAgICAgdGhpcy5ob3ZlclJlY3QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwb2ludGVyLmhhbmRsZWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VMZWF2ZShtOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcilcbiAgICB7XG4gICAgICAgIHRoaXMuX3ByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uLmlubmVyWCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24uaW5uZXJZID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb250ZW50KVxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmFja2dyb3VuZFJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlY3QudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faG92ZXJSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmVzc2VkUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzc2VkUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ob3ZlclJlY3QpXG4gICAgICAgICAgICB0aGlzLmhvdmVyUmVjdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRSZWN0KVxuICAgICAgICAgICAgdGhpcy5wcmVzc2VkUmVjdC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IENsaWNrVHJpZ2dlciBmcm9tIFwiLi4vaW5wdXQvQ2xpY2tUcmlnZ2VyXCI7XG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiZW5naW5lL2dhbWVvYmplY3QvR2FtZU9iamVjdFwiO1xuaW1wb3J0IE1vdXNlIGZyb20gXCJlbmdpbmUvaW5wdXQvTW91c2VcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vUG9zaXRpb25cIjtcbmltcG9ydCBQaXhlbFRyYW5zbGF0aW9uIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL3RyYW5zbGF0aW9uL1BpeGVsVHJhbnNsYXRpb25cIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiZW5naW5lL3V0aWwvUG9pbnRcIjtcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tIFwiZW5naW5lL2lucHV0L1BvaW50ZXJcIjtcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tIFwiZW5naW5lL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgVGltaW5nIGZyb20gXCJlbmdpbmUvVGltaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENsaWNrVHJpZ2dlclxue1xuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIkJ1dHRvblwiO1xuXG4gICAgcHJvdGVjdGVkIF9jb250ZW50OiBHYW1lT2JqZWN0O1xuICAgIHByb3RlY3RlZCBfaG92ZXJSZWN0OiBHYW1lT2JqZWN0O1xuICAgIHByb3RlY3RlZCBfcHJlc3NlZFJlY3Q6IEdhbWVPYmplY3Q7XG4gICAgcHJvdGVjdGVkIF9iYWNrZ3JvdW5kUmVjdDogR2FtZU9iamVjdDtcbiAgICBwcm90ZWN0ZWQgX2J1dHRvblJlc2V0OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9kZXByZXNzRGlzdGFuY2U6IFBvaW50O1xuICAgIHByb3RlY3RlZCBfZGVwcmVzc1RyYW5zbGF0aW9uOiBQaXhlbFRyYW5zbGF0aW9uO1xuXG4gICAgcHJvdGVjdGVkIF9wcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzLCBjb250ZW50PzogR2FtZU9iamVjdClcbiAgICB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBib3VuZHMpO1xuICAgICAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5vbmx5SWZVbmhhbmRsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrcyA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRlbnQoKSB7IHJldHVybiB0aGlzLl9jb250ZW50OyB9XG4gICAgZ2V0IGhvdmVyUmVjdCgpIHsgcmV0dXJuIHRoaXMuX2hvdmVyUmVjdDsgfVxuICAgIGdldCBwcmVzc2VkUmVjdCgpIHsgcmV0dXJuIHRoaXMuX3ByZXNzZWRSZWN0OyB9XG4gICAgZ2V0IGJhY2tncm91bmRSZWN0KCkgeyByZXR1cm4gdGhpcy5fYmFja2dyb3VuZFJlY3Q7IH1cbiAgICBnZXQgZGVwcmVzc0Rpc3RhbmNlKCkgeyByZXR1cm4gdGhpcy5fZGVwcmVzc0Rpc3RhbmNlOyB9XG5cbiAgICBzZXREZXByZXNzRGlzdGFuY2UodmFsOiBQb2ludCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX2RlcHJlc3NEaXN0YW5jZSA9IHZhbDtcbiAgICAgICAgaWYgKCghdGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKSAmJiAodGhpcy5fZGVwcmVzc0Rpc3RhbmNlKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uID0gbmV3IFBpeGVsVHJhbnNsYXRpb24odGhpcy5fcHJlc3NlZCA/IHRoaXMuX2RlcHJlc3NEaXN0YW5jZSA6IG5ldyBQb2ludCgwLDApKTtcbiAgICAgICAgICAgIC8vdGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uLnByZXNlcnZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb250ZW50KVxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQudHJhbnNmb3JtLnBvc2l0aW9uLmFkZFRyYW5zbGF0aW9uKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbik7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmFja2dyb3VuZFJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlY3QudHJhbnNmb3JtLnBvc2l0aW9uLmFkZFRyYW5zbGF0aW9uKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbik7XG4gICAgICAgICAgICBpZiAodGhpcy5faG92ZXJSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyUmVjdC50cmFuc2Zvcm0ucG9zaXRpb24uYWRkVHJhbnNsYXRpb24odGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmVzc2VkUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzc2VkUmVjdC50cmFuc2Zvcm0ucG9zaXRpb24uYWRkVHJhbnNsYXRpb24odGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKSAmJiAodGhpcy5fZGVwcmVzc0Rpc3RhbmNlKSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uLmlubmVyWCA9IHRoaXMuX2RlcHJlc3NEaXN0YW5jZS54O1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5pbm5lclkgPSB0aGlzLl9kZXByZXNzRGlzdGFuY2UueTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGVudC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYmFja2dyb3VuZFJlY3QpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ob3ZlclJlY3QpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcHJlc3NlZFJlY3QpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNzZWRSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SG92ZXJSZWN0PFQgZXh0ZW5kcyBHYW1lT2JqZWN0Pih2YWw6IFQpOiBUXG4gICAge1xuICAgICAgICB0aGlzLl9ob3ZlclJlY3QgPSB2YWw7XG4gICAgICAgIHRoaXMuX2hvdmVyUmVjdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9ob3ZlclJlY3QudHJhbnNmb3JtLnBvc2l0aW9uLmFkZFRyYW5zbGF0aW9uKHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbik7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgc2V0UHJlc3NlZFJlY3Q8VCBleHRlbmRzIEdhbWVPYmplY3Q+KHZhbDogVCk6IFRcbiAgICB7XG4gICAgICAgIHRoaXMuX3ByZXNzZWRSZWN0ID0gdmFsO1xuICAgICAgICB0aGlzLl9wcmVzc2VkUmVjdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9wcmVzc2VkUmVjdC50cmFuc2Zvcm0ucG9zaXRpb24uYWRkVHJhbnNsYXRpb24odGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBzZXRCYWNrZ3JvdW5kUmVjdDxUIGV4dGVuZHMgR2FtZU9iamVjdD4odmFsOiBUKTogVFxuICAgIHtcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZFJlY3QgPSB2YWw7XG4gICAgICAgIGlmICh0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24pXG4gICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVjdC50cmFuc2Zvcm0ucG9zaXRpb24uYWRkVHJhbnNsYXRpb24odGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXNldCgpOiB2b2lkXG4gICAge1xuICAgICAgICBpZiAodGhpcy5ob3ZlclJlY3QpXG4gICAgICAgICAgICB0aGlzLmhvdmVyUmVjdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRSZWN0KVxuICAgICAgICAgICAgdGhpcy5wcmVzc2VkUmVjdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdERyYXcoKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uUmVzZXQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5pbm5lclggPSAwO1xuICAgICAgICAgICAgdGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uLmlubmVyWSA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGVudClcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZW50LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2tncm91bmRSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hvdmVyUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9ob3ZlclJlY3QudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJlc3NlZFJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc3NlZFJlY3QudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlKHRpbWluZzogVGltaW5nLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlczogYW55KVxuICAgIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlKHRpbWluZywgZW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcylcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2NvbnRlbnQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlQ2xpY2sobTogTW91c2UsIHBvaW50ZXI6IFBvaW50ZXIpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuX2J1dHRvblJlc2V0KVxuICAgICAgICAgICAgc3VwZXIub25Nb3VzZUNsaWNrKG0sIHBvaW50ZXIpO1xuICAgICAgICBwb2ludGVyLmhhbmRsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlTW92ZShtOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcilcbiAgICB7XG4gICAgICAgIHBvaW50ZXIuaGFuZGxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VEb3duKG06IE1vdXNlLCBwb2ludGVyOiBQb2ludGVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5fYnV0dG9uUmVzZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcHJlc3NlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRSZWN0KVxuICAgICAgICAgICAgdGhpcy5wcmVzc2VkUmVjdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJSZWN0KVxuICAgICAgICAgICAgdGhpcy5ob3ZlclJlY3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24uaW5uZXJYID0gdGhpcy5fZGVwcmVzc0Rpc3RhbmNlLng7XG4gICAgICAgICAgICB0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24uaW5uZXJZID0gdGhpcy5fZGVwcmVzc0Rpc3RhbmNlLnk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGVudClcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZW50LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2JhY2tncm91bmRSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2JhY2tncm91bmRSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hvdmVyUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9ob3ZlclJlY3QudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJlc3NlZFJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc3NlZFJlY3QudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb2ludGVyLmhhbmRsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlVXAobTogTW91c2UsIHBvaW50ZXI6IFBvaW50ZXIpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24uaW5uZXJYID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5pbm5lclkgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGVudC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrZ3JvdW5kUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9ob3ZlclJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5faG92ZXJSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWRSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNzZWRSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZXNzZWRSZWN0KVxuICAgICAgICAgICAgdGhpcy5wcmVzc2VkUmVjdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmhvdmVyUmVjdClcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSZWN0LnZpc2libGUgPSB0cnVlO1xuICAgICAgICBwb2ludGVyLmhhbmRsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlRW50ZXIobTogTW91c2UsIHBvaW50ZXI6IFBvaW50ZXIpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5ob3ZlclJlY3QpXG4gICAgICAgICAgICB0aGlzLmhvdmVyUmVjdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgcG9pbnRlci5oYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUxlYXZlKG06IE1vdXNlLCBwb2ludGVyOiBQb2ludGVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5fcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fZGVwcmVzc1RyYW5zbGF0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9kZXByZXNzVHJhbnNsYXRpb24uaW5uZXJYID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlc3NUcmFuc2xhdGlvbi5pbm5lclkgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGVudC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9iYWNrZ3JvdW5kUmVjdClcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kUmVjdC50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9ob3ZlclJlY3QpXG4gICAgICAgICAgICAgICAgdGhpcy5faG92ZXJSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWRSZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXNzZWRSZWN0LnRyYW5zZm9ybS5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhvdmVyUmVjdClcbiAgICAgICAgICAgIHRoaXMuaG92ZXJSZWN0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZFJlY3QpXG4gICAgICAgICAgICB0aGlzLnByZXNzZWRSZWN0LnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVGV4dCBmcm9tIFwiLi4vY29udGV4dDJkL1RleHRcIjtcbmltcG9ydCBLZXlUcmlnZ2VyLCB7IEtleVRyaWdnZXJFdmVudHMgfSBmcm9tIFwiLi4vaW5wdXQvS2V5VHJpZ2dlclwiO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vUG9zaXRpb25cIjtcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgUGl4ZWxUcmFuc2xhdGlvbiBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3RyYW5zbGF0aW9uL1BpeGVsVHJhbnNsYXRpb25cIjtcbmltcG9ydCBUaW1pbmcgZnJvbSBcImVuZ2luZS9UaW1pbmdcIjtcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tIFwiZW5naW5lL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgVGV4dFN0eWxlIGZyb20gXCJlbmdpbmUvc3R5bGUvVGV4dFN0eWxlXCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL0JvdW5kc1wiO1xuaW1wb3J0IEVkaXRvclRpbWluZ3MgZnJvbSBcImVkaXRvci9FZGl0b3JUaW1pbmdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYnVnUGFuZSBleHRlbmRzIEdhbWVPYmplY3RcbntcbiAgICByZWFkb25seSB0eXBlTmFtZTogc3RyaW5nID0gXCJEZWJ1Z1BhbmVcIjtcblxuICAgIHByaXZhdGUgX3RpbWluZ1RleHQ6IFRleHQ7XG4gICAgcHJpdmF0ZSBfYmVnaW5UaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2RyYXdUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2VuZFRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdXBkYXRlVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9hdmVyYWdlU3RlcHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfbG9vcFRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc2xvd0Rvd246IG51bWJlcjtcbiAgICBwcml2YXRlIF92YWx1ZXNBbHBoYTogbnVtYmVyID0gMC4wMjtcblxuICAgIGNyZWF0ZSh0aW1pbmc6IFRpbWluZywgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5fdGltaW5nVGV4dCA9IHRoaXMuYWRkQ2hpbGQobmV3IFRleHQobmV3IFBvc2l0aW9uKG5ldyBQaXhlbFRyYW5zbGF0aW9uKDUsNSkpLCBuZXcgQm91bmRzKCksIFwiRlBTOlwiLCBuZXcgVGV4dFN0eWxlKFwid2hpdGVcIiwgMTIsIFwic2VyaWZcIiwgMix1bmRlZmluZWQsIGZhbHNlKSkpO1xuXG4gICAgICAgIGxldCBrdCA9IHRoaXMuYWRkQ2hpbGQobmV3IEtleVRyaWdnZXIoKSk7XG4gICAgICAgIGt0LmdldEtleUV2ZW50KFwiVGFiXCIsIEtleVRyaWdnZXJFdmVudHMub25LZXlVcCkucHVzaCgoKSA9PiB0aGlzLnZpc2libGUgPSAhKHRoaXMudmlzaWJsZSkgLCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZXModDogRWRpdG9yVGltaW5ncywgZnBzOiBudW1iZXIsIHVwZGF0ZVN0ZXBzOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLl9iZWdpblRpbWUgPSB0aGlzLnJ1bm5pbmdBdmVyYWdlKHRoaXMuX2JlZ2luVGltZSwgdC5iZWdpblRpbWUsIHRoaXMuX3ZhbHVlc0FscGhhKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVGltZSA9IHRoaXMucnVubmluZ0F2ZXJhZ2UodGhpcy5fdXBkYXRlVGltZSwgdC51cGRhdGVUaW1lLCB0aGlzLl92YWx1ZXNBbHBoYSk7XG4gICAgICAgIHRoaXMuX2RyYXdUaW1lID0gdGhpcy5ydW5uaW5nQXZlcmFnZSh0aGlzLl9kcmF3VGltZSwgdC5kcmF3VGltZSwgdGhpcy5fdmFsdWVzQWxwaGEpO1xuICAgICAgICB0aGlzLl9lbmRUaW1lID0gdGhpcy5ydW5uaW5nQXZlcmFnZSh0aGlzLl9lbmRUaW1lLCB0LmVuZFRpbWUsIHRoaXMuX3ZhbHVlc0FscGhhKTtcbiAgICAgICAgdGhpcy5fbG9vcFRpbWUgPSB0aGlzLnJ1bm5pbmdBdmVyYWdlKHRoaXMuX2xvb3BUaW1lLCB0Lmxvb3BUaW1lLCB0aGlzLl92YWx1ZXNBbHBoYSk7XG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VTdGVwcyA9ICB0aGlzLnJ1bm5pbmdBdmVyYWdlKHRoaXMuX2F2ZXJhZ2VTdGVwcywgdXBkYXRlU3RlcHMsIHRoaXMuX3ZhbHVlc0FscGhhKTtcbiAgICAgICAgdGhpcy5fc2xvd0Rvd24gPSB0LnNsb3dEb3duO1xuICAgIH1cblxuICAgIGJlZ2luKHQgOiBUaW1pbmcsIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgaW5wdXREZXZpY2VzKVxuICAgIHtcbiAgICAgICAgdGhpcy5fdGltaW5nVGV4dC50ZXh0ID0gIChcIkZQUzogXCIgKyB0LmZwcykuc3Vic3RyaW5nKDAsNykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCJcXG5CZWdpbjogXCIgKyB0aGlzLl9iZWdpblRpbWUpLnN1YnN0cmluZygwLDEyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIlxcbkRyYXc6IFwiICsgdGhpcy5fZHJhd1RpbWUpLnN1YnN0cmluZygwLDExKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIlxcblVwZGF0ZTogXCIgKyB0aGlzLl91cGRhdGVUaW1lKS5zdWJzdHJpbmcoMCwxMykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCJcXG4oU3RlcHM6IFwiICsgdGhpcy5fYXZlcmFnZVN0ZXBzKS5zdWJzdHJpbmcoMCwxMykgKyBcIikgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCJcXG5FbmQ6IFwiICsgdGhpcy5fZW5kVGltZSkuc3Vic3RyaW5nKDAsMTApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiXFxuTG9vcDogXCIgKyB0aGlzLl9sb29wVGltZSkuc3Vic3RyaW5nKDAsMTEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiXFxuKENhbGN1bGF0ZWQgRlBTOiBcIiArIE1hdGgucm91bmQoMTAwMC90aGlzLl9sb29wVGltZSkpLnN1YnN0cmluZygwLDIxKSArIFwiKVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiXFxuKFJhdGUgKC0vKyk6IFwiICsgMTAwLyh0aGlzLl9zbG93RG93bisxKSkuc3Vic3RyaW5nKDAsMTcpICsgXCIlKVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiXFxuKEdhbWUgU3BlZWQgKFsvXSk6IFwiICsgMTAwKih0LnNwZWVkRmFjdG9yKSkuc3Vic3RyaW5nKDAsMjMpICsgXCIlKVwiO1xuICAgIH1cblxuICAgIHJ1bm5pbmdBdmVyYWdlKHZhbDogbnVtYmVyLCBuZXdWYWw6IG51bWJlciwgYWxwaGE6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHJldHVybiBhbHBoYSAqIG5ld1ZhbCArICgxIC0gYWxwaGEpICogdmFsO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQW4gb2JqZWN0IHRoYXQgbGlzdGVucyBmb3Igc29tZSBpbnB1dCBleHRlcm5hbCB0byB0aGUgZ2FtZSBlbmdpbmUgYW5kIHRoZW4gc3VwcGxpZXNcbiAqIGl0IGluIGEgZm9ybWF0IHRoYXQgY2FuIGJlIHVzZWQgYnkgYEdhbWVPYmplY3Rgcy4gVXN1YWxseSB0aGlzIHdvdWxkIGF0dGFjaCBleHRlcm5hbFxuICogZXZlbnQgbGlzdGVuZXJzLCBmb3IgZXhhbXBsZSB0byB0aGUgSFRNTERvY3VtZW50IG9mIHRoZSBjb250YWluaW5nIEhUTUwgcGFnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSW5wdXREZXZpY2VcbntcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYnkgdGhlIElucHV0RGV2aWNlR3JvdXAgYXQgdGhlIGVuZCBvZiB0aGUgYGJlZ2luYCBwaGFzZSBvZiB0aGUgbWFpbiBsb29wLlxuICAgICAqIGBHYW1lT2JqZWN0YHMgc2hvdWxkIG5vdCBjYWxsIHRoaXMgbWV0aG9kLlxuICAgICAqL1xuICAgIG9uQmVnaW5FbmQoKTogdm9pZCB7fVxufVxuIiwiaW1wb3J0IElucHV0RGV2aWNlIGZyb20gXCIuL0lucHV0RGV2aWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0RGV2aWNlR3JvdXBcbntcbiAgICBwcml2YXRlIF9pbnB1dERldmljZXMgPSB7fVxuICAgIHByaXZhdGUgX2lmczogSW5wdXREZXZpY2VbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gYWNjZXNzIGBJbnB1dERldmljZWBzIHVzaW5nIGFzIGFuIGlkZW50aWZpZXJcbiAgICAgKiB0aGUgbmFtZXMgdGhhdCB3ZXJlIHN1cHBsaWVkIHdoZW4gdGhlIGBJbnB1dERldmljZWAgd2FzIGFkZGVkIHRvIHRoaXNcbiAgICAgKiBgSW5wdXREZXZpY2VHcm91cGAuXG4gICAgICovXG4gICAgZ2V0IGlucHV0RGV2aWNlcygpIHsgcmV0dXJuIHRoaXMuX2lucHV0RGV2aWNlczsgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbCBgb25CZWdpbkVuZGAgZm9yIGVhY2ggYElucHV0RGV2aWNlYFxuICAgICAqL1xuICAgIG9uQmVnaW5FbmQoKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaT0wLGxlbj10aGlzLl9pZnMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIHRoaXMuX2lmc1tpXS5vbkJlZ2luRW5kKCk7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEFkZCBhbiBgSW5wdXREZXZpY2VgIHRvIHRoZSBncm91cC4gSWYgdGhpcyBgSW5wdXREZXZpY2VHcm91cGAgaXMgc3VwcGxpZWRcbiAgICAgKiB0byB0aGUgYEdhbWVgIG9iamVjdCwgdGhleSB3aWxsIGJlIG1hZGUgYXZhaWxhYmxlIHZpYSB0aGUgYGJlZ2luYCBtZXRob2Qgb25cbiAgICAgKiBgR2FtZU9iamVjdGBzLlxuICAgICAqL1xuICAgIGFkZElucHV0RGV2aWNlKGluZjogSW5wdXREZXZpY2UsIG5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuX2lucHV0RGV2aWNlc1tuYW1lXSA9IGluZjtcbiAgICAgICAgdGhpcy5faWZzLnB1c2goaW5mKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgSW5wdXREZXZpY2UgZnJvbSBcIi4vSW5wdXREZXZpY2VcIjtcbmltcG9ydCB7IEdDU3dhcEVsZW1lbnRzIH0gZnJvbSBcImVuZ2luZS91dGlsL1V0aWxcIjtcblxuLyoqXG4gKiBQcm9jZXNzZXMga2V5Ym9hcmQgZXZlbnRzIHN1Y2ggYXMga2V5IHByZXNzZXMgKHdoaWNoIGNhbiBoYXBwZW4gYXQgYW55IHRpbWUpXG4gKiBhbmQgcHJlc2VudHMgdGhlIGluZm9ybWF0aW9uIGZvciBgR2FtZU9iamVjdGBzIHRvIGNvbnN1bWUgd2l0aGluIHRoZSBgYmVnaW5gXG4gKiBwaGFzZSBvZiB0aGUgbWFpbiBsb29wLlxuICogXG4gKiBBIGBHYW1lT2JqZWN0YCB1c2luZyB0aGlzIGNhbiBpbnNwZWN0IHZhbHVlcyBzdWNoIGFzIGBrZXlzRG93bmAgdG8gc2VlIHRoZVxuICogY3VycmVudCBzdGF0ZSBvZiB0aGUga2V5Ym9hcmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkIGltcGxlbWVudHMgSW5wdXREZXZpY2UgXG57XG4gICAgcHJpdmF0ZSByZWFkb25seSBfYnVmZmVyU2l6ZXM6IG51bWJlciA9IDEwO1xuICAgIHByb3RlY3RlZCBfa2V5c0Rvd246IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfa2V5c0Rvd25MZW5ndGg6IG51bWJlciA9IDA7XG4gICAgcHJvdGVjdGVkIF9rZXlzVXA6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfa2V5c1VwTGVuZ3RoOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBfa2V5UHJlc3Nlc1RoaXNVcGRhdGU6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBfa2V5UHJlc3Nlc1RoaXNVcGRhdGVMZW5ndGg6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMuX2J1ZmZlclNpemVzO2k8bGVuOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2tleXNEb3duLnB1c2gobnVsbCk7XG4gICAgICAgICAgICB0aGlzLl9rZXlzVXAucHVzaChudWxsKTtcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzZXNUaGlzVXBkYXRlLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQXJyYXkgb2Yga2V5cyBmb3Igd2hpY2ggYSBrZXkgcHJlc3MgZXZlbnQgaGFzIGZpcmVkIHNpbmNlIGBiZWdpbmBcbiAgICAgKiB3YXMgbGFzdCBjYWxsZWRcbiAgICAgKi9cbiAgICBnZXQga2V5UHJlc3Nlc1RoaXNVcGRhdGUoKSB7IHJldHVybiB0aGlzLl9rZXlQcmVzc2VzVGhpc1VwZGF0ZTsgfVxuXG4gICAgLyoqIEFycmF5IG9mIGtleWNvZGVzIGZvciBrZXlzIGN1cnJlbnRseSBiZWluZyBwcmVzc2VkICovXG4gICAgZ2V0IGtleXNEb3duKCkgeyByZXR1cm4gdGhpcy5fa2V5c0Rvd247IH1cbiAgICBcbiAgICAvKiogQXJyYXkgb2Yga2V5Y29kZXMgZm9yIGtleXMgcmVsZWFzZWQgc2luY2UgYGJlZ2luYCB3YXMgbGFzdCBjYWxsZWQgKi9cbiAgICBnZXQga2V5c1VwKCkgeyByZXR1cm4gdGhpcy5fa2V5c1VwOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYSBrZXkgd2FzIHJlbGVhc2VkIHNpbmNlIGBiZWdpbmAgd2FzIGxhc3QgY2FsbGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBrZXlWYWx1ZSBrZXkgdG8gY2hlY2tcbiAgICAgKi9cbiAgICBpc0tleVVwKGtleVZhbHVlOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9rZXlzVXBMZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2tleXNVcFtpXSA9PT0ga2V5VmFsdWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhIGtleSBpcyBjdXJyZW50bHkgZG93bi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ga2V5VmFsdWUga2V5IHRvIGNoZWNrXG4gICAgICovXG4gICAgaXNLZXlEb3duKGtleVZhbHVlOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9rZXlzRG93bkxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5fa2V5c0Rvd25baV0gPT09IGtleVZhbHVlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiBcbiAgICAqIFJldHVybnMgdHJ1ZSBpZiBhIGtleSBwcmVzcyBoYXMgYmVlbiBmaXJlZCBmb3IgYSBnaXZlbiBrZXkgdGhpcyB1cGRhdGVcbiAgICAqIFxuICAgICogQHBhcmFtIGtleVZhbHVlIGtleSB0byBjaGVja1xuICAgICovXG4gICAgaXNLZXlQcmVzc2VkKGtleVZhbHVlOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9rZXlQcmVzc2VzVGhpc1VwZGF0ZUxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5fa2V5UHJlc3Nlc1RoaXNVcGRhdGVbaV0gPT09IGtleVZhbHVlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgZmlyc3Qga2V5Y29kZSB3YXMgcHJlc3NlZCBiZWZvcmUgdGhlIHNlY29uZCBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICogXG4gICAgICogQHBhcmFtIGEgZmlyc3Qga2V5Y29kZSB0byBjb21wYXJlXG4gICAgICogQHBhcmFtIGIgc2Vjb25kIGtleWNvZGUgdG8gY29tcGFyZVxuICAgICAqL1xuICAgIGtleVByaW9yaXR5KGE6IHN0cmluZywgYjogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4QSA9IC0xO1xuICAgICAgICBsZXQgaW5kZXhCID0gLTE7XG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX2tleXNEb3duTGVuZ3RoOyBpIDwgbGVuOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9rZXlzRG93bltpXSA9PT0gYSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmRleEEgPSBpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleEIgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fa2V5c0Rvd25baV0gPT09IGIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXhCID0gaTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhBID4gLTEpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleEEgPiBpbmRleEI7XG4gICAgfVxuXG4gICAgb25CZWdpbkVuZCgpXG4gICAge1xuICAgICAgICB0aGlzLl9rZXlQcmVzc2VzVGhpc1VwZGF0ZUxlbmd0aCA9IDA7XG4gICAgICAgIC8vdGhpcy5fa2V5c0Rvd24gPSB0aGlzLl9rZXlzRG93bi5maWx0ZXIoeCA9PiB0aGlzLmtleXNVcC5pbmRleE9mKHgpIDwgMCApO1xuICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9rZXlzVXBMZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMCwgbGVuID0gdGhpcy5fa2V5c0Rvd25MZW5ndGg7IGogPCBsZW47IGorKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fa2V5c1VwW2ldID09PSB0aGlzLl9rZXlzRG93bltqXSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEdDU3dhcEVsZW1lbnRzKHRoaXMuX2tleXNEb3duLCBqLCB0aGlzLl9rZXlzRG93bkxlbmd0aC0xKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzRG93bkxlbmd0aC0tO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fa2V5c1VwTGVuZ3RoID0gMDsgXG4gICAgfVxuXG4gICAga2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudClcbiAgICB7XG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2tleXNEb3duTGVuZ3RoIDwgdGhpcy5fYnVmZmVyU2l6ZXMpXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9rZXlzRG93bkxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9rZXlzRG93bltpXSA9PT0gZXZlbnQua2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICghZm91bmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2tleXNEb3duW3RoaXMuX2tleXNEb3duTGVuZ3RoXSA9IGV2ZW50LmtleTtcbiAgICAgICAgICAgIHRoaXMuX2tleXNEb3duTGVuZ3RoKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlVcChldmVudDogS2V5Ym9hcmRFdmVudClcbiAgICB7XG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2tleXNVcExlbmd0aCA8IHRoaXMuX2J1ZmZlclNpemVzKVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbGVuID0gdGhpcy5fa2V5c1VwTGVuZ3RoOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tleXNVcFtpXSA9PT0gZXZlbnQua2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICghZm91bmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2tleXNVcFt0aGlzLl9rZXlzVXBMZW5ndGhdID0gZXZlbnQua2V5O1xuICAgICAgICAgICAgdGhpcy5fa2V5c1VwTGVuZ3RoKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudClcbiAgICB7XG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2tleVByZXNzZXNUaGlzVXBkYXRlTGVuZ3RoIDwgdGhpcy5fYnVmZmVyU2l6ZXMpXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9rZXlQcmVzc2VzVGhpc1VwZGF0ZUxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9rZXlQcmVzc2VzVGhpc1VwZGF0ZVtpXSA9PT0gZXZlbnQua2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICghZm91bmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzZXNUaGlzVXBkYXRlW3RoaXMuX2tleVByZXNzZXNUaGlzVXBkYXRlTGVuZ3RoXSA9IGV2ZW50LmtleTtcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzZXNUaGlzVXBkYXRlTGVuZ3RoKys7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgSW5wdXREZXZpY2UgZnJvbSBcIi4vSW5wdXREZXZpY2VcIjtcbmltcG9ydCB7IFBvaW50ZXIgfSBmcm9tIFwiLi9Qb2ludGVyXCI7XG5pbXBvcnQgeyBNb3VzZUV2ZW50IGFzIEVuZ2luZU1vdXNlRXZlbnQgfSBmcm9tIFwiZW5naW5lL3V0aWwvRXZlbnRcIjtcblxuLyoqXG4gKiBQcm9jZXNzZXMgTW91c2UgZXZlbnRzIGFuZCBwcmVzZW50cyB0aGUgaW5mb3JtYXRpb24gZm9yIGBHYW1lT2JqZWN0YHMgdG8gY29uc3VtZVxuICogZHVyaW5nIHRoZSBgYmVnaW5gIHBoYXNlIG9mIHRoZSBtYWluIGxvb3AuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlIGV4dGVuZHMgSW5wdXREZXZpY2VcbntcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSB0b3VjaGVzIG9uIHRoZSBjYW52YXMsIGFjY2Vzc2VkIGJ5IHRoZWlyIGlkZW50aWZpZXIuXG4gICAgICogV2hlbiBhIHRvdWNoIGVuZHMsIGl0IHJlbWFpbnMgaW4gdGhpcyBjb2xsZWN0aW9uIGZvciBvbmUgdXBkYXRlIHdpdGggdGhlXG4gICAgICogYGlzRW5kRXZlbnRgIGZsYWcgc2V0LCBiZWZvcmUgYmVpbmcgbWFya2VkIGFzIGRlbGV0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9pbnRlcnM6IFBvaW50ZXJbXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIHNpbXVsdGFuZW91cyBwb2ludGVycyB0byB0cmFjay4gQXMgdGhlIG1vdXNlIGlzIGFsd2F5cyBpbmNsdWRlZCBpblxuICAgICAqIHRoaXMsIHRoZSBudW1iZXIgb2Ygc2ltdWx0YW5vdXMgdG91Y2hlcyBpcyAxIGxlc3MgdGhhbiB0aGlzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heFBvaW50ZXJzOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYXN5bmNocm9ub3VzbHkgKGltbWVkaWF0ZWx5KSB3aGVuIGEgY2xpY2sgaXMgcmVnaXN0ZXJlZC5cbiAgICAgKiAoV2hlbiBhIHBvaW50ZXIgaXMgcmVsZWFzZWQpLlxuICAgICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgdGhvc2UgZnVuY3Rpb25zIHRoYXQgbXVzdCBiZSBjYWxsZWRcbiAgICAgKiBpbiB0aGUgc2FtZSBibG9jayBhcyB0aGUgZXZlbnQgY2FsbCAoZS5nLiByZXF1ZXN0aW5nIGZ1bGxzY3JlZW4pLlxuICAgICAqL1xuICAgIG9uQ2xpY2tBc3luYzogRW5naW5lTW91c2VFdmVudCA9IG5ldyBFbmdpbmVNb3VzZUV2ZW50KCk7XG5cbiAgICBwcml2YXRlIF9odG1sRWxlbWVudEZvck9mZnNldDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihtYXhQb2ludGVyczogbnVtYmVyLCBodG1sRWxlbWVudEZvck9mZnNldDogSFRNTEVsZW1lbnQpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1heFBvaW50ZXJzID0gbWF4UG9pbnRlcnM7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8bWF4UG9pbnRlcnM7IGkrKylcbiAgICAgICAgICAgIHRoaXMucG9pbnRlcnMucHVzaChuZXcgUG9pbnRlcihpKSk7XG4gICAgICAgIHRoaXMuX2h0bWxFbGVtZW50Rm9yT2Zmc2V0ID0gaHRtbEVsZW1lbnRGb3JPZmZzZXRcbiAgICB9XG5cbiAgICAvL1RPRE86IEN1cnJlbnRseSB3ZSB0YWtlIGFyZSBnaXZlbiBhbiB1cGRhdGVkIGhUTUxFbGVtZW50Rm9yT2Zmc2V0IGZyb21cbiAgICAvLyBvdXIgY2FtZXJhLiBCdXQgdGhpcyBkb2Vzbid0IG1ha2Ugc2Vuc2UsIGFzIG1vdXNlIGV2ZW50cyBhcmUgYXN5bmNocm9ub3VzLlxuICAgIC8vIFdlIG5lZWQgdG8gc3RvcmUgdGhlIHgseSBvZiB0aGUgbW91c2UgZXZlbnQgYW5kIHRoZW4gbGF0ZXIsIHdoZW4gd2UgYXJlIGluIHRoZSBcbiAgICAvLyBsb29wLCB3b3JrIG91dCB0aGUgaW4tZ2FtZS1zcGFjZSB2ZXJzaW9uLlxuICAgIGdldCBodG1sRWxlbWVudEZvck9mZnNldCgpIHsgcmV0dXJuIHRoaXMuX2h0bWxFbGVtZW50Rm9yT2Zmc2V0OyB9XG4gICAgc2V0IGh0bWxFbGVtZW50Rm9yT2Zmc2V0KHZhbCkgeyB0aGlzLl9odG1sRWxlbWVudEZvck9mZnNldCA9IHZhbDsgfVxuXG4gICAgXG4gICAgLyoqXG4gICAgICogTWFyayBhbGwgYFBvaW50ZXJgcyBhcyBoYXZpbmcgYmVlbiBoYW5kbGVkLlxuICAgICAqL1xuICAgIGhhbmRsZUFsbCgpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMucG9pbnRlcnMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIHRoaXMucG9pbnRlcnNbaV0uaGFuZGxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CZWdpbkVuZCgpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMucG9pbnRlcnMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyc1tpXS5pc1N0YXJ0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRlcnNbaV0uaXNFbmRFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyc1tpXS5pc01vdmVFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyc1tpXS5oYW5kbGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5wb2ludGVyc1swXS5pc0VuZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2ludGVyc1swXS5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNsaWNrQXN5bmMuY2FsbCh0aGlzLCB0aGlzLnBvaW50ZXJzWzBdKTtcbiAgICB9XG5cbiAgICB0b3VjaEVuZChlOiBUb3VjaEV2ZW50KVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaT0xLGxlbj1lLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyICsgMSA8IHRoaXMubWF4UG9pbnRlcnMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludGVyc1tlLmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgKyAxXS5pc0VuZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJzW2UuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciArIDFdLmlzRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRlcnNbZS5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyICsgMV0ueCA9IGUuY2hhbmdlZFRvdWNoZXNbaV0ucGFnZVggLSB0aGlzLl9odG1sRWxlbWVudEZvck9mZnNldC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRlcnNbZS5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyICsgMV0ueSA9IGUuY2hhbmdlZFRvdWNoZXNbaV0ucGFnZVkgLSB0aGlzLl9odG1sRWxlbWVudEZvck9mZnNldC5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25DbGlja0FzeW5jLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DbGlja0FzeW5jLmNhbGwodGhpcywgdGhpcy5wb2ludGVyc1tlLmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5wb2ludGVyc1swXS5pc0Rvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLnBvaW50ZXJzWzBdLmlzU3RhcnRFdmVudCA9IHRydWU7XG4gICAgICAgIHRoaXMucG9pbnRlcnNbMF0ueCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5faHRtbEVsZW1lbnRGb3JPZmZzZXQub2Zmc2V0TGVmdDtcbiAgICAgICAgdGhpcy5wb2ludGVyc1swXS55ID0gZXZlbnQucGFnZVkgLSB0aGlzLl9odG1sRWxlbWVudEZvck9mZnNldC5vZmZzZXRUb3A7XG4gICAgfVxuXG4gICAgdG91Y2hTdGFydChldmVudDogVG91Y2hFdmVudClcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49ZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyICsgMSA8IHRoaXMubWF4UG9pbnRlcnMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnBvaW50ZXJzW2V2ZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgKyAxXTtcbiAgICAgICAgICAgICAgICB0LmlzRG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdC5pc0VuZEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdC5pc01vdmVFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHQuaGFuZGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHQuaXNTdGFydEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0LnggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5wYWdlWCAtIHRoaXMuX2h0bWxFbGVtZW50Rm9yT2Zmc2V0Lm9mZnNldExlZnRcbiAgICAgICAgICAgICAgICB0LnkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXS5wYWdlWSAtIHRoaXMuX2h0bWxFbGVtZW50Rm9yT2Zmc2V0Lm9mZnNldFRvcDtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZVhZKGV2ZW50OiBNb3VzZUV2ZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5wb2ludGVyc1swXS5pc01vdmVFdmVudCA9IHRydWU7XG4gICAgICAgIHRoaXMucG9pbnRlcnNbMF0ueCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5faHRtbEVsZW1lbnRGb3JPZmZzZXQub2Zmc2V0TGVmdDtcbiAgICAgICAgdGhpcy5wb2ludGVyc1swXS55ID0gZXZlbnQucGFnZVkgLSB0aGlzLl9odG1sRWxlbWVudEZvck9mZnNldC5vZmZzZXRUb3A7XG4gICAgfVxuXG4gICAgdG91Y2hYWShldmVudDogVG91Y2hFdmVudClcbiAgICB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49ZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgKyAxIDwgdGhpcy5tYXhQb2ludGVycylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgdCA9IHRoaXMucG9pbnRlcnNbZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciArIDFdO1xuICAgICAgICAgICAgICAgIHQuaXNNb3ZlRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHQueCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldLnBhZ2VYIC0gdGhpcy5faHRtbEVsZW1lbnRGb3JPZmZzZXQub2Zmc2V0TGVmdFxuICAgICAgICAgICAgICAgIHQueSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldLnBhZ2VZIC0gdGhpcy5faHRtbEVsZW1lbnRGb3JPZmZzZXQub2Zmc2V0VG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgdmFyaWFibGVzIGFib3V0IG9uZSBjb250aW51b3VzIHRvdWNoIG9uIHRoZSBnYW1lIGNhbnZhcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvaW50ZXJcbntcbiAgICAvKipcbiAgICAgKiBBIHVuaXF1ZSBJRCBmb3IgdGhlIHBvaW50ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWQ6IG51bWJlclxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgeCBwb3NpdGlvbiBvZiB0aGUgdG91Y2ggb24gdGhlIGdhbWUgY2FudmFzLlxuICAgICAqL1xuICAgIHg6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCB5IHBvc2l0aW9uIG9mIHRoZSB0b3VjaCBvbiB0aGUgZ2FtZSBjYW52YXMuXG4gICAgICovXG4gICAgeTogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHRvdWNoIHdhcyBzdGFydGVkIHNpbmNlIGBiZWdpbmAgd2FzIGxhc3QgY2FsbGVkLlxuICAgICAqL1xuICAgIGlzU3RhcnRFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgdG91Y2ggaGFzIGVuZGVkIHNpbmNlIGBiZWdpbmAgd2FzIGxhc3QgY2FsbGVkLlxuICAgICAqL1xuICAgIGlzRW5kRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHRvdWNoIGhhcyBtb3ZlZCBzaW5jZSBgYmVnaW5gIHdhcyBsYXN0IGNhbGxlZC5cbiAgICAgKi9cbiAgICBpc01vdmVFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgcG9pbnRlciBjbGljayBoYXMgYmVlbiBoYW5kbGVkIHlldCBzaW5jZSBgYmVnaW5gIHdhcyBsYXN0IGNhbGxlZC5cbiAgICAgKiBUaGlzIGlzIHVzdWFsbHkgc2V0IGJ5IGludGVyZmFjZSBlbGVtZW50cyBzdWNoIGFzIGJ1dHRvbnMgdG8gaW5kaWNhdGUgdGhhdFxuICAgICAqIHRoZXkgaGF2ZSAnY2F1Z2h0JyBvciAnYmxvY2tlZCcgdGhlIGNsaWNrLCBhbmQgdGhhdCBsYXRlciBgR2FtZU9iamVjdGBzXG4gICAgICogKHdoaWNoIHdvdWxkIGJlIGRyYXduIGJlbmVhdGggdGhlbSkgc2hvdWxkIG5vdCBwcm9jZXNzIHRoZSBldmVudC5cbiAgICAgKi9cbiAgICBoYW5kbGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoaXMgcG9pbnRlciBpcyBiZWluZyBjbGlja2VkLiBGb3IgdG91Y2hlcywgaWYgdGhpcyBpcyBmYWxzZSxcbiAgICAgKiB0aGUgUG9pbnRlciBjYW4gYmUgcmVjeWNsZWRcbiAgICAgKi9cbiAgICBpc0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IFRpbWluZyBmcm9tIFwiZW5naW5lL1RpbWluZ1wiO1xuaW1wb3J0IEFzc2V0TG9hZGVyIGZyb20gXCJlbmdpbmUvQXNzZXRMb2FkZXJcIjtcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwiZW5naW5lL2lucHV0L0tleWJvYXJkXCI7XG5pbXBvcnQgTW91c2UgZnJvbSBcImVuZ2luZS9pbnB1dC9Nb3VzZVwiO1xuaW1wb3J0IExhdW5jaGVyT3B0aW9ucyBmcm9tIFwiZW5naW5lL2xhdW5jaGVyL0xhdW5jaGVyT3B0aW9uc1wiO1xuaW1wb3J0IEVudmlyb25tZW50IGZyb20gXCJlbmdpbmUvRW52aXJvbm1lbnRcIjtcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBnZXRBcmd1bWVudHNGcm9tU3RyaW5nIH0gZnJvbSBcImVuZ2luZS91dGlsL1V0aWxcIjtcbmltcG9ydCBQaXhlbERpbWVuc2lvbiBmcm9tIFwiZW5naW5lL3RyYW5zZm9ybS9kaW1lbnNpb24vUGl4ZWxEaW1lbnNpb25cIjtcbmltcG9ydCBQb3NpdGlvbiBmcm9tIFwiZW5naW5lL3RyYW5zZm9ybS9Qb3NpdGlvblwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiZW5naW5lL3RyYW5zZm9ybS9Cb3VuZHNcIjtcbmltcG9ydCBEcmF3QnVmZmVyIGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9jb250ZXh0MmQvRHJhd0J1ZmZlclwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiZW5naW5lL2dhbWVvYmplY3QvY29udGV4dDJkL0NvbnRleHQyRENhbWVyYVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaGVyRmFjdG9yaWVzXG57XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIFRpbWluZ1xuICAgICAqL1xuICAgIGNyZWF0ZVRpbWluZygpOiBUaW1pbmc7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgQXNzZXRMb2FkZXJcbiAgICAgKi9cbiAgICBjcmVhdGVMb2FkZXIoKTogQXNzZXRMb2FkZXI7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgS2V5Ym9hcmRcbiAgICAgKi9cbiAgICBjcmVhdGVLZXlib2FyZChkb2N1bWVudDogRG9jdW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBLZXlib2FyZDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBNb3VzZVxuICAgICAqL1xuICAgIGNyZWF0ZU1vdXNlKGRvY3VtZW50OiBEb2N1bWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IE1vdXNlO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIEVudmlyb25tZW50XG4gICAgICovXG4gICAgY3JlYXRlRW52aXJvbm1lbnQoZG9jOiBIVE1MRG9jdW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGxhdW5jaGVyT3B0aW9uczogTGF1bmNoZXJPcHRpb25zKTogRW52aXJvbm1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgR2FtZU9iamVjdCBmb3IgdGhlIHJvb3Qgb2YgdGhlIEdhbWVPYmplY3QgdHJlZVxuICAgICAqL1xuICAgIGNyZWF0ZVJvb3RHYW1lT2JqZWN0KGVudmlyb25tZW50OiBFbnZpcm9ubWVudCwgbGF1bmNoZXJPcHRpb25zOiBMYXVuY2hlck9wdGlvbnMsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBHYW1lT2JqZWN0O1xufVxuXG5sZXQgZGVmYXVsdExhdW5jaGVyRmFjdG9yaWVzOiBMYXVuY2hlckZhY3RvcmllcyA9IFxue1xuICAgIGNyZWF0ZVRpbWluZzogZnVuY3Rpb24oKTogVGltaW5nIHsgcmV0dXJuIG5ldyBUaW1pbmcoKTsgfSxcblxuICAgIGNyZWF0ZUxvYWRlcjogZnVuY3Rpb24oKTogQXNzZXRMb2FkZXIgeyByZXR1cm4gbmV3IEFzc2V0TG9hZGVyKCk7IH0sXG5cbiAgICBjcmVhdGVLZXlib2FyZChkb2N1bWVudDogRG9jdW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBLZXlib2FyZFxuICAgIHtcbiAgICAgICAgbGV0IGtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleWJvYXJkLmtleURvd24uYmluZChrZXlib2FyZCksIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5Ym9hcmQua2V5VXAuYmluZChrZXlib2FyZCksIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwga2V5Ym9hcmQua2V5UHJlc3MuYmluZChrZXlib2FyZCksIHRydWUpO1xuICAgICAgICByZXR1cm4ga2V5Ym9hcmQ7XG4gICAgfSxcblxuICAgIGNyZWF0ZU1vdXNlOiBmdW5jdGlvbiAoZG9jdW1lbnQ6IERvY3VtZW50LCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogTW91c2UgXG4gICAge1xuICAgICAgICBsZXQgbW91c2UgPSBuZXcgTW91c2UoNSwgY29udGFpbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlLm1vdXNlRG93bi5iaW5kKG1vdXNlKSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2UubW91c2VYWS5iaW5kKG1vdXNlKSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIG1vdXNlLnRvdWNoU3RhcnQuYmluZChtb3VzZSksIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdXNlLnRvdWNoWFkuYmluZChtb3VzZSksIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBtb3VzZS50b3VjaEVuZC5iaW5kKG1vdXNlKSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlLm1vdXNlVXAuYmluZChtb3VzZSksIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgbW91c2UudG91Y2hFbmQuYmluZChtb3VzZSksIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG1vdXNlO1xuICAgIH0sXG5cbiAgICBjcmVhdGVFbnZpcm9ubWVudDogZnVuY3Rpb24oZG9jOiBIVE1MRG9jdW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGxhdW5jaGVyT3B0aW9uczogTGF1bmNoZXJPcHRpb25zKTogRW52aXJvbm1lbnRcbiAgICB7XG4gICAgICAgIGxldCBlID0gbmV3IEVudmlyb25tZW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCBnZXRBcmd1bWVudHNGcm9tU3RyaW5nKGxvY2F0aW9uLnNlYXJjaCksIGNvbnRhaW5lciwgbGF1bmNoZXJPcHRpb25zLCBkb2MpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gZS5zZXRXaWR0aEFuZEhlaWdodChjb250YWluZXIub2Zmc2V0V2lkdGgsIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQpKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfSxcblxuICAgIGNyZWF0ZVJvb3RHYW1lT2JqZWN0OiBmdW5jdGlvbihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGxhdW5jaGVyT3B0aW9uczogTGF1bmNoZXJPcHRpb25zLCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogR2FtZU9iamVjdFxuICAgIHtcbiAgICAgICAgbGV0IHJvb3REaW1lbnNpb24gPSBuZXcgUGl4ZWxEaW1lbnNpb24oY29udGFpbmVyLm9mZnNldFdpZHRoLCBjb250YWluZXIub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgbGV0IHJvb3RHYW1lT2JqZWN0ID0gbmV3IGxhdW5jaGVyT3B0aW9ucy5yb290R2FtZU9iamVjdFR5cGUobmV3IFBvc2l0aW9uKCksIG5ldyBCb3VuZHMocm9vdERpbWVuc2lvbikpO1xuICAgICAgICByb290R2FtZU9iamVjdC50cmFuc2Zvcm0uYm91bmRzLm1pbkRpbWVuc2lvbiA9IGxhdW5jaGVyT3B0aW9ucy5taW5EaW1lbnNpb247XG4gICAgICAgIHJvb3RHYW1lT2JqZWN0LnRyYW5zZm9ybS5ib3VuZHMubWF4RGltZW5zaW9uID0gbGF1bmNoZXJPcHRpb25zLm1heERpbWVuc2lvbjtcbiAgICAgICAgZW52aXJvbm1lbnQub25SZXNpemUucHVzaCgod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvb3REaW1lbnNpb24ud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHJvb3REaW1lbnNpb24uaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgcm9vdEdhbWVPYmplY3QudHJhbnNmb3JtLnBvc2l0aW9uaW5nSXNEaXJ0eSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJvb3RHYW1lT2JqZWN0IGluc3RhbmNlb2YgRHJhd0J1ZmZlcilcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNhbWVyYSA9IHJvb3RHYW1lT2JqZWN0LmFkZENhbWVyYShyb290R2FtZU9iamVjdC5hZGRDaGlsZChuZXcgQ2FtZXJhKG5ldyBQb3NpdGlvbigpLCBCb3VuZHMuZmlsbCkpKTtcbiAgICAgICAgICAgIGNhbWVyYS5oYXNBbHBoYUNoYW5uZWwgPSBlbnZpcm9ubWVudC5sYXVuY2hlck9wdGlvbnMuaGFzQWxwaGFDaGFubmVsO1xuICAgICAgICAgICAgY2FtZXJhLmJhY2tncm91bmRDb2xvciA9IGVudmlyb25tZW50LmxhdW5jaGVyT3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICBjYW1lcmEuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvb3RHYW1lT2JqZWN0O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgZGVmYXVsdExhdW5jaGVyRmFjdG9yaWVzIH0iLCJpbXBvcnQgTGF1bmNoZXJPcHRpb25zIGZyb20gXCIuL0xhdW5jaGVyT3B0aW9uc1wiO1xuaW1wb3J0IElucHV0RGV2aWNlR3JvdXAgZnJvbSBcIi4uL2lucHV0L0lucHV0RGV2aWNlR3JvdXBcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgeyBkZWZhdWx0TGF1bmNoZXJGYWN0b3JpZXMsIExhdW5jaGVyRmFjdG9yaWVzIH0gZnJvbSBcIi4vTGF1bmNoZXJGYWN0b3JpZXNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYW1lKGxhdW5jaGVyT3B0aW9uczogTGF1bmNoZXJPcHRpb25zLCBkb2N1bWVudDogRG9jdW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGZhY3Rvcmllcz86IExhdW5jaGVyRmFjdG9yaWVzKVxue1xuICAgIGlmICghZmFjdG9yaWVzKVxuICAgICAgICBmYWN0b3JpZXMgPSBkZWZhdWx0TGF1bmNoZXJGYWN0b3JpZXM7XG4gICAgbGV0IGVudmlyb25tZW50ID0gZmFjdG9yaWVzLmNyZWF0ZUVudmlyb25tZW50KGRvY3VtZW50LCBjb250YWluZXIsIGxhdW5jaGVyT3B0aW9ucyk7XG4gICAgY29udGFpbmVyLnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcblxuICAgIGxldCBpbnB1dERldmljZUdyb3VwID0gbmV3IElucHV0RGV2aWNlR3JvdXAoKTtcbiAgICBpZiAobGF1bmNoZXJPcHRpb25zLnVzZXNLZXlib2FyZClcbiAgICB7XG4gICAgICAgIGxldCBrZXlib2FyZCA9IGZhY3Rvcmllcy5jcmVhdGVLZXlib2FyZChkb2N1bWVudCwgY29udGFpbmVyKTtcbiAgICAgICAgaW5wdXREZXZpY2VHcm91cC5hZGRJbnB1dERldmljZShrZXlib2FyZCwgXCJrZXlib2FyZFwiKTtcbiAgICB9XG4gICAgaWYgKGxhdW5jaGVyT3B0aW9ucy51c2VzTW91c2UpXG4gICAge1xuICAgICAgICBsZXQgbW91c2UgPSBmYWN0b3JpZXMuY3JlYXRlTW91c2UoZG9jdW1lbnQsIGNvbnRhaW5lcik7XG4gICAgICAgIGlucHV0RGV2aWNlR3JvdXAuYWRkSW5wdXREZXZpY2UobW91c2UsIFwibW91c2VcIik7XG4gICAgfVxuICAgIGxhdW5jaGVyT3B0aW9ucy5hZGRFeHRyYUlucHV0RGV2aWNlcyhpbnB1dERldmljZUdyb3VwKTtcblxuICAgIGxldCB0aW1pbmcgPSBmYWN0b3JpZXMuY3JlYXRlVGltaW5nKCk7XG4gICAgbGV0IGxvYWRlciA9IGZhY3Rvcmllcy5jcmVhdGVMb2FkZXIoKTtcblxuICAgIGxldCByb290R2FtZU9iamVjdCA9IGZhY3Rvcmllcy5jcmVhdGVSb290R2FtZU9iamVjdChlbnZpcm9ubWVudCwgbGF1bmNoZXJPcHRpb25zLCBjb250YWluZXIpO1xuICAgIGxldCBnYW1lID0gbmV3IEdhbWUocm9vdEdhbWVPYmplY3QsIGlucHV0RGV2aWNlR3JvdXAsIHRpbWluZywgbG9hZGVyLCBlbnZpcm9ubWVudCk7XG4gICAgcmV0dXJuIGdhbWU7XG59XG4iLCJpbXBvcnQgeyBsYXVuY2hlck9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vbGF1bmNoZXJPcHRpb25zXCI7XG5pbXBvcnQgTGF1bmNoZXJPcHRpb25zIGZyb20gXCIuL0xhdW5jaGVyT3B0aW9uc1wiO1xuaW1wb3J0IGNyZWF0ZUdhbWUgZnJvbSBcIi4vY3JlYXRlR2FtZVwiO1xuXG5sZXQgbCA9IFtdO1xuaWYgKGxhdW5jaGVyT3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5KVxuICAgIGwgPSBsYXVuY2hlck9wdGlvbnM7XG5lbHNlXG4gICAgbCA9IFtsYXVuY2hlck9wdGlvbnNdO1xuXG5sLmZvckVhY2goKG9wdGlvbnM6IExhdW5jaGVyT3B0aW9ucykgPT4gXG4gICAge1xuICAgICAgICBsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrb3B0aW9ucy5nYW1lVGFyZ2V0KTtcbiAgICAgICAgaWYgKCFjb250YWluZXIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgY3JlYXRlIGdhbWUgY2FudmFzIGluIEhUTUxFbGVtZW50IHdpdGggSUQgJ1wiICsgb3B0aW9ucy5nYW1lVGFyZ2V0ICsgXCInLiBObyBlbGVtZW50IHdpdGggdGhhdCBuYW1lIHdhcyBmb3VuZC5cIik7XG5cbiAgICAgICAgbGV0IGdhbWUgPSBjcmVhdGVHYW1lKG9wdGlvbnMsIGRvY3VtZW50LCBjb250YWluZXIpO1xuICAgICAgICBnYW1lLmNyZWF0ZSgpO1xuICAgICAgICBnYW1lLnN0YXJ0KCk7XG4gICAgICAgIGlmIChvcHRpb25zLndpbmRvd1ZhcmlhYmxlTmFtZSlcbiAgICAgICAgICAgIHdpbmRvd1tvcHRpb25zLndpbmRvd1ZhcmlhYmxlTmFtZV0gPSBnYW1lO1xuICAgIH0pOyIsImltcG9ydCBDYXNjYWRpbmdTdHlsZSBmcm9tIFwiZW5naW5lL3N0eWxlL0Nhc2NhZGluZ1N0eWxlXCI7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHByb3BlcnRpZXMgY29tbW9ubHkgbmVlZGVkIGZvciBzdHlsaW5nIG9mIHRleHQsIHN1Y2ggYXMgY29sb3VyLFxuICogc2l6ZSwgbGluZSBzcGFjaW5nLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRTdHlsZVxue1xuICAgIGNvbG91cjogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBmb250RmFjZTogc3RyaW5nO1xuICAgIGxpbmVTcGFjaW5nOiBudW1iZXI7XG4gICAgdGFyZ2V0V2lkdGg6IG51bWJlcjtcbiAgICBjZW50cmVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioc3R5bGU6IENhc2NhZGluZ1N0eWxlKVxuICAgIGNvbnN0cnVjdG9yKGNvbG91cjogc3RyaW5nLCBzaXplOiBudW1iZXIsIGZvbnRGYWNlOiBzdHJpbmcsIGxpbmVTcGFjaW5nOiBudW1iZXIsIHRhcmdldFdpZHRoOiBudW1iZXIsIGNlbnRyZWQ6IGJvb2xlYW4pXG4gICAgY29uc3RydWN0b3IoY29sb3VyOiBzdHJpbmcgfCBDYXNjYWRpbmdTdHlsZSwgc2l6ZT86IG51bWJlciwgZm9udEZhY2U/OiBzdHJpbmcsIGxpbmVTcGFjaW5nPzogbnVtYmVyLCB0YXJnZXRXaWR0aD86IG51bWJlciwgY2VudHJlZD86IGJvb2xlYW4pXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGNvbG91ciA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICAgICAgdGhpcy5mb250RmFjZSA9IGZvbnRGYWNlO1xuICAgICAgICAgICAgdGhpcy5saW5lU3BhY2luZyA9IGxpbmVTcGFjaW5nO1xuICAgICAgICAgICAgdGhpcy50YXJnZXRXaWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5jZW50cmVkID0gY2VudHJlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3VyID0gY29sb3VyLnRleHRDb2xvdXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBjb2xvdXIudGV4dFNpemU7XG4gICAgICAgICAgICB0aGlzLmZvbnRGYWNlID0gY29sb3VyLmZvbnRGYWNlO1xuICAgICAgICAgICAgdGhpcy5saW5lU3BhY2luZyA9IGNvbG91ci5saW5lU3BhY2luZztcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0V2lkdGggPSBjb2xvdXIudGFyZ2V0VGV4dFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5jZW50cmVkID0gY29sb3VyLnRleHRDZW50cmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IERpbWVuc2lvbiBmcm9tIFwiLi9kaW1lbnNpb24vRGltZW5zaW9uXCI7XG5pbXBvcnQgQ29uZGl0aW9uYWxEaW1lbnNpb24gZnJvbSBcIi4vZGltZW5zaW9uL0NvbmRpdGlvbmFsRGltZW5zaW9uXCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuLi9UcmFuc2Zvcm1cIjtcbmltcG9ydCBQcm9wb3J0aW9uYWxEaW1lbnNpb24gZnJvbSBcIi4vZGltZW5zaW9uL1Byb3BvcnRpb25hbERpbWVuc2lvblwiO1xuaW1wb3J0IHsgRXZlbnQwIH0gZnJvbSBcImVuZ2luZS91dGlsL0V2ZW50XCI7XG5cbi8qKlxuICogQSBCb3VuZHMgaXMgYSBzaXplIG9yIGV4dGVuc2lvbiBpbiBnYW1lIHNwYWNlLCB1c3VhbGx5IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnRpY3VsYXIgXG4gKiBUcmFuc2Zvcm0uIEl0IGlzIG1hZGUgb2YgdGhlIGNvbWJpbmF0aW9uICBvZiB6ZXJvIG9yIG1vcmUgRGltZW5zaW9ucywgd2hpY2ggYXJlIGFkZGVkIFxuICogdG9nZXRoZXIgdG8gcmVzdWx0IGluIHRoZSBmaW5hbCBzaXplLiBJZiBhIEJvdW5kcyBoYXMgbm8gZGltZW5zaW9ucywgaXQgaGFzIGEgc2l6ZSBvZiAoMCwwKS5cbiAqIEZvciBhIFRyYW5zZm9ybSB0byBoYXZlIG5vIHNpemUgKHJhdGhlciB0aGFuIGEgc2l6ZSBvZiAwKSBpdCBzaG91bGQgbm90IGhhdmUgYSBib3VuZHMgKGllLlxuICogaXRzIGJvdW5kcyBzaG91bGQgYmUgbnVsbCkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kc1xue1xuICAgIHByaXZhdGUgX2RpbWVuc2lvbnM6IERpbWVuc2lvbltdID0gW107XG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlV2lkdGg6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF90YXJnZXRBc3BlY3RSYXRpbzogbnVtYmVyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX21pbkRpbWVuc2lvbjogRGltZW5zaW9uID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX21heERpbWVuc2lvbjogRGltZW5zaW9uID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3RyYW5zZm9ybTogVHJhbnNmb3JtID0gbnVsbDtcbiAgICBwcml2YXRlIF9jYWNoZWRXaWR0aDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYWNoZWRIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfb25SZXNpemU6IEV2ZW50MCA9IG5ldyBFdmVudDAoKTtcbiAgICBwcml2YXRlIF9kaXJ0eTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBCb3VuZHMgd2l0aCB6ZXJvIG9yIG1vcmUgZGltZW5zaW9uc1xuICAgICAqIEBwYXJhbSBkaW1lbnNpb25zIFRoZSBEaW1lbnNpb25zIHRoYXQgdGhpcyBCb3VuZHMgd2lsbCBjb21iaW5lXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoLi4uZGltZW5zaW9uczogRGltZW5zaW9uW10pXG4gICAge1xuICAgICAgICB0aGlzLl9kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB9XG5cbiAgICAvKiogVGhlIFRyYW5zZm9ybSB0aGlzIEJvdW5kcyBpcyBhc3NvY2lhdGVkIHRvICovXG4gICAgZ2V0IHRyYW5zZm9ybSgpOiBUcmFuc2Zvcm0geyByZXR1cm4gdGhpcy5fdHJhbnNmb3JtOyB9XG4gICAgc2V0IHRyYW5zZm9ybSh2YWw6IFRyYW5zZm9ybSkgeyB0aGlzLl90cmFuc2Zvcm0gPSB2YWw7IH1cblxuICAgIC8qKiBTZXQgdG8gdHJ1ZSBpZiB0aGUgY2FjaGVkIGRpbWVuc2lvbiBvZiB0aGlzIEJvdW5kcyBpcyBvdXQgb2YgZGF0ZSAqL1xuICAgIGdldCBkaXJ0eSgpIHsgcmV0dXJuIHRoaXMuX2RpcnR5OyB9XG4gICAgc2V0IGRpcnR5KHZhbCkgeyB0aGlzLl9kaXJ0eSA9IHZhbDsgfVxuXG4gICAgLyoqIFRoZSB3aWR0aCBvZiB0aGlzIEJvdW5kcyBsYXN0IGNhbGN1bGF0ZWQgYW5kIGNhY2hlZCAqL1xuICAgIGdldCBjYWNoZWRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuX2NhY2hlZFdpZHRoOyB9XG4gICAgLyoqIFRoZSBoZWlnaHQgb2YgdGhpcyBCb3VuZHMgbGFzdCBjYWxjdWxhdGVkIGFuZCBjYWNoZWQgKi9cbiAgICBnZXQgY2FjaGVkSGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5fY2FjaGVkSGVpZ2h0OyB9XG5cbiAgICAvKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNpemUgb2YgdGhpcyBCb3VuZHMgaXMgY3VycmVudGx5IGJlaW5nIGNhbGN1bGF0ZWQgKi9cbiAgICBnZXQgY2FsY3VsYXRpbmcoKSB7IHJldHVybiB0aGlzLl9jYWxjdWxhdGluZzsgfVxuXG4gICAgLyoqIEFuIGV2ZW50IHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGJvdW5kcyBjaGFuZ2VzIHNpemUuICovXG4gICAgZ2V0IG9uUmVzaXplKCk6IEV2ZW50MCB7IHJldHVybiB0aGlzLl9vblJlc2l6ZTsgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcGh5c2ljYWwgcGl4ZWxzIG9uIHRoZSBkZXZpY2UgZm9yIGV2ZXJ5IHN0YW5kYXJkIHBpeGVsLiBVc2VkIGZvclxuICAgICAqIGNvbnZlcnRpbmcgYmV0d2VlbiB1bml0cyBpbiBQaHlzaWNhbFBpeGVscyBhbmQgUGl4ZWxzLiBDdXJyZW50bHkgZGlyZWN0bHkgbWFrZXNcbiAgICAgKiBlbmdpbmUtZXh0ZXJuYWwgY2FsbCBpbiBvcmRlciB0byByZXNwb25kIGR5bmFtaWNhbGx5IHRvIGNoYW5nZXMuXG4gICAgICovXG4gICAgZ2V0IGRldmljZVBpeGVsUmF0aW8oKTogbnVtYmVyIHsgcmV0dXJuIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBib3VuZHMgb24gdGhlIHBhcmVudCB0byB0aGUgYXNzb2NpYXRlZCBHYW1lT2JqZWN0LiAoaWUuIHRoZSBCb3VuZHNcbiAgICAgKiBzY29waW5nIG9uZSBsZXZlIGhpZ2hpZXIgaW4gdGhlIEdhbWVPYmplY3QgdHJlZSlcbiAgICAgKi9cbiAgICBnZXQgcGFyZW50Qm91bmRzKCk6IEJvdW5kc1xuICAgIHtcbiAgICAgICAgaWYgKCh0aGlzLnRyYW5zZm9ybSkgJiYgKHRoaXMudHJhbnNmb3JtLnBhcmVudCkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0ucGFyZW50LmJvdW5kcztcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBUaGUgYXNwZWN0IHJhdGlvIHRoYXQgdGhlIHNpemUgb2YgdGhlIGJvdW5kcyB3aWxsIGZpdCB0by4gVGhlIHNpemUgb2YgdGhlIEJvdW5kc1xuICAgICogaXMgZm9yY2VkIHRvIG9iZXkgdGhlIGFzcGVjdCByYXRpbywgaWYgc2V0LiBTZXQgdG8gdW5kZWZpbmVkIHRvIGRpc2FibGUuXG4gICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gYW4gYXNwZWN0IHJhdGlvIGV4cHJlc3NlZCBhcyBhIGRlY2ltYWwgbnVtYmVyIChoZWlnaHQvd2lkdGgpXG4gICAgKi9cbiAgICBnZXQgdGFyZ2V0QXNwZWN0UmF0aW8oKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3RhcmdldEFzcGVjdFJhdGlvOyB9XG4gICAgc2V0IHRhcmdldEFzcGVjdFJhdGlvKGFzcGVjdFJhdGlvOiBudW1iZXIpIHsgdGhpcy5fdGFyZ2V0QXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbzsgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpbWVuc2lvbiAod2lkdGggYW5kIGhlaWdodCkgdGhhdCB0aGUgYm91bmRzIGlzIGZvcmNlZCBub3QgdG8gZXhjZWVkLFxuICAgICAqIHJlZ2FyZGxlc3Mgb2YgdGhlIGRpbWVuc2lvbnMgaXQgY29udGFpbnMuXG4gICAgICovXG4gICAgZ2V0IG1heERpbWVuc2lvbigpOiBEaW1lbnNpb24geyByZXR1cm4gdGhpcy5fbWF4RGltZW5zaW9uOyB9XG4gICAgc2V0IG1heERpbWVuc2lvbih2YWw6IERpbWVuc2lvbikgeyB0aGlzLl9tYXhEaW1lbnNpb24gPSB2YWw7IH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkaW1lbnNpb24gKHdpZHRoIGFuZCBoZWlnaHQpIHRoYXQgdGhlIGJvdW5kcyBpcyBtdXN0IGFsd2F5cyBiZSBhdCBsZWFzdFxuICAgICAqIGFzIGJpZyBhcywgcmVnYXJkbGVzcyBvZiB0aGUgZGltZW5zaW9ucyBpdCBjb250YWlucy5cbiAgICAgKi9cbiAgICBnZXQgbWluRGltZW5zaW9uKCk6IERpbWVuc2lvbiB7IHJldHVybiB0aGlzLl9taW5EaW1lbnNpb247IH1cbiAgICBzZXQgbWluRGltZW5zaW9uKHZhbDogRGltZW5zaW9uKSB7IHRoaXMuX21pbkRpbWVuc2lvbiA9IHZhbDsgfVxuXG4gICAgLyoqIFJldHVybnMgYSBuZXcgQm91bmRzIHdpdGggYSBQcm9wb3J0aW9uYWwgRGltZW5zaW9uIHRoYXQgZmlsbHMgaXRzIHBhcmVudCAqL1xuICAgIHN0YXRpYyBnZXQgZmlsbCgpIHsgcmV0dXJuIG5ldyBCb3VuZHMobmV3IFByb3BvcnRpb25hbERpbWVuc2lvbigxLDEpKTsgfVxuXG4gICAgLyoqIFJldHVybnMgdGhlIGxpc3Qgb2YgYWxsIGRpbWVuc2lvbnMgdGhhdCBhcmUgY29tYmluZWQgaW4gdGhpcyBCb3VuZHMuICovXG4gICAgZ2V0IGRpbWVuc2lvbnMoKTogRGltZW5zaW9uW10geyByZXR1cm4gdGhpcy5fZGltZW5zaW9uczsgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQm91bmRzIHdpZHRoLiBJZiB0aGUgc2l6ZSBoYXMgbm90IGNoYW5nZWQsIGEgY2FjaGVkIHZlcnNpb25cbiAgICAgKiBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCB0aGUgc2l6ZSBpcyByZS1jYWxjdWxhdGVkIGZyb20gdGhlIGNvbWJpbmF0aW9uIG9mIHRoZSBkaW1lbnNpb25zIGluIHRoZVxuICAgICAqIEJvdW5kcy5cbiAgICAgKi9cbiAgICB3aWR0aCgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMuZGlydHkpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZFdpZHRoO1xuICAgICAgICB0aGlzLl91cGRhdGVDYWNoZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkV2lkdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQm91bmRzIGhlaWdodC4gSWYgdGhlIHNpemUgaGFzIG5vdCBjaGFuZ2VkLCBhIGNhY2hlZCB2ZXJzaW9uXG4gICAgICogaXMgcmV0dXJuZWQuIE90aGVyd2lzZSwgdGhlIHNpemUgaXMgcmUtY2FsY3VsYXRlZCBmcm9tIHRoZSBjb21iaW5hdGlvbiBvZiB0aGUgZGltZW5zaW9ucyBpbiB0aGVcbiAgICAgKiBCb3VuZHMuXG4gICAgICovXG4gICAgaGVpZ2h0KCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgaWYgKCEodGhpcy5kaXJ0eSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkSGVpZ2h0O1xuICAgICAgICB0aGlzLl91cGRhdGVDYWNoZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkSGVpZ2h0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQm91bmRzIHNpemUgYXMgYSBzaW5nbGUgZGltZW5zaW9uLiBJZiB0aGUgc2l6ZSBoYXMgbm90IGNoYW5nZWQsIGEgY2FjaGVkIHZlcnNpb25cbiAgICAgKiBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCB0aGUgc2l6ZSBpcyBjYWxjdWFsdGVkIGZyb20gdGhlIGNvbWJpbmF0aW9uIG9mIHRoZSBkaW1lbnNpb25zIGluIHRoZVxuICAgICAqIEJvdW5kcy5cbiAgICAgKi9cbiAgICBhc0RpbWVuc2lvbigpIHsgcmV0dXJuIG5ldyBEaW1lbnNpb24odGhpcy53aWR0aCgpLCB0aGlzLmhlaWdodCgpKTsgfVxuXG4gICAgYXNwZWN0KCkgeyByZXR1cm4gdGhpcy5oZWlnaHQoKSAvIHRoaXMud2lkdGgoKTsgfVxuXG4gICAgLyoqXG4gICAgKiBUaGUgcmVmZXJlbmNlIHdpZHRoIHNwZWNpZmllZCBlaXRoZXIgb24gdGhpcyBCb3VuZHMgb3Igb24gdGhlIG5lYXJlc3RcbiAgICAqIHBhcmVudCBCb3VuZHMgd2l0aCBhIHNwZWNpZmllZCByZWZlcmVuY2Ugd2lkdGguXG4gICAgKi9cbiAgICBnZXQgcmVmZXJlbmNlV2lkdGgoKTogbnVtYmVyXG4gICAge1xuICAgICAgICBpZiAodGhpcy5fcmVmZXJlbmNlV2lkdGggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VXaWR0aDtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Qm91bmRzKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Qm91bmRzLnJlZmVyZW5jZVdpZHRoO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbiBhIHJlZmVyZW5jZSB3aWR0aCB0byB0aGlzIEJvdW5kcyB0byBzY29wZSBvdmVyIGNoaWxkIFRyYW5zbGF0aW9ucyBvciBEaW1lbnNpb25zXG4gICAgICogc3BlY2lmaWVkIGluIHJlZmVyZW5jZSB1bml0cy4gVG8gdW5zZXQgYSByZWZlcmVuY2Ugd2lkdGgsIHRoaXMgdmFsdWUgc2hvdWxkIGJlIFxuICAgICAqIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBzZXQgcmVmZXJlbmNlV2lkdGgocmVmZXJlbmNlV2lkdGg6IG51bWJlcikgeyB0aGlzLl9yZWZlcmVuY2VXaWR0aCA9IHJlZmVyZW5jZVdpZHRoO31cblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhpcyBib3VuZHMgc3BlY2lmaWVkIGluIHJlZmVyZW5jZSB1bml0cyByZWxhdGl2ZSBlaXRoZXIgdG9cbiAgICAgKiB0aGUgcmVmZXJlbmNlIHdpZHRoIG9uIHRoaXMgQm91bmRzIG9yIG9uIHRoZSBzY29waW5nIEJvdW5kcy5cbiAgICAgKi9cbiAgICBnZXQgcmVmZXJlbmNlSGVpZ2h0KCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZVdpZHRoICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VXaWR0aCp0aGlzLmFzcGVjdCgpO1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRCb3VuZHMpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRCb3VuZHMucmVmZXJlbmNlSGVpZ2h0O1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHBlciB1bml0IG9mIHRoZSBzY29waW5nIHJlZmVyZW5jZSB3aWR0aCAqL1xuICAgIGdldCByZWZlcmVuY2VTY2FsZSgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLl9yZWZlcmVuY2VXaWR0aCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGgoKS90aGlzLl9yZWZlcmVuY2VXaWR0aDtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Qm91bmRzKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Qm91bmRzLnJlZmVyZW5jZVNjYWxlO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBkaW1lbnNpb24gdG8gdGhlIEJvdW5kcy4gQXV0b21hdGljYWxseSBjaGVja3Mgd2hldGhlciB0aGUgc2l6ZSBoYXMgY2hhbmdlZCxcbiAgICAgKiBhbmQgaWYgc28gY2xlYXJzIGNhY2hlZCBzaXplIHZhbHVlIGFuZCBjYWxscyBvblJlc2l6ZSBldmVudC5cbiAgICAgKiBAcGFyYW0gZGltIHRoZSBkaW1lbnNpb24gdG8gYWRkIFxuICAgICAqL1xuICAgIGFkZERpbWVuc2lvbjxUIGV4dGVuZHMgRGltZW5zaW9uPihkaW06IFQpOiBUXG4gICAge1xuICAgICAgICB0aGlzLl9kaW1lbnNpb25zLnB1c2goZGltKTtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtLmdhbWVPYmplY3QuY3JlYXRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUmVzaXplZEF1dG9VcGRhdGUoKSlcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBkaW1lbnNpb25zIGZyb20gdGhlIGJvdW5kcywgcmVzZXR0aW5nIHRoZSBzaXplIHRvICgwLDApLiBDbGVhcnMgY2FjaGVkXG4gICAgICogc2l6ZSB2YWx1ZSBpZiB0aGUgc2l6ZSBoYXMgY2hhbmdlZCBhbmQgY2FsbHMgb25SZXNpemUgZXZlbnQuXG4gICAgICovXG4gICAgY2xlYXJEaW1lbnNpb25zKCk6IHZvaWRcbiAgICB7IFxuICAgICAgICB0aGlzLl9kaW1lbnNpb25zID0gW107XG4gICAgICAgIGlmICh0aGlzLmhhc1Jlc2l6ZWRBdXRvVXBkYXRlKCkpXG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBCb3VuZHMgaGFzIGNoYW5nZWQgaXRzIHNpemUgc2luY2UgaXQgd2FzIGxhc3QgY2FsY3VsYXRlZCxcbiAgICAgKiBhbmQgY2FjaGVzIHRoZSBuZXdseSBjYWxjdWxhdGVkIHNpemUuXG4gICAgICovXG4gICAgaGFzUmVzaXplZEF1dG9VcGRhdGUoKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgbGV0IHN0YXJ0V2lkdGggPSB0aGlzLl9jYWNoZWRXaWR0aDtcbiAgICAgICAgbGV0IHN0YXJ0SGVpZ2h0ID0gdGhpcy5fY2FjaGVkSGVpZ2h0O1xuICAgICAgICBsZXQgZmFpbGVkID0gdGhpcy5fY2FsY3VsYXRlQW5kU2V0RGltZW5zaW9uKCk7XG4gICAgICAgIHJldHVybiBmYWlsZWQgfHwgdGhpcy5fY2FjaGVkV2lkdGggIT09IHN0YXJ0V2lkdGggfHwgdGhpcy5fY2FjaGVkSGVpZ2h0ICE9PSBzdGFydEhlaWdodDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQ2hlY2sgd2hldGhlciBhbnkgb2YgdGhlIGNvbnRhaW5lZCBEaW1lbnNpb25zIGFyZSBtYXJrZWQgYXMgdXBkYXRlZC4gQWxzb1xuICAgICAqIHJlY2FsY3VsYXRlcyBhbnkgQ29uZGl0aW9uYWxEaW1lbnNpb25zIHRvIHNlZSBpZiB0aGVpciBwb3NpdGlvbiBoYXMgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBjaGVja0ZvclVwZGF0ZWREaW1lbnNpb25zKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBkOiBEaW1lbnNpb247XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fZGltZW5zaW9ucy5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBkID0gdGhpcy5fZGltZW5zaW9uc1tpXTtcbiAgICAgICAgICAgIGlmIChkLnVwZGF0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGQgYXMgQ29uZGl0aW9uYWxEaW1lbnNpb24pLnVwZGF0ZVNwZWNpYWwpXG4gICAgICAgICAgICAgICAgaWYgKChkIGFzIENvbmRpdGlvbmFsRGltZW5zaW9uKS5oYXNDaGFuZ2VkKHRoaXMucGFyZW50Qm91bmRzKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwZGF0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMuX2RpbWVuc2lvbnMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgICAgICB0aGlzLl9kaW1lbnNpb25zW2ldLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGRlc3Ryb3kgb24gYWxsIGNvbnRhaW5lZCBkaW1lbnNpb25zLCBhbmQgdW5saW5rcyBldmVudHMuXG4gICAgICovXG4gICAgZGVzdHJveSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLm9uUmVzaXplLnJlbW92ZUFsbCgpO1xuICAgICAgICBmb3IgKGxldCBpPTAsbGVuPXRoaXMuX2RpbWVuc2lvbnMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIHRoaXMuX2RpbWVuc2lvbnNbaV0uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ2hhbmdlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIHRoaXMub25SZXNpemUuY2FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ2FjaGUoKVxuICAgIHtcbiAgICAgICAgbGV0IGZhaWxlZCA9IHRoaXMuX2NhbGN1bGF0ZUFuZFNldERpbWVuc2lvbigpO1xuICAgICAgICB0aGlzLmRpcnR5ID0gZmFpbGVkO1xuICAgICAgICBpZiAoZmFpbGVkKVxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb25pbmdJc0RpcnR5KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQW5kU2V0RGltZW5zaW9uKCk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNhbGN1bGF0aW9uRmFpbGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0pXG4gICAgICAgICAgICBmb3IobGV0IGk9MCxsZW49dGhpcy5fZGltZW5zaW9ucy5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gdGhpcy5fZGltZW5zaW9uc1tpXS5waXhlbFdpZHRoKHRoaXMucGFyZW50Qm91bmRzKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHRoaXMuX2RpbWVuc2lvbnNbaV0ucGl4ZWxIZWlnaHQodGhpcy5wYXJlbnRCb3VuZHMpO1xuICAgICAgICAgICAgICAgIGlmICgoeCA9PT0gdW5kZWZpbmVkKSB8fCAoeSA9PT0gdW5kZWZpbmVkKSlcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRpb25GYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoICs9IHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCArPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGltaXRBbmRTZXREaW1lbnNpb24od2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBjYWxjdWxhdGlvbkZhaWxlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9saW1pdEFuZFNldERpbWVuc2lvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLm1pbkRpbWVuc2lvbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMubWluRGltZW5zaW9uLnBpeGVsV2lkdGgodGhpcy5wYXJlbnRCb3VuZHMpKVxuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHRoaXMubWluRGltZW5zaW9uLnBpeGVsV2lkdGgodGhpcy5wYXJlbnRCb3VuZHMpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbkRpbWVuc2lvbi5waXhlbEhlaWdodCh0aGlzLnBhcmVudEJvdW5kcykpXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm1pbkRpbWVuc2lvbi5waXhlbEhlaWdodCh0aGlzLnBhcmVudEJvdW5kcykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heERpbWVuc2lvbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMubWF4RGltZW5zaW9uLnBpeGVsV2lkdGgodGhpcy5wYXJlbnRCb3VuZHMpKVxuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIHRoaXMubWF4RGltZW5zaW9uLnBpeGVsV2lkdGgodGhpcy5wYXJlbnRCb3VuZHMpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heERpbWVuc2lvbi5waXhlbEhlaWdodCh0aGlzLnBhcmVudEJvdW5kcykpXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCB0aGlzLm1heERpbWVuc2lvbi5waXhlbEhlaWdodCh0aGlzLnBhcmVudEJvdW5kcykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRhcmdldEFzcGVjdFJhdGlvKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoaGVpZ2h0IDwgd2lkdGgqdGhpcy50YXJnZXRBc3BlY3RSYXRpbylcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGhlaWdodCooMS90aGlzLnRhcmdldEFzcGVjdFJhdGlvKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCp0aGlzLnRhcmdldEFzcGVjdFJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkV2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fY2FjaGVkSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vdXRpbC9Qb2ludFwiO1xuaW1wb3J0IFRyYW5zbGF0aW9uIGZyb20gXCIuL3RyYW5zbGF0aW9uL1RyYW5zbGF0aW9uXCI7XG5pbXBvcnQgQ29uZGl0aW9uYWxUcmFuc2xhdGlvbiBmcm9tIFwiLi90cmFuc2xhdGlvbi9Db25kaXRpb25hbFRyYW5zbGF0aW9uXCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuLi9UcmFuc2Zvcm1cIjtcbmltcG9ydCBQcm9wb3J0aW9uYWxUcmFuc2xhdGlvbiBmcm9tIFwiLi90cmFuc2xhdGlvbi9Qcm9wb3J0aW9uYWxUcmFuc2xhdGlvblwiO1xuXG4vKlxuKiBBIFBvc2l0aW9uIGlzIGEgbG9jYXRpb24gaW4gZ2FtZSBzcGFjZSB0aGF0IGlzIHVzdWFsbHkgYXNzb2NpYXRlZCB3aXRoIGEgcGFydGljdWxhciBUcmFuc2Zvcm0uXG4qIEl0IGlzIGRlZmluZWQgYnkgdGhlIGNvbWJpbmF0aW9uIG9mIGEgc2V0IG9mIFRyYW5zbGF0aW9ucyB3aGljaCBhcmUgYWRkZWQgdG9nZXRoZXIuIEl0IHN1cHBsaWVzXG4qIHR3byBtZXRob2RzIGZvciBnZXR0aW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgb2JqZWN0OiBhYnNvbHV0ZVBvc2l0aW9uVG9wTGVmdCgpIGFuZCBkcmF3UG9zaXRpb25Ub3BMZWZ0KCksXG4qIHRoZSBmaXJzdCBmb3IgdGhlIFwicmVhbFwiIHBvc2l0aW9uLCBhbmQgdGhlIHNlY29uZCByZWxhdGl2ZSB0byB0aGUgY2xvc2VzdCBzY29waW5nIERyYXdCdWZmZXIgKGllLlxuKiB3aGVyZSB0aGUgYXNzb2NpYXRlZCBnYW1lIG9iamVjdCBzaG91bGQgYmUgZHJhd24pLiBGb3IgYSBHYW1lT2JqZWN0IHRvIGhhdmUgbm8gcG9zaXRpb24gKGluc3RlYWRcbiogb2YgYSBwb3NpdGlvbiAoMCwwKSwgaXRzIFBvc2l0aW9uIHNob3VsZCBiZSBudWxsKS5cbipcbiogUG9zaXRpb25zIGFyZSByZWxhdGl2ZSB0byB0aGUgdG9wLWxlZnQgcG9zaXRpb24gb2YgdGhpcyBQb3NpdGlvbidzIFRyYW5zZm9ybSdzIEdhbWVPYmplY3QsIGlmXG4qIGl0IGhhcyBvbmUuXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb25cbntcbiAgICBwcml2YXRlIF90cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uW107XG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtOiBUcmFuc2Zvcm0gPSBudWxsO1xuICAgIHByaXZhdGUgX3Jlc2V0RHJhd1BvczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2NhY2hlZFg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfY2FjaGVkWTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYWNoZVhEaXJ0eTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfY2FjaGVZRGlydHk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX3JvdGF0aW9uOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgUG9zaXRpb24gd2l0aCB6ZXJvIG9yIG1vcmUgVHJhbnNsYXRpb25zLlxuICAgICAqIEBwYXJhbSB0cmFuc2xhdGlvbnMgVHJhbnNsYXRpb25zIHRoYXQgdGhpcyBQb3NpdGlvbiB3aWxsIGNvbWJpbmVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciguLi50cmFuc2xhdGlvbnM6IFRyYW5zbGF0aW9uW10pXG4gICAge1xuICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqIFRoZSBUcmFuc2Zvcm0gdGhhdCB0aGlzIFBvc2l0aW9uIGlzIGFzc29jaWF0ZWQgd2l0aCAqL1xuICAgIGdldCB0cmFuc2Zvcm0oKTogVHJhbnNmb3JtIHsgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTsgfVxuICAgIHNldCB0cmFuc2Zvcm0odmFsKSB7IHRoaXMuX3RyYW5zZm9ybSA9IHZhbDsgfVxuXG4gICAgLyoqIFxuICAgICAqIFdoaWxlIHRoaXMgaXMgc2V0IHRvIHRydWUsIGFsbCBjYWxscyB0byBnZXQgdGhlIGRyYXcgY29vcmRpbmF0ZXMgb2YgdGhpcyBQb3NpdGlvblxuICAgICAqIChjYWxsZWQsIGZvciBleGFtcGxlLCBieSBjaGlsZHJlbiBvZiB0aGlzIFBvc2l0aW9uJ3MgVHJhbnNmb3JtJ3MgR2FtZU9iamVjdCkgd2lsbFxuICAgICAqIHJldHVybiBhIFBvaW50IGF0IDAsMFxuICAgICAqL1xuICAgIGdldCByZXNldERyYXdQb3MoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXNldERyYXdQb3M7IH1cbiAgICBzZXQgcmVzZXREcmF3UG9zKHZhbCkgeyB0aGlzLl9yZXNldERyYXdQb3MgPSB2YWw7IH1cbiAgICBcbiAgICAvKiogVGhlIGxpc3Qgb2YgVHJhbnNsYXRpb25zIG9mIHdoaWNoIHRoaXMgUG9zaXRpb24gaXMgdGhlIGNvbWJpbmF0aW9uICovXG4gICAgZ2V0IHRyYW5zbGF0aW9ucygpOiBUcmFuc2xhdGlvbltdICB7IHJldHVybiB0aGlzLl90cmFuc2xhdGlvbnM7IH1cblxuICAgIC8qKiBTaG9ydGhhbmQgZm9yIGFic29sdXRlUG9zaXRpb25Ub3BMZWZ0KCkgKi9cbiAgICAvL2dldCBwb3NpdGlvbigpIHsgcmV0dXJuIHRoaXMuYWJzb2x1dGVQb3NpdGlvblRvcExlZnQoKTsgfVxuICAgIHBvaW50KCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCgpLCB0aGlzLnkoKSl9XG5cbiAgICAvKiogVGhlIHJvdGF0aW9uIG9mIHRoaXMgVHJhbnNmb3JtIGluIHJhZGlhbnMgKi9cbiAgICBnZXQgcm90YXRpb24oKSB7IHJldHVybiB0aGlzLl9yb3RhdGlvbjsgfVxuICAgIHNldCByb3RhdGlvbih2YWwpIHsgdGhpcy5fcm90YXRpb24gPSB2YWw7IH1cblxuXG4gICAgLyoqIFJldHVybnMgYSBuZXcgUG9zaXRpb24gd2l0aCByaWdodC1hbGlnbmVkIFByb3BvcnRpb25hbFRyYW5zbGF0aW9uICovXG4gICAgc3RhdGljIGdldCByaWdodCgpIHsgcmV0dXJuIG5ldyBQb3NpdGlvbihuZXcgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24oMSwgMCwgbmV3IFBvaW50KDEsIDApKSk7IH1cblxuICAgIC8qKiBSZXR1cm5zIGEgbmV3IFBvc2l0aW9uIHdpdGggYm90dG9tLWFsaWduZWQgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24gKi9cbiAgICBzdGF0aWMgZ2V0IGJvdHRvbSgpIHsgcmV0dXJuIG5ldyBQb3NpdGlvbihuZXcgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24oMCwgMSwgbmV3IFBvaW50KDAsIDEpKSk7IH1cbiAgICBcbiAgICAvKiogUmV0dXJucyBhIG5ldyBQb3NpdGlvbiB3aXRoIGJvdHRvbSByaWdodC1hbGlnbmVkIFByb3BvcnRpb25hbFRyYW5zbGF0aW9uICovXG4gICAgc3RhdGljIGdldCBib3R0b21SaWdodCgpIHsgcmV0dXJuIG5ldyBQb3NpdGlvbihuZXcgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24oMSwgMSwgbmV3IFBvaW50KDEsIDEpKSk7IH1cblxuICAgIC8qKiBSZXR1cm5zIGEgbmV3IFBvc2l0aW9uIHdpdGggYm90dG9tLWFsaWduZWQgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24gKi9cbiAgICBzdGF0aWMgZ2V0IGJvdHRvbUNlbnRyZSgpIHsgcmV0dXJuIG5ldyBQb3NpdGlvbihuZXcgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24oMC41LCAxLCBuZXcgUG9pbnQoMC41LCAxKSkpOyB9XG5cbiAgICAvKiogUmV0dXJucyBhIG5ldyBQb3NpdGlvbiB3aXRoIGNlbnRyZS1hbGlnbmVkIFByb3BvcnRpb25hbFRyYW5zbGF0aW9uICovXG4gICAgc3RhdGljIGdldCBjZW50cmUoKSB7IHJldHVybiBuZXcgUG9zaXRpb24obmV3IFByb3BvcnRpb25hbFRyYW5zbGF0aW9uKDAuNSwgMC41LCBuZXcgUG9pbnQoMC41LCAwLjUpKSk7IH1cblxuICAgIC8qKiBSZXR1cm5zIGEgbmV3IFBvc2l0aW9uIHdpdGggY2VudHJlLWFsaWduZWQgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24gaW4gdGhlIFggZGltZW5zaW9uICovXG4gICAgc3RhdGljIGdldCBjZW50cmVYKCkgeyByZXR1cm4gbmV3IFBvc2l0aW9uKG5ldyBQcm9wb3J0aW9uYWxUcmFuc2xhdGlvbigwLjUsIDAsIG5ldyBQb2ludCgwLjUsIDApKSk7IH1cblxuICAgIC8qKiBSZXR1cm5zIGEgbmV3IFBvc2l0aW9uIHdpdGggY2VudHJlLWFsaWduZWQgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24gaW4gdGhlIFkgZGltZW5zaW9uKi9cbiAgICBzdGF0aWMgZ2V0IGNlbnRyZVkoKSB7IHJldHVybiBuZXcgUG9zaXRpb24obmV3IFByb3BvcnRpb25hbFRyYW5zbGF0aW9uKDAsIDAuNSwgbmV3IFBvaW50KDAsIDAuNSkpKTsgfVxuXG4gICAgLyoqIFJldHVybnMgYSBuZXcgUG9zaXRpb24gd2l0aCBjZW50cmUtYWxpZ25lZCBQcm9wb3J0aW9uYWxUcmFuc2xhdGlvbiAqL1xuICAgIHN0YXRpYyBnZXQgY2VudHJlUmlnaHQoKSB7IHJldHVybiBuZXcgUG9zaXRpb24obmV3IFByb3BvcnRpb25hbFRyYW5zbGF0aW9uKDEsIDAuNSwgbmV3IFBvaW50KDEsIDAuNSkpKTsgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgVHJhbnNsYXRpb25zIHRvIHRoaXMgcG9zaXRpb24gKGllLiBtb3ZlIHRoaXMgcG9zaXRpb24gYnkgdGhlXG4gICAgICogc3VwcGxpZWQgVHJhbnNsYXRpb25zKS5cbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiBwcm92aWRlZCwgb3IgaWYgaXMgaXMgY29tYmluZWQgZm9yIGVmZmljaWVuY3ksYSByZWZlcmVuY2UgdG8gdGhlXG4gICAgICogdHJhbnNsYXRpb24gaXQgaXMgY29tYmluZWQgd2l0aC5cbiAgICAgKiBAcGFyYW0gVHJhbnNsYXRpb24gdGhlIFRyYW5zbGF0aW9uIHRvIGFkZCB0byB0aGUgcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIFRyYW5zbGF0aW9uXG4gICAgICovXG4gICAgYWRkVHJhbnNsYXRpb24odHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKTogVHJhbnNsYXRpb25cbiAgICB7XG4gICAgICAgIGxldCBmb3VuZDogVHJhbnNsYXRpb24gPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLl90cmFuc2xhdGlvbnMubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLl90cmFuc2xhdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoKHQuY29uc3RydWN0b3IgPT09IHRyYW5zbGF0aW9uLmNvbnN0cnVjdG9yKSAmJiAoKHQuYW5jaG9yWCA9PSB0cmFuc2xhdGlvbi5hbmNob3JYKSAmJiAodC5hbmNob3JZID09IHRyYW5zbGF0aW9uLmFuY2hvclkpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFByb3BvcnRpb25hbFRyYW5zbGF0aW9uKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJiMSA9ICh0IGFzIFByb3BvcnRpb25hbFRyYW5zbGF0aW9uKS5yZWZlcmVuY2VCb3VuZHM7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYjIgPSAodHJhbnNsYXRpb24gYXMgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24pLnJlZmVyZW5jZUJvdW5kc1xuICAgICAgICAgICAgICAgICAgICBpZiAocmIxID09PSByYjIpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuaW5uZXJYID0gdC5pbm5lclggKyB0cmFuc2xhdGlvbi5pbm5lclhcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuaW5uZXJZID0gdC5pbm5lclkgKyB0cmFuc2xhdGlvbi5pbm5lcllcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCh0IGluc3RhbmNlb2YgQ29uZGl0aW9uYWxUcmFuc2xhdGlvbikpXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIHQuaW5uZXJYID0gdC5pbm5lclggKyB0cmFuc2xhdGlvbi5pbm5lclhcbiAgICAgICAgICAgICAgICAgICAgdC5pbm5lclkgPSB0LmlubmVyWSArIHRyYW5zbGF0aW9uLmlubmVyWVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighZm91bmQpXG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnMucHVzaCh0cmFuc2xhdGlvbik7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybS5nYW1lT2JqZWN0LmNyZWF0ZWQpXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNNb3ZlZCgpKVxuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBmb3VuZCB8fCB0cmFuc2xhdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIFRyYW5zbGF0aW9ucyBmcm9tIHRoaXMgcG9zaXRpb24uIFRoZSBwb3NpdGlvbiByZXZlcnRzIGJhY2sgdG8gdGhlIG9yaWdpbiAoMCwwKVxuICAgICAqIGJlY2F1c2UgaXQgaGFzIG5vIFRyYW5zbGF0aW9ucy4gQXV0b21hdGljYWxseSBjbGVhcnMgY2FjaGVkIHBvc2l0aW9uIGlmIHRoZSBvYmplY3QgbW92ZXNcbiAgICAgKiBhcyBhIHJlc3VsdCwgYW5kIHVwZGF0ZXMgdGhlIGFzc29pYXRlZCBHYW1lT2JqZWN0LlxuICAgICAqL1xuICAgIGNsZWFyVHJhbnNsYXRpb25zKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX3RyYW5zbGF0aW9ucyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5oYXNNb3ZlZCgpKVxuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHggb2Zmc2V0IG9mIHRoZSB0b3AtbGVmdCBwb2ludCBvZiB0aGUgYXNzb2NpYXRlZCBnYW1lIG9iamVjdCBpbiBnYW1lIHNwYWNlXG4gICAgICovXG4gICAgeCgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmICghKHRoaXMuX2NhY2hlWERpcnR5KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWRYO1xuXG4gICAgICAgIGxldCBuZXdYID0gdGhpcy5fY2FsY3VsYXRlT2Zmc2V0WCgpO1xuICAgICAgICB0aGlzLl9jYWNoZVhEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jYWNoZWRYID0gbmV3WDtcbiAgICAgICAgcmV0dXJuIG5ld1g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB5IG9mZnNldCBvZiB0aGUgdG9wLWxlZnQgcG9pbnQgb2YgdGhlIGFzc29jaWF0ZWQgZ2FtZSBvYmplY3QgaW4gZ2FtZSBzcGFjZVxuICAgICAqL1xuICAgIHkoKTogbnVtYmVyXG4gICAge1xuICAgICAgICBpZiAoISh0aGlzLl9jYWNoZVlEaXJ0eSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkWTtcblxuICAgICAgICBsZXQgbmV3WSA9IHRoaXMuX2NhbGN1bGF0ZU9mZnNldFkoKTtcbiAgICAgICAgdGhpcy5fY2FjaGVZRGlydHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2FjaGVkWSA9IG5ld1k7XG4gICAgICAgIHJldHVybiBuZXdZO1xuICAgIH1cblxuICAgIHNldENhY2hlRGlydHkoKVxuICAgIHtcbiAgICAgICAgdGhpcy5fY2FjaGVYRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jYWNoZVlEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgYW5jaG9yWChhbmNob3JYOiBudW1iZXIpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLngoKSArIHRoaXMudHJhbnNmb3JtLmJvdW5kcy53aWR0aCgpKmFuY2hvclg7XG4gICAgfVxuXG4gICAgYW5jaG9yWShhbmNob3JZOiBudW1iZXIpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnkoKSArIHRoaXMudHJhbnNmb3JtLmJvdW5kcy5oZWlnaHQoKSphbmNob3JZO1xuICAgIH1cblxuICAgIGdldEFuY2hvclBvc2l0aW9uKCk6IFBvaW50XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHBvaW50IGFuY2hvciB0byB1c2UgYXMgYSBQb2ludFxuICAgICAqL1xuICAgIGdldEFuY2hvclBvc2l0aW9uKHBvaW50OiBQb2ludCk6IFBvaW50XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHggeCBhbmNob3IgY29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB5IHkgYW5jaG9yIGNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBnZXRBbmNob3JQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvaW50XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9wIGxlZnQgb2YgdGhlIHRyYW5zZm9ybS5cbiAgICAgKiBPcHRpb25hbGx5IGFjY2VwdHMgYW4gYW5jaG9yIGluIHRoZSBmb3JtIG9mIHRoZSBwb2ludC4gSWYgc2V0LCB3aWxsIHJldHVybiB0aGUgcG9zaXRpb25cbiAgICAgKiBvZiB0aGUgYW5jaG9yLiAoMCwwKSBpcyB0b3AgbGVmdC4gKDEsMSkgaXMgYm90dG9tIHJpZ2h0LlxuICAgICAqL1xuICAgIGdldEFuY2hvclBvc2l0aW9uKHBvaW50PzogUG9pbnQgfCBudW1iZXIsIHk/OiBudW1iZXIpOiBQb2ludFxuICAgIHtcbiAgICAgICAgaWYgKCFwb2ludClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvaW50KCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRsID0gdGhpcy5wb2ludCgpO1xuXG4gICAgICAgICAgICBpZiAocG9pbnQgaW5zdGFuY2VvZiBQb2ludClcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRsLnggKyB0aGlzLnRyYW5zZm9ybS5ib3VuZHMud2lkdGgoKSpwb2ludC54LCB0bC55ICsgdGhpcy50cmFuc2Zvcm0uYm91bmRzLmhlaWdodCgpKnBvaW50LnkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodGwueCArIHRoaXMudHJhbnNmb3JtLmJvdW5kcy53aWR0aCgpKnBvaW50LCB0bC55ICsgdGhpcy50cmFuc2Zvcm0uYm91bmRzLmhlaWdodCgpKnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgd2hldGhlciBhbnkgb2YgdGhlIGNvbWJpbmVkIFRyYW5zbGF0aW9ucyBhcmUgbWFya2VkIGFzIGhhdmluZyBiZWVuIHVwZGF0ZWQuXG4gICAgICogQWxzbyByZS1jYWxjdWxhdGVzIENvbmRpdGlvbmFsVHJhbnNsYXRpb25zIHRvIGNoZWNrIGlmIHRoZWlyIHBvc2l0aW9uIGhhcyBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGNoZWNrRm9yVXBkYXRlZFRyYW5zbGF0aW9ucygpOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgdXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdDogVHJhbnNsYXRpb247XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fdHJhbnNsYXRpb25zLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHQgPSB0aGlzLl90cmFuc2xhdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAodC51cGRhdGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0IGFzIENvbmRpdGlvbmFsVHJhbnNsYXRpb24pLnVwZGF0ZVNwZWNpYWwpXG4gICAgICAgICAgICAvL1RPRE86IGdlbmVyYXRpbmcgZ2FyYmFnZSBoZXJlXG4gICAgICAgICAgICAgICAgaWYgKCghKCh0IGFzIENvbmRpdGlvbmFsVHJhbnNsYXRpb24pLnByZXZpb3VzQWJzb2x1dGVQb3NpdGlvbikpIHx8ICghKFBvaW50LmVxdWFscygodCBhcyBDb25kaXRpb25hbFRyYW5zbGF0aW9uKS5hYnNvbHV0ZVBvc2l0aW9uRG9udFVwZGF0ZVByZXZpb3VzKHRoaXMudHJhbnNmb3JtLmJvdW5kcyksICh0IGFzIENvbmRpdGlvbmFsVHJhbnNsYXRpb24pLnByZXZpb3VzQWJzb2x1dGVQb3NpdGlvbikpKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwZGF0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnMuZm9yRWFjaChkID0+IGQudXBkYXRlZCA9IGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9zaXRpb24gb2YgdGhpcyBvYmplY3QgaGFzIGNoYW5nZWQgc2luY2UgaXRzIGNhY2hlZCBhYnNvbHV0ZVxuICAgICAqIHBvc2l0aW9uIHdhcyBsYXN0IGNhbGN1bGF0ZWQuIEFzIHRoaXMgZG9lcyBub3QgdXBkYXRlIHRoZSBjYWNoZWQgcG9zaXRpb24sIGl0IG1heVxuICAgICAqIGJlIG1vcmUgZWZmaWNpZW50IHRvIGNhbGwgYGhhc01vdmVkQXV0b1VwZGF0ZSgpYCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGhhc01vdmVkKCk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZVhEaXJ0eSB8fCB0aGlzLl9jYWNoZVlEaXJ0eSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBsZXQgbmV3WCA9IHRoaXMuX2NhbGN1bGF0ZU9mZnNldFgoKTtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLl9jYWxjdWxhdGVPZmZzZXRZKCk7XG4gICAgICAgIHJldHVybiBuZXdYICE9PSB0aGlzLl9jYWNoZWRYIHx8IG5ld1kgIT09IHRoaXMuX2NhY2hlZFk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGlzIG9iamVjdCBoYXMgY2hhbmdlZCBzaW5jZSBpdCB3YXMgbGFzdFxuICAgICAqIGNhbGN1bGF0ZWQgYW5kIGlmIHNvIHVwZGF0ZXMgdGhlIGNhY2hlZCBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBoYXNNb3ZlZEF1dG9VcGRhdGUoKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlWERpcnR5IHx8IHRoaXMuX2NhY2hlWURpcnR5KVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGxldCBvbGRYID0gdGhpcy5fY2FjaGVkWDtcbiAgICAgICAgbGV0IG9sZFkgPSB0aGlzLl9jYWNoZWRZO1xuICAgICAgICB0aGlzLl9jYWNoZWRYID0gdGhpcy5fY2FsY3VsYXRlT2Zmc2V0WCgpO1xuICAgICAgICB0aGlzLl9jYWNoZWRZID0gdGhpcy5fY2FsY3VsYXRlT2Zmc2V0WSgpO1xuICAgICAgICByZXR1cm4gb2xkWCAhPT0gdGhpcy5fY2FjaGVkWCB8fCBvbGRZICE9PSB0aGlzLl9jYWNoZWRZO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgYWxsIFRyYW5zbGF0aW9ucyBoZWxkIGJ5IHRoaXMgUG9zaXRpb25cbiAgICAgKi9cbiAgICBkZXN0cm95KCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fdHJhbnNsYXRpb25zLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNbaV0uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ2hhbmdlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybSlcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnJlY2FsY3VsYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlT2Zmc2V0WCgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCB4OiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLl90cmFuc2xhdGlvbnMubGVuZ3RoO2krKylcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybSlcbiAgICAgICAgICAgICAgICB4ICs9IHRoaXMuX3RyYW5zbGF0aW9uc1tpXS5nZXRPZmZzZXRYVG9wTGVmdCh0aGlzLnRyYW5zZm9ybS5ib3VuZHMpO1xuXG4gICAgICAgIGlmICgodGhpcy50cmFuc2Zvcm0pICYmICh0aGlzLnRyYW5zZm9ybS5wYXJlbnQpICYmICh0aGlzLnRyYW5zZm9ybS5wYXJlbnQuaGFzUG9zaXRpb24oKSkpXG4gICAgICAgICAgICB4ICs9IHRoaXMudHJhbnNmb3JtLnBhcmVudC5wb3NpdGlvbi54KCk7XG5cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlT2Zmc2V0WSgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCB5OiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLl90cmFuc2xhdGlvbnMubGVuZ3RoO2krKylcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybSlcbiAgICAgICAgICAgICAgICB5ICs9IHRoaXMuX3RyYW5zbGF0aW9uc1tpXS5nZXRPZmZzZXRZVG9wTGVmdCh0aGlzLnRyYW5zZm9ybS5ib3VuZHMpO1xuXG4gICAgICAgIGlmICgodGhpcy50cmFuc2Zvcm0pICYmICh0aGlzLnRyYW5zZm9ybS5wYXJlbnQpICYmICh0aGlzLnRyYW5zZm9ybS5wYXJlbnQuaGFzUG9zaXRpb24oKSkpXG4gICAgICAgICAgICB5ICs9IHRoaXMudHJhbnNmb3JtLnBhcmVudC5wb3NpdGlvbi55KCk7XG5cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi8uLi9Cb3VuZHNcIjtcblxuLyoqXG4qIEEgcGFpciBvZiB2YWx1ZXMgdGhhdCBkZXNjaWJlIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIGEgR2FtZU9iamVjdC5cbiogQnkgZGVmYXVsdCwgdGhlc2UgdmFsdWVzIGFyZSBleHByZXNzZWQgaW4gYWJzb2x1dGUgKHBpeGVsKSB1bml0cy5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaW1lbnNpb25cbntcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3VwZGF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQ29uc3RydWN0IGEgRGltZW5zaW9uIHRvIHN0b3JlIGEgcGFpciBvZiB2YWx1ZXNcbiAgICAqIEBwYXJhbSB3aWR0aCB0aGUgd2lkdGggdmFsdWUgdG8gc3RvcmVcbiAgICAqIEBwYXJhbSBoZWlnaHQgdGhlIGhlaWdodCB2YWx1ZSB0byBzdG9yZVxuICAgICovXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgLyogSGFzIHRoZSBkaW1lbnNpb24gdXBkYXRlZCBpdHNlbGYgYW5kIHRodXMgYW55IGNhY2hlZCB2YWx1ZSBpbmNsdWRpbmcgdGhpcyBkaW1lbnNpb24gbmVlZHMgdG8gYmUgcmVjYWxjdWxhdGVkPyAqL1xuICAgIGdldCB1cGRhdGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fdXBkYXRlZDsgfVxuICAgIHNldCB1cGRhdGVkKHZhbCkgeyB0aGlzLl91cGRhdGVkID0gdmFsOyB9XG5cbiAgICBtYXJrQXNVcGRhdGVkKCkgeyB0aGlzLl91cGRhdGVkID0gdHJ1ZTsgfVxuXG4gICAgLyoqIEJhc2Ugd2lkdGggc3RvcmVkIGluIHRoaXMgRGltZW5zaW9uICovXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aWR0aDsgfVxuICAgIHNldCB3aWR0aCh2YWwpXG4gICAgeyBcbiAgICAgICAgaWYgKHZhbCAhPT0gdGhpcy53aWR0aClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gdmFsO1xuICAgIH1cblxuICAgIC8qKiBCYXNlIGhlaWdodCBzdG9yZWQgaW4gdGhpcyBEaW1lbnNpb24gKi9cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9oZWlnaHQ7IH1cbiAgICBzZXQgaGVpZ2h0KHZhbClcbiAgICB7XG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuX2hlaWdodClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEFic29sdXRlIChwaXhlbCkgd2lkdGggb2YgdGhpcyBkaW1lbnNpb24gaW4gZGV2aWNlLWluZGVwZW5kYW50IHBpeGVsc1xuICAgICogQHBhcmFtIGJvdW5kcyB0aGUgYm91bmRzIG9mIHRoZSBwYXJlbnQgdG8gdGhpcyBkaW1lbnNpb25cbiAgICAqL1xuICAgIHBpeGVsV2lkdGgoYm91bmRzOiBCb3VuZHMpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2lkdGg7IH1cblxuICAgIC8qKlxuICAgICogQWJzb2x1dGUgKHBpeGVsKSBoZWlnaHQgb2YgdGhpcyBkaW1lbnNpb24gaW4gZGV2aWNlLWluZGVwZW5kYW50IHBpeGVsc1xuICAgICogQHBhcmFtIGJvdW5kcyB0aGUgYm91bmRzIG9mIHRoZSBwYXJlbnQgdG8gdGhpcyBkaW1lbnNpb25cbiAgICAqL1xuICAgIHBpeGVsSGVpZ2h0KGJvdW5kczogQm91bmRzKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2hlaWdodDsgfVxuXG4gICAgLyoqXG4gICAgKiBXaWR0aCBvZiB0aGlzIGRpbWVuc2lvbiBpbiBwaHlzaWNhbCBwaXhlbHNcbiAgICAqIEBwYXJhbSBib3VuZHMgdGhlIGJvdW5kcyBvZiB0aGUgcGFyZW50IHRvIHRoaXMgZGltZW5zaW9uXG4gICAgKi9cbiAgICBwaHlzaWNhbFBpeGVsV2lkdGgoYm91bmRzOiBCb3VuZHMpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5waXhlbFdpZHRoKGJvdW5kcykgKiBib3VuZHMuZGV2aWNlUGl4ZWxSYXRpbzsgfVxuXG4gICAgLyoqXG4gICAgKiBIZWlnaHQgb2YgdGhpcyBkaW1lbnNpb24gaW4gcGh5c2ljYWwgcGl4ZWxzXG4gICAgKiBAcGFyYW0gYm91bmRzIHRoZSBib3VuZHMgb2YgdGhlIHBhcmVudCB0byB0aGlzIGRpbWVuc2lvblxuICAgICovXG4gICAgcGh5c2ljYWxQaXhlbEhlaWdodChib3VuZHM6IEJvdW5kcyk6IG51bWJlciB7IHJldHVybiB0aGlzLnBpeGVsSGVpZ2h0KGJvdW5kcykgKiBib3VuZHMuZGV2aWNlUGl4ZWxSYXRpbzsgfVxuXG4gICAgLyoqXG4gICAgKiBBc3BlY3QgcmF0aW8gYmV0d2VlbiB3aWR0aCBhbmQgaGVpZ2h0IGV4cHJlc3NlZCBhcyBhIGRlY2ltYWwuIENhbGN1bGF0ZWRcbiAgICAqIGJ5OiAoaGVpZ2h0IC8gd2lkdGgpXG4gICAgKi9cbiAgICBnZXQgYXNwZWN0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmhlaWdodC90aGlzLndpZHRoOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZXh0ZXJuYWwgcmVmZXJlbmNlcyBob2xkaW5nIHRoaXMgb2JqZWN0IGZvciBnYXJiYWdlIGNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge31cblxuICAgIHN0YXRpYyBhZGQoYTogRGltZW5zaW9uLCBiOiBEaW1lbnNpb24pOiBEaW1lbnNpb25cbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9uKGEud2lkdGggKyBiLndpZHRoLCBhLmhlaWdodCArIGIuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byBkaW1lbnNpb25zIGFyZSBlcXVhbCBpbiBzaXplXG4gICAgICogQHBhcmFtIGEgXG4gICAgICogQHBhcmFtIGIgXG4gICAgICovXG4gICAgc3RhdGljIGVxdWFscyhhOiBEaW1lbnNpb24sIGI6IERpbWVuc2lvbik6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIHJldHVybiAoYS53aWR0aCA9PT0gYi53aWR0aCkgJiYgKGEuaGVpZ2h0ID09PSBiLmhlaWdodCk7IFxuICAgIH1cbn1cbiIsImltcG9ydCBEaW1lbnNpb24gZnJvbSBcIi4vRGltZW5zaW9uXCI7XG5cbi8qKlxuKiBBIHdpZHRoL2hlaWdodCBwYWlyIGV4cHJlc3NlZCBpbiBkZXZpY2UtaW5kZXBlbmRhbnQgcGl4ZWxzLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpeGVsRGltZW5zaW9uIGV4dGVuZHMgRGltZW5zaW9uXG57XG5cbn1cbiIsImltcG9ydCBEaW1lbnNpb24gZnJvbSBcIi4vRGltZW5zaW9uXCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuLy4uL0JvdW5kc1wiO1xuXG4vKipcbiogQSB3aWR0aC9oZWlnaHQgcGFpciBkZXRlcm1pbmVkIGFzIGEgcHJvcG9ydGlvbiBvZiB0aGUgcGFyZW50IFRyYW5zbGF0aW9uJ3MgZGltZW5zaW9uLlxuKiBDYW4gb3B0aW9uYWxseSBiZSBjb25zdHJ1Y3RlZCB3aXRoIGEgc3BlY2lmaWVkIHJlZmVyZW5jZSBib3VuZHMgdG8gdXNlIGluIHBsYWNlIG9mXG4qIHBhcmVudC5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wb3J0aW9uYWxEaW1lbnNpb24gZXh0ZW5kcyBEaW1lbnNpb25cbntcbiAgICBwcm90ZWN0ZWQgX3JlZmVyZW5jZUJvdW5kczogQm91bmRzO1xuXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJlZmVyZW5jZUJvdW5kcz86IEJvdW5kcylcbiAgICB7XG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBpZiAocmVmZXJlbmNlQm91bmRzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VCb3VuZHMgPSByZWZlcmVuY2VCb3VuZHM7XG4gICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VCb3VuZHMub25SZXNpemUucHVzaCh0aGlzLm1hcmtBc1VwZGF0ZWQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwaXhlbFdpZHRoKGJvdW5kczogQm91bmRzKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcy5jYWxjdWxhdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuX3JlZmVyZW5jZUJvdW5kcy5jYWNoZWRXaWR0aDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuX3JlZmVyZW5jZUJvdW5kcy53aWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogYm91bmRzLndpZHRoKCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHBpeGVsSGVpZ2h0KGJvdW5kczogQm91bmRzKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcy5jYWxjdWxhdGluZylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQgKiB0aGlzLl9yZWZlcmVuY2VCb3VuZHMuY2FjaGVkSGVpZ2h0O1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMuX3JlZmVyZW5jZUJvdW5kcy5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChib3VuZHMpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQgKiBib3VuZHMuaGVpZ2h0KCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcylcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUJvdW5kcy5vblJlc2l6ZS51bnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUcmFuc2xhdGlvbiBmcm9tIFwiLi9UcmFuc2xhdGlvblwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi8uLi91dGlsL1BvaW50XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuLi9Cb3VuZHNcIjtcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL1RyYW5zZm9ybVwiO1xuXG4vKipcbiogQSBUcmFuc2xhdGlvbiB3aG9zZSBwb3NpdGlvbiBpcyBleHByZXNzZWQgYXMgYSBwcm92aWRlZCBmdW5jdGlvbiBvZiB0aGUgZGltZW5zaW9ucyBvZlxuKiBpdHMgcGFyZW50LlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbmFsVHJhbnNsYXRpb24gZXh0ZW5kcyBUcmFuc2xhdGlvblxue1xuICAgIHByaXZhdGUgX2NvbmRpdGlvbmFsRnVuY3Rpb246IChnYW1lT2JqZWN0OiBUcmFuc2Zvcm0sIHBhcmVudFdpZHRoOiBudW1iZXIsIHBhcmVudEhlaWdodDogbnVtYmVyKSA9PiBQb2ludDtcbiAgICBwcml2YXRlIF9wcmV2aW91c0Fic29sdXRlUG9zaXRpb246IFBvaW50O1xuXG4gICAgcmVhZG9ubHkgdXBkYXRlU3BlY2lhbDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25kaXRpb25hbEZ1bmN0aW9uIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcGFyZW50IGRpbWVuc2lvbiBhbmQgcmV0dXJucyBhIHBvaW50XG4gICAgICogQHBhcmFtIGFuY2hvciBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb25hbEZ1bmN0aW9uOiAoZ2FtZU9iamVjdDogVHJhbnNmb3JtLCBwYXJlbnRXaWR0aDogbnVtYmVyLCBwYXJlbnRIZWlnaHQ6IG51bWJlcikgPT4gUG9pbnQsIGFuY2hvcj86IFBvaW50KVxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbmFsRnVuY3Rpb246IChnYW1lT2JqZWN0OiBUcmFuc2Zvcm0sIHBhcmVudFdpZHRoOiBudW1iZXIsIHBhcmVudEhlaWdodDogbnVtYmVyKSA9PiBQb2ludClcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb25hbEZ1bmN0aW9uOiAoZ2FtZU9iamVjdDogVHJhbnNmb3JtLCBwYXJlbnRXaWR0aDogbnVtYmVyLCBwYXJlbnRIZWlnaHQ6IG51bWJlcikgPT4gUG9pbnQsIGFuY2hvcj86IFBvaW50IHwgYm9vbGVhbilcbiAgICB7XG4gICAgICAgIGlmIChhbmNob3IgaW5zdGFuY2VvZiBQb2ludClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoMCwgMCwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgYW5jaG9yID09PSBcImJvb2xlYW5cIilcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3VwZXIoMCwwKTtcbiAgICAgICAgdGhpcy5fY29uZGl0aW9uYWxGdW5jdGlvbiA9IGNvbmRpdGlvbmFsRnVuY3Rpb247XG4gICAgICAgIHRoaXMudXBkYXRlU3BlY2lhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IHByZXZpb3VzQWJzb2x1dGVQb3NpdGlvbigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNBYnNvbHV0ZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIGdldE9mZnNldFgoYm91bmRzOiBCb3VuZHMpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKGJvdW5kcykueDtcbiAgICB9XG5cbiAgICBnZXRPZmZzZXRZKGJvdW5kczogQm91bmRzKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWJzb2x1dGVQb3NpdGlvbihib3VuZHMpLnk7XG4gICAgfVxuICAgIFxuICAgIGFic29sdXRlUG9zaXRpb24oYm91bmRzOiBCb3VuZHMpOiBQb2ludFxuICAgIHtcbiAgICAgICAgbGV0IHdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoYm91bmRzLnBhcmVudEJvdW5kcylcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGggPSBib3VuZHMucGFyZW50Qm91bmRzLndpZHRoKCk7XG4gICAgICAgICAgICBoZWlnaHQgPSBib3VuZHMucGFyZW50Qm91bmRzLmhlaWdodCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcHJldmlvdXNBYnNvbHV0ZVBvc2l0aW9uID0gIHRoaXMuX2NvbmRpdGlvbmFsRnVuY3Rpb24oYm91bmRzLnRyYW5zZm9ybSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2aW91c0Fic29sdXRlUG9zaXRpb247XG4gICAgfVxuXG4gICAgYWJzb2x1dGVQb3NpdGlvbkRvbnRVcGRhdGVQcmV2aW91cyhib3VuZHM6IEJvdW5kcylcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25kaXRpb25hbEZ1bmN0aW9uKGJvdW5kcy50cmFuc2Zvcm0sIGJvdW5kcy5wYXJlbnRCb3VuZHMud2lkdGgoKSxib3VuZHMucGFyZW50Qm91bmRzLmhlaWdodCgpKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBUcmFuc2xhdGlvbiBmcm9tIFwiLi9UcmFuc2xhdGlvblwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi4vQm91bmRzXCI7XG5cbi8qKlxuKiBBIFRyYW5zbGF0aW9uIHdob3NlIHBvc2l0aW9uIGlzIGV4cHJlc3NlZCBhcyBhIGRldmljZS1pbmRlcGVuZGFudCBwaXhlbCB2YWx1ZS5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXhlbFRyYW5zbGF0aW9uIGV4dGVuZHMgVHJhbnNsYXRpb25cbntcblxufVxuIiwiaW1wb3J0IFRyYW5zbGF0aW9uIGZyb20gXCIuL1RyYW5zbGF0aW9uXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uLy4uL3V0aWwvUG9pbnRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4uL0JvdW5kc1wiO1xuXG4vKipcbiogQSBUcmFuc2xhdGlvbiB3aG9zZSBwb3NpdGlvbiBpcyBleHByZXNzZWQgYXMgYSBwcm9wb3J0aW9uIG9mIHRoZSBkaW1lbnNpb25zIG9mXG4qIGl0cyBwYXJlbnQuXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcG9ydGlvbmFsVHJhbnNsYXRpb24gZXh0ZW5kcyBUcmFuc2xhdGlvblxue1xuICAgIHByb3RlY3RlZCBfcmVmZXJlbmNlQm91bmRzOiBCb3VuZHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9pbnQpXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvaW50LCBhbmNob3I6IFBvaW50KVxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb2ludCwgcmVmZXJlbmNlQm91bmRzOiBCb3VuZHMpXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFBvaW50LCBhbmNob3I6IFBvaW50LCByZWZlcmVuY2VCb3VuZHM6IEJvdW5kcylcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcilcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgYW5jaG9yOiBQb2ludClcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgcmVmZXJlbmNlQm91bmRzOiBCb3VuZHMpXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuY2hvcjogUG9pbnQsIHJlZmVyZW5jZUJvdW5kczogQm91bmRzKVxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciB8IFBvaW50LCB5PzogbnVtYmVyIHwgUG9pbnQgfCBCb3VuZHMsIGFuY2hvcj86IFBvaW50IHwgQm91bmRzLCByZWZlcmVuY2VCb3VuZHM/OiBCb3VuZHMpXG4gICAge1xuICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIFBvaW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoeSBpbnN0YW5jZW9mIFBvaW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN1cGVyKHgsIHkpXG4gICAgICAgICAgICAgICAgaWYgKGFuY2hvciBpbnN0YW5jZW9mIEJvdW5kcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlQm91bmRzID0gYW5jaG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN1cGVyKHgpO1xuICAgICAgICAgICAgICAgIGlmICh5IGluc3RhbmNlb2YgQm91bmRzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VCb3VuZHMgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0eXBlb2YoeCkgPT09IFwibnVtYmVyXCIpICYmICh0eXBlb2YoeSkgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoYW5jaG9yIGluc3RhbmNlb2YgUG9pbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIoeCwgeSwgYW5jaG9yKTtcbiAgICAgICAgICAgICAgICBpZiAocmVmZXJlbmNlQm91bmRzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VCb3VuZHMgPSByZWZlcmVuY2VCb3VuZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKGFuY2hvciBpbnN0YW5jZW9mIEJvdW5kcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlQm91bmRzID0gYW5jaG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcylcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUJvdW5kcy5vblJlc2l6ZS5wdXNoKHRoaXMubWFya0FzVXBkYXRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgcmVmZXJlbmNlQm91bmRzKCkgeyByZXR1cm4gdGhpcy5fcmVmZXJlbmNlQm91bmRzOyB9XG5cbiAgIC8qIGFic29sdXRlUG9zaXRpb24oYm91bmRzOiBCb3VuZHMpXG4gICAge1xuICAgICAgICBsZXQgZGltID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcylcbiAgICAgICAgICAgIGRpbSA9IHRoaXMuX3JlZmVyZW5jZUJvdW5kcy5kaW1lbnNpb247XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5wYXJlbnRCb3VuZHMpXG4gICAgICAgICAgICBkaW0gPSBib3VuZHMucGFyZW50Qm91bmRzLmRpbWVuc2lvbjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludCgwLDApO1xuICAgICAgICBsZXQgeCA9IHRoaXMucG9zaXRpb24ueCAqIGRpbS53aWR0aDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBvc2l0aW9uLnkgKiBkaW0uaGVpZ2h0O1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHgseSk7XG4gICAgfVxuKi9cbiAgICBnZXRPZmZzZXRYKGJvdW5kczogQm91bmRzKVxuICAgIHtcbiAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcylcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5fcmVmZXJlbmNlQm91bmRzLndpZHRoKCk7XG4gICAgICAgIGVsc2UgaWYgKGJvdW5kcy5wYXJlbnRCb3VuZHMpXG4gICAgICAgICAgICB3aWR0aCA9IGJvdW5kcy5wYXJlbnRCb3VuZHMud2lkdGgoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJYICogd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0T2Zmc2V0WShib3VuZHM6IEJvdW5kcylcbiAgICB7XG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xuICAgICAgICBpZiAodGhpcy5fcmVmZXJlbmNlQm91bmRzKVxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5fcmVmZXJlbmNlQm91bmRzLmhlaWdodCgpO1xuICAgICAgICBlbHNlIGlmIChib3VuZHMucGFyZW50Qm91bmRzKVxuICAgICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLnBhcmVudEJvdW5kcy5oZWlnaHQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJZICogaGVpZ2h0O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlZmVyZW5jZUJvdW5kcylcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUJvdW5kcy5vblJlc2l6ZS51bnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vLi4vdXRpbC9Qb2ludFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi4vQm91bmRzXCI7XG5cbi8qKlxuKiBSZXByZXNlbnRzIGEgVHJhbnNsYXRpb24uIFRoZSB1bml0cyBpbiB3aGljaCB0aGUgcG9zaXRpb24gaXMgZXhwcmVzc2VkIGluIGlzXG4qIGRldGVybWluZWQgYnkgc3ViY2xhc3Nlcy5cbiogQGFic3RyYWN0XG4qL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRpb25cbntcbiAgICBwcml2YXRlIF94OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3k6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfYW5jaG9yWDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9hbmNob3JZOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3VwZGF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBhbmNob3I/OiBQb2ludClcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9pbnQsIGFuY2hvcj86IFBvaW50KVxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciB8IFBvaW50LCB5PzogbnVtYmVyIHwgUG9pbnQsIGFuY2hvcj86IFBvaW50KVxuICAgIHtcbiAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBQb2ludClcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuX3ggPSB4Lng7XG4gICAgICAgICAgdGhpcy5feSA9IHgueTtcbiAgICAgICAgICBpZiAoeSBpbnN0YW5jZW9mIFBvaW50KVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5hbmNob3JYID0geS54O1xuICAgICAgICAgICAgICB0aGlzLmFuY2hvclkgPSB5Lnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCh0eXBlb2YoeCkgPT09IFwibnVtYmVyXCIpICYmICh0eXBlb2YoeSkgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFuY2hvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuY2hvclggPSBhbmNob3IueDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuY2hvclkgPSBhbmNob3IueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBXaGV0aGVyIHRoaXMgaGFzIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgdGltZSBpdCB3YXMgdXNlZCB0byBjYWxjdWxhdGVcbiAgICAgKiBhIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIGdldCB1cGRhdGVkKCkgeyByZXR1cm4gdGhpcy5fdXBkYXRlZDsgfVxuICAgIHNldCB1cGRhdGVkKHZhbCkgeyB0aGlzLl91cGRhdGVkID0gdmFsO31cblxuICAgIG1hcmtBc1VwZGF0ZWQoKSB7IHRoaXMuX3VwZGF0ZWQgPSB0cnVlOyB9XG5cbiAgICBnZXQgaW5uZXJYKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuICAgIHNldCBpbm5lclgodmFsKVxuICAgIHtcbiAgICAgICAgaWYgKHZhbCAhPT0gdGhpcy5feClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5feCA9IHZhbDtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpbm5lclkoKSB7IHJldHVybiB0aGlzLl95OyB9XG4gICAgc2V0IGlubmVyWSh2YWwpXG4gICAge1xuICAgICAgICBpZiAodmFsICE9PSB0aGlzLl95KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl95ID0gdmFsO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRPZmZzZXRYKGJvdW5kczogQm91bmRzKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3g7IH1cbiAgICBnZXRPZmZzZXRZKGJvdW5kczogQm91bmRzKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIGdldEFuY2hvck9mZnNldFgoYm91bmRzOiBCb3VuZHMpOiBudW1iZXIgeyByZXR1cm4gYm91bmRzLndpZHRoKCkgKiB0aGlzLl9hbmNob3JYOyB9XG4gICAgZ2V0QW5jaG9yT2Zmc2V0WShib3VuZHM6IEJvdW5kcyk6IG51bWJlciB7IHJldHVybiBib3VuZHMuaGVpZ2h0KCkgKiB0aGlzLl9hbmNob3JZOyB9XG5cbiAgICBnZXRPZmZzZXRYVG9wTGVmdChib3VuZHM6IEJvdW5kcyk6IG51bWJlciB7IHJldHVybiB0aGlzLmdldE9mZnNldFgoYm91bmRzKSAtIHRoaXMuZ2V0QW5jaG9yT2Zmc2V0WChib3VuZHMpOyB9XG4gICAgZ2V0T2Zmc2V0WVRvcExlZnQoYm91bmRzOiBCb3VuZHMpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5nZXRPZmZzZXRZKGJvdW5kcykgLSB0aGlzLmdldEFuY2hvck9mZnNldFkoYm91bmRzKTsgfVxuXG4gICAgLyoqXG4gICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGFuY2hvciBhcyBhIHByb3BvcnRpb24gb2YgdGhlIGRpbWVuc2lvbiBvZiB0aGVcbiAgICAqIFRyYW5zbGF0aW9uLiAwLDAgaXMgdGhlIHRvcCBsZWZ0LiAxLDEgaXMgYm90dG9tIHJpZ2h0LlxuICAgICovXG4gICAgZ2V0IGFuY2hvclgoKSB7IHJldHVybiB0aGlzLl9hbmNob3JYOyB9XG4gICAgZ2V0IGFuY2hvclkoKSB7IHJldHVybiB0aGlzLl9hbmNob3JZOyB9XG5cbiAgICAvKipcbiAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBhbmNob3IgYXMgYSBwcm9wb3J0aW9uIG9mIHRoZSBkaW1lbnNpb24gb2YgdGhlXG4gICAgKiBUcmFuc2xhdGlvbi4gMCwwIGluZGljYXRlcyB0b3AgbGVmdC4gMSwxIGluZGljYXRlcyBib3R0b20gcmlnaHQuXG4gICAgKiBAcGFyYW0gdmFsIHggYW5jaG9yIHZhbHVlXG4gICAgKi9cbiAgICBzZXQgYW5jaG9yWCh2YWw6IG51bWJlcilcbiAgICB7XG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuX2FuY2hvclgpXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYW5jaG9yWCA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBhbmNob3IgYXMgYSBwcm9wb3J0aW9uIG9mIHRoZSBkaW1lbnNpb24gb2YgdGhlXG4gICAgKiBUcmFuc2xhdGlvbi4gMCwwIGluZGljYXRlcyB0b3AgbGVmdC4gMSwxIGluZGljYXRlcyBib3R0b20gcmlnaHQuXG4gICAgKiBAcGFyYW0gdmFsIHkgYW5jaG9yIHZhbHVlXG4gICAgKi9cbiAgICBzZXQgYW5jaG9yWSh2YWw6IG51bWJlcilcbiAgICB7XG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuX2FuY2hvclkpXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYW5jaG9yWSA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZXh0ZXJuYWwgcmVmZXJlbmNlcyBob2xkaW5nIHRoaXMgb2JqZWN0IGZvciBnYXJiYWdlIGNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBkZXN0cm95KCk6IHZvaWQgeyB9XG59XG4iLCJpbXBvcnQgTW91c2UgZnJvbSBcImVuZ2luZS9pbnB1dC9Nb3VzZVwiO1xuaW1wb3J0IHsgUG9pbnRlciB9IGZyb20gXCJlbmdpbmUvaW5wdXQvUG9pbnRlclwiO1xuXG4vKipcbiAqIEEga2V5LXZhbHVlIHBhaXJcbiAqL1xuZXhwb3J0IGNsYXNzIFBhaXI8VCxVPlxue1xuICAgIHJlYWRvbmx5IGtleTogVDtcbiAgICByZWFkb25seSB2YWx1ZTogVTtcblxuICAgIGNvbnN0cnVjdG9yKGtleTogVCwgdmFsdWU6IFUpXG4gICAge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiB9IFxuXG4gLyoqXG4gICogU3RvcmVzIGFuIGFycmF5IG9mIHBhaXJzLCBpbiB3aGljaCB0aGUgc2FtZSBrZXkgbWF5IG9jY291ciBtdWxpdHBsZSB0aW1lc1xuICAqL1xuZXhwb3J0IGNsYXNzIER1cGxpY2F0ZU1hcDxULFU+XG57XG4gICAgZW50cmllczogUGFpcjxULFU+W10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcGFpcnMgc3RvcmVkXG4gICAgICovXG4gICAgZ2V0IGxlbmd0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmxlbmd0aDsgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcGFpciB0byB0aGUgbWFwXG4gICAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIHN0b3JlXG4gICAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byBzdG9yZVxuICAgICAqL1xuICAgIHB1c2goa2V5OiBULCB2YWx1ZTogVSkgeyB0aGlzLmVudHJpZXMucHVzaChuZXcgUGFpcihrZXksIHZhbHVlKSkgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGFsbCB2YWx1ZXMgZm9yIGEgc3BlY2lmaWVkIGtleSwgb3Igb3B0aW9uYWxseSBvbmx5IHRob3NlXG4gICAgICogbWF0Y2hpbmcgdGhlIHN1cHBsaWVkIGB2YWx1ZWAgcGFyYW1ldGVyLlxuICAgICAqIEBwYXJhbSBrZXkgXG4gICAgICogQHBhcmFtIHZhbHVlIFxuICAgICAqL1xuICAgIGRlbGV0ZShrZXk6IFQsIHZhbHVlPzogVSlcbiAgICB7XG4gICAgICAgIGxldCBuZXdFbnRyaWVzOiBQYWlyPFQsVT5bXSA9IFtdO1xuICAgICAgICB0aGlzLmVudHJpZXMuZm9yRWFjaCh4ID0+IFxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoeC5rZXkgIT09IGtleSlcbiAgICAgICAgICAgICAgICBuZXdFbnRyaWVzLnB1c2goeCk7XG4gICAgICAgICAgICBlbHNlIGlmICgodmFsdWUpICYmICh4LnZhbHVlICE9PSB2YWx1ZSkpXG4gICAgICAgICAgICAgICAgbmV3RW50cmllcy5wdXNoKHgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmVudHJpZXMgPSBuZXdFbnRyaWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhbGwgc3RvcmVkIHBhaXJzIHRoYXQgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBcbiAgICAgKi9cbiAgICBkZWxldGVWYWx1ZSh2YWx1ZTogVSlcbiAgICB7XG4gICAgICAgIGxldCBuZXdFbnRyaWVzOiBQYWlyPFQsVT5bXSA9IFtdO1xuICAgICAgICB0aGlzLmVudHJpZXMuZm9yRWFjaCh4ID0+IFxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoeC52YWx1ZSAhPT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgbmV3RW50cmllcy5wdXNoKHgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmVudHJpZXMgPSBuZXdFbnRyaWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBwYWlycyBzdG9yZWQgaW4gdGhlIG1hcFxuICAgICAqL1xuICAgIGNsZWFyKClcbiAgICB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhlIHN1cHBsaWVkIGNhbGxiYWNrIGZvciBlYWNoIHBhaXIgaW4gdGhlIGFycmF5LlxuICAgICAqIEBwYXJhbSBjYWxsYmFja2ZuIHRoZSBjYWxsYmFjayB0byBjYWxsXG4gICAgICovXG4gICAgZm9yRWFjaChjYWxsYmFja2ZuOiAodmFsdWU6UGFpcjxULFU+LCBpbmRleDogbnVtYmVyLCBhcnJheTogUGFpcjxULFU+W10pID0+IHZvaWQgKVxuICAgIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzLmZvckVhY2goY2FsbGJhY2tmbik7XG4gICAgfVxufVxuXG4vKipcbiAqIEFuIGBFdmVudGAgaG9sZHMgbWFueSBjYWxsYmFja3MgYW5kIGNhbGxzIHRoZW0gYWxsIHdoZW4gaXQgaXMgaXRzZWxmIGNhbGxlZC5cbiAqIEEgdHlwaWNhbCBgRXZlbnRgIG1pZ2h0IGJlIGFuIGBvbkNsaWNrYCBwcm9wZXJ0eSBmb3IgYSBidXR0b24uIENhbGxiYWNrc1xuICogY2FuIGJlIHB1c2hlZCB0byB0aGUgRXZlbnQgYW5kIGV2ZXJ5IGNhbGxiYWNrIG9uIHRoZSBldmVudCB3aGVuIGBFdmVudC5jYWxsYFxuICogaXMgY2FsbGVkIHdpbGwgYmUgY2FsbGVkLlxuICogXG4gKiBXaGVuIGNhbGxpbmcgYW4gZXZlbnQsIGFueSBudW1iZXIgb2YgYXJndW1lbnRzIGNhbiBiZSBzdXBwbGllZCBhbmQgdGhlc2Ugd2lsbFxuICogYmUgcGFzc2VkIG9uIHRvIHRoZSBjYWxsYmFja3MuIFRoaXMgY2F1c2VzIHRoZSBjcmVhdGlvbiAoYW5kIGdhcmJhZ2UgY29sbGVjdGlvbilcbiAqIG9mIGFuIGFycmF5LiBUbyBhdm9pZCB0aGlzLCB1c2UgdGhlIHN1YmNsYXNzZXMgZS5nIC5gRXZlbnQwYCwgYEV2ZW50MWAsIGBFdmVudDJgLFxuICogd2hlbmV2ZXIgeW91IGtub3cgaW4gYWR2YW5jZSBob3cgbWFueSBhcmd1bWVudHMgd2lsbCBiZSBwYXNzZWQuXG4gKiBcbiAqL1xuY2xhc3MgRXZlbnRcbntcbiAgICBwcm90ZWN0ZWQgX2NhbGxiYWNrczogRHVwbGljYXRlTWFwPG9iamVjdCwgKC4uLmFyZ3MpID0+IHZvaWQ+ID0gbmV3IER1cGxpY2F0ZU1hcDxvYmplY3QsICguLi5hcmdzKSA9PiB2b2lkPigpO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyBvbiB0aGUgZXZlbnQsIHBhc3NpbmcgYWxsIHRoZSBwYXJhbWV0ZXJzIHN1cHBsaWVkLlxuICAgICAqIEBwYXJhbSBhcmdzIHBhcmFtZXRlcnMgdG8gcGFzcyB0byBlYWNoIGNhbGxiYWNrXG4gICAgICovXG4gICAgY2FsbCguLi5hcmdzOiBhbnlbXSk6IHZvaWRcbiAgICB7IFxuICAgICAgICBmb3IgKGxldCBpPTAsIGxlbiA9IHRoaXMuX2NhbGxiYWNrcy5lbnRyaWVzLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MuZW50cmllc1tpXS52YWx1ZSguLi5hcmdzKTsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY2FsbGJhY2sgdG8gdGhlIEV2ZW50LiBJZiB0aGUgb3B0aW9uYWwgYGNyZWF0b3JgIHBhcmFtZXRlciBpcyBzdXBwbGllZCxcbiAgICAgKiB0aGlzIHdpbGwgYmUgc3RvcmVkIHdpdGggdGhlIGNhbGxiYWNrIHRvIGFsbG93IGVhc3kgY2xlYW51cCB1c2luZyB0aGVcbiAgICAgKiBgdW5yZWdpc3RlcmAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0gY3JlYXRvciBhbiBvYmplY3QgdG8gYXNzb2NpYXRlIHdpdGggdGhlIGNhbGxiYWNrXG4gICAgICovXG4gICAgcHVzaChjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCBjcmVhdG9yPzogb2JqZWN0KTogRXZlbnRcbiAgICB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5wdXNoKGNyZWF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgc3VwcGxpZWQgYGNyZWF0b3JgLiBUeXBpY2FsbHkgYSBgR2FtZU9iamVjdGBcbiAgICAgKiBtYXkgY2FsbCB0aGlzIGluIGl0cyBgZGVsZXRlYCBtZXRob2QgdG8gY2xlYW4gdXAgYW55IHJlZmVyZW5jZXMgdG8gaXRzZWxmXG4gICAgICogaW4gYEV2ZW50YCBjYWxsYmFja3MgaXQgaGFzIGNyZWF0ZWQuXG4gICAgICogQHBhcmFtIGNyZWF0b3JcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKGNyZWF0b3I6IG9iamVjdClcbiAgICB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5kZWxldGUoY3JlYXRvcik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHNwZWNpZmljIGNhbGxiYWNrIGZyb20gdGhlIEV2ZW50LiBOb3RlIHRoYXQgdGhlIGNhbGxiYWNrIHN1cHBsaWVkXG4gICAgICogbXVzdCBoYXZlIHRoZSBzYW1lIG9iamVjdCByZWZlcmVuY2UgYXMgdGhlIG9uZSBvcmlnaW5hbGx5IHN0b3JlZC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICByZW1vdmUoY2FsbGJhY2s6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MuZGVsZXRlVmFsdWUoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZvciB0aGlzIGV2ZW50LCBtYWtpbmcgaXQgb25jZSBhZ2FpbiBhbiBlbXB0eSBldmVudC5cbiAgICAgKi9cbiAgICByZW1vdmVBbGwoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqIFJldHVybnMgdGhlIG51bWJlciBvZiBjYWxsYmFja3MgcmVnaXN0ZXJlZCB0byB0aGlzIGV2ZW50LiAqL1xuICAgIGdldCBsZW5ndGgoKSB7IHJldHVybiB0aGlzLl9jYWxsYmFja3MubGVuZ3RoOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2hhbGxvdyBjbG9uZSBvZiB0aGUgRXZlbnQgd2hpY2ggY29udGFpbnMgdGhlIHNhbWUgY2FsbGJhY2tzLiBUaGUgY2FsbGJhY2tzXG4gICAgICogdGhlbXNlbHZlcyBhcmUgbm90IGNsb25lZC5cbiAgICAgKi9cbiAgICBjbG9uZSgpOiBFdmVudFxuICAgIHtcbiAgICAgICAgbGV0IGMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG4gICAgICAgIGxldCBhID0gbmV3IGMoKTtcbiAgICAgICAgZm9yIChsZXQgaT0wLCBsZW4gPSB0aGlzLl9jYWxsYmFja3MuZW50cmllcy5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAgYS5wdXNoKHRoaXMuX2NhbGxiYWNrcy5lbnRyaWVzW2ldLnZhbHVlLHRoaXMuX2NhbGxiYWNrcy5lbnRyaWVzW2ldLmtleSk7IFxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaW5rIHR3byBldmVudHMgdG9nZXRoZXIsIG1ha2luZyB0aGUgc2Vjb25kIGV2ZW50IGJlIGNhbGxlZCB3aGVuIHRoZSBcbiAgICAgKiBmaXJzdCBpcyBjYWxsZWQuXG4gICAgICogQHBhcmFtIHNvdXJjZSB0aGUgZXZlbnQgdGhhdCBpcyBjYWxsZWQgZmlyc3RcbiAgICAgKiBAcGFyYW0gZGVzdCB0aGUgZXZlbnQgdG8gYmUgY2FsbGVkIGF1dG9tYXRpY2FsbHkgd2hlbnQgdGhlIGBzb3VyY2VgIGV2ZW50XG4gICAgICogaXMgY2FsbGVkXG4gICAgICogQHBhcmFtIGNyZWF0b3IgYW4gb2JqZWN0IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN0YXRpYyBsaW5rKHNvdXJjZTogRXZlbnQsIGRlc3Q6IEV2ZW50LCBjcmVhdG9yPzogb2JqZWN0KTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYgKHNvdXJjZSAmJiBkZXN0KVxuICAgICAgICAgICAgc291cmNlLnB1c2goZGVzdC5jYWxsLmJpbmQoZGVzdCksIGNyZWF0b3IpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIGBFdmVudGAgZm9yIGNhbGxiYWNrcyB3aXRoIGV4YWN0bHkgMCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudDAgZXh0ZW5kcyBFdmVudFxue1xuICAgIGNhbGwoKTogdm9pZFxuICAgIHsgXG4gICAgICAgIGZvciAobGV0IGk9MCwgbGVuID0gdGhpcy5fY2FsbGJhY2tzLmVudHJpZXMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5lbnRyaWVzW2ldLnZhbHVlKCk7IFxuICAgIH1cblxuICAgIHB1c2goY2FsbGJhY2s6ICgpID0+IHZvaWQsIGNyZWF0b3I/OiBvYmplY3QpOiBFdmVudDBcbiAgICB7XG4gICAgICAgIHJldHVybiBzdXBlci5wdXNoKGNhbGxiYWNrLCBjcmVhdG9yKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBzdWJjbGFzcyBvZiBgRXZlbnRgIGZvciBjYWxsYmFja3Mgd2l0aCBleGFjdGx5IDEgYXJndW1lbnRzLlxuICovXG5leHBvcnQgY2xhc3MgRXZlbnQxIGV4dGVuZHMgRXZlbnRcbntcbiAgICBjYWxsKGFyZzE6IGFueSk6IHZvaWRcbiAgICB7IFxuICAgICAgICBmb3IgKGxldCBpPTAsIGxlbiA9IHRoaXMuX2NhbGxiYWNrcy5lbnRyaWVzLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MuZW50cmllc1tpXS52YWx1ZShhcmcxKTsgXG4gICAgfVxuXG4gICAgcHVzaChjYWxsYmFjazogKGFyZzE6IGFueSkgPT4gdm9pZCwgY3JlYXRvcj86IG9iamVjdCk6IEV2ZW50MVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnB1c2goY2FsbGJhY2ssIGNyZWF0b3IpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIGBFdmVudGAgZm9yIGNhbGxiYWNrcyB3aXRoIGV4YWN0bHkgMiBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudDIgZXh0ZW5kcyBFdmVudFxue1xuICAgIGNhbGwoYXJnMTogYW55LCBhcmcyOiBhbnkpOiB2b2lkXG4gICAgeyBcbiAgICAgICAgZm9yIChsZXQgaT0wLCBsZW4gPSB0aGlzLl9jYWxsYmFja3MuZW50cmllcy5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmVudHJpZXNbaV0udmFsdWUoYXJnMSwgYXJnMik7IFxuICAgIH1cblxuICAgIHB1c2goY2FsbGJhY2s6IChhcmcxOiBhbnksIGFyZzI6IGFueSkgPT4gdm9pZCwgY3JlYXRvcj86IG9iamVjdCk6IEV2ZW50MlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnB1c2goY2FsbGJhY2ssIGNyZWF0b3IpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIGBFdmVudGAgZm9yIGNhbGxiYWNrcyB3aXRoIGV4YWN0bHkgMyBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudDMgZXh0ZW5kcyBFdmVudFxue1xuICAgIGNhbGwoYXJnMTogYW55LCBhcmcyOiBhbnksIGFyZzM6IGFueSk6IHZvaWRcbiAgICB7IFxuICAgICAgICBmb3IgKGxldCBpPTAsIGxlbiA9IHRoaXMuX2NhbGxiYWNrcy5lbnRyaWVzLmxlbmd0aDtpPGxlbjtpKyspXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MuZW50cmllc1tpXS52YWx1ZShhcmcxLCBhcmcyLCBhcmczKTsgXG4gICAgfVxuXG4gICAgcHVzaChjYWxsYmFjazogKGFyZzE6IGFueSwgYXJnMjogYW55LCBhcmczOiBhbnkpID0+IHZvaWQsIGNyZWF0b3I/OiBvYmplY3QpOiBFdmVudDNcbiAgICB7XG4gICAgICAgIHJldHVybiBzdXBlci5wdXNoKGNhbGxiYWNrLCBjcmVhdG9yKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBzdWJjbGFzcyBvZiBgRXZlbnRgIGZvciBjYWxsYmFja3Mgd2l0aCBleGFjdGx5IDQgYXJndW1lbnRzLlxuICovXG5leHBvcnQgY2xhc3MgRXZlbnQ0IGV4dGVuZHMgRXZlbnRcbntcbiAgICBjYWxsKGFyZzE6IGFueSwgYXJnMjogYW55LCBhcmczOiBhbnksIGFyZzQ6YW55KTogdm9pZFxuICAgIHsgXG4gICAgICAgIGZvciAobGV0IGk9MCwgbGVuID0gdGhpcy5fY2FsbGJhY2tzLmVudHJpZXMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5lbnRyaWVzW2ldLnZhbHVlKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpOyBcbiAgICB9XG5cbiAgICBwdXNoKGNhbGxiYWNrOiAoYXJnMTogYW55LCBhcmcyOiBhbnksIGFyZzM6IGFueSwgYXJnNDphbnkpID0+IHZvaWQsIGNyZWF0b3I/OiBvYmplY3QpOiBFdmVudDRcbiAgICB7XG4gICAgICAgIHJldHVybiBzdXBlci5wdXNoKGNhbGxiYWNrLCBjcmVhdG9yKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBzdWJjbGFzcyBvZiBgRXZlbnRgIGZvciBjYWxsYmFja3Mgd2l0aCBleGFjdGx5IDUgYXJndW1lbnRzLlxuICovXG5leHBvcnQgY2xhc3MgRXZlbnQ1IGV4dGVuZHMgRXZlbnRcbntcbiAgICBjYWxsKGFyZzE6IGFueSwgYXJnMjogYW55LCBhcmczOiBhbnksIGFyZzQ6YW55LCBhcmc1OiBhbnkpOiB2b2lkXG4gICAgeyBcbiAgICAgICAgZm9yIChsZXQgaT0wLCBsZW4gPSB0aGlzLl9jYWxsYmFja3MuZW50cmllcy5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmVudHJpZXNbaV0udmFsdWUoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSk7IFxuICAgIH1cblxuICAgIHB1c2goY2FsbGJhY2s6IChhcmcxOiBhbnksIGFyZzI6IGFueSwgYXJnMzogYW55LCBhcmc0OmFueSwgYXJnNTogYW55KSA9PiB2b2lkLCBjcmVhdG9yPzogb2JqZWN0KTogRXZlbnQ1XG4gICAge1xuICAgICAgICByZXR1cm4gc3VwZXIucHVzaChjYWxsYmFjaywgY3JlYXRvcik7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgc3ViY2xhc3Mgb2YgYEV2ZW50YCBmb3IgY2FsbGJhY2tzIHdpdGggZXhhY3RseSA2IGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50NiBleHRlbmRzIEV2ZW50XG57XG4gICAgY2FsbChhcmcxOiBhbnksIGFyZzI6IGFueSwgYXJnMzogYW55LCBhcmc0OmFueSwgYXJnNTogYW55LCBhcmc2OiBhbnkpOiB2b2lkXG4gICAgeyBcbiAgICAgICAgZm9yIChsZXQgaT0wLCBsZW4gPSB0aGlzLl9jYWxsYmFja3MuZW50cmllcy5sZW5ndGg7aTxsZW47aSsrKVxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmVudHJpZXNbaV0udmFsdWUoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSwgYXJnNik7IFxuICAgIH1cblxuICAgIHB1c2goY2FsbGJhY2s6IChhcmcxOiBhbnksIGFyZzI6IGFueSwgYXJnMzogYW55LCBhcmc0OmFueSwgYXJnNTogYW55LCBhcmc2OmFueSkgPT4gdm9pZCwgY3JlYXRvcj86IG9iamVjdCk6IEV2ZW50NlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnB1c2goY2FsbGJhY2ssIGNyZWF0b3IpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIGBFdmVudGAgZm9yIGNhbGxiYWNrcyB3aGljaCB0YWtlIGEgYE1vdXNlYCBhbmQgYSBgUG9pbnRlcmAgYXNcbiAqIGFzIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vdXNlRXZlbnQgZXh0ZW5kcyBFdmVudDJcbntcbiAgICBjYWxsKG1vdXNlOiBNb3VzZSwgcG9pbnRlcjogUG9pbnRlcik6IHZvaWRcbiAgICB7IFxuICAgICAgICBzdXBlci5jYWxsKG1vdXNlLCBwb2ludGVyKTtcbiAgICB9XG5cbiAgICBwdXNoKGNhbGxiYWNrOiAobW91c2U6IE1vdXNlLCBwb2ludGVyOiBQb2ludGVyKSA9PiB2b2lkLCBjcmVhdG9yPzogb2JqZWN0KTogTW91c2VFdmVudFxuICAgIHsgXG4gICAgICAgIHJldHVybiBzdXBlci5wdXNoKGNhbGxiYWNrLCBjcmVhdG9yKTtcbiAgICB9XG59IiwiLyoqXG4qIEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBzaW1wbGUgMkQgY29vcmRpbmF0ZSwgMkQgdmVjdG9yLCBvciB4LXkgdmFsdWUgcGFpci5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFxue1xuICAgIHByb3RlY3RlZCBfeDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfeTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5feCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy5feSA9IHkgfHwgMDtcbiAgICB9XG5cbiAgICBnZXQgeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5feDsgfVxuICAgIGdldCB5KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl95O31cblxuICAgIC8qKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgb2YgdGhlIFBvaW50IGFzIGlmIGEgdmVjdG9yICovXG4gICAgZ2V0IG1hZ25pdHVkZSgpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuX3gqdGhpcy5feCArIHRoaXMuX3kqdGhpcy5feSk7IH1cblxuICAgIC8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvaW50IHN0b3JlZCBpcyAwLDAgKi9cbiAgICBnZXQgaXNaZXJvKCk6IGJvb2xlYW4geyByZXR1cm4gKHRoaXMueCA9PT0gMCkgJiYgKHRoaXMueSA9PT0gMCl9XG5cbiAgICAvKipcbiAgICAgKiBWZWN0b3IgYWRkaXRpb24gb2YgdGhlIHR3byBwb2ludHMgYXMgaWYgdmVjdG9yc1xuICAgICAqIEBwYXJhbSBhIGZpcnN0IHZlY3RvclxuICAgICAqIEBwYXJhbSBiIHNlY29uZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKGE6IFBvaW50LCBiOiBQb2ludCk6IFBvaW50XG4gICAge1xuICAgICAgICBsZXQgeCA9IGEueCArIGIueDtcbiAgICAgICAgbGV0IHkgPSBhLnkgKyBiLnk7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoeCx5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZWN0b3Igc3VidHJhY3Rpb24gb2YgdGhlIHR3byBQb2ludHMgYXMgaWYgdmVjdG9ycy4gSWYgb25seSBvbmUgdmVjdG9yXG4gICAgICogaXMgc3VwcGxpZWQsIHRoaXMgaXMgc3VidHJhY3RlZCBmcm9tIHRoZSBvcmlnaW4gKDAsMCkuXG4gICAgICogXG4gICAgICogQHBhcmFtIGEgZmlyc3QgdmVjdG9yXG4gICAgICogQHBhcmFtIGIgc2Vjb25kIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBtaW51cyhhOiBQb2ludCwgYj86IFBvaW50KTogUG9pbnRcbiAgICB7XG4gICAgICAgIGlmICghYilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWludXMobmV3IFBvaW50KDAsMCksIGEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB4ID0gYS54IC0gYi54O1xuICAgICAgICBsZXQgeSA9IGEueSAtIGIueTtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh4LHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBvaW50IGFzIHZlY3RvciBtdWx0aXBsaWVkIGJ5IHRoZSBzdXBwbGllZCBzY2FsYXIgdmFsdWUsXG4gICAgICogb3IgaWYgdHdvIHBvaW50cyBhcmUgc3VwcGxpZWQsIGVhY2ggY29vcmRpbmF0ZSBwYWlyIGlzIG11bHRpcGxlZCB0b2dldGhlci5cbiAgICAgKiBAcGFyYW0gcFxuICAgICAqIEBwYXJhbSBzIFxuICAgICAqL1xuICAgIHN0YXRpYyBtdWx0aXBseShwOiBQb2ludCwgczogbnVtYmVyKTogUG9pbnRcbiAgICBzdGF0aWMgbXVsdGlwbHkocDogUG9pbnQsIGI6IFBvaW50KTogUG9pbnRcbiAgICBzdGF0aWMgbXVsdGlwbHkocDogUG9pbnQsIHM6IG51bWJlciB8IFBvaW50KTogUG9pbnRcbiAgICB7XG4gICAgICAgIGlmIChzIGluc3RhbmNlb2YgUG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KHAueCAqIHMueCwgcC55ICogcy55KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludChwLnggKiBzLCBwLnkgKiBzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICAgICAqIEBwYXJhbSBwIHRoZSBmaXJzdCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gcyB0aGUgc2Vjb25kIHZlY3RvclxuICAgICAqL1xuICAgIHN0YXRpYyBkb3RQcm9kdWN0KGE6IFBvaW50LCBiOiBQb2ludCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIChhLnggKiBiLnggKyBhLnkgKiBiLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpdmlkZSBlYWNoIGRpbWVuc2lvbiBvZiB0aGUgdmVjdG9yIGJ5IHRoZSBzdXBwbGllZCBzY2FsYXIgdmFsdWVcbiAgICAgKiBAcGFyYW0gcFxuICAgICAqIEBwYXJhbSBzIFxuICAgICAqL1xuICAgIHN0YXRpYyBkaXZpZGUocDogUG9pbnQsIHM6IG51bWJlcik6IFBvaW50XG4gICAge1xuICAgICAgICBsZXQgeCA9IHAueCAvIHM7XG4gICAgICAgIGxldCB5ID0gcC55IC8gcztcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh4LHkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcm9zc1Byb2R1Y3QocDogUG9pbnQsIHM6IFBvaW50KTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gcC54ICogcy55IC0gcC55ICogcy54O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHBvaW50cyBzaGFyZSB0aGUgc2FtZSB4IGFuZCB5IHZhbHVlc1xuICAgICAqIEBwYXJhbSBhIFxuICAgICAqIEBwYXJhbSBiIFxuICAgICAqL1xuICAgIHN0YXRpYyBlcXVhbHMoYTogUG9pbnQsIGI6IFBvaW50KVxuICAgIHtcbiAgICAgICAgcmV0dXJuICgoYS54ID09PSBiLngpICYmIChhLnkgPT09IGIueSkpO1xuICAgIH1cblxuICAgIC8qKiBSZXR1cm5zIHRoZSBzdHJhaWdodCBsaW5lIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50cyAqKi9cbiAgICBzdGF0aWMgZGlzdGFuY2UoYTogUG9pbnQsIGI6IFBvaW50KVxuICAgIHtcbiAgICAgICAgbGV0IHggPSBhLnggLSBiLng7XG4gICAgICAgIGxldCB5ID0gYS55IC0gYi55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBwb2ludCB3aGljaCBpcyByb3RhdGVkIGNsb2Nrd2lzZSBhYm91dCB0aGUgb3JpZ2luLlxuICAgICAqIFJlbWVtYmVyIHRoZSB5IGF4aXMgaXMgaW52ZXJ0ZWQuXG4gICAgICogQHBhcmFtIGFuZ2xlIGNsb2Nrd2lzZSBhbmdsZSB0byByb3RhdGUgYnlcbiAgICAgKi9cbiAgICByb3RhdGUoYW5nbGU6IG51bWJlcilcbiAgICB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5jb3MoYW5nbGUpICogdGhpcy5feCArIC1NYXRoLnNpbihhbmdsZSkgKiB0aGlzLl95O1xuICAgICAgICBsZXQgeSA9IE1hdGguc2luKGFuZ2xlKSAqIHRoaXMuX3ggKyBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLl95O1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHgseSk7XG4gICAgfVxuXG4gICAgY2xvc2VzdFBvaW50KHBvaW50czogUG9pbnRbXSlcbiAgICB7XG4gICAgICAgIGxldCBzbWFsbGVzdERpc3RhbmNlOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCB3aW5uZXI6IFBvaW50O1xuICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGQgPSBQb2ludC5taW51cyhwLHRoaXMpLm1hZ25pdHVkZTtcbiAgICAgICAgICAgICAgICBpZiAoKHNtYWxsZXN0RGlzdGFuY2UgPT09IHVuZGVmaW5lZCkgfHwgKGQgPCBzbWFsbGVzdERpc3RhbmNlKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsZXN0RGlzdGFuY2UgPSBkO1xuICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPSBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIHJldHVybiB3aW5uZXI7XG4gICAgfVxuXG4gICAgZ2V0IG5vcm1hbGlzZWQoKTogUG9pbnRcbiAgICB7XG4gICAgICAgIHJldHVybiBQb2ludC5kaXZpZGUodGhpcywgdGhpcy5tYWduaXR1ZGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhbmdsZUJldHdlZW4oYTogUG9pbnQsIGI6IFBvaW50KTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihiLnksYi54KSAtIE1hdGguYXRhbjIoYS55LGEueClcbiAgICAgICAvLyByZXR1cm4gUG9pbnQuZG90UHJvZHVjdChhLGIpLyhhLm1hZ25pdHVkZSpiLm1hZ25pdHVkZSlcbiAgICB9XG5cbiAgICBwcm9qZWN0aW9uSW4odmVjdG9yOiBQb2ludClcbiAgICB7XG4gICAgICAgIHJldHVybiBQb2ludC5kb3RQcm9kdWN0KHRoaXMsIHZlY3Rvci5ub3JtYWxpc2VkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYW5nbGVUb1VuaXRWZWN0b3IoYW5nbGU6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xuICAgIH1cblxuICAgIGFzQW5nbGUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBHQ1JlbW92ZUVsZW1lbnQoYXJyYXk6IEFycmF5PGFueT4sIGluZGV4QTogbnVtYmVyKVxue1xuICAgIEdDU3dhcEVsZW1lbnRzKGFycmF5LCBpbmRleEEsIGFycmF5Lmxlbmd0aC0xKTtcbiAgICBhcnJheS5sZW5ndGggPSBhcnJheS5sZW5ndGgtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdDU3dhcEVsZW1lbnRzKGFycmF5OiBBcnJheTxhbnk+LCBpbmRleEE6IG51bWJlciwgaW5kZXhCOiBudW1iZXIpXG57XG4gICAgdmFyIHRtcCA9IGFycmF5W2luZGV4QV07XG4gICAgYXJyYXlbaW5kZXhBXSA9IGFycmF5W2luZGV4Ql07XG4gICAgYXJyYXlbaW5kZXhCXSA9IHRtcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFyZ3VtZW50c0Zyb21TdHJpbmcoc2VhcmNoOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBzdHJpbmc+XG57XG4gICAgbGV0IHRtcDogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgcGFpcnMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIHNlYXJjaFxuICAgICAgICAuc3Vic3RyKDEpXG4gICAgICAgIC5zcGxpdChcIiZcIilcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdG1wID0gaXRlbS5zcGxpdChcIj1cIik7XG4gICAgICAgIHBhaXJzLnNldChkZWNvZGVVUklDb21wb25lbnQodG1wWzBdKSxkZWNvZGVVUklDb21wb25lbnQodG1wWzFdKSlcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIHBhaXJzO1xufSIsImltcG9ydCB7IGxhdW5jaGVyT3B0aW9ucyB9IGZyb20gXCIuL3ZpZXcvZ2FtZUxhdW5jaGVyT3B0aW9uc1wiO1xuaW1wb3J0IHsgd3JhcExhdW5jaGVyT3B0aW9uc0ZvckVkaXRvciB9IGZyb20gXCJlZGl0b3IvbGF1bmNoZXJPcHRpb25zXCI7XG5sZXQgYSA9IHdyYXBMYXVuY2hlck9wdGlvbnNGb3JFZGl0b3IobGF1bmNoZXJPcHRpb25zKTtcbmV4cG9ydCB7IGEgYXMgbGF1bmNoZXJPcHRpb25zfTtcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL0JvdW5kc1wiO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL1Bvc2l0aW9uXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9jb250ZXh0MmQvQ29udGV4dDJEQ2FtZXJhXCI7XG5pbXBvcnQgeyBMb2NhbERhdGEgfSBmcm9tIFwiLi9Mb2NhbERhdGFcIjtcbmltcG9ydCB7IEZCU2NlbmFyaW9EYXRhIH0gZnJvbSBcImdhbWVzZXJ2ZXIvZnVzZWJsYWRlL0ZCU2NlbmFyaW9EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFnZW50RHJhdyBleHRlbmRzIEdhbWVPYmplY3RcbntcbiAgICBwcml2YXRlIF9kYXRhOiBGQlNjZW5hcmlvRGF0YTtcbiAgICBwcml2YXRlIF9sb2NhbERhdGE6IExvY2FsRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgYm91bmRzOiBCb3VuZHMsIGRhdGE6IEZCU2NlbmFyaW9EYXRhLCBsb2NhbERhdGE6IExvY2FsRGF0YSlcbiAgICB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBib3VuZHMpXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9sb2NhbERhdGEgPSBsb2NhbERhdGE7XG4gICAgfVxuXG4gICAgZHJhdyhjYW1lcmE6IENhbWVyYSlcbiAgICB7XG4gICAgICAgIGxldCBzID0gdGhpcy5fbG9jYWxEYXRhLnNjYWxlO1xuXG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fZGF0YS5hZ2VudHMubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgY2FtZXJhLmNvbnRleHQyRC5maWxsU3R5bGUgPSBbXCJyZWRcIixcImdyZWVuXCIsXCJibHVlXCJdW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wLGxlbj10aGlzLl9kYXRhLmFnZW50c1tpXS5sZW5ndGg7ajxsZW47aisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBhZ2VudCA9IHRoaXMuX2RhdGEuYWdlbnRzW2ldW2pdO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuc2F2ZSgpXG4gICAgICAgICAgICAgICAgbGV0IHggPSBhZ2VudC54KnM7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBhZ2VudC55KnM7XG4gICAgICAgICAgICAgICAgY2FtZXJhLmNvbnRleHQyRC50cmFuc2xhdGUoeCx5KTtcbiAgICAgICAgICAgICAgICBjYW1lcmEuY29udGV4dDJELnJvdGF0ZShhZ2VudC5yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLmNvbnRleHQyRC50cmFuc2xhdGUoLXgsLXkpO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuZmlsbFJlY3QoeC0gKGFnZW50LmNvbGxpZGVSYWRpdXMvMikqcywgeS0gKGFnZW50LmNvbGxpZGVSYWRpdXMvMikqcyxhZ2VudC5jb2xsaWRlUmFkaXVzKnMsYWdlbnQuY29sbGlkZVJhZGl1cypzKVxuICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcImVuZ2luZS9nYW1lb2JqZWN0L2NvbnRleHQyZC9Db250ZXh0MkRDYW1lcmFcIjtcbmltcG9ydCBLZXlUcmlnZ2VyLCB7IEtleVRyaWdnZXJFdmVudHMgfSBmcm9tIFwiZW5naW5lL2dhbWVvYmplY3QvaW5wdXQvS2V5VHJpZ2dlclwiO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL1Bvc2l0aW9uXCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL0JvdW5kc1wiO1xuaW1wb3J0IFBpeGVsVHJhbnNsYXRpb24gZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vdHJhbnNsYXRpb24vUGl4ZWxUcmFuc2xhdGlvblwiO1xuaW1wb3J0IFRpbWluZyBmcm9tIFwiZW5naW5lL1RpbWluZ1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNhbWVyYSBleHRlbmRzIENhbWVyYVxue1xuICAgIHByaXZhdGUgX3BvczogUGl4ZWxUcmFuc2xhdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogUG9zaXRpb24sIGJvdW5kczogQm91bmRzKVxuICAgIHtcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIGJvdW5kcyk7XG4gICAgICAgIHRoaXMuX3BvcyA9IHBvc2l0aW9uLmFkZFRyYW5zbGF0aW9uKG5ldyBQaXhlbFRyYW5zbGF0aW9uKDAsMCkpO1xuICAgIH1cblxuICAgIGNyZWF0ZSh0aW1pbmc6IFRpbWluZylcbiAgICB7XG4gICAgICAgIGxldCBrdCA9IHRoaXMuYWRkQ2hpbGQobmV3IEtleVRyaWdnZXIoKSk7XG4gICAgICAgIGt0LmdldEtleUV2ZW50KFwiUmlnaHRBcnJvd1wiLCBLZXlUcmlnZ2VyRXZlbnRzLm9uS2V5SXNEb3duKS5wdXNoKHRoaXMuX21vdmUuYmluZCh0aGlzLCAxLCAwLCB0aW1pbmcpKTtcbiAgICAgICAga3QuZ2V0S2V5RXZlbnQoXCJMZWZ0QXJyb3dcIiwgS2V5VHJpZ2dlckV2ZW50cy5vbktleUlzRG93bikucHVzaCh0aGlzLl9tb3ZlLmJpbmQodGhpcywgLTEsIDAsIHRpbWluZykpO1xuICAgICAgICBrdC5nZXRLZXlFdmVudChcIlVwQXJyb3dcIiwgS2V5VHJpZ2dlckV2ZW50cy5vbktleUlzRG93bikucHVzaCh0aGlzLl9tb3ZlLmJpbmQodGhpcywgMCwgLTEsIHRpbWluZykpO1xuICAgICAgICBrdC5nZXRLZXlFdmVudChcIkRvd25BcnJvd1wiLCBLZXlUcmlnZ2VyRXZlbnRzLm9uS2V5SXNEb3duKS5wdXNoKHRoaXMuX21vdmUuYmluZCh0aGlzLCAwLCAxLCB0aW1pbmcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyLCB0aW1pbmc6IFRpbWluZylcbiAgICB7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMucGFyZW50LnRyYW5zZm9ybS5ib3VuZHMud2lkdGgoKSAtIHRoaXMudHJhbnNmb3JtLmJvdW5kcy53aWR0aCgpO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5wYXJlbnQudHJhbnNmb3JtLmJvdW5kcy5oZWlnaHQoKSAtIHRoaXMudHJhbnNmb3JtLmJvdW5kcy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy5fcG9zLmlubmVyWCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuX3Bvcy5pbm5lclggKyB4ICogdGltaW5nLmRlbHRhU2Vjb25kcywgd2lkdGgpKTtcbiAgICAgICAgdGhpcy5fcG9zLmlubmVyWSAgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLl9wb3MuaW5uZXJZICsgeSAqIHRpbWluZy5kZWx0YVNlY29uZHMsIGhlaWdodCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgRHJhd0J1ZmZlciBmcm9tIFwiZW5naW5lL2dhbWVvYmplY3QvY29udGV4dDJkL0RyYXdCdWZmZXJcIjtcbmltcG9ydCBUaW1pbmcgZnJvbSBcImVuZ2luZS9UaW1pbmdcIjtcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tIFwiZW5naW5lL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vUG9zaXRpb25cIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vQm91bmRzXCI7XG5pbXBvcnQgV29ybGREcmF3IGZyb20gXCIuL1dvcmxkRHJhd1wiO1xuaW1wb3J0IEFnZW50RHJhdyBmcm9tIFwiLi9BZ2VudERyYXdcIjtcbmltcG9ydCB7IExvY2FsRGF0YSB9IGZyb20gXCIuL0xvY2FsRGF0YVwiO1xuaW1wb3J0IHsgR2FtZUNhbWVyYSB9IGZyb20gXCIuL0dhbWVDYW1lcmFcIjtcbmltcG9ydCBQcm9wb3J0aW9uYWxEaW1lbnNpb24gZnJvbSBcImVuZ2luZS90cmFuc2Zvcm0vZGltZW5zaW9uL1Byb3BvcnRpb25hbERpbWVuc2lvblwiO1xuaW1wb3J0IFBpeGVsRGltZW5zaW9uIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL2RpbWVuc2lvbi9QaXhlbERpbWVuc2lvblwiO1xuaW1wb3J0IHsgRkJTY2VuYXJpbyB9IGZyb20gXCJnYW1lc2VydmVyL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVSb290IGV4dGVuZHMgRHJhd0J1ZmZlclxue1xuICAgIHJlYWRvbmx5IHR5cGVOYW1lOiBzdHJpbmcgPSBcIkdhbWVSb290XCI7XG4gICAgcHJpdmF0ZSBfc2NlbmFyaW86IEZCU2NlbmFyaW87XG4gICAgcHJpdmF0ZSBfbG9jYWxEYXRhOiBMb2NhbERhdGE7XG4gICAgcHJpdmF0ZSBfd29ybGQ6IERyYXdCdWZmZXI7XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlKHRpbWluZzogVGltaW5nLCBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsIGlucHV0RGV2aWNlcylcbiAgICB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZSh0aW1pbmcsIGVudmlyb25tZW50LCBpbnB1dERldmljZXMpO1xuICAgICAgICB0aGlzLl9zY2VuYXJpbyA9IHdpbmRvd1tcIkZCU2NlbmFyaW9cIl07XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvLmNyZWF0ZSgpO1xuICAgICAgICBpZiAoIXRoaXMuX3NjZW5hcmlvKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2NlbmFyaW8gZGV0ZWN0ZWQgaW4gZW52aXJvbm1lbnQuIEVuc3VyZSBzY2VuYXJpbyBzY3JpcHQgaGFzIGxvYWRlZC5cIik7XG4gICAgICAgIHRoaXMuX2xvY2FsRGF0YSA9IG5ldyBMb2NhbERhdGEoKTtcblxuICAgICAgICBsZXQgd29ybGQgPSB0aGlzLmFkZENoaWxkKG5ldyBEcmF3QnVmZmVyKG5ldyBQb3NpdGlvbigpLCBCb3VuZHMuZmlsbCkpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG1hcCA9IHdvcmxkLmFkZENoaWxkKG5ldyBXb3JsZERyYXcobmV3IFBvc2l0aW9uKCksIG5ldyBCb3VuZHMobmV3IFBpeGVsRGltZW5zaW9uKHRoaXMuX3NjZW5hcmlvLmRhdGEubWFwLmxlbmd0aCp0aGlzLl9sb2NhbERhdGEuc2NhbGUsdGhpcy5fc2NlbmFyaW8uZGF0YS5tYXAubGVuZ3RoWzBdKnRoaXMuX2xvY2FsRGF0YS5zY2FsZSkpLCB0aGlzLl9zY2VuYXJpby5kYXRhLCB0aGlzLl9sb2NhbERhdGEpKTtcbiAgICAgICAgd29ybGQuYWRkQ2hpbGQobmV3IEFnZW50RHJhdyhuZXcgUG9zaXRpb24oKSwgQm91bmRzLmZpbGwsIHRoaXMuX3NjZW5hcmlvLmRhdGEsIHRoaXMuX2xvY2FsRGF0YSkpO1xuXG4gICAgICAgIGxldCBjYW1lcmEgPSBtYXAuYWRkQ2hpbGQobmV3IEdhbWVDYW1lcmEobmV3IFBvc2l0aW9uKCksIG5ldyBCb3VuZHMobmV3IFByb3BvcnRpb25hbERpbWVuc2lvbigxLDEsIHRoaXMudHJhbnNmb3JtLmJvdW5kcykpKSlcbiAgICAgICAgd29ybGQuYWRkQ2FtZXJhKGNhbWVyYSk7XG4gICAgICAgIHdvcmxkLm1haW5DYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMuX3dvcmxkID0gd29ybGQ7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWluZzogVGltaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW8udXBkYXRlKHRpbWluZy5kZWx0YVNlY29uZHMpO1xuICAgICAgICB0aGlzLl93b3JsZC5yZXF1ZXN0RHJhdygpO1xuICAgIH1cblxuICAgLyogcHJpdmF0ZSBfY3JlYXRlQ29udHJvbGxlcihkYXRhOiBMb2NhbERhdGEsIHNlcnZlcjogTG9jYWxQbGF5U2VydmVyKTogQ29udHJvbGxlcjxMb2NhbENvbW1hbmRUeXBlPlxuICAgIHtcbiAgICAgICAgbGV0IGludm9rZXIgPSBuZXcgSW52b2tlcjxMb2NhbENvbW1hbmRUeXBlPigpO1xuICAgICAgICBsZXQgYyA9IG5ldyBDb250cm9sbGVyPExvY2FsQ29tbWFuZFR5cGU+KGludm9rZXIpO1xuICAgICAgICBsZXQgbW9kZWwgPSBuZXcgTG9jYWxNb2RlbChkYXRhKTtcbiAgICAgICAgbGV0IHNlcnZlckNvbm5lY3Rpb24gPSBuZXcgTG9jYWxDbGllbnRDb25uZWN0aW9uPEZCU2NlbmFyaW9EYXRhLCBTYXZlRGF0YSwgQ29tbWFuZFR5cGU+KDAsIDAsIG1vZGVsLm5ldHdvcmspO1xuICAgICAgICBpZiAoIXNlcnZlci5jb25uZWN0TG9jYWxDbGllbnQoc2VydmVyQ29ubmVjdGlvbikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPb3BzLCBjbGllbnRJRCBhbHJlYWR5IHRha2VuXCIpO1xuICAgICAgICBtb2RlbC5jcmVhdGUoaW52b2tlciwgc2VydmVyQ29ubmVjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfSovXG59XG4iLCJleHBvcnQgY2xhc3MgTG9jYWxEYXRhXG57XG4gICAgc2NhbGU6IG51bWJlciA9IDY0O1xufSIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL0JvdW5kc1wiO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCJlbmdpbmUvdHJhbnNmb3JtL1Bvc2l0aW9uXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCJlbmdpbmUvZ2FtZW9iamVjdC9jb250ZXh0MmQvQ29udGV4dDJEQ2FtZXJhXCI7XG5pbXBvcnQgeyBMb2NhbERhdGEgfSBmcm9tIFwiLi9Mb2NhbERhdGFcIjtcbmltcG9ydCB7IEZCU2NlbmFyaW9EYXRhIH0gZnJvbSBcImdhbWVzZXJ2ZXIvZnVzZWJsYWRlL0ZCU2NlbmFyaW9EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkRHJhdyBleHRlbmRzIEdhbWVPYmplY3RcbntcbiAgICBwcml2YXRlIF9kYXRhOiBGQlNjZW5hcmlvRGF0YTtcbiAgICBwcml2YXRlIF9sb2NhbERhdGE6IExvY2FsRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbiwgYm91bmRzOiBCb3VuZHMsIGRhdGE6IEZCU2NlbmFyaW9EYXRhLCBsb2NhbERhdGE6IExvY2FsRGF0YSlcbiAgICB7XG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBib3VuZHMpXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9sb2NhbERhdGEgPSBsb2NhbERhdGE7XG4gICAgfVxuXG4gICAgZHJhdyhjYW1lcmE6IENhbWVyYSlcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGk9MCxsZW49dGhpcy5fZGF0YS5pbmZsdWVuY2UubGVuZ3RoO2k8bGVuO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wLGxlbj10aGlzLl9kYXRhLmluZmx1ZW5jZVtpXS5sZW5ndGg7ajxsZW47aisrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMuX3NjZW5hcmlvLmRhdGEubWFwW2ldW2pdID09PSBXYWxsVHlwZS5Ob25lKVxuICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gTWF0aC5taW4odGhpcy5fZGF0YS5pbmZsdWVuY2VbaV1bal1bMF0sMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuZmlsbFN0eWxlID0gXCIjXCIrdmFsK3ZhbCt2YWw7XG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5jb250ZXh0MkQuZmlsbFJlY3QoaSp0aGlzLl9sb2NhbERhdGEuc2NhbGUsaip0aGlzLl9sb2NhbERhdGEuc2NhbGUsIDEqdGhpcy5fbG9jYWxEYXRhLnNjYWxlLDEqdGhpcy5fbG9jYWxEYXRhLnNjYWxlKVxuICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgLy8gICAgIGNhbWVyYS5jb250ZXh0MkQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgLy8gICAgIGNhbWVyYS5jb250ZXh0MkQuZmlsbFJlY3QoaSxqLCAxLDEpXG4gICAgICAgICAgICAgICAgLy99XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZVJvb3QgZnJvbSBcInZpZXcvR2FtZVJvb3RcIjtcbmltcG9ydCBMYXVuY2hlck9wdGlvbnMgZnJvbSBcImVuZ2luZS9sYXVuY2hlci9MYXVuY2hlck9wdGlvbnNcIjtcbmltcG9ydCBQaXhlbERpbWVuc2lvbiBmcm9tIFwiZW5naW5lL3RyYW5zZm9ybS9kaW1lbnNpb24vUGl4ZWxEaW1lbnNpb25cIjtcbmltcG9ydCBJbnB1dERldmljZUdyb3VwIGZyb20gXCJlbmdpbmUvaW5wdXQvSW5wdXREZXZpY2VHcm91cFwiO1xuXG5sZXQgbGF1bmNoZXJPcHRpb25zOiBMYXVuY2hlck9wdGlvbnMgPSB7XG4gICAgcm9vdEdhbWVPYmplY3RUeXBlOiBHYW1lUm9vdCxcbiAgICBtaW5EaW1lbnNpb246IG5ldyBQaXhlbERpbWVuc2lvbigzMDAsNTAwKSxcbiAgICBtYXhEaW1lbnNpb246IG5ldyBQaXhlbERpbWVuc2lvbig3MDAsdW5kZWZpbmVkKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICBoYXNBbHBoYUNoYW5uZWw6IGZhbHNlLFxuICAgIHVzZXNNb3VzZTogdHJ1ZSxcbiAgICB1c2VzS2V5Ym9hcmQ6IHRydWUsXG4gICAgYWRkRXh0cmFJbnB1dERldmljZXM6IChpbnB1dERldmljZUdyb3VwOiBJbnB1dERldmljZUdyb3VwKSA9PiB7fSxcbiAgICBnYW1lVGFyZ2V0OiBcImdhbWVUYXJnZXRcIixcbiAgICB3aW5kb3dWYXJpYWJsZU5hbWU6IHVuZGVmaW5lZCxcbiAgICBhcmdzOiB7IH1cbn1cblxuZXhwb3J0IHsgbGF1bmNoZXJPcHRpb25zIH0iXSwic291cmNlUm9vdCI6IiJ9