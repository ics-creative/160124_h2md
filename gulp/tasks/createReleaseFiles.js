/**
 * リリースファイルの作成タスク
 *
 * @author ICS-Kano
 */
// 設定ファイル
const config = require("../../build_config");
const taskName = require("../taskName");

const gulp = require("gulp");

require("./cleanFiles");
require("./sassCompile");
require("./tsCompile");
require("./tsLint");

gulp.task(taskName.createReleaseFiles,
  gulp.series(
    taskName.cleanFiles,
    gulp.parallel(
      taskName.sassCompile,
      taskName.tsLint,
      taskName.tsCompile
    ),
    () => {
      return gulp.src(config.distFiles, {base: config.srcFolder})
        .pipe(gulp.dest(config.distFolder))
    }
  )
);

