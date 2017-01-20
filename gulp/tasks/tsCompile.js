/**
 * TypeScriptのコンパイルタスク
 */
const config = require("../config");
const taskName = require("../taskName");
const webpackConfig = require('../../webpack.config.js');

const gulp = require("gulp");
const webpack = require("gulp-webpack");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

gulp.task(taskName.tsCompile, () => {
  return sourcemaps.init()
    .pipe(webpack(webpackConfig))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.jsFolder));
});
