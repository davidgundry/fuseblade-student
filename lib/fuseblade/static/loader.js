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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/engine/loader/loadScript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/engine/loader/AnimatedLoader.ts":
/*!*********************************************!*\
  !*** ./src/engine/loader/AnimatedLoader.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimatedLoader; });
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./src/engine/loader/Loader.ts");

class AnimatedLoader extends _Loader__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.bgPosition = 50;
        this.rate = -2.5;
        this.animateBackground = false;
        this.barColour = "white";
        this.barBackgroundColour = "grey";
        this.textColour = "white";
        this.barWidth = 100;
        this.barHeight = 10;
        this.backgroundColour = undefined;
    }
    create() {
        if (!this.container)
            new Error("Cannot load game into container with ID '" + this.loaderOptions.gameTarget + "'. No element with that name was found.");
        this.bgImage = this.loaderOptions.backgroundImage;
        this.backgroundColour = this.loaderOptions.backgroundColor;
        this.barColour = this.loaderOptions.barColour;
        if (this.backgroundColour)
            this.container.style.backgroundColor = this.backgroundColour;
        this.div = document.createElement('div');
        this.div.innerHTML =
            '<div id="barOuter" style="\
                background-color: ' + this.barBackgroundColour + '; \
                width: ' + this.barWidth + 'px; \
                height: ' + this.barHeight + 'px; \
                position: absolute; \
                left: 50%; \
                top: 80%; \
                border: 0px solid black; \
                transform: translate(-50%, -50%);">\
            <div id="barInner" style="\
                width: 0px; \
                height: 100%; \
                background-color: ' + this.barColour + ';"></div>\
            <div id="barText" style="\
                font-size: 10pt; \
                position: absolute; \
                color: ' + this.textColour + '; \
                left: 50%; \
                top: -17px; \
                transform: translate(-50%, 0%);">\
            </div></div>';
        this.container.appendChild(this.div);
        this.bar = document.querySelector("#barOuter");
        this.bar2 = document.querySelector("#barInner");
        this.barText = document.querySelector("#barText");
        this.barText.innerText = "Loading...";
        this.bar2.style.width = 0 + "px";
    }
    loadStart() {
        if (this.bgImage)
            this._loadBackgroundImage();
    }
    loadEnd() {
        this.div.style.visibility = "hidden";
        this.animateBackground = false;
    }
    _animCallback() {
        if (!this.lastCalledTime) {
            this.lastCalledTime = Date.now();
            window.requestAnimationFrame(this._animCallback.bind(this));
            return;
        }
        let delta = Date.now() - this.lastCalledTime;
        this.lastCalledTime = Date.now();
        this.container.style.backgroundPositionX = this.bgPosition + "%";
        this.bgPosition += this.rate * (delta / 1000);
        if (this.bgPosition <= 0)
            this.rate = -this.rate;
        if (this.bgPosition > 100)
            this.rate = -this.rate;
        if (this.animateBackground)
            window.requestAnimationFrame(this._animCallback.bind(this));
    }
    _setProgress(proportion) {
        this.bar2.style.width = proportion * this.barWidth + "px";
    }
    _loadBackgroundImage() {
        var bgImg = new Image();
        bgImg.onload = function () {
            this.container.style.backgroundSize = "cover";
            this.container.style.backgroundImage = "url(" + this.bgImage + ")";
            this.container.style.backgroundPosition = "50% 50%";
            if (this.animateBackground)
                window.requestAnimationFrame(this._animCallback.bind(this));
        }.bind(this);
        bgImg.src = this.bgImage;
    }
}


/***/ }),

/***/ "./src/engine/loader/Loader.ts":
/*!*************************************!*\
  !*** ./src/engine/loader/Loader.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
class Loader {
    constructor(container, loaderOptions, ...scripts) {
        this.container = container;
        this.loaderOptions = loaderOptions;
        this.scripts = scripts;
    }
    load() {
        return new Promise(((resolve, reject) => {
            this.loadStart();
            let promises = [];
            this.scripts.forEach(s => promises.push(this._loadScript(s)));
            Promise.all(promises).then((() => {
                this.loadEnd();
                resolve();
            }).bind(this));
        }).bind(this));
    }
    create() { }
    loadStart() { }
    loadEnd() { }
    ;
    _setProgress(proportion) { }
    _loadScript(filename) {
        return new Promise(((resolve, reject) => {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", filename);
            xmlhttp.addEventListener("progress", function (event) {
                if (event.lengthComputable)
                    this._setProgress(event.loaded / event.total);
            }.bind(this), false);
            xmlhttp.addEventListener("load", function (event) {
                var e = event.target;
                var s = document.createElement("script");
                s.innerHTML = xmlhttp.responseText;
                document.documentElement.appendChild(s);
                resolve();
            }.bind(this), false);
            xmlhttp.send();
        }).bind(this));
    }
}


/***/ }),

/***/ "./src/engine/loader/loadScript.ts":
/*!*****************************************!*\
  !*** ./src/engine/loader/loadScript.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loaderOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../loaderOptions */ "./src/loaderOptions.ts");

let container;
if (_loaderOptions__WEBPACK_IMPORTED_MODULE_0__["loaderOptions"].gameTarget !== undefined)
    container = document.querySelector("#" + _loaderOptions__WEBPACK_IMPORTED_MODULE_0__["loaderOptions"].gameTarget);
let p = new _loaderOptions__WEBPACK_IMPORTED_MODULE_0__["loaderOptions"].loaderType(container, _loaderOptions__WEBPACK_IMPORTED_MODULE_0__["loaderOptions"], ..._loaderOptions__WEBPACK_IMPORTED_MODULE_0__["loaderOptions"].scripts);
p.create();
p.load();


/***/ }),

/***/ "./src/loaderOptions.ts":
/*!******************************!*\
  !*** ./src/loaderOptions.ts ***!
  \******************************/
/*! exports provided: loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loaderOptions", function() { return loaderOptions; });
/* harmony import */ var engine_loader_AnimatedLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine/loader/AnimatedLoader */ "./src/engine/loader/AnimatedLoader.ts");

let loaderOptions = {
    loaderType: engine_loader_AnimatedLoader__WEBPACK_IMPORTED_MODULE_0__["default"],
    gameTarget: "gameTarget",
    backgroundColour: "#f8f2f2",
    backgroundImage: undefined,
    barColour: "#fc6c6c",
    scripts: ["./game.js"],
    loadEndCallback: () => { }
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9sb2FkZXIvQW5pbWF0ZWRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9sb2FkZXIvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbG9hZGVyL2xvYWRTY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRlck9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBOEI7QUFFZixNQUFNLGNBQWUsU0FBUSwrQ0FBTTtJQUFsRDs7UUFFWSxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUVwQixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFRM0MsY0FBUyxHQUFX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LENBQUMsR0FBRyxJQUFJLDREQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSw0REFBYSxFQUFFLEdBQUcsNERBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6RixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNSVDtBQUFBO0FBQUE7QUFBMEQ7QUFFMUQsSUFBSSxhQUFhLEdBQUc7SUFDaEIsVUFBVSxFQUFFLG9FQUFjO0lBQzFCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsZUFBZSxFQUFFLFNBQVM7SUFDMUIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQ3RCLGVBQWUsRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDO0NBQzVCO0FBRXVCIiwiZmlsZSI6ImxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VuZ2luZS9sb2FkZXIvbG9hZFNjcmlwdC50c1wiKTtcbiIsImltcG9ydCBMb2FkZXIgZnJvbSBcIi4vTG9hZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGVkTG9hZGVyIGV4dGVuZHMgTG9hZGVyXG57XG4gICAgcHJpdmF0ZSBiZ1Bvc2l0aW9uOiBudW1iZXIgPSA1MDtcbiAgICBwcml2YXRlIHJhdGU6IG51bWJlciA9IC0yLjU7XG4gICAgcHJpdmF0ZSBsYXN0Q2FsbGVkVGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgYW5pbWF0ZUJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGJnSW1hZ2U6IHN0cmluZzsgICAgXG5cbiAgICBwcml2YXRlIGJhcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBiYXIyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGJhclRleHQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgZGl2OiBIVE1MRWxlbWVudDtcblxuICAgIGJhckNvbG91cjogc3RyaW5nID0gXCJ3aGl0ZVwiO1xuICAgIGJhckJhY2tncm91bmRDb2xvdXI6IHN0cmluZyA9IFwiZ3JleVwiO1xuICAgIHRleHRDb2xvdXI6IHN0cmluZyA9IFwid2hpdGVcIjtcbiAgICBiYXJXaWR0aDogbnVtYmVyID0gMTAwO1xuICAgIGJhckhlaWdodDogbnVtYmVyID0gMTA7XG4gICAgYmFja2dyb3VuZENvbG91cjogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgY3JlYXRlKClcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpXG4gICAgICAgICAgICBuZXcgRXJyb3IoXCJDYW5ub3QgbG9hZCBnYW1lIGludG8gY29udGFpbmVyIHdpdGggSUQgJ1wiICsgdGhpcy5sb2FkZXJPcHRpb25zLmdhbWVUYXJnZXQgKyBcIicuIE5vIGVsZW1lbnQgd2l0aCB0aGF0IG5hbWUgd2FzIGZvdW5kLlwiKTtcblxuICAgICAgICB0aGlzLmJnSW1hZ2UgPSB0aGlzLmxvYWRlck9wdGlvbnMuYmFja2dyb3VuZEltYWdlO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvdXIgPSB0aGlzLmxvYWRlck9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB0aGlzLmJhckNvbG91ciA9IHRoaXMubG9hZGVyT3B0aW9ucy5iYXJDb2xvdXI7XG5cbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZENvbG91cilcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuYmFja2dyb3VuZENvbG91cjtcbiAgICAgICAgdGhpcy5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5kaXYuaW5uZXJIVE1MID0gXG4gICAgICAgICAgICAnPGRpdiBpZD1cImJhck91dGVyXCIgc3R5bGU9XCJcXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICcrIHRoaXMuYmFyQmFja2dyb3VuZENvbG91ciArJzsgXFxcbiAgICAgICAgICAgICAgICB3aWR0aDogJysgdGhpcy5iYXJXaWR0aCArJ3B4OyBcXFxuICAgICAgICAgICAgICAgIGhlaWdodDogJysgdGhpcy5iYXJIZWlnaHQgKydweDsgXFxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlOyBcXFxuICAgICAgICAgICAgICAgIHRvcDogODAlOyBcXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrOyBcXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1wiPlxcXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYmFySW5uZXJcIiBzdHlsZT1cIlxcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDBweDsgXFxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJysgdGhpcy5iYXJDb2xvdXIgKyc7XCI+PC9kaXY+XFxcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJiYXJUZXh0XCIgc3R5bGU9XCJcXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDsgXFxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcXG4gICAgICAgICAgICAgICAgY29sb3I6ICcrIHRoaXMudGV4dENvbG91ciArJzsgXFxcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7IFxcXG4gICAgICAgICAgICAgICAgdG9wOiAtMTdweDsgXFxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XCI+XFxcbiAgICAgICAgICAgIDwvZGl2PjwvZGl2Pic7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcblxuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyT3V0ZXJcIik7XG4gICAgICAgIHRoaXMuYmFyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFySW5uZXJcIik7XG4gICAgICAgIHRoaXMuYmFyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFyVGV4dFwiKTtcblxuICAgICAgICB0aGlzLmJhclRleHQuaW5uZXJUZXh0ID0gXCJMb2FkaW5nLi4uXCI7XG4gICAgICAgIHRoaXMuYmFyMi5zdHlsZS53aWR0aCA9IDArXCJweFwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsb2FkU3RhcnQoKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuYmdJbWFnZSlcbiAgICAgICAgICAgIHRoaXMuX2xvYWRCYWNrZ3JvdW5kSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbG9hZEVuZCgpXG4gICAge1xuICAgICAgICB0aGlzLmRpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5hbmltYXRlQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FuaW1DYWxsYmFjaygpXG4gICAge1xuICAgICAgICBpZighdGhpcy5sYXN0Q2FsbGVkVGltZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2FsbGVkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1DYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGVsdGEgPSBEYXRlLm5vdygpIC0gdGhpcy5sYXN0Q2FsbGVkVGltZTtcbiAgICAgICAgdGhpcy5sYXN0Q2FsbGVkVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IHRoaXMuYmdQb3NpdGlvbiArIFwiJVwiO1xuICAgICAgICB0aGlzLmJnUG9zaXRpb24gKz0gdGhpcy5yYXRlKihkZWx0YS8xMDAwKTtcbiAgICAgICAgaWYgKHRoaXMuYmdQb3NpdGlvbiA8PSAwKVxuICAgICAgICAgICAgdGhpcy5yYXRlID0gLXRoaXMucmF0ZTtcbiAgICAgICAgaWYgKHRoaXMuYmdQb3NpdGlvbiA+IDEwMClcbiAgICAgICAgICAgIHRoaXMucmF0ZSA9IC10aGlzLnJhdGU7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kKVxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZXRQcm9ncmVzcyhwcm9wb3J0aW9uOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmJhcjIuc3R5bGUud2lkdGggPSBwcm9wb3J0aW9uKnRoaXMuYmFyV2lkdGggKyBcInB4XCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9hZEJhY2tncm91bmRJbWFnZSgpXG4gICAge1xuICAgICAgICB2YXIgYmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmdJbWcub25sb2FkID0gZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICBcInVybChcIit0aGlzLmJnSW1hZ2UrXCIpXCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcIjUwJSA1MCVcIjtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGVCYWNrZ3JvdW5kKVxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIGJnSW1nLnNyYyA9IHRoaXMuYmdJbWFnZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXJcbntcbiAgICBwcm90ZWN0ZWQgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc2NyaXB0czogc3RyaW5nW107XG4gICAgcHJvdGVjdGVkIGxvYWRlck9wdGlvbnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGxvYWRlck9wdGlvbnM6IGFueSwgLi4uc2NyaXB0czogc3RyaW5nW10pXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5sb2FkZXJPcHRpb25zID0gbG9hZGVyT3B0aW9ucztcbiAgICAgICAgdGhpcy5zY3JpcHRzID0gc2NyaXB0cztcbiAgICB9XG5cbiAgICBsb2FkKCk6IFByb21pc2U8e30+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFN0YXJ0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zY3JpcHRzLmZvckVhY2gocyA9PiBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRTY3JpcHQocykpKTtcblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCgpID0+IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEVuZCgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgICAgICB9KS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7fVxuXG4gICAgcHJvdGVjdGVkIGxvYWRTdGFydCgpIHt9XG4gICAgcHJvdGVjdGVkIGxvYWRFbmQoKSB7fTtcbiAgICBwcm90ZWN0ZWQgX3NldFByb2dyZXNzKHByb3BvcnRpb246IG51bWJlcikge31cblxuICAgIHByaXZhdGUgX2xvYWRTY3JpcHQoZmlsZW5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhtbGh0dHAub3BlbihcIkdFVFwiLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgICAgIHhtbGh0dHAuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGZ1bmN0aW9uKGV2ZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRQcm9ncmVzcyhldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgICAgICAgICAgeG1saHR0cC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbihldmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICAgICAgcy5pbm5lckhUTUwgPSB4bWxodHRwLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgICAgICB4bWxodHRwLnNlbmQoKTtcbiAgICAgICAgfSkuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbG9hZGVyT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9sb2FkZXJPcHRpb25zXCI7XG5cbmxldCBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuaWYgKGxvYWRlck9wdGlvbnMuZ2FtZVRhcmdldCAhPT0gdW5kZWZpbmVkKVxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrbG9hZGVyT3B0aW9ucy5nYW1lVGFyZ2V0KTtcbiAgICBcbmxldCBwID0gbmV3IGxvYWRlck9wdGlvbnMubG9hZGVyVHlwZShjb250YWluZXIsIGxvYWRlck9wdGlvbnMsIC4uLmxvYWRlck9wdGlvbnMuc2NyaXB0cyk7IFxucC5jcmVhdGUoKTtcbnAubG9hZCgpO1xuIiwiaW1wb3J0IEFuaW1hdGVkTG9hZGVyIGZyb20gXCJlbmdpbmUvbG9hZGVyL0FuaW1hdGVkTG9hZGVyXCI7XG5cbmxldCBsb2FkZXJPcHRpb25zID0ge1xuICAgIGxvYWRlclR5cGU6IEFuaW1hdGVkTG9hZGVyLFxuICAgIGdhbWVUYXJnZXQ6IFwiZ2FtZVRhcmdldFwiLFxuICAgIGJhY2tncm91bmRDb2xvdXI6IFwiI2Y4ZjJmMlwiLFxuICAgIGJhY2tncm91bmRJbWFnZTogdW5kZWZpbmVkLFxuICAgIGJhckNvbG91cjogXCIjZmM2YzZjXCIsXG4gICAgc2NyaXB0czogW1wiLi9nYW1lLmpzXCJdLFxuICAgIGxvYWRFbmRDYWxsYmFjazogKCkgPT4ge31cbn1cblxuZXhwb3J0IHsgbG9hZGVyT3B0aW9ucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==