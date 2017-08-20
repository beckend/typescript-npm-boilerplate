import * as debugMod from 'debug';
import * as fs from 'fs-extra';
import * as gulp from 'gulp';

export interface ICreateOpts {
  readonly taskName: string;
  readonly path: string;
}

export const create = ({ path, taskName }: ICreateOpts) =>
  gulp.task(taskName, () => {
    const debug = debugMod(`task-${taskName}`);
    return fs.remove(path).then(() => {
      debug(`Deleted dir: ${path}`);
    });
  });
