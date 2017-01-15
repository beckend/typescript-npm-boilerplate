/* tslint:disable: jsx-wrap-multiline */
/**
 * React test
 */
import {
  mount,
  ReactWrapper,
} from 'enzyme';
import * as React from 'react';
import {
  ITestComponentProps,
  TestComponent,
} from '../react-test-component';

const renderer = require('react-test-renderer');

describe('react component', () => {
  let wrapper: ReactWrapper<ITestComponentProps, {}>;

  beforeEach(() => jest.resetModules());

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it('Renders with enzyme', () => {
    wrapper = mount<ITestComponentProps, {}>(
      <TestComponent
        str1='My string'
      />,
    );
    expect(wrapper.find(TestComponent).length)
      .toEqual(1);
  });

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
