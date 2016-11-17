import gulp from 'gulp'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'
import autoprefixer from 'gulp-autoprefixer'
import browserSync from 'browser-sync'

gulp.task('styles', () => {
	gulp.src('./src/stylesheets/libs/**/*')
		.pipe(gulp.dest('./public/content/css/libs'));
    return gulp.src('./src/assets/css/sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(plumber.stop())
        .pipe(gulp.dest('./public/content'))
        .pipe(browserSync.reload({ stream: true }))
})
