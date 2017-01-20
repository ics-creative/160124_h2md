/**
 * ファイルの削除タスク
 *
 * @author ICS-Kano
 */
// 設定ファイル
const config = require("../../build_config");

const gulp = require("gulp");
const del = require("del");

gulp.task("cleanFiles", () => {
  return del([config.distFolder]);
});
