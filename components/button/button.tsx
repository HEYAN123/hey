/* eslint-disable react/button-has-type */
import * as React from 'react';
import classNames from 'classnames';
import s from './style';

export interface ButtonProps {
  cus?: string; // 自定义样式行为控制
  className?: string;
  onClick?: any;
  status?: any;
  loadingClassName?: string;
  disabledClassName?: string;
  children?: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {

  static defaultProps = {
    loading: false,
    htmlType: 'button',
    className: '',
    status: '',
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
  getStyle(): any {
    const {
      cus,
      className,
      status,
      loadingClassName,
      disabledClassName,
    } = this.props;
    switch (status) {
    // 正常状态
      case '':
      case false:
      case undefined:
        return cus === 'part' || !cus ? classNames(s.default, className) : className;
      case 'loading':
        return cus === 'part' || !cus ? classNames(s.defaultLoading, className, loadingClassName) : loadingClassName;
      case 'disabled':
        return cus === 'part' || !cus ? classNames(s.defaultDisabled, className, disabledClassName) : disabledClassName;
      default:
        break;
    }
  }

  render() {
    const {
      children,
      status,
      onClick,
    } = this.props;

    const cls = this.getStyle();
    return (
      <button
        disabled={status === 'loading' || status === 'disabled'}
        type="button"
        onClick={onClick}
        className={cls}
      >
        {
          status === 'loading' ?
            <span className={s.loading} />
          : null
        }
        {children}
      </button>
    );
  }
}

export default Button;
