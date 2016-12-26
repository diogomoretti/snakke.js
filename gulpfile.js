const gulp = require('gulp')
const standard = require('gulp-standard')
const connect = require('gulp-connect')
const runSequence = require('run-sequence')
const minify = require('gulp-minify')
require('gulp-release-tasks')(gulp)

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

gulp.task('minify', () => {
  gulp.src('./src/snakke.js')
    .pipe(minify({
      ext: {
        src:'.js',
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest('./src'))
})

gulp.task('standard', () => {
  gulp.src(['./src/snakke.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false,
      quiet: true
    }))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch('./src/snakke.js', ['standard', 'html', 'minify'])
  gulp.watch('./example/*.{html,css}', ['html'])
})

gulp.task('server', () => {
  runSequence('standard', 'connect', 'watch')
})
