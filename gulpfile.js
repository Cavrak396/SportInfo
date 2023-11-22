var gulp = require("gulp");
var scss = require("gulp-sass");
var scssLint = require("gulp-sass-lint");

gulp.task("scss", () => {
  return gulp
    .src("src/scss/style.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("default", ["scss", "scss-lint"], function () {
  gulp.watch("src/**/*.scss", ["scss"]);
});

gulp.task("scss-lint", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(
      scssLint({
        configFile: ".sass-lint.yml",
      })
    )
    .pipe(scssLint.format())
    .pipe(scssLint.failOnError());
});

gulp.task("project-build", [
  "copy-html",
  "copy-js",
  "copy-img",
  "copyfonts",
  "copy-svg",
]);

gulp.task("copy-html", function () {
  return gulp.src("*.html").pipe(gulp.dest("dist"));
});

gulp.task("copy-js", function () {
  return gulp.src("src/js/*.js").pipe(gulp.dest("dist/js"));
});

gulp.task("copy-img", function () {
  return gulp
    .src("src/images/*.{png,jpg,jpeg,svg,mp4}")
    .pipe(gulp.dest("dist/images"));
});
gulp.task("copy-svg", function () {
  return gulp
    .src("src/svg/*.{png,jpg,jpeg,svg}")
    .pipe(gulp.dest("dist/images"));
});

gulp.task("copyfonts", function () {
  return gulp
    .src("src/fonts/*.{woff,woff2}")
    .pipe(gulp.dest("dist/text-fonts"));
});
