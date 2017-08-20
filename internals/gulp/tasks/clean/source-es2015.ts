import { PATH_BUILD_ES2015 as path } from '../../config';
import { create } from './utils/create-task-clean';

create({
  path,
  taskName: 'clean:src-es2015',
});
