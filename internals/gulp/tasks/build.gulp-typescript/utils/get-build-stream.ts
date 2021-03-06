/**
 * Build - output sourcemap and typings
 */
import * as gulp from 'gulp';
import * as gDebug from 'gulp-debug';
import { Project } from 'gulp-typescript';
import * as gTs from 'gulp-typescript';
import * as mergeStream from 'merge2';

const gSourcemaps = require('gulp-sourcemaps');

interface IGetBuildStream {
  // gulp.dest
  readonly dest: string;
  // gulp-typescript .createProject output
  readonly tsProject: Project;
  // taskName for debugging
  readonly taskName: string;
}
export const getBuildStream = ({ dest, tsProject, taskName }: IGetBuildStream) => {
  const tsResult = tsProject.src()
    .pipe(gSourcemaps.init())
    .pipe(
    tsProject(
      gTs.reporter.fullReporter(true)
    )
      .once('error', (er: any) => {
        if (er) {
          throw er;
        }
      })
    );

  // Write js files
  const jsStream = tsResult.js
    .pipe(gDebug({
      title: `${taskName}-write-js: `,
    }))
    .pipe(gSourcemaps.write('.'))
    .pipe(gulp.dest(dest));

  // Write typings
  const dtsStream = tsResult.dts
    .pipe(gDebug({
      title: `${taskName}-write-dts: `,
    }))
    .pipe(gulp.dest(dest));

  return mergeStream([
    jsStream,
    dtsStream,
  ]);
};
