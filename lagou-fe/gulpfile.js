const gulp = require('gulp')
const server = require('gulp-webserver')

// const watch = require('gulp-watch')

const sass = require('gulp-sass')

const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

// gulp与webpack区别：gulp是一个自动化任务执行工具，webpack,模块打包工具

gulp.task('server', () => {
  return gulp.src('./dev')
    .pipe(
      server({
        host: 'localhost',
        port: 8080,//自定义端口号的时候 尽量选择1024以后 
        livereload: true,
        directoryListing: {
          enable: true,
          path: './dev'
        },
        middleware: [
          // http://localhost:3000/api/position/add/
          proxy('/api', {   // 如果接收到url是/api，就转移到下面的地址，即产生跨域
            target: 'http://localhost:3000',  // 目标要访问到哪里去
            changeOrigin: true      // 是否可以改变域。此时允许
            // 反向代理 代替用户向服务器发送请求
          })
        ]
      })
    )
})

gulp.task('scss', () => {
  return gulp.src('./src/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dev/styles'))
})

// commonjs：JS模块化开发
gulp.task('js', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(
      webpack({
        // webpack打包工具 v4 要求定义配置模式：development, production
        mode: 'development',
        //入口
        entry: './src/scripts/app.js',
        // 出口
        output: {
          filename: 'app.js'
        },
        // loader
        module: {
          rules: [
            {
              test: /\.html$/,
              use: 'string-loader' //开发过程中 用来引入html,引入的html要放入src/scripts下的文件夹
            }
          ]
        }
      })
    )
    .pipe(gulp.dest('./dev/scripts'))
})

gulp.task('watchother', () => {
  gulp.watch('./src/*.html', () => {
    gulp.start('copyhtml')
  })

  gulp.watch('./src/scripts/**/*', () => {
    gulp.start('js')
  })

  gulp.watch('./src/styles/**/*', () => {
    gulp.start('scss')
  })
})

gulp.task('copyhtml', () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dev/'))
})
// 拷贝src目录下的css和js文件到开发目录dev
gulp.task('copylibs', () => {
  return gulp.src('./src/libs/**/*')
    .pipe(gulp.dest('./dev/libs/'))
})
// 拷贝src目录下的图片和字体资源到开发目录dev
gulp.task('copyassets', () => {
  return gulp.src('./src/static/**/*')
    .pipe(gulp.dest('./dev/static/'))
})

gulp.task('default', ['copyhtml', 'copylibs', 'copyassets', 'scss', 'js', 'server', 'watchother'], () => {
  console.log('server is running at localhost:8080.')
})