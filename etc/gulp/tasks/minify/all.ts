/**
 * Minify em all
 */
import * as gulp from 'gulp';

const gV4: any = gulp;

gulp.task('minify:all', gV4.parallel('minify:src', 'minify:src-es2015'));
