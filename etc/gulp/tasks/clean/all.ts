/**
 * Clean em all
 */
import * as gulp from 'gulp';

const gV4: any = gulp;

gulp.task('clean:all', gV4.parallel(
  'clean:coverage',
  'clean:src',
  'clean:src-es2015'
));
