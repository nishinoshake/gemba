export default {
  tasks: ['copy', 'sass', 'imagemin', 'script'],
  path: {
    root: {
      src: './src/',
      dest: './public/'
    },
    copy: {
      src: './src/**/*.+(html|pdf)'
    },
    imagemin: {
      src: './src/**/*.+(jpg|jpeg|png|gif|svg)'
    },
    sass: {
      src: './src/assets/sass/**/*.scss',
      base: './src/assets/sass/',
      dest: './public/assets/css/'
    },
    script: {
      src: './src/assets/js/**/*.js'
    }
  },
  options: {
    browserSync: {
      server: './public'
    },
    pngquant: { speed: 1 },
    sass: { outputStyle: 'expanded' },
    autoprefixer: {
      browsers: ['last 3 versions', 'ie >= 11']
    },
    webpack: {
      config: {
        prod: '../webpack.prod.js',
        common: '../webpack.common.js'
      }
    }
  }
}
