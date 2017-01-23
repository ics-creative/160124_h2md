import {H2MDUtil} from "./modules/H2MDUtil";
/**
 * デモ2のクラスです。
 */
class Demo02 {
  /** canvas要素のIDです。 */
  private CANVAS_ID:string = "player";
  /** H2MD動画のパスです。 */
  private H2MD_SRC:string = "./h2md/demo02/men_kiri.h2md";

  constructor() {
    H2MDUtil.playH2MDMovie(this.CANVAS_ID, this.H2MD_SRC);
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  /**
   * canvas要素のリサイズ処理です。
   */
  private resizeCanvas():void {
    const canvas = document.getElementById(this.CANVAS_ID);
    const width:number = Number(canvas.getAttribute("width"));
    const height:number = Number(canvas.getAttribute("height"));
    canvas.style.width = String(width / 2) + "px";
    canvas.style.height = String(height / 2) + "px";
  }
}

window.addEventListener("DOMContentLoaded", () => new Demo02());

