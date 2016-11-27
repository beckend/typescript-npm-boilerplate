import * as gulp from 'gulp';
import {
  PATH_TSLINT_DEFAULT,
} from '../../../config';
import gTslint from 'gulp-tslint';
import * as gDebug from 'gulp-debug';

const tslintStylish = require('tslint-stylish');

interface IGetLinterTslintStreamArgs {
  // used in gulp.src
  readonly src: string | string[];
  readonly srcOpts?: gulp.SrcOptions;
  // see https://github.com/panuhorsmalahti/gulp-tslint typings are not up to date
  readonly tslintOpts?: any;
  // outdated typings
  readonly tslintReportOpts?: any;
}
export const getLinterTslintStream = ({ src, srcOpts }: IGetLinterTslintStreamArgs) => {
  // const program = tslint.createProgram(PATH_TSCONFIG_DEFAULT);
  return gulp.src(src, srcOpts || {})
    .pipe(gDebug({ title: 'Lint file:' }))
    .pipe(gTslint({
      // program,
      configuration: PATH_TSLINT_DEFAULT,
      formatter: 'verbose',
    }))
    .pipe((gTslint as any).report(
      tslintStylish,
      {
        emitError: true,
        summarizeFailureOutput: true,
      }
    ));
};
