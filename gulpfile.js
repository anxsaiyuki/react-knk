var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');


// Default
// =====================================

gulp.task('default',function() {

    //console.log( process.env);
});

// Build (only deal with HTML & Images)
// =====================================


gulp.task('build', ['copy'], function() {});


// Clean
// =====================================
gulp.task('clean', function (cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['public']);
});



// Copy HTML
// =====================================
gulp.task('copy', function() {
    
  del(['public']);
    
  gulp.src('src/*.html').pipe(gulp.dest('public'));
    
  gulp.src('src/locales/**/*').pipe(gulp.dest('public/locales'));  
  gulp.src('src/libs/**/*').pipe(gulp.dest('public/libs'));  
  gulp.src('src/img/**/*').pipe(gulp.dest('public/img')); 
});



// Image min
// =====================================
gulp.task('imgaemin', function() {
    
  gulp.src('src/img/**/*').pipe(imageop({
            optimizationLevel: 7,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('public/img'));
});

