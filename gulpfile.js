const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const htmlReplace = require('gulp-html-replace');

// HTML
function htmlTask() {
    return src('src/*.html')
        .pipe(htmlReplace({
            'css': 'css/styles.min.css',
            'js': 'js/main.min.js'
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}

// CSS
function cssTask() {
    return src('src/styles.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(concat('styles.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'));
}

// JS
function jsTask() {
    return src([
        'src/js/utils/progressbars.js',
        'src/js/main.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/js'));
}

// Watch
function watchFiles() {
    watch('src/*.html', htmlTask);
    watch('src/styles.css', cssTask);
    watch('src/js/**/*.js', jsTask);
}

exports.default = series(
    parallel(htmlTask, cssTask, jsTask),
    watchFiles
);
