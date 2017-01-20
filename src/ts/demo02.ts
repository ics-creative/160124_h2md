import {CanvasUtil} from "./modules/CanvasUtil";
import {H2MDUtil} from "./modules/H2MDUtil";
window.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {
  H2MDUtil.playH2MDMovie("player", "./h2md/demo02/men_kiri.h2md");
  CanvasUtil.resizeCanvas("player");
}
