/**
 * キャンバスのUtilクラスです。
 */
export class CanvasUtil {
	/**
	 * @param canvasId キャンバスID
	 */
	static resizeCanvas(canvasId:string, targetWidth:number = 0, targetHeight:number = 0):void {
		const canvas = document.getElementById(canvasId);

		if (!canvas) {
			return;
		}

		let width:number;
		if (targetWidth === 0) {
			width = Number(canvas.getAttribute("width"));
		}
		else {
			width = targetWidth;
		}

		let height:number;

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
	}
}
