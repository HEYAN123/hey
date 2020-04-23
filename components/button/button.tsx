/* eslint-disable react/button-has-type */
import * as React from 'react';
import classNames from 'classnames';
import s from './style';

export interface ButtonProps {
  cus?: string; // 自定义样式行为控制
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

  // 计算样式
  getStyle(): string {
    const { cus, className } = this.props;
    // 如果没有传cus，应用默认样式
    if (!cus) {
      return s.default;
    }
    // 否则使用用户自定义的样式类名
    return cus === 'part' ? classNames(s.default, className) : className;
  }

  render() {
    const {
      children,
      onClick,
    } = this.props;

    const cls = this.getStyle();

    return (
      <button
        type="button"
        onClick={onClick}
        className={cls}
      >
        {children}
      </button>
    );
  }
}

export default Button;
