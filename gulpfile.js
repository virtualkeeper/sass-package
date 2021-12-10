const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
var del = require('delete');

function longhand(cb) {
    return gulp.src('.sass/temp/*')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/'))
        cb();
}
function prodCSS(cb) {
    return gulp.src('./sass/css/*.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./sass/css/'))
    cb();
}

function clean(cb) {
    // del(['./css/'], function(err, deleted) {
    //     if (err) throw err;
    //     // deleted files
    //     console.log(deleted);
    // });

// sync
    del.sync('./css/*', {force: true});
//
// promise
    del.promise('./css/', {force: true})
        .then(function(files) {
            console.log(files);
        })

}

module.exports.longhand = longhand
module.exports.clean= clean
module.exports.prodCSS = prodCSS

