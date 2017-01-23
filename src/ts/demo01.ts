import {H2MDUtil} from "./modules/H2MDUtil";
/**
 * デモ1のクラスです。
 */
class Demo01 {
  /** canvas要素のIDです。 */
  private CANVAS_ID:string = "player";
  /** H2MD動画のパスです。 */
  private H2MD_SRC:string = "./h2md/demo01/h2md_demo1125_alpha.h2md";

  constructor() {
    H2MDUtil.playH2MDMovie(this.CANVAS_ID, this.H2MD_SRC, false);
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  /**
   * canvas要素のリサイズ処理です。
   */
  private resizeCanvas():void {
    const player = document.getElementById("player");
    const playerWrapper = document.getElementById("playerWrapper");
    const playerSection = document.getElementById("playerSection");

    const ratio = window.innerWidth / 320;
    playerSection.style.height = `${184 * ratio}px`;
    playerWrapper.style.top = `${-82 * ratio}px`;
    player.style.width = `${320 * ratio}px`;
    player.style.height = `${500 * ratio}px`;
  }
}

window.addEventListener("DOMContentLoaded", () => new Demo01());
