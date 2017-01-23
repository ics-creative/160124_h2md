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
	var H2MDUtil_1 = __webpack_require__(1);
	/**
	 * デモ2のクラスです。
	 */
	var Demo02 = (function () {
	    function Demo02() {
	        /** canvas要素のIDです。 */
	        this.CANVAS_ID = "player";
	        /** H2MD動画のパスです。 */
	        this.H2MD_SRC = "./h2md/demo02/men_kiri.h2md";
	        H2MDUtil_1.H2MDUtil.playH2MDMovie(this.CANVAS_ID, this.H2MD_SRC);
	        this.resizeCanvas();
	    }
	    /**
	     * canvas要素のリサイズ処理です。
	     */
	    Demo02.prototype.resizeCanvas = function () {
	        var canvas = document.getElementById(this.CANVAS_ID);
	        var width = Number(canvas.getAttribute("width"));
	        var height = Number(canvas.getAttribute("height"));
	        canvas.style.width = String(width / 2) + "px";
	        canvas.style.height = String(height / 2) + "px";
	    };
	    return Demo02;
	}());
	window.addEventListener("DOMContentLoaded", function () { return new Demo02(); });


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var H2MDUtil = (function () {
	    function H2MDUtil() {
	    }
	    /**
	     * H2MDを再生します。
	     * @param canvasID
	     * @param H2MD動画のパスです。
	     */
	    H2MDUtil.playH2MDMovie = function (canvasID, h2mdPath, isJsonp) {
	        if (isJsonp === void 0) { isJsonp = true; }
	        var instance = new H2MD();
	        // canvas要素の指定
	        instance.canvas(canvasID);
	        // jsonp
	        instance.jsonp(isJsonp);
	        // H2MDリソースの読み込み
	        instance.open(h2mdPath, function () {
	            // openに成功したら再生
	            instance.play();
	        });
	        instance.error(function (message) {
	            alert(message);
	        });
	    };
	    return H2MDUtil;
	}());
	exports.H2MDUtil = H2MDUtil;


/***/ }
/******/ ]);
//# sourceMappingURL=demo02.js.map