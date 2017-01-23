declare var H2MD;
/**
 * デモ1のクラスです。
 */
class Demo03 {
  /** canvas要素のIDです。 */
  private CANVAS_ID:string = "player";
  /** H2MD動画のパスです。 */
  private H2MD_SRC:string = "./h2md/demo03/fireworks.h2md";
  /** Cavnas要素です。 */
  private canvasElement:HTMLCanvasElement;
  /** CavnasのContext2Dです。 */
  private context2D;

  constructor() {
    this.playH2MDMovie(this.H2MD_SRC);
    this.canvasElement = <HTMLCanvasElement> document.getElementById(this.CANVAS_ID);
    this.context2D = this.canvasElement.getContext("2d");
    this.resizeCanvas();
    this.addEvents();
  }

  /**
   * イベント設定です。
   */
  private addEvents():void {
    const movieFrame:HTMLDivElement = <HTMLDivElement> document.getElementById("playerWrapper");
    movieFrame.addEventListener("click", (event) => {
      this.onMovieFrameClick(movieFrame);
    });
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  /**
   * movieFrameをクリックした時のイベントです。
   * @param movieFrame
   */
  private onMovieFrameClick(movieFrame:HTMLDivElement):void {
    // 音声の再生を開始します。
    const audioElement:HTMLAudioElement = <HTMLAudioElement> document.getElementById("audio");
    audioElement.play();
    // movieFrameにプレイ中のクラスを設定します。
    movieFrame.classList.add("playing");
  }

  /**
   * H2MD動画を再生します。
   * @param h2mdPath
   */
  private playH2MDMovie(h2mdPath:string):void {
    const instance = new H2MD();
    // canvas要素の指定
    instance.canvas(this.CANVAS_ID);

    // jsonp
    instance.jsonp(true);

    // H2MDリソースの読み込み
    instance.open(h2mdPath, () => {
      this.onH2MDOpnend(instance);
    });

    instance.error((message) => {
      alert(message);
    });
  }

  private onH2MDOpnend(instance:any):void {
    setInterval(() => {
      const audio:any = document.getElementById("audio");
      const movie_info = instance.info();
      const idx = audio.currentTime * movie_info.fps;
      const src_canvas = instance.decode(Math.floor(idx));
      if (!src_canvas) {
        return;
      } // loading
      this.context2D.drawImage(src_canvas, 0, 0);
    }, 10);
  }

  /**
   * canvas要素のリサイズ処理です。
   */
  private resizeCanvas():void {
    const playerSection = document.getElementById("playerSection");
    const playerWrapper = document.getElementById("playerWrapper");
    const player = document.getElementById("player");
    const movieWidth:number = 640;
    const ratio = (window.innerWidth - 20) / movieWidth;
    player.style.width = `${movieWidth * ratio}px`;
    player.style.height = `${360 * ratio}px`;
  }
}

window.addEventListener("DOMContentLoaded", () => new Demo03());
