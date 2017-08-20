import * as gulp from 'gulp';

gulp.task('prepare:publish', (gulp.series(
  gulp.parallel(
    'clean:all',
    'lint:all'
  ),

  gulp.parallel(
    'coverage',

    gulp.series(
      'build:all',
      'minify:all'
    )
  )
)));
