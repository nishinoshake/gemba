import gulp from 'gulp'
import cache from 'gulp-cached'
import plumber from 'gulp-plumber'
import gulpif from 'gulp-if'
import del from 'del'
import browserSync from 'browser-sync'
import watch from 'gulp-watch'
import imagemin from 'gulp-imagemin'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import pngquant from 'imagemin-pngquant'
import gulpSequence from 'gulp-sequence'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import config from './config'

let isProduction = false

// gulp
gulp.task('default', ['imagemin', 'serve'])

// ビルド
gulp.task('build', cb => {
  isProduction = true
  gulpSequence('clean', config.tasks, cb)
})

// 掃除
gulp.task('clean', () => del([config.path.root.dest]))

// 開発サーバー
gulp.task('serve', () => {
  browserSync.init(config.options.browserSync)

  config.tasks.forEach(task => {
    watch(config.path[task].src, () => gulp.start(task))
  })
})

// コピー
gulp.task('copy', () => {
  return gulp
    .src(config.path.copy.src, { base: config.path.root.src })
    .pipe(cache('copy'))
    .pipe(plumber())
    .pipe(gulp.dest(config.path.root.dest))
    .pipe(browserSync.stream())
})

// 画像圧縮
gulp.task('imagemin', () => {
  return gulp
    .src(config.path.imagemin.src, { base: config.path.root.src })
    .pipe(plumber())
    .pipe(
      imagemin([
        imagemin.gifsicle(),
        imagemin.svgo(),
        pngquant(config.options.pngquant)
      ])
    )
    .pipe(gulp.dest(config.path.root.dest))
})

// Sass
gulp.task('sass', () => {
  return gulp
    .src(config.path.sass.src, { base: config.path.sass.base })
    .pipe(plumber())
    .pipe(sass(config.options.sass))
    .pipe(autoprefixer(config.options.autoprefixer))
    .pipe(gulp.dest(config.path.sass.dest))
    .pipe(browserSync.stream())
})

// JS
gulp.task('script', () => {
  const name = isProduction ? 'prod' : 'common'

  return gulp
    .src(config.path.script.src, { base: config.path.root.src })
    .pipe(cache('webpack'))
    .pipe(plumber())
    .pipe(gulpWebpack(require(config.options.webpack.config[name]), webpack))
    .pipe(gulp.dest(config.path.root.dest))
    .pipe(browserSync.stream())
})
