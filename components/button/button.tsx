/* eslint-disable react/button-has-type */
import * as React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  prefixCls?: string;
  className?: string;
  onClick?: any;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {

  static defaultProps = {
    loading: false,
    ghost: false,
    block: false,
    htmlType: 'button',
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
    const { children, onClick, className } = this.props;

    return (
      <button type="button" onClick={onClick} className={classNames(className)}>
        {children}
      </button>
    );
  }
}

export default Button;
