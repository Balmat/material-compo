const { src, dest, parallel } = require('gulp');
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const { watch } = require('gulp');
// var autowatch = require('gulp-autowatch');



//HTML
function html() {
  return src('./src/html/*')
    .pipe(dest('build/'));
}


//html
// function html() {
// return src('./src/html/*.html')
//     .pipe(pug())
//     .pipe(dest('build/'))
// }

 
// sass to css compile
function css() {
	
  return src('./src/sass/*.scss')
   .pipe(sass())
    // .pipe(sass({includePaths: ['./src/sass']}))
    //.pipe(minifyCSS())
    .pipe(dest('build/css'))
}


 
// gulp.task('watch', function() {
//     gulp.watch('./src/sass/*.scss', gulp.series('css'));
// });


 

exports.default = watch('./src/sass/*.scss', css);
exports.default = watch('./src/html/*', html);


// exports.default = watch('./src/sass/*.scss', series(html, css));
 

 

 
// exports.default = function() {

//   watch('./src/sass/*.scss', css)

// }



exports.html = html;
exports.css = css;



exports.default = parallel(html, css);