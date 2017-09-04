var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

// task for minifying css
gulp.task('min-css', function() {
	return gulp.src('css/style.css', { base: "./"})
			   .pipe(cleanCSS())
			   .pipe(rename({ suffix: '.min' }))
			   .pipe(gulp.dest('.'));
});

// task for minifying JavaScript
gulp.task('min-js', function() {
	return gulp.src("js/*.js")
				.pipe(uglify())
				.pipe(rename({ suffix: '.min' }))
				.pipe(gulp.dest('js/dist'));
});