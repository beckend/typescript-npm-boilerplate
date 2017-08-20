import * as globby from 'globby';
import * as gulp from 'gulp';
import {
  PATH_BUILD_ES2017,
} from '../../config';
import { writeAllFiles } from './utils/write-all-files';

gulp.task('minify:src-es2017', async () => {
  const filePaths: string[] = await globby([
    `${PATH_BUILD_ES2017}/**/*.js`,
    '!**/*.spec.*',
    '!**/*.min.*',
  ]);
  if (filePaths.length) {
    return writeAllFiles({
      compilerFlags: {
        languageIn: 'ECMASCRIPT6',
        // ES6 out not yet supported
        languageOut: 'ECMASCRIPT5',
      },
      filePaths,
    });
  }
});
