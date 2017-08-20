import { PATH_BUILD_ES2017 as path } from '../../config';
import { create } from './utils/create-task-clean';

create({
  path,
  taskName: 'clean:src-es2017',
});
