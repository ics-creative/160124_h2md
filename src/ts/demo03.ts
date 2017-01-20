import {CanvasUtil} from "./modules/CanvasUtil";
import {H2MDUtil} from "./modules/H2MDUtil";

declare var H2MD;

class Demo03 {

  private canvasElement:HTMLCanvasElement;

  private dst_canvas;

  private CANVAS_ID:string = "player";

  constructor() {
    this.playH2MDMovie("./h2md/demo03/fireworks.h2md");
    CanvasUtil.resizeCanvas(this.CANVAS_ID, window.innerWidth, window.innerWidth * 270 / 480);
    this.canvasElement = <HTMLCanvasElement> document.getElementById(this.CANVAS_ID);
    this.dst_canvas = this.canvasElement.getContext("2d");
    this.addEvents();
  }

  private addEvents():void {
    const movieFrame:HTMLDivElement = <HTMLDivElement> document.getElementById("movieFrame");

    movieFrame.addEventListener("click", () => {
      const audioElement:HTMLAudioElement = <HTMLAudioElement> document.getElementById("audio");
      audioElement.play();
      movieFrame.classList.add("playing");
    });

  }

  private playH2MDMovie(h2mdPath:string):void {
    const instance = new H2MD();
    // canvas要素の指定
    instance.canvas(this.CANVAS_ID);

    // jsonp
    instance.jsonp(true);

    // H2MDリソースの読み込み
    instance.open(h2mdPath, () => {
      // openに成功したら再生
      // instance.play();

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
        console.log("aaa");
        return;
      } // loading
      this.dst_canvas.drawImage(src_canvas, 0, 0);
    }, 10);
  }
}

window.addEventListener("DOMContentLoaded", () => new Demo03());
