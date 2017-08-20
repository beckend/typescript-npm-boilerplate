import * as gulp from 'gulp';
import { createProject } from 'gulp-typescript';
import * as path from 'path';
import {
  PATH_BUILD_ES2015,
  PATH_SRC,
} from '../../config';
import { getBuildStream } from './utils/get-build-stream';

const taskName = 'build:src-es2015';

gulp.task(taskName, () => {
  const tsProject = createProject(
    path.join(PATH_SRC, 'tsconfig.es2015.json')
  );

  return getBuildStream({
    dest: PATH_BUILD_ES2015,
    taskName,
    tsProject,
  });
});
