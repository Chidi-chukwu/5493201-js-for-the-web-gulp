const gulp = require('gulp');


gulp.task('processHTML', async() => {
    gulp.src('*.html')
      .pipe(gulp.dest('dist'));
  });

  gulp.task('processJS', async() => {
    gulp.src('*.js')
      .pipe(gulp.dest('dist'));
  });