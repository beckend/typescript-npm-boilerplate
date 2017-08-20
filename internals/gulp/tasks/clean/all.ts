import * as gulp from 'gulp';

gulp.task('clean:all', gulp.parallel(
  'clean:coverage',
  'clean:src-es5',
  'clean:src-es2015',
  'clean:src-es2017',
  'clean:src-esnext'
));
