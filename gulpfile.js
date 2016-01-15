var gulp = require('gulp'),
    dest = require('gulp-dest'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    connect = require('gulp-connect'),
    source = require('vinyl-source-stream');

gulp.task('connect', function() {
  connect.server();
});

gulp.task('build', function () {
    browserify({
        entries: 'js/index.jsx',
        extensions: ['.jsx'],
        debug: true
    })
    .transform(babelify.configure({presets: ["es2015", "react"]}))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'connect']);