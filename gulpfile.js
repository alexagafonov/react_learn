var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('js', function() {
  gulp.src('compiled/*.js')
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(rename('build.min.js'))
    .pipe(gulp.dest('release/'))
});

gulp.task('default', ['js']);