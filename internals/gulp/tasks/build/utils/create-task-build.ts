import { cmdSpawn } from 'cmd-spawn';
import * as debugMod from 'debug';
import * as gulp from 'gulp';

export interface ICreateOpts {
  readonly taskName: string;
  readonly cmd: string;
}

export const create = ({ cmd, taskName }: ICreateOpts) =>
  gulp.task(taskName, async () => {
    const debug = debugMod(`task-${taskName}`);
    debug(`running: ${cmd}`);
    const r = await cmdSpawn(cmd, { buffer: true });
    if (r) {
      // tslint:disable-next-line: no-console
      console.log(r.stdout);
    }
    debug(`finish: ${cmd}`);
  });
