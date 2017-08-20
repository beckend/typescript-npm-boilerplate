import * as gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import * as path from 'path';
import {
  PATH_BUILD_ES5,
  PATH_SRC
} from '../../config';
import { getBuildStream } from './utils/get-build-stream';

const taskName = 'build:src';

gulp.task(taskName, () => {
  const tsProject = createProject(
    path.join(PATH_SRC, 'tsconfig-es5.json')
  );

  return getBuildStream({
    dest: PATH_BUILD_ES5,
    taskName,
    tsProject,
  });
});
