import * as gulp from 'gulp';

gulp.task('minify:all', gulp.parallel(
  'minify:src-es5',
  'minify:src-es2015',
  'minify:src-es2017'
));
