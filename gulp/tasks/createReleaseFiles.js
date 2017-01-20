/**
 * リリースファイルの作成タスク
 *
 * @author ICS-Kano
 */
// 設定ファイル
const config = require("../../build_config");
const taskName = require("../taskName");

const gulp = require("gulp");
const del = require("del");

gulp.task(taskName.cleanFiles, () => {
  return del([config.distFolder]);
});
