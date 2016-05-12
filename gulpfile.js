var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin');

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

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
    .pipe(sass({
      style: 'compressed'
    }))
    .on('error', errorLog)
    .pipe(gulp.dest('css/'))
    .pipe(livereload());
});

// Image task
gulp.task('image', function(){
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img')); // saves to img folder and overrides them. 
});

gulp.task('watch', function(){
  
  var server = livereload();
  
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/**/.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
