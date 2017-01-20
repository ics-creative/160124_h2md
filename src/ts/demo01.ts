import {CanvasUtil} from "./modules/CanvasUtil";
import {H2MDUtil} from "./modules/H2MDUtil";
window.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {
  H2MDUtil.playH2MDMovie("player", "./h2md/demo01/h2md_demo1125_alpha.h2md", false);
  resizeCanvas();
}

function resizeCanvas():void {
  const playerSection = document.getElementById("playerSection");
  const playerWrapper = document.getElementById("playerWrapper");
  const player = document.getElementById("player");

  if (!player || !playerWrapper) {
    return;
  }

  const height:number = Number(player.getAttribute("height"));
  const width:number = Number(player.getAttribute("width"));

  const ratio = window.innerWidth / 320;
  playerSection.style.height = `${184 * ratio}px`;
  playerWrapper.style.top = `${-82 * ratio}px`;
  player.style.width = `${320 * ratio}px`;
  player.style.height = `${500 * ratio}px`;
}
