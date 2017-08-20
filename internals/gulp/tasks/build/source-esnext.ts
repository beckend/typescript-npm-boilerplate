import { create } from './utils/create-task-build';

create({
  cmd: './node_modules/typescript/bin/tsc --p src/tsconfig-esnext.json',
  taskName: 'build:src-esnext',
});
