/***********************************************
 * Gulp plugins
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

/***********************************************
 * JS Task
 */
gulp.task('concat', function () {

    gulp.src(
        'js/script.js'
    )
        .pipe(sourcemaps.init())
        .pipe(concat('script_min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js'))
        .pipe(notify('js complete'));

});


/***********************************************
 * Sass Task
 */
gulp.task('sass', function () {
	gulp.src('css/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('css'))
		.pipe(notify('Sass files compiled'));

});



/***********************************************
 * JS & Sass Watch
 */
//gulp.task('watch', ['sass'], function () {


gulp.task('watch', ['concat', 'sass'], function () {
    gulp.watch('css/scss/*.scss', ['sass']);
    gulp.watch([[
        'js/script.js'
    ]], ['concat']);
});


gulp.task('default', ['watch']);