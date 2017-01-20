/**
 * Sassのコンパイルタスク
 */
const config = require("../config");
const taskName = require("../taskName");

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");


gulp.task(taskName.sassCompile, () => {
  return gulp.src(config.sassFile)
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: "expanded"
    }))
    .pipe(autoprefixer({
      browsers: [
        "last 2 versions",
        "Android >= 4"
      ],
      cascade: false
    }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.cssFolder));
});