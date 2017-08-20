import * as globby from 'globby';
import * as gulp from 'gulp';
import {
  PATH_BUILD_ES5,
} from '../../config';
import { writeAllFiles } from './utils/write-all-files';

gulp.task('minify:src-es5', async () => {
  const filePaths: string[] = await globby([
    `${PATH_BUILD_ES5}/**/*.js`,
    '!**/*.spec.*',
    '!**/*.min.*',
  ]);
  if (filePaths.length) {
    return writeAllFiles({
      compilerFlags: {
        languageIn: 'ECMASCRIPT5',
        languageOut: 'ECMASCRIPT5',
      },
      filePaths,
    });
  }
});
