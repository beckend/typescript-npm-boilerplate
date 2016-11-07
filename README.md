[![Build Status](https://travis-ci.org/beckend/typescript-npm-boilerplate.svg?branch=master)](https://travis-ci.org/beckend/typescript-npm-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/beckend/typescript-npm-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/beckend/typescript-npm-boilerplate?branch=master)
[![Dependency Status](https://img.shields.io/david/beckend/typescript-npm-boilerplate.svg?maxAge=2592000)](https://david-dm.org/beckend/typescript-npm-boilerplate)
[![DevDependency Status](https://img.shields.io/david/dev/beckend/typescript-npm-boilerplate.svg?maxAge=2592000)](https://david-dm.org/beckend/typescript-npm-boilerplate?type=dev)

# A Boilerplate to create npm modules using typescript

### Requires
- `>npm@4.x` because of `prepare` script in `package.json`.
- `npm -g i gulp-cli jest-cli`.

### Usage
- `gulp --tasks` to get going.

### Developing
- `jest --watchAll` to watch recompiled files and rerun tests.

### Testing
Supports:
- `jest`, needs `jest-cli` installed. it will execute the transpiled files from typescript.
- `npm run docker-test` requires `docker`, `docker-compose` to be installed.

### Dist
- `gulp` will run default task which consist of running tasks:
- `lint`, `clean`, `build`, `minify` then `jest` and collect coverage.
