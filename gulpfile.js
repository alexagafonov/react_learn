const gulp = require('gulp');
const dest = require('gulp-dest');
const browserify = require('browserify');
const babelify = require('babelify');
const connect = require('gulp-connect');
const source = require('vinyl-source-stream');
const eslint = require('eslint/lib/cli');

gulp.task('connect', () => {
    connect.server({
        port: 8888
    });
});

gulp.task('build', () => {
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

gulp.task('lint', done => {

    eslint.execute('--ext .js,.jsx .');
    done();

});

gulp.task('default', ['build', 'connect']);