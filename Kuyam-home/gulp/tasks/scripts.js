import gulp from 'gulp'
import babel from 'gulp-babel'
import browserSync from 'browser-sync'

gulp.task('scripts', () => {
    return gulp.src('./src/assets/js/**')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public/content/js'))
        .pipe(browserSync.reload({ stream: true }))
})
