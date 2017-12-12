import { cmdSpawn } from 'cmd-spawn';
// import {
//   PATH_PACKAGE,
// } from '../config';
import * as debugMod from 'debug';
import * as gulp from 'gulp';

gulp.task('test', async () => {
  const cmd = 'tsc --p ./src/tsconfig-es2015.json';
  const debug = debugMod('task-test');
  debug(`running: ${cmd}`);
  const r = await cmdSpawn(cmd, { buffer: true });
  if (r) {
    // tslint:disable-next-line: no-console
    console.log(r.stdout);
  }
  debug(`finish: ${cmd}`);
});
