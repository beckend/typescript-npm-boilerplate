jest
  .mock('../submodule', () => ({
    submodule: () => 'mocked',
  }));

import { mainModule } from '../module';

describe('Main lib', () => {
  it('is computes', () => {
    expect(mainModule()).toEqual('mocked');
  });

  it('is computes', () => {
    jest.mock('../submodule', () => ({
      submodule: () => 'mocked-again',
    }));
    jest.resetModules();
    expect(require('../module').mainModule()).toEqual('mocked-again');
  });
});
