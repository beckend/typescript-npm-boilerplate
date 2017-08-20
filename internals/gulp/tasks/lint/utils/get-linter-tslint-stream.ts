import * as gulp from 'gulp';
import * as gDebug from 'gulp-debug';
import gTslint from 'gulp-tslint';
import { SrcOptions } from 'vinyl-fs';
import {
  PATH_TSLINT_DEFAULT,
} from '../../../config';

interface IGetLinterTslintStreamArgs {
  // used in gulp.src
  readonly src: string | string[];
  readonly srcOpts?: SrcOptions;
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
      formatter: 'stylish',
    }))
    .pipe(gTslint.report({
        emitError: true,
        reportLimit: 0,
        summarizeFailureOutput: true,
      }
    ));
};
