const gulp = require('gulp')
const standard = require('gulp-standard')
const connect = require('gulp-connect')
const runSequence = require('run-sequence')
const minify = require('gulp-minify')
const ghPages = require('gulp-gh-pages')
require('gulp-release-tasks')(gulp)

gulp.task('connect', () => {
  connect.server({
    root: './_website',
    port: 7000,
    livereload: true
  })
})

gulp.task('html', () => {
  gulp.src(['./_website/*.html', './_website/demo/*.html'])
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

gulp.task('copy', () => {
  gulp.src('./src/snakke.min.js')
    .pipe(gulp.dest('./_website/demo/'))
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

gulp.task('deploy', () => {
  gulp.src('./_website/**/*')
    .pipe(ghPages())
})

gulp.task('watch', () => {
  gulp.watch('./src/snakke.js', ['build'])
  gulp.watch('./_website/**/*.{html,css}', ['html'])
})

gulp.task('build', () => {
  runSequence('standard', 'minify', 'copy')
})

gulp.task('server', () => {
  runSequence('build', 'connect', 'watch')
})
