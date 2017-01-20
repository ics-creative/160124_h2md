/**
 * TypeScriptのコンパイルタスク
 *
 * @author ICS-Kano
 */

const config = require("../../build_config");
const webpackConfig = require('../../webpack.config.js');

const taskName = require("../taskName");

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
