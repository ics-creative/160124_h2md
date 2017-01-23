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
	 * デモ1のクラスです。
	 */
	var Demo01 = (function () {
	    function Demo01() {
	        /** canvas要素のIDです。 */
	        this.CANVAS_ID = "player";
	        /** H2MD動画のパスです。 */
	        this.H2MD_SRC = "./h2md/demo01/h2md_demo1125_alpha.h2md";
	        H2MDUtil_1.H2MDUtil.playH2MDMovie(this.CANVAS_ID, this.H2MD_SRC, false);
	        this.resizeCanvas();
	    }
	    /**
	     * canvas要素のリサイズ処理です。
	     */
	    Demo01.prototype.resizeCanvas = function () {
	        var player = document.getElementById("player");
	        var playerWrapper = document.getElementById("playerWrapper");
	        var playerSection = document.getElementById("playerSection");
	        var ratio = window.innerWidth / 320;
	        playerSection.style.height = 184 * ratio + "px";
	        playerWrapper.style.top = -82 * ratio + "px";
	        player.style.width = 320 * ratio + "px";
	        player.style.height = 500 * ratio + "px";
	    };
	    return Demo01;
	}());
	window.addEventListener("DOMContentLoaded", function () { return new Demo01(); });


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
//# sourceMappingURL=demo01.js.map