import { PATH_BUILD_ESNEXT as path } from '../../config';
import { create } from './utils/create-task-clean';

create({
  path,
  taskName: 'clean:src-esnext',
});
