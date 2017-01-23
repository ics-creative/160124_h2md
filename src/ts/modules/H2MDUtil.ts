declare var H2MD;

export class H2MDUtil {
  /**
   * H2MDを再生します。
   * @param canvasID
   * @param H2MD動画のパスです。
   */
  static playH2MDMovie(canvasID:string, h2mdPath:string, isJsonp:boolean = true):void {
    const instance = new H2MD();

    // canvas要素の指定
    instance.canvas(canvasID);

    // jsonp
    instance.jsonp(isJsonp);

    // H2MDリソースの読み込み
    instance.open(h2mdPath, () => {
      // openに成功したら再生
      instance.play();
    });

    instance.error((message) => {
      alert(message);
    });
  }
}
