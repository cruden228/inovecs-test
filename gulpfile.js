var sass = require('gulp-sass');

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('sass', function () {
		gulp.src('./sass/style.sass')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./'));
	});

gulp.task('default', gulp.series('sass'));

gulp.task('w', function(){
	watch('./sass/style.sass', gulp.series('sass'));
});
