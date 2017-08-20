import * as gulp from 'gulp';

gulp.task('build:all', gulp.parallel(
  'build:src-es5',
  'build:src-es2015',
  'build:src-es2017',
  'build:src-esnext'
));
