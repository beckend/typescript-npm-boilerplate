import { cmdSpawn } from 'cmd-spawn';
import * as debugMod from 'debug';
import * as gulp from 'gulp';
import {
  PATH_PACKAGE,
} from '../config';

gulp.task('coverage', async () => {
  const pkg = require(PATH_PACKAGE);
  let cmd: string = pkg.scripts['test:coverage'];
  if (cmd.startsWith('jest') && !cmd.startsWith('./node_modules/.bin/jest')) {
    cmd = `./node_modules/.bin/${cmd}`;
  }
  const debug = debugMod('task-coverage');
  debug(`running: ${cmd}`);
  const r = await cmdSpawn(cmd, { buffer: true });
  if (r) {
    // tslint:disable-next-line: no-console
    console.log(r.stdout);
  }
  debug(`finish: ${cmd}`);
});
