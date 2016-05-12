var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
});

// Styles
gulp.task('styles', function(){
  console.log('runs styles');
});

gulp.task('default', ['scripts', 'styles']);
