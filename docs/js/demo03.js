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
/***/ function(module, exports) {

	/**
	 * デモ1のクラスです。
	 */
	var Demo03 = (function () {
	    function Demo03() {
	        /** canvas要素のIDです。 */
	        this.CANVAS_ID = "player";
	        /** H2MD動画のパスです。 */
	        this.H2MD_SRC = "./h2md/demo03/fireworks.h2md";
	        this.playH2MDMovie(this.H2MD_SRC);
	        this.canvasElement = document.getElementById(this.CANVAS_ID);
	        this.context2D = this.canvasElement.getContext("2d");
	        this.resizeCanvas();
	        this.addEvents();
	    }
	    /**
	     * イベント設定です。
	     */
	    Demo03.prototype.addEvents = function () {
	        var _this = this;
	        var movieFrame = document.getElementById("playerWrapper");
	        movieFrame.addEventListener("click", function (event) {
	            _this.onMovieFrameClick(movieFrame);
	        });
	        window.addEventListener("resize", function () { return _this.resizeCanvas(); });
	    };
	    /**
	     * movieFrameをクリックした時のイベントです。
	     * @param movieFrame
	     */
	    Demo03.prototype.onMovieFrameClick = function (movieFrame) {
	        // 音声の再生を開始します。
	        var audioElement = document.getElementById("audio");
	        audioElement.play();
	        // movieFrameにプレイ中のクラスを設定します。
	        movieFrame.classList.add("playing");
	    };
	    /**
	     * H2MD動画を再生します。
	     * @param h2mdPath
	     */
	    Demo03.prototype.playH2MDMovie = function (h2mdPath) {
	        var _this = this;
	        var instance = new H2MD();
	        // canvas要素の指定
	        instance.canvas(this.CANVAS_ID);
	        // jsonp
	        instance.jsonp(true);
	        // H2MDリソースの読み込み
	        instance.open(h2mdPath, function () {
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
	                return;
	            } // loading
	            _this.context2D.drawImage(src_canvas, 0, 0);
	        }, 10);
	    };
	    /**
	     * canvas要素のリサイズ処理です。
	     */
	    Demo03.prototype.resizeCanvas = function () {
	        var playerSection = document.getElementById("playerSection");
	        var playerWrapper = document.getElementById("playerWrapper");
	        var player = document.getElementById("player");
	        var movieWidth = 640;
	        var ratio = (window.innerWidth - 20) / movieWidth;
	        player.style.width = movieWidth * ratio + "px";
	        player.style.height = 360 * ratio + "px";
	    };
	    return Demo03;
	}());
	window.addEventListener("DOMContentLoaded", function () { return new Demo03(); });


/***/ }
/******/ ]);
//# sourceMappingURL=demo03.js.map