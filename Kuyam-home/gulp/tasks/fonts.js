import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('fonts', () => {
    return gulp.src(['./src/assets/fonts/**'])
        .pipe(gulp.dest('./public/content/fonts'))
        .pipe(browserSync.reload({ stream: true }))
})
