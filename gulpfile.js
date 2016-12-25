const gulp = require('gulp')
const standard = require('gulp-standard')
const connect = require('gulp-connect')
const runSequence = require('run-sequence')
require('gulp-release-it')(gulp)

gulp.task('connect', () => {
  connect.server({
    root: './',
    port: 7000,
    livereload: true
  })
})

gulp.task('html', () => {
  gulp.src('./example/index.html')
    .pipe(connect.reload())
})

gulp.task('standard', () => {
  gulp.src(['./src/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false,
      quiet: true
    }))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch('./src/*.js', ['standard', 'html'])
})

gulp.task('server', () => {
  runSequence('standard', 'connect', 'watch')
})
