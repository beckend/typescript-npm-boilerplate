import * as gulp from 'gulp';

gulp.task('default', gulp.series(
  gulp.parallel('prepare:publish')
));
