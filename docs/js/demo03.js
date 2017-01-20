/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CanvasUtil_1 = __webpack_require__(2);
	var Demo03 = (function () {
	    function Demo03() {
	        this.CANVAS_ID = "player";
	        this.playH2MDMovie("./h2md/demo03/fireworks.h2md");
	        CanvasUtil_1.CanvasUtil.resizeCanvas(this.CANVAS_ID, window.innerWidth, window.innerWidth * 270 / 480);
	        this.canvasElement = document.getElementById(this.CANVAS_ID);
	        this.dst_canvas = this.canvasElement.getContext("2d");
	        this.addEvents();
	    }
	    Demo03.prototype.addEvents = function () {
	        var movieFrame = document.getElementById("movieFrame");
	        movieFrame.addEventListener("click", function () {
	            var audioElement = document.getElementById("audio");
	            audioElement.play();
	            movieFrame.classList.add("playing");
	        });
	    };
	    Demo03.prototype.playH2MDMovie = function (h2mdPath) {
	        var _this = this;
	        var instance = new H2MD();
	        // canvas要素の指定
	        instance.canvas(this.CANVAS_ID);
	        // jsonp
	        instance.jsonp(true);
	        // H2MDリソースの読み込み
	        instance.open(h2mdPath, function () {
	            // openに成功したら再生
	            // instance.play();
	            _this.onH2MDOpnend(instance);
	        });
	        instance.error(function (message) {
	            alert(message);
	        });
	    };
	    Demo03.prototype.onH2MDOpnend = function (instance) {
	        var _this = this;
	        setInterval(function () {
	            var audio = document.getElementById("audio");
	            var movie_info = instance.info();
	            var idx = audio.currentTime * movie_info.fps;
	            var src_canvas = instance.decode(Math.floor(idx));
	            if (!src_canvas) {
	                console.log("aaa");
	                return;
	            } // loading
	            _this.dst_canvas.drawImage(src_canvas, 0, 0);
	        }, 10);
	    };
	    return Demo03;
	}());
	window.addEventListener("DOMContentLoaded", function () { return new Demo03(); });


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * キャンバスのUtilクラスです。
	 */
	var CanvasUtil = (function () {
	    function CanvasUtil() {
	    }
	    /**
	     * @param canvasId キャンバスID
	     */
	    CanvasUtil.resizeCanvas = function (canvasId, targetWidth, targetHeight) {
	        if (targetWidth === void 0) { targetWidth = 0; }
	        if (targetHeight === void 0) { targetHeight = 0; }
	        var canvas = document.getElementById(canvasId);
	        if (!canvas) {
	            return;
	        }
	        var width;
	        if (targetWidth === 0) {
	            width = Number(canvas.getAttribute("width"));
	        }
	        else {
	            width = targetWidth;
	        }
	        var height;
	        if (targetHeight === 0) {
	            height = Number(canvas.getAttribute("height"));
	        }
	        else {
	            height = targetHeight;
	        }
	        canvas.setAttribute("width", String(width * 2));
	        canvas.setAttribute("height", String(height * 2));
	        canvas.style.width = width + "px";
	        canvas.style.height = height + "px";
	    };
	    return CanvasUtil;
	}());
	exports.CanvasUtil = CanvasUtil;


/***/ }
/******/ ]);
//# sourceMappingURL=demo03.js.map