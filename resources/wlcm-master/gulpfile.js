
const gulp = require('gulp');
const gulpConCat = require('gulp-concat');
const gulpSass = require('gulp-sass');
const gulpRename = require('gulp-rename');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpUglify = require('gulp-uglify');

const jsfiles = [
  'src/js/*.js',
  'src/js/**/*.js',
  'src/js/**/**/*.js'
];
const scssfiles = [
  'src/scss/*.scss',
  'src/scss/**/*.scss',
  'src/scss/**/**/*.scss'
];

gulp.task("compress-js", function() {

  gulp.src(jsfiles)
  .pipe(gulpConCat('wlcm.js'))
  .pipe(gulp.dest('dist/'));


  gulp.src(jsfiles)
  .pipe(gulpConCat('wlcm.min.js'))
  .pipe(gulpUglify())
  .pipe(gulp.dest('dist/'));

});

gulp.task("compress-scss", function() {

  gulp.src(scssfiles)
  .pipe(gulpSass({outputStyle: "compressed"}).on("error", gulpSass.logError))
	.pipe(gulpAutoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
  .pipe(gulpRename("wlcm.min.css"))
	.pipe(gulp.dest("dist/"));

  gulp.src(scssfiles)
  .pipe(gulpSass({outputStyle: "expanded"}).on("error", gulpSass.logError))
  .pipe(gulpAutoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
  .pipe(gulp.dest("dist/"));

});

gulp.task("compile", function() {

  gulp.watch(jsfiles, ['compress-js']);
  gulp.watch(scssfiles, ['compress-scss']);

});
