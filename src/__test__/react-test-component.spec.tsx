import * as React from 'react';
import { create as createRender } from 'react-test-renderer';
import { TestComponent } from '../react-test-component';

describe('react component', () => {
  it('Renders with jest test rendrer', () => {
    expect(
      createRender(
        <TestComponent
          str1='My string'
        />
      )
    ).toMatchSnapshot();
  });
});
