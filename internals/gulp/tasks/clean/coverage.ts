import { PATH_COVERAGE } from '../../config';
import { create } from './utils/create-task-clean';

create({
  path: PATH_COVERAGE,
  taskName: 'clean:coverage',
});
