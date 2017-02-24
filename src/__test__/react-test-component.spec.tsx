/* tslint:disable: jsx-wrap-multiline */
/**
 * React test
 */
import * as React from 'react';
import { TestComponent } from '../react-test-component';

const renderer = require('react-test-renderer');

describe('react component', () => {
  it('Renders with jest test rendrer', () => {
    const component = renderer.create(
      <TestComponent
        str1='My string'
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
