import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('watch', ['serve'], () => {
    gulp.watch('./src/assets/css/sass/**/*.scss', ['styles'])
    gulp.watch('./src/assets/favicon/**', ['favicon'])
    gulp.watch('./src/assets/fonts/**', ['fonts'])
    gulp.watch('./src/assets/images/**', ['images'])
    gulp.watch('./src/assets/js/**/*.js', ['scripts'])
    gulp.watch('./src/views/**/*.html', ['html'])
    gulp.watch('./public/**/*.html', browserSync.reload)
})
