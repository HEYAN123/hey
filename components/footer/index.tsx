/* eslint-disable react/button-has-type */
import * as React from 'react';
import classNames from 'classnames';
import s from './styles';

export interface FooterProps {
  prefixCls?: string;
  className?: string;
  children?: React.ReactNode;
}

class Footer extends React.Component<FooterProps> {
  static defaultProps = {
    prefixCls: 'hey',
    className: {},
  };

  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children, ...restProps } = this.props;

    return (
      <div className={classNames(className, s.container)} { ...restProps }>
        {children}
      </div>
    );
  }
}

export default Footer;
