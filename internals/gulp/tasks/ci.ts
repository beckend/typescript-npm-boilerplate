import * as gulp from 'gulp';

gulp.task('ci', gulp.series(
  gulp.parallel('prepare:publish')
));
