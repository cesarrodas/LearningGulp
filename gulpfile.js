var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber');

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Styles
gulp.task('styles', function(){
  gulp.src('scss/**/.scss') //all scss files in folder
    .pipe(plumber())
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/**/.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
