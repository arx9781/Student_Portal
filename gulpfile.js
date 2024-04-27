const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSCSS() {
  return src("src/main.scss") // Replace 'src/main.scss' with your actual SCSS file path
    .pipe(sass().on("error", sass.logError))
    .pipe(dest(".")); // Replace 'dist' with your desired output folder for CSS
}

exports.compileSCSS = compileSCSS;

// Task to watch for SCSS changes and compile automatically
exports.watch = function () {
  return src("src/*.scss") // Replace 'src/*.scss' with your SCSS file glob pattern
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("."))
    .pipe(watcher.watch("src/*.scss", compileSCSS)); // Replace 'src/*.scss' with your SCSS file glob pattern
};
