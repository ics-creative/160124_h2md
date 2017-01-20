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
	var H2MDUtil_1 = __webpack_require__(1);
	window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
	function onDOMContentLoaded() {
	    H2MDUtil_1.H2MDUtil.playH2MDMovie("player", "./h2md/demo02/men_kiri.h2md");
	    CanvasUtil_1.CanvasUtil.resizeCanvas("player");
	}


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


/***/ },
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
//# sourceMappingURL=demo02.js.map