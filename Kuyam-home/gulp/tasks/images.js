import gulp from 'gulp'
import browserSync from 'browser-sync'

const dirs = {
	entry: './src/assets/images/**',
	dist: './public/content/images'
}

gulp.task('images', () => {
    return gulp.src(dirs.entry)
        .pipe(gulp.dest(dirs.dist))
        .pipe(browserSync.reload({ stream: true }))
})
