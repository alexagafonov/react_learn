const gulp = require('gulp');
const dest = require('gulp-dest');
const browserify = require('browserify');
const babelify = require('babelify');
const connect = require('gulp-connect');
const source = require('vinyl-source-stream');

gulp.task('connect', function() {
    connect.server({
        port: 8888
    });
});

gulp.task('build', function() {
    browserify({
        entries: 'js/index.jsx',
        extensions: ['.jsx'],
        debug: true
    })
        .transform(babelify.configure({
            presets: ["es2015", "react"]
        }))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'connect']);