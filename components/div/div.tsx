/* eslint-disable react/button-has-type */
import * as React from 'react';
import classNames from 'classnames';
import s from './style';

export interface ButtonProps {
  className?: string;
  onClick?: any;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

class Div extends React.Component<ButtonProps> {

  static defaultProps = {
    loading: false,
    block: false,
    htmlType: 'button',
    className: '',
  };

  constructor(props: ButtonProps) {
    super(props);
    this.state = {};
  }

  handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
    const { onClick } = this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };

  render() {
    const {
      children,
      onClick,
      className,
    } = this.props;

    return (
      <div
        onClick={onClick}
        className={classNames(s.default, className)}
      >
        {children}
      </div>
    );
  }
}

export default Div;
