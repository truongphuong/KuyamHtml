import gulp from 'gulp'
import nunjucksRender from 'gulp-nunjucks-render'
import browserSync from 'browser-sync'

gulp.task('html', () => {
    return gulp.src(['./src/views/**/*.html', '!./src/views/master/**', '!./src/views/content/**'])
        .pipe(nunjucksRender({ path: ['./src/views'] }))
	    .pipe(gulp.dest('./public'))
        .pipe(browserSync.reload({ stream: true }))
})
