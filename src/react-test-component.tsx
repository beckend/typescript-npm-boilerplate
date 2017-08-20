import * as React from 'react';
import 'tslib';

export interface ITestComponentProps {
  readonly str1: string;
}
export class TestComponent extends React.Component<ITestComponentProps, {}> {

  public static defaultProps: ITestComponentProps = {
    str1: 'some string',
  };

  public render() {
    const props = this.props;
    return (
      <div>
        {props.str1}
      </div>
    );
  }

}
