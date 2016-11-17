import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('favicon', () => {
    return gulp.src(['./src/assets/favicon/**'])
		.pipe(gulp.dest('./public/content/favicon'))
        .pipe(browserSync.reload({ stream: true }))
})
