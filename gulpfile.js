const gulp = require('gulp')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
var del = require('delete');

function longhand(cb) {
    return gulp.src('./sass/tmp/*')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../public/assets/css/'))
        cb();
}
function prodCSS(cb) {
    return gulp.src('./sass/css/*.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./sass/css/'))
    cb();
}

function clean(cb) {
    // del(['../../public/assets/css/'], function(err, deleted) {
    //     if (err) throw err;
    //     // deleted files
    //     console.log(deleted);
    // });

// sync
    del.sync('../public/assets/css/*', {force: true});
//
// promise
    del.promise('../public/assets/css/', {force: true})
        .then(function(files) {
            console.log(files);
        })

}

module.exports.longhand = longhand
module.exports.clean= clean
module.exports.prodCSS = prodCSS

