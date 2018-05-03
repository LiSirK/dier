var gulp = require('gulp')
var uglify = require('gulp-uglify') //压缩js
var rename = require('gulp-rename') //文件重新命名
var concat = require('gulp-concat') //文件合并
var minifyCss = require("gulp-minify-css") //压缩css
var less = require('gulp-less') //变异less
var minifyHtml = require("gulp-minify-html") //压缩html
var connect = require('gulp-connect') //起服务器的
var usemin = require('gulp-usemin') //优化html
var rev = require('gulp-rev') //给文件加md5文件前缀

gulp.task('less', function() {
    gulp.src(['./js/lyk.js', './js/swiper.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./js/kk.js'))
        .pipe(connect.reload())
})
gulp.task('server', function() {
    connect.server({
        root: 'src',
        port: 8090,
        livereload: true
    })
})