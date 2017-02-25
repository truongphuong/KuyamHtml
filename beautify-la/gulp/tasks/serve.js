import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('serve', ['styles', 'scripts', 'html'], () => {
    browserSync.init({
        server: {
            baseDir: './public/'
        }
    })
})
