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
	window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
	function onDOMContentLoaded() {
	    H2MDUtil_1.H2MDUtil.playH2MDMovie("player", "./h2md/demo01/h2md_demo1125_alpha.h2md", false);
	    resizeCanvas();
	}
	function resizeCanvas() {
	    var playerSection = document.getElementById("playerSection");
	    var playerWrapper = document.getElementById("playerWrapper");
	    var player = document.getElementById("player");
	    if (!player || !playerWrapper) {
	        return;
	    }
	    var height = Number(player.getAttribute("height"));
	    var width = Number(player.getAttribute("width"));
	    var ratio = window.innerWidth / 320;
	    playerSection.style.height = 184 * ratio + "px";
	    playerWrapper.style.top = -82 * ratio + "px";
	    player.style.width = 320 * ratio + "px";
	    player.style.height = 500 * ratio + "px";
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


/***/ }
/******/ ]);
//# sourceMappingURL=demo01.js.map