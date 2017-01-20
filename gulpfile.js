// 設定ファイル
const config = require("./gulp/config");
const taskName = require("./gulp/taskName");

const requireDir = require('require-dir');
requireDir("./gulp", {recurse: true});

const gulp = require("gulp");
const browserSync = require("browser-sync");

/**
 * ローカルサーバーのタスク設定
 */

gulp.task("start",
  gulp.series(
    gulp.parallel(
      taskName.sassCompile,
      taskName.tsLint,
      taskName.tsCompile
    ),
    () => {
      initServer();
      startWatchTasks();
    }
  )
);


function initServer() {
  browserSync.init({
    server: {
      baseDir: config.srcFolder + "/" // ルートとなるディレクトリを指定
    },
    // 更新を監視する対象ファイル
    files: [`${config.srcFolder}/**/*.{html,css,js}`]
  });
}

/**
 * ウォッチタスクを開始します。
 */
function startWatchTasks() {
  // Sassファイルのウォッチ
  gulp.watch([`${config.sassFolder}/**/*.scss`],
    gulp.parallel(
      taskName.sassCompile
    )
  );

  // TypeScriptファイルのウォッチ
  gulp.watch(`${config.tsFolder}/**/*.ts`,
    gulp.parallel(
      taskName.tsLint,  // Lint
      taskName.tsCompile  // コンパイル
    )
  );
}