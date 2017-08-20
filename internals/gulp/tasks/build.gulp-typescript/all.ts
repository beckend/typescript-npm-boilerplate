import * as gulp from 'gulp';

gulp.task('build:all', gulp.parallel(
  'build:src',
  'build:src-es2015'
));
