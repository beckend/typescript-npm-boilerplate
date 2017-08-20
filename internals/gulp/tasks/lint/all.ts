import * as gulp from 'gulp';

gulp.task('lint:all', gulp.parallel(
  'lint:internals',
  'lint:src'
));
