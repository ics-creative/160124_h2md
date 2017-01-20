/**
 * ファイルの削除タスク
 */
// 設定ファイル
const config = require("../config");

const gulp = require("gulp");
const del = require("del");

gulp.task("cleanFiles", () => {
  return del([config.distFolder]);
});
