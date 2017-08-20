import { create } from './utils/create-task-build';

create({
  cmd: './node_modules/typescript/bin/tsc --p src/tsconfig-es5.json',
  taskName: 'build:src-es5',
});
